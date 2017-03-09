<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <a class="nav-item is-brand" to="/">
        Somalia Aid Flows
      </a>
      <a class="nav-item is-tab" to="/dashboard">
        <i class="fa fa-dashboard"></i>Dashboard
      </a>
      <a class="nav-item is-tab" to="/tables">
        <i class="fa fa-list-alt"></i>Tables
      </a>
    </div>
    <div class="nav-right">
      <span class="nav-item">
        <a class="button">Logout</a>
      </span>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
};
</script>

<style>
  a.is-tab {
    text-indent: 10px;
  }

  a.is-brand {
    font-weight: bold;
  }
</style>
