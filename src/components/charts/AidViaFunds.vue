<!-- AidViaFunds -->
<template lang="html">
  <div>
    <div id="container"></div>
    <div class="disclaimer">
      <p class="disclaimer-text">
        * For more information, please visit the <router-link to="/tables/funds">funds table</router-link>.
      </p>
    </div>
  </div>
</template>
<script type="text/javascript">
  anychart.licenseKey("80outrage-432962df-89451e8b");

  export default {
    name: 'AidViaFunds',
    data() {
      return {
        data: [
          ['2015', 0.301250295, 0.228031754],
          ['2016', 0.259353468, 0.208068583],
          ['2017', 0.20904035, 0.156069152],
        ]
      };
    },
    mounted() {
      this.line();
    },
    methods: {
      line() {
        // set the data
        const data = anychart.data.set(this.data);
        // map the data
        const seriesData_1 = data.mapAs({x: [0], value: [1]});
        const seriesData_2 = data.mapAs({x: [0], value: [2]});

        // create the chart
        const chart = anychart.line();

        // enable the grid
        const grid = chart.grid();
        grid.enabled(true);

        // set the interactivity mode
        chart.interactivity().hoverMode("single");

        // create the first series, set the data and name
        const series1 = chart.line(seriesData_1);
        series1.name('% through all pooled funding instruments');
        // configure the visual settings of the first series
        series1.stroke("#45B9EA", 4, "10 5", "round");
        series1.hoverStroke("#45B9EA", 5, "10 5", "round");
        series1.selectStroke("#45B9EA", 7, "10 5", "round");
        
        // create the second series, set the data and name
        const series2 = chart.line(seriesData_2);
        series2.name('% through SDRF funds');
        // configure the visual settings of the second series
        series2.stroke("#00D1B2", 4);
        series2.hoverStroke("#00D1B2", 5);
        series2.selectStroke("#00D1B2", 7);

        const legend = chart.legend();
        legend.enabled(true);

        // set the chart title
        chart.title('Declining Share of Development Aid Channeled Through Funds');

        // set the titles of the axes
        const xAxis = chart.xAxis();
        xAxis.title('Year');
        const yAxis = chart.yAxis();
        yAxis.title('Annual Aid, %');

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
