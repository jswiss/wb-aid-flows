 <!--home page-->
<template>
  <div>
    <div id="container" style="width: 1000px; height: 600px;"></div>
  </div>
</template>

<script type='text/javascript'>
// import * as d3 from 'd3';
import store from '../vuex/store';

const projects = store.state.projects;

let tree2015 = {
  key: '2015',
  values: d3.nest()
  .key(d => d.Location)
  .key(d => d['NDP Pillar'])
  .key(d => d.SubSector)
  .key(d => d['Project title'])
  .rollup(d => d3.sum(d, d => d['2015 Project Location Allocation']))
  .entries(projects),
}
let tree2016 = {
  key: '2016',
  values: d3.nest()
  .key(d => d.Location)
  .key(d => d['NDP Pillar'])
  .key(d => d.SubSector)
  .key(d => d['Project title'])
  .rollup(d => d3.sum(d, d => d['2016 Project Location Allocation']))
  .entries(projects),
}
let tree2017 = {
  key: '2017',
  values: d3.nest()
  .key(d => d.Location)
  .key(d => d['NDP Pillar'])
  .key(d => d.SubSector)
  .key(d => d['Project title'])
  .rollup(d => d3.sum(d, d => d['2017 Project Location Allocation']))
  .entries(projects),
}

tree2015 = [{
  name: 2015,
  children: tree2015.values.map(location => {
    return {
      name: location.key,
      children: location.values.map(ndp => {
        return {
          name: ndp.key,
          children: ndp.values.map(subsector => {
            return {
              name: subsector.key,
              children: subsector.values.map(project => {
                return {
                  name: project.key,
                  value: project.values
                }
              })
            }
          })
        }
      })
    }
  })
}];

tree2016 = [{
  name: 2016,
  children: tree2016.values.map(location => {
    return {
      name: location.key,
      children: location.values.map(ndp => {
        return {
          name: ndp.key,
          children: ndp.values.map(subsector => {
            return {
              name: subsector.key,
              children: subsector.values.map(project => {
                return {
                  name: project.key,
                  value: project.values
                }
              })
            }
          })
        }
      })
    }
  })
}];

tree2017 = [{
  name: 2017,
  children: tree2017.values.map(location => {
    return {
      name: location.key,
      children: location.values.map(ndp => {
        return {
          name: ndp.key,
          children: ndp.values.map(subsector => {
            return {
              name: subsector.key,
              children: subsector.values.map(project => {
                return {
                  name: project.key,
                  value: project.values
                }
              })
            }
          })
        }
      })
    }
  })
}];
export default {
  name: 'TreeMap',
  data() {
    return {
      tree2015: tree2015,
    };
  },
  mounted() {
    this.treeMap();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    treeMap() {
        // add Event Listener here to detect if 2015, 2016, 2017 
        // buttons pressed, and add correct data as necessary

        const data = anychart.data.tree(tree2015, anychart.enums.TreeFillingMethod.AS_TREE);

        const chart = anychart.treeMap(data);
        chart.headers().format("{%name}");
        chart.labels().format("{%name}");
        chart.tooltip().titleFormat("{%name}");
        chart.tooltip().format("{%name}");
        chart.headers().format("Project allocation: {%value}");

        chart.title("Setting the data as a tree");
        chart.maxDepth(1);
        chart.container('container');
        chart.draw();
    },
  },
};
</script>

<style scoped>

</style>
