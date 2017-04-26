 <!--home page-->
<template>
  <div>  
    <div>
      <home-text></home-text>
    </div>
    <div>
      <svg width="500" height="270">
        <g style="transform: translate(0, 10px)">
          <path :d="line" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script type="text/javascript">
import * as d3 from 'd3';
import HomeText from './HomeText';
import store from '../vuex/store';

const projects = store.state.projects;

// const width = 800;
// const height = 600;

const nest = d3.nest()
  .key(d => d.Location)
  .key(d => d['NDP Pillar'])
  .key(d => d.SubSector)
  // eslint-disable-next-line
  .rollup(d => d3.sum(d, d => d['2015 Project Location Allocation']));
  // TODO: Maybe add rollups here for various nested values?
  // But that should be covered anyways, I think??


const root = d3.hierarchy({ values: nest.entries(projects) }, d => d.values);
// eslint-disable-next-line
console.log(root);

export default {
  name: 'home',
  components: {
    HomeText,
  },
  data() {
    return {
      data: [99, 71, 78, 25, 36, 92, 45, 112, 66, 300, 3, 45],
      line: '',
    };
  },
  mounted() {
    this.calculatePath();
  },
  methods: {
    getScales() {
      const x = d3.scaleLinear().range([0, 430]);
      const y = d3.scaleLinear().range([350, 0]);
      d3.axisLeft().scale(x);
      d3.axisTop().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return { x, y };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));
      this.line = path(this.data);
    },
  },
};
</script>

<style scoped>
svg {
  margin: 25px;
}
  
path {
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
}
</style>
