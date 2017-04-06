<!-- tables -->
<template lang="html">
  <div id="test-table" class="container is-fluid">
  <br>
  <a 
  class="button is-primary exportClick"
  v-on:click="exportClick()"
  >
    <span class="icon">
      <i class="fa fa-table"></i>
    </span>
    <span>Export Table</span>
  </a>
  <br>
  <br>
    <table class="table is-bordered is-striped is-narrow" id="csvTable">
      <thead>
        <tr>
          <th>donor</th>
          <th>date</th>
          <th>currency</th>
          <th>amount</th>
          <th>sector</th>
        </tr>
      </thead>
      <tbody v-for="item in rows">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.currency }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.sector }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/javascript">

const headers = [
  { title: 'Donor' },
  { title: 'Date' },
  { title: 'Currency' },
  { title: 'Amount' },
  { title: 'Sector' },
];

const rows = [
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
      rows,
      headers,
      dtHandle: null,
    };
  },
  name: 'TestTable',
  methods: {
    downloadCSV(csv, filename) {
      // eslint-disable-next-line
      const csvFile = new Blob([csv], { type: 'text/csv' });
       // Download link
      const downloadLink = document.createElement('button');

      // File name
      downloadLink.download = filename;

      // We have to create a link to the file
      downloadLink.href = window.URL.createObjectURL(csvFile);

      // Make sure that the link is not displayed
      downloadLink.style.display = 'none';

      // Add the link to your DOM
      document.body.appendChild(downloadLink);

      // Lanzamos
      downloadLink.click();
    },
    tableToCSV(html, filename) {
      // eslint-disable-next-line
      console.log('balls');
      const csv = [];
      const tableRows = document.querySelectorAll('table tr');
      for (let i = 0; i < rows.length; i + 1) {
        const row = [];
        const cols = tableRows[i].querySelectorAll('td, th');
        for (let j = 0; j < rows.length; j + 1) {
          row.push(cols[j].innerText);
          csv.push(row.join(','));
          // eslint-disable-next-line
        }
        this.downloadCSV(csv.join('\n'), filename);
      }
    },
    exportClick() {
      const html = document.querySelector('table').outerHTML;
      // eslint-disable-next-line
      console.log('fuckoff');
      this.tableToCSV(html, 'table.csv');
    },
  },
};
</script>

<style>

</style>
