 <!--home page-->
<template>
  <div>  
    <p id="chart"></p>
    <p id="rawdata"></p>
  </div>
</template>

<script type='text/javascript'>
// import * as d3 from 'd3';
import store from '../vuex/store';

const projects = store.state.projects;

const nest = d3.nest()
  .key(d => d.Location)
  .key(d => d['NDP Pillar'])
  .key(d => d.SubSector)
    // eslint-disable-next-line
  .rollup(d => d3.sum(d, d => d['2015 Project Location Allocation']))
  .entries(projects);

// eslint-disable-next-line
console.log(nest);

const props = {
  margin: {
    type: Object,
    default: () => ({
      left: 0,
      right: 0,
      top: 10,
      bottom: 10,
    }),
  },
  ceil: {
    type: Number,
    default: 100,
  },
};

export default {
  name: 'TreeMap2015',
  props,
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  mounted() {
    this.treemap();
  },
  beforeCreate() {
    // this.reSortRoot(root, '2015 Project Location Allocation');
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    // onResize() {
    //   this.width = this.$el.offsetWidth;
    //   this.height = this.$el.offsetHeight;
    // },
    treemap() {
      let root = {};
      root.key = 'Data';
      root.values = nest;

      function reSortRoot(root, value_key) {
		    console.log("Calling");
        for (var key in root) {
          if (key == "key") {
            root.name = root.key;
            delete root.key;
          }
          if (key == "values") {
            root.children = [];
            for (var i in root.values) {
              root.children.push(reSortRoot(root.values[i],value_key));
            }
            delete root.values;
          }
          if (key == value_key) {
            root.value = parseFloat(root[value_key]);
            delete root[value_key];
          }
        }
        return root;
      }

      reSortRoot(root, '2015 Project Location Allocation');
      console.log(root);
      // create treemap boundaries and formatting
      const margin = {top: 20, right: 0, bottom: 0, left: 0};
      let width = 900;
      let height = 700 - margin.top - margin.bottom;
      const formatNumber = d3.format(".2s");
      let transitioning;

      $("#rawdata").html(JSON.stringify(root));

      // Create x and y scales
      const x = d3.scale.linear()
        .domain([0, width])
        .range([0, width]);

      const y = d3.scale.linear()
        .domain([0, height])
        .range([0, height]);

      // set treemap stuff here, children, sort, ratio
      const treemap = d3.layout.treemap()
        .children(function(d, depth) { return depth ? null : d.children; })
        .sort(function(a, b) { return a.value - b.value; })
        .ratio(height / width * 0.5 * (1 + Math.sqrt(5)))
        .round(false);
      
      // create SVG
      const svg = d3
        .select('#chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('margin-left', `${-margin.left}px`)
        .style('margin-right', `${-margin.right}px`)
        .append('g')
        .attr('transform', "translate(" + margin.left + "," + margin.top + ")")
        .style('shape-rendering', 'crispEdges');

      const color = d3.scale.category20c();

      const grandparent = svg
        .append('g')
        .attr('class', 'grandparent');

      grandparent
        .append('rect')
        .attr('y', -margin.top)
        .attr('width', width)
        .attr('height', margin.top);
      
      grandparent
        .append('text')
        .attr('x', 6)
        .attr('y', 6 - margin.top)
        .attr('dy', '.75em');

        function initialize(root) {
          root.x = root.y =0;
          root.dx = width;
          root.dy = height;
          root.depth = 0;
        }

        // Aggregate the values for internal nodes. This is normally done by the
        // treemap layout, but not here because of the custom implementation.
        function accumulate(d) {
          return d.children
          ? d.value = d.children.reduce(function(p, v) { return p + accumulate(v); }, 0)
          : d.value;
        }

        // Compute the treemap layout recursively such that each group of siblings
        // uses the same size (1×1) rather than the dimensions of the parent cell.
        // This optimizes the layout for the current zoom state. Note that a wrapper
        // object is created for the parent node for each group of siblings so that
        // the parent’s dimensions are not discarded as we recurse. Since each group
        // of sibling was laid out in 1×1, we must rescale to fit using absolute
        // coordinates. This lets us use a viewport to zoom.
        function layout(d) {
          if (d.children) {
            treemap.nodes({children: d.children});
            d.children.forEach(function(c) {
              c.x = d.x + c.x * d.dx;
              c.y = d.y + c.y * d.dy;
              c.dx *= d.dx;
              c.dy *= d.dy;
              c.parent = d;
              layout(c);
            });
          }
        }

        /* display shows the treemap and writes the embedded transition function */
        function display(d) {
          // create GRANDPARENT BAR at the top
          grandparent
            .datum(d.parent)
            .on('click', transition)
            .select('text')
            .text(name(d));

         const g1 = svg.insert('g', 'grandparent')
          .datum(d)
          .attr('class', 'depth');
          
        // add in data
        let g = g1.selectAll('g')
          .data(d.children)
          .enter()
          .append('g');
        
        // transition on a child click
        g.filter(d => d.children)
          .classed('children', true)
          .on('click', transition);

        // write children rectangles
        g.selectAll('.child')
          .data(d => d.children || [d])
          .enter()
          .append('rect')
          .attr('class', 'child')
          .call(rect)
          .append('title')
          .text(d => `${d.name}, ${formatNumber(d.value)}`);

        // Adding a foreign object instead of a text object, allows for text wrap
        g.append('foreignObject')
          .call(rect)
          // open new window based on the json's URL value for leaf nodes
          // Firefox displays this on top
          .on('click', (d) => { 
            if(!d.children) {
              window.open(`localhost:8080/project/${d.key}`);
            }
          })
          .attr('class', 'foreignObject')
          .append('xhtml:div')
          .attr('dy', '.75em')
          .html((d) => {
            if (d.value) {
              return `${d.name} + (${formatNumber(d.value)})`;
            }
            return d.name;
          })
          .attr('class', 'textdiv'); //textdiv allows styling of text with css
          // create transition function for transitions
          function transition(d) {
            if (transitioning || !d) return;
            let transitioning = true;
            const g2 = display(d);
            const t1 = g1.transition().duration(750); //transition duration in ms
            const t2 = g2.transition().duration(750);

            // update the domain only after entering new elements
            x.domain([d.x, d.x + d.dx]);
            y.domain([d.y, d.y + d.dy]);

            // Enable anti-aliasing during the transition
            svg.style('shape-rendering', null);

            // Draw child nodes on top of parent nodes
            svg.selectAll('.depth').sort((a, b) => { return a.depth -b.depth });
            //Fade-in entering text
            g2.selectAll('text').style('fill-opacity', 0);
            g2.selectAll('foreignObject div')
              .style('display', 'none');

            // Transition to the new view
            // Transition to the new view.
            t1.selectAll('text').call(text).style('fill-opacity', 0);
            t2.selectAll('text').call(text).style('fill-opacity', 1);
            t1.selectAll('rect').call(rect);
            t2.selectAll('rect').call(rect);

            t1.selectAll('.textdiv').style('display', 'none'); /* added */
            t1.selectAll('.foreignobj').call(foreign); /* added */
            t2.selectAll('.textdiv').style('display', 'block'); /* added */
            t2.selectAll('.foreignobj').call(foreign); /* added */ 

            // Remove the old node when the transition is finished.
            t1.remove().each('end', function() {
              svg.style('shape-rendering', 'crispEdges');
              transitioning = false;
            });
          } // end transition function

          return g;
        } // end display function

        function text(text) {
          text.attr('x', d => x(d.x) - 6)
            .attr('y', d => y(d.y) - 6);
        }

        function rect(rect) {
          rect.attr('x', d => x(d.x))
            .attr('y', d => y(d.y))
            .attr('width', d => x(d.x + d.dx) - x(d.x))
            .attr('height', d => y(d.y + d.dy) - y(d.y))
            .style('background', (d) => { return d.parent ? color(d.value) : null; });
        }

        function foreign(foreign) {
          foreign.attr('x', d => x(d.x))
            .attr('y', d => y(d.y))
            .attr('width', d => x(d.x + d.dx) - x(d.x))
            .attr('height', d => y(d.y + d.dy) - y(d.y));
        }

        function name(d) {
          return d.parent ? `${name(d.parent)}.${d.name}` : d.name;
        }
        function loadData(root) {
          initialize(root);
          accumulate(root);
          layout(root);
          display(root);
        }
        loadData(root);
    },
    
  },
};
</script>

<style scoped>
  #chart {
    width: 820px;
    height: 700px;
    background: #bbb;
    margin: 1px auto;
    position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    text {
      pointer-events: none;
    }

    .grandparent text { /* header text */
      font-weight: bold;
      font-size: medium;
      font-family: "Open Sans", Helvetica, Arial, sans-serif; 
    }

    rect {
    fill: none;
    stroke: #fff;
    background: #fff;
    }

    rect.parent,
      .grandparent rect {
        stroke-width: 2px;
      }

    .grandparent rect {
    fill: #fff;
    }

    .children rect.parent,
      .grandparent rect {
    cursor: pointer;
      }

    rect.parent {
      pointer-events: all; 
    }

    .children:hover rect.child,
      .grandparent:hover rect {
    fill: #aaa;
      }

    .textdiv { /* text in the boxes */
      font-size: x-small;
    padding: 5px;
      font-family: "Open Sans", Helvetica, Arial, sans-serif; 
    }
</style>
