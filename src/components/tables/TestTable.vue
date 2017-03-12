<!-- tables -->
<template lang="html">
  <div id="test-table" class="container is-fluid">
    <table class="table is-bordered is-striped is-narrow">
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
};
</script>

<style>

</style>
