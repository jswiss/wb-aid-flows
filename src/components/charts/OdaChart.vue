<!-- Chart1 -->
<template lang="html">
  <div class="columns is-mobile">
    <div class="column" id="container"></div>
  </div>
</template>
<script type="text/javascript">
  anychart.licenseKey("80outrage-432962df-89451e8b");
  export default {
    name: 'OdaChart',
    mounted() {
      this.oda();
    },
    methods: {
      oda() {
        const data = anychart.data.set([
          ['2006', 144.68, 319.94],
          ['2007', 158.92, 267.75],
          ['2008', 220.41, 570.91],
          ['2009', 214.87, 489.04],
          ['2010', 271.4, 264.19],
          ['2011', 299.18, 782.64],
          ['2012', 450.83, 552.98],
          ['2013', 530.02, 529.21],
          ['2014', 607, 672],
          ['2015', 611, 588],
          ['2016', 692, 620],
          ['2017', 613, 614],
        ]);
        // map the data
        const seriesData_1 = data.mapAs({x: [0], value: [1]});
        const seriesData_2 = data.mapAs({x: [0], value: [2]});
        // create the chart
        const chart = anychart.area();
        // enable stacked area chart
        chart.yScale().stackMode('value');
        // enable interactivity
        chart.interactivity().hoverMode('single');
        // get the chart's tooltip
        const tooltip = chart.tooltip();
        tooltip.displayMode('union');
        // create the first series, set the data and name
        const series1 = chart.area(seriesData_1);
        series1.name('Development');
        // configure the visual settings of the first series
        series1.fill("#45B9EA", 0.3);
        series1.hoverFill("#45B9EA", 0.3);
        series1.selectFill("#45B9EA", 0.5);
        series1.stroke("#45B9EA", 1, "10 5", "round");
        series1.hoverStroke("#45B9EA", 2, "10 5", "round");
        series1.selectStroke("#45B9EA", 4, "10 5", "round");
        // create the second series, set the data and name
        const series2 = chart.area(seriesData_2);
        series2.name('Humanitarian');
        // configure the visual settings of the second series
        series2.fill("#00D1B2", 0.3);
        series2.hoverFill("#00D1B2", 0.3);
        series2.selectFill("#00D1B2", 0.5);
        // series2.hatchFill("zigzag", "#808080", 1, 15);
        series2.stroke("#00D1B2");
        series2.hoverStroke("#00D1B2", 2);
        series2.selectStroke("#00D1B2", 4);
        // set the chart title
        chart.title('ODA Trends in Somalia, 2006 - 2017 (in millions USD)');
        // set the titles of the axes
        const xAxis = chart.xAxis();
        xAxis.title("Year");
        const yAxis = chart.yAxis();
        yAxis.title("USD");
        // set the container id
        chart.container("container");
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
</style>