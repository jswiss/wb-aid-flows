<!-- Chart2 -->
<template lang="html">
  <div id="container">
  </div>
</template>
<script type="text/javascript">
  anychart.licenseKey("80outrage-432962df-89451e8b");

  export default {
    name: 'AnnualDisbursementsChart',
    data() {
      return {
        data: [
          ['2015', 610821157, 588390258, 323847494],
          ['2016', 692250352, 619617477, 366833105],
          ['2017', 612832086, 613980507, 325129693],
          ['2018', 276145677, 71420635, 6611111],
          ['2019', 183244513, 68753968, 0],
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
        series1.name('Development');
        series1.fill('#45B9EA', 0.8);
        series1.stroke(7, '#45B9EA');
        
        // create the second series, set the data and name
        const series2 = chart.column(seriesData_2);
        series2.name('Humanitarian');
        series2.fill('#00D1B2', 0.8);
        series2.stroke(7, '#00D1B2');
        
        // create the third series, set the data and name
        const series3 = chart.column(seriesData_3);
        series3.name('Peacekeeping');
        series3.fill('#716558', 0.8);
        series3.stroke(7, '#716558');

        // set the padding between columns
        chart.barsPadding(-0.2);

        // set the padding between column groups
        chart.barGroupsPadding(2);

        // set the chart title
        chart.title('Cumulative Aid Flow By Category and Year, USD');

        // format the tooltip
        chart.tooltip().format('{%SeriesName}: ${%Value}{groupsSeparator:\\,}');

        // set the titles of the axes
        const xAxis = chart.xAxis();
        xAxis.title('Aid Flow Category');
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
</style>
