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
