<!-- AidByNDPPillar -->
<template lang="html">
  <div>
    <div id="container"></div>
    <div class="disclaimer">
      <p class="disclaimer-text">
        * For more information, please visit the <router-link to="/tables/projects">projects table</router-link>.
      </p>
    </div>
  </div>
</template>
<script type="text/javascript">
  anychart.licenseKey("80outrage-432962df-89451e8b");

  export default {
    name: 'AidByNdpPillar',
    data() {
      return {
        data: [
          ['Peace, security & rule of law', 109575434, 187278378, 79740827],
          ['Effective Institutions', 101262164, 141666091, 84602267],
          ['Economic growth', 37240552, 68555141, 41444349],
          ['Infrastructure', 66242508, 40032576, 46668789],
          ['Social & human capital', 161537669, 174006495, 137917091],
          ['Resilience', 74340685, 138107257, 115782504],
          ['Other', 13210095, 17055549, 6906294],
        ]
      };
    },
    mounted() {
      this.bar();
    },
    methods: {
      bar() {
        // set the data
        const data = anychart.data.set(this.data);
        // map the data
        const seriesData_1 = data.mapAs({x: [0], value: [1]});
        const seriesData_2 = data.mapAs({x: [0], value: [2]});
        const seriesData_3 = data.mapAs({x: [0], value: [3]});

        // create the chart
        const chart = anychart.column();

        // create the first series, set the data and name
        const series1 = chart.column(seriesData_1);
        series1.name('2015');
        series1.fill('#45B9EA', 0.8);
        series1.stroke(7, '#45B9EA');
        
        // create the second series, set the data and name
        const series2 = chart.column(seriesData_2);
        series2.name('2016');
        series2.fill('#00D1B2', 0.8);
        series2.stroke(7, '#00D1B2');
        
        // create the third series, set the data and name
        const series3 = chart.column(seriesData_3);
        series3.name('2017');
        series3.fill('#716558', 0.8);
        series3.stroke(7, '#716558');

        // set the padding between columns
        chart.barsPadding(-0.2);

        // set the padding between column groups
        chart.barGroupsPadding(2);

        // set the chart title
        chart.title('Aid By National Development Plan Pillar, USD');

        // format the tooltip
        chart.tooltip().format('{%SeriesName}: ${%Value}{groupsSeparator:\\,}');

        // set the titles of the axes
        const xAxis = chart.xAxis();
        xAxis.title('NDP Pillar');
        const yAxis = chart.yAxis();
        yAxis.title('USD');

        // set the container id
        chart.container('container');

        // initiate drawing the chart
        chart.draw();
      },
    },
  };
</script> 

<style scoped>
  html, body, #container {
    width: 100%;
    height: 600px;
    margin: 0;
    padding: 0;
  }
  .disclaimer-text {
    margin-left: 10%;
    font-style: italic;
    font-size: 12px;
    color: gray;
  }
</style>
