<!-- tables -->
<template lang="html">
  <div id="test-table" class="container is-fluid">
  <br>
  <a class="button is-primary toExcel"
  v-on:click="toExcel"
  >
    <span class="icon">
      <i class="fa fa-table"></i>
    </span>
    <span>Export Table</span>
  </a>
  <br>
  <br>
    <table class="table is-bordered is-striped is-narrow" id="excelTable">
      <thead>
        <tr>
          <th>donor</th>
          <th>date</th>
          <th>currency</th>
          <th>amount</th>
          <th>sector</th>
        </tr>
      </thead>
      <tbody v-for="item in table">
        <td>{{ item.name }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.currency }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.sector }}</td>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">

const table = [
  { name: 'DFID', date: '30 May, 2017', currency: 'GBP', amount: 250000000, sector: 'humanitarian' },
  { name: 'USAID', date: '10 April, 2017', currency: 'USD', amount: 300000000, sector: 'education' },
  { name: 'Norway', date: '5 March, 2017', currency: 'EUR', amount: 150000000, sector: 'humanitarian' },
  { name: 'DFATD', date: '12 November, 2017', currency: 'USD', amount: 25000000, sector: 'SSR' },
  { name: 'DANIDA', date: '3 June, 2015', currency: 'EUR', amount: 40000000, sector: 'humanitarian' },
  { name: 'EU', date: '15 May, 2014', currency: 'EUR', amount: 400000000, sector: 'WASH' },
];

export default {
  data() {
    return {
      table,
    };
  },
  name: 'TestTable',
  methods: {
    toExcel() {
      const uri = 'data:application/vnd.ms-excel;base64,';
      const template = `
        
      `;

      const base64 = function base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      };
      const format = function format(s, c) {
        return s.replace(/{(\w+)}/g, (m, p) => c[p]);
      };
      const toExcel = document.getElementById('excelTable').innerHTML;
      const ctx = {
        worksheet: name || '',
        table: toExcel,
      };
      const link = document.createElement('a');
      link.download = 'TestTable.xls';
      link.href = uri + base64(format(template, ctx));
      link.click();
    },
  },
};
</script>

<style>

</style>
