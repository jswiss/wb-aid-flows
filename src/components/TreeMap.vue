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
    <div id="container" style="width: 100%; height: 600px;"></div>
    <div class="disclaimer">
      <p class="disclaimer-text">
        * Projects under a certain value, relative to the largest project within each subsector, are not shown in this chart. To see all projects, please visit the <router-link to="/tables/projects">projects table</router-link>.
      </p>
    </div>
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
                  value: project.values,
                  url: `http://localhost:8080/projects/${project.key}`,
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
                  value: project.values,
                  url: `http://localhost:8080/projects/${project.key}`,
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
                  value: project.values,
                  url: `http://localhost:8080/projects/${project.key}`,
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
        const years = document.querySelectorAll('input');
        const colorScheme = ['#45B9EA', '#262261', '#716558', '#594A41', '#594A41'];
        const colorShades = ['#45B9EA', '#3ea6d2', '#3794bb', '#3081a3', '#296f8c', '#225c75'];
        const colorRange = ['#262261', '#45B9EA'];
        const year2015 = anychart.data.tree(tree2015, anychart.enums.TreeFillingMethod.AS_TREE);
        const year2016 = anychart.data.tree(tree2016, anychart.enums.TreeFillingMethod.AS_TREE);
        const year2017 = anychart.data.tree(tree2017, anychart.enums.TreeFillingMethod.AS_TREE);
        const year = years.forEach(year => year.addEventListener('click', e => {
          let selectedYear = e.target.value;

          // set it so a click adds the class 'selected'. 
          // if it has 'selected' class, pass variable to chart function

          const chart = anychart.treeMap(year2015);
          chart.headers().format("{%name} :: Project allocation: ${%value}{groupsSeparator:\\,}");
          chart.headers().fontWeight('bold');
          chart.labels().format("{%name}");
          chart.labels().fontSize(12);
          chart.labels().fontWeight(900);
          chart.tooltip().titleFormat("{%name}");
          chart.tooltip().format("${%Value}{groupsSeparator:\\,}");
          chart.hintOpacity(0.7);

          chart.listen("pointClick", (e) => { 
            // eslint-disable-next-line
            console.log(e.point.get('name'));
            const new_value = e.point.get('url');
            if (new_value) {
              window.open(new_value,"_blank"); 
            }
          });

          chart.maxDepth(1);
          chart.colorRange(true);
          chart.colorScale(anychart.scales.ordinalColor([
            {less: 500000, color: colorShades[0]},
            {from: 500000, to:1000000, color: colorShades[1]},
            {from: 1000000, to:5000000, color: colorShades[2]},
            {from: 5000000, to:10000000, color: colorShades[3]},
            {from: 10000000, to:20000000, color: colorShades[4]},
            {greater: 20000000, color: colorShades[5]},
          ]));
          chart.container('container');
          chart.draw();
        }));
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
  }

  .disclaimer-text {
    font-style: italic;
    font-size: 12px;
    color: gray;
  }
</style>
