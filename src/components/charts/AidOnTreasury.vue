<!-- AidOnTreasury -->
<template lang="html">
  <div class="columns is-mobile">
    <div class="column" id="container"></div>
  </div>
</template>
<script type="text/javascript">
  anychart.licenseKey("80outrage-432962df-89451e8b");
  export default {
    name: 'AidOnTreasury',
    data() {
      return {
        data: [
          ['UN National Window', 760000],
          ['Norway/ SFF', 1260113],
          ['EU', 1377761],
          ['AfDB', 1513811],
          ['Budget Support - Turkey', 10000000],
          ['Budget Support - Saudi Arabia', 19999985],
          ['WB MPF', 20383229],
        ],
      };
    },
    mounted() {
      this.bar();
    },
    methods: {
      bar() {
        const data = anychart.data.set(this.data);

        // create the chart
        const chart = anychart.bar();
        const series = chart.bar(data);
        
        // set the chart title
        chart.title('Aid Delivered on Treasury, 2016 (in millions USD)');

        // Set the padding between bars
        chart.barGroupsPadding(0.5);

        // configure visual settings
        series.fill("#45B9EA", 0.8);
        series.hoverFill("#45B9EA", 0.5);
        series.selectFill("#45B9EA", 1);

        // get the chart's tooltip
        const tooltip = chart.tooltip();
        
        // configure tooltips
        chart.tooltip().format('${%Value}{groupsSeparator:\\,}');

        // set the titles of the axes
        const xAxis = chart.xAxis();
        xAxis.title("Donor / Fund");
        const yAxis = chart.yAxis();
        yAxis.title("USD");

        const yLabels = chart.yAxis(0).labels();
        yLabels.format("${%Value}{groupsSeparator:\\,}");
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