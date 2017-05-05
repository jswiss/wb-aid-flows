 <!--tree2017 component-->
<template v-if="!seen">
  <div id="treemap-=content">
    <div id="container" style="width: 100%; height: 600px;"></div>
  </div>
</template>

<script type='text/javascript'>
// import * as d3 from 'd3';
import store from '../../vuex/store';

const projects = store.state.projects;
anychart.licenseKey("80outrage-432962df-89451e8b");

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
  name: 'TreeMap2017',
  data() {
    return {
      tree2017: tree2017,
    };
  },
  mounted() {
    this.treeMap();
  },
  methods: {
    treeMap() {
      const colorScheme = ['#45B9EA', '#262261', '#716558', '#594A41', '#594A41'];
      const colorShades = ['#45B9EA', '#6ac7ee', '#8fd5f2', '#b4e3f6', '#d9f1fa', '#ecf8fc'];
      const colorRange = ['#262261', '#45B9EA'];
      const year2017 = anychart.data.tree(tree2017, anychart.enums.TreeFillingMethod.AS_TREE);
 
      // set it so a click adds the class 'selected'. 
      // if it has 'selected' class, pass variable to chart function

      const chart = anychart.treeMap(year2017);
      chart.headers().format("{%name} :: Project disbursements: ${%value}{groupsSeparator:\\,}");
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
        {less: 500000, color: colorShades[5]},
        {from: 500000, to:1000000, color: colorShades[4]},
        {from: 1000000, to:5000000, color: colorShades[3]},
        {from: 5000000, to:10000000, color: colorShades[2]},
        {from: 10000000, to:20000000, color: colorShades[1]},
        {greater: 20000000, color: colorShades[0]},
      ]));
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
  }
</style>
