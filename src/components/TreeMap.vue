 <!--home page-->
<template>
  <div id="treemap-=content">
    <div class="field columns">
      <label class="radio column is-2">
        <input class="is-medium" type="radio" name="mode" value="2015" checked>  2015
      </label>
      <label class="radio column is-2">
        <input class="is-medium" type="radio" name="mode" value="2016">  2016
      </label>
      <label class="radio column is-2">
        <input class="is-medium" type="radio" name="mode" value="2017">  2017
      </label>
    </div>
    <div id="container" style="width: 100%; height: 650px;"></div>
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
        chart.headers().format("Project allocation: ${%value}{groupsSeparator:\\,}");
        chart.labels().format("{%name}");
        chart.tooltip().titleFormat("{%name}");
        chart.tooltip().format("${%value}{groupsSeparator:\\,}");
        chart.hintOpacity(0.7);

        chart.maxDepth(1);
        chart.container('container');
        chart.draw();
    },
  },
};
</script>

<style scoped>
  .buttons {
    float:left;
    margin-top: 8px;
    margin-bottom: 4px;
    color: #6A6D68;
    font-family: "BentonSans";
    font-size: 14px;
    line-height: 21px;
  }
  .columns {
    margin-bottom: 0px;
    padding-left: 10px;
  }
  label {
    font-size: 18px;
    text-indent: 20px;
  }
</style>
