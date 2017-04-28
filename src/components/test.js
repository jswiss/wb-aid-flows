import * as d3 from 'd3';
import store from '../vuex/store';

const projects = store.state.projects;

(function loadTree() {
  const chartWidth = document.getElementById('main-content').getBoundingClientRect().width;
  const margin = {top: 25, right: 0, bottom: 0, left: 0};
  const width = chartWidth;
  const height = 620 - margin.top - margin.bottom;
  // formatNumber = d3.format(',d'),
  const formatNumber = d3.format(',');
  let transitioning;

  // TODO: Change to WB colour scheme
  const color = d3.scale.ordinal()
    .domain(['Benadir', 'FGS', 'Galmudug', 'South West', 'Jubaland', 'Puntland', 'Somaliland', 'Unattributed', 'Hiiraan & Middle Shabelle'])
    .range(['#546A7E', '#6da8e1', '#e25050', '#ca6dbf', '#65a68c', '#65a68c', '#F2E24D', '#ffc660', '#99d2d0']);

  let x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

  let y = d3.scale.linear()
    .domain([0, height])
    .range([0, height]);

  const firstRun = false;

  const svg = d3.select('#chart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.bottom + margin.top)
    .style('margin-left', `${-margin.left}px`)
    .style('margin.right', `${-margin.right}px`)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    .style('shape-rendering', 'crispEdges');

  const tip = d3.select('#chart').append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('padding', '5px 10px')
    .style('background', 'white')
    .style('opacity', 0)

  const grandparent = svg.append('g')
    .attr('id', 'menuBar')
    .attr('class', 'grandparent');

  grandparent.append('rect')
    .attr('y', -margin.top)
    .attr('width', width)
    .attr('height', margin.top);

  grandparent.append('text')
    .attr('x', 6)
    .attr('y', 6 - margin.top)
    .attr('dy', '.75em');

  let root = {};

  const treemap = d3.layout.treemap()
    // .children(function(d, depth) { return depth ? null : d.children; })
    .children((d, depth) => depth ? null : d.values)
    // .text((d) { return d.key; })
    .value(d => d.value)
    .sort((a, b) => a.value - b.value)
    .ratio((height / width) * 0.5 * (1 + Math.sqrt(5)))
    .round(false);

  let button = '2015';

  const data = projects;

  function loadData() {
    console.log(data);
    root = {
      key: '2015',
      values: d3.nest()
        .key(d => d.Location)
        .key(d => d['NDP Pillar'])
        .key(d => d.SubSector)
        .key(d => d['Project title'])
        .rollup(d => d3.sum(d, d => d['2015 Project Location Allocation']))
        .entries(data),
    };

    d3.selectAll('input').on('click', function change() {
      // console.log('func: change');
      const g = d3.selectAll('.depth').remove();
      console.log(g);
      switch (this.value) {
        case '2016':
        //console.log('donor');
          root = {
            key: '2016', 
            values: d3.nest()
              .key(d => d.Location)
              .key(d => d['NDP Pillar'])
              .key(d => d.SubSector)
              .key(d => d['Project title'])
              .rollup(d => d3.sum(d, d => d['2016 Project Location Allocation']))
              .entries(data)
        };
          button='2016';
          initialize(root);
          accumulate(root);
          layout(root);
          display(root);
          break;
        case '2017':
        //console.log('donor');
        root = {'key':'2017', 'values':d3.nest()
          .key(d => d.Location)
          .key(d => d['NDP Pillar'])
          .key(d => d.SubSector)
          .key(d => d['Project title'])
          .rollup(d => d3.sum(d, d => d['2017 Project Location Allocation']))
          .entries(data)
        };
        button='2017';
          initialize(root);
          accumulate(root);
          layout(root);
          display(root);
          break;
        default '2015':
        //console.log('party');
        root = {'key':'2015', 'values':d3.nest()
          .key(d => d.Location)
          .key(d => d['NDP Pillar'])
          .key(d => d.SubSector)
          .key(d => d['Project title'])
          .rollup(d => d3.sum(d, d => d['2015 Project Location Allocation']))
          .entries(data)
        };
          button = '2015';
          initialize(root);
          accumulate(root);
          layout(root);
          display(root);
        }
    });

    console.log('root', root);
    initialize(root);
    accumulate(root);
    layout(root);
    display(root);

    function initialize(root) {
      root.x = root.y = 0;
      root.dx = width;
      root.dy = height;
      root.depth = 0;
    }

    // Aggregate the values for internal nodes. This is normally done by the
    // treemap layout, but not here because of our custom implementation.
    function accumulate(d) {
    //console.log(d.children);
    return d.values
      ? d.value = Array.prototype.reduce.call(d.values, function(p, v) { return p + accumulate(v); }, 0)
      // d.values.reduce(function * (p, v) { return p + accumulate(v); }, 0)
      : +d.value;
    }


    // Compute the treemap layout recursively such that each group of siblings
    // uses the same size (1×1) rather than the dimensions of the parent cell.
    // This optimizes the layout for the current zoom state. Note that a wrapper
    // object is created for the parent node for each group of siblings so that
    // the parent’s dimensions are not discarded as we recurse. Since each group
    // of sibling was laid out in 1×1, we must rescale to fit using absolute
    // coordinates. This lets us use a viewport to zoom.
    function layout(d) {
      if (d.values) {
        treemap.nodes({values: d.values});
        Array.prototype.forEach.call(d.values, function(c) {
          c.x = d.x + c.x * d.dx;
          c.y = d.y + c.y * d.dy;
          c.dx *= d.dx;
          c.dy *= d.dy;
          c.parent = d;
          layout(c);
        });
        // d.values.forEach(function(c) {
        // });
      }
    }

    function display(d) {
    grandparent
      .datum(d.parent)
      .on('click', transition)
      .select('text')
      .text(boxNames(d,'long'));

    var g1 = svg.insert('g', '.grandparent')
      .datum(d)
      .attr('class', 'depth');

    var g = g1.selectAll('g')
      .data(d.values)
      .enter().append('g')

    g.filter(function(d) { return d.values; })
      .classed('children', true)
      .on('click', transition);

    g.selectAll('.child')
      .data(function(d) { return d.values || [d]; })
      .enter().append('rect')
      .attr('class', 'child')
      .call(rect);

    g.append('rect')
      .attr('class', 'parent')
      .on('mousemove', function(d){return toolTip(d)})
      .on('mouseout', function(d){return toolTipOff(d)})

        .call(rect);
      // .append('title')
      //   .text(function(d) { return formatNumber(+d.value); });

    g.append('text')
      .attr('dy', '.75em')
      .text(function(d) { return boxNames(d,'short');})
      .style('opacity', function(d) { d.w = this.getComputedTextLength(); return d.dx > d.w*.42 ? 1 : 0; })
      .call(text);

    function transition(d) {
      if (transitioning || !d) return;
      transitioning = true;

      var g2 = display(d),
          t1 = g1.transition().duration(750),
          t2 = g2.transition().duration(750);

      // Update the domain only after entering new elements.
      x.domain([d.x, d.x + d.dx]);
      y.domain([d.y, d.y + d.dy]);

      // Enable anti-aliasing during the transition.
      svg.style('shape-rendering', null);

      // Draw child nodes on top of parent nodes.
      svg.selectAll('.depth').sort(function(a, b) { return a.depth - b.depth; });

      // Fade-in entering text.
      g2.selectAll('text').style('fill-opacity', 0);

      // Transition to the new view.
      t1.selectAll('text').call(text).style('fill-opacity', 0);
      t2.selectAll('text').call(text).style('fill-opacity', 1);
      t1.selectAll('rect').call(rect);
      t2.selectAll('rect').call(rect);

      // Remove the old node when the transition is finished.
      t1.remove().each('end', function() {
        svg.style('shape-rendering', 'crispEdges');
        transitioning = false;
      });
    }
    return g;
    }

    function text(text) {
    console.log(text.node().getBoundingClientRect().width);
    text.attr('x', function(d) { return x(d.x) + 6; })
      .attr('y', function(d) { return y(d.y) + 6; });
    }

    function rect(rect) {
    rect.attr('x', function(d) { return x(d.x); })
      .attr('y', function(d) { return y(d.y); })
      .attr('width', function(d) { return x(d.x + d.dx) - x(d.x); })
      .attr('height', function(d) { return y(d.y + d.dy) - y(d.y); })
      .style('fill', function(d) {return (color(findProperty(d, 'Location')))});
    }

    function findProperty(d, propertyName) {
      if (button=='2015'){
        if (d[propertyName])  {
          console.log('button= ',button);
          console.log(d[propertyName]);
          return d[propertyName];
        }; 
        if (d.values) {
          return findProperty(d.values[0], propertyName);
        }
        return `error: couldnt find  ${propertyName}`;
      }
      if (button=='2016') {
        if (d[propertyName])  {
          console.log(d[propertyName]);
          return d[propertyName];
        }; 
        if (d.values) {
          try {
            if (d.parent.parent.key=='2015' && d.values.length>1){
              console.log(d);
          console.log(d[propertyName]);
              return 'Grey';
            }
            else {return findProperty(d.values[0], propertyName)}
            return `error: couldnt find  ${propertyName}`;
          }
          catch (err) {}
        }    
      }
    }

    function toolTip(d) {
      let xPosition = d3.event.pageX + 5;
      let yPosition = d3.event.pageY + 5;
      if (xPosition>width/2) {
        xPosition=xPosition-tip.style('width').replace('px', '')-5;
      }
      if (yPosition>height){
        yPosition=yPosition-tip.style('height').replace('px', '')-10;
      }
      if(d.key) {
        tip.style('opacity',.9)
        .html('<b>'+d.key+ '</b> </br>Total £'+formatNumber(+d.value.toFixed(2)))
        .style('left', xPosition + 'px')
        .style('top', yPosition + 'px');
      }
      else {
        tip.style('opacity',.9)
        .html('<b>£'+formatNumber(+d.value.toFixed(2))+'</b> to '+d.entity_name+'</br><b>Donated on </b>'+d.received_date+'</br><b>Donated type </b>'+d.type_of_donation+' '+d.nature_provision+'</br><b>Reported on </b>'+d.reported_date+'</br><b>Reference </b>'+d.ec_reference+'</br><b>Made via </b>'+d.made_via)
        .style('left', xPosition + 'px')
        .style('top', yPosition + 'px');
      }
    }

    function toolTipOff(d) {
      tip.style('opacity',0);
    }

    function boxNames(d, length) {
      //console.log(d);
      // return d.key;
      if (length == 'long') return boxNames(d.parent) + ' > ' + d.key;
      if (length == 'short') return d.key;

      return d.parent ? boxNames(d.parent) + ' > ' + d.key : d.key;
    }
  };
  loadData();
})();
