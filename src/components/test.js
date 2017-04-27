const treemap = d3.treemap()
  .size([width, height])
  .padding(1)
  .round(true);

const nest = d3.nest()
  .key(d => d.Location)
  .key(d => d['NDP Pillar'])
  .key(d => d.SubSector)
  // eslint-disable-next-line
  .rollup(d => d3.sum(d, d => d['2015 Project Location Allocation']));
  // TODO: Maybe add rollups here for various nested values?
  // But that should be covered anyways, I think??


const root = d3.hierarchy({ values: nest.entries(projects) }, d => d.values)
  .sum(d => d.value)
  .sort((a, b) => b.value - a.value);
// eslint-disable-next-line
console.log(root);

treemap(root);

const node = d3.select('body')
  .selectAll('.node')
  .data(root.leaves())
  .enter()
  .append('div')
  .attr('class', 'node')
  .style('left', d => `${d.x0}px`)
  .style('top', d => `${d.y0}px`)
  .style('width', d => `${(d.x1 - d.x0)}px`)
  .style('height', d => `${(d.y1 - d.y0)}px`);

node.append('div')
  .attr('class', 'node-label')
  .text(d => `${d.parent.parent.data.key}`);

node.append('div')
  .attr('class', 'node-value')
  .text(d => d.data.value);
