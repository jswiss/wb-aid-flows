<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <router-link class="nav-item is-brand" to="/">
        Somalia Aid Flows
      </router-link>
      <router-link class="nav-item is-tab" to="/charts">
        <i class="fa fa-dashboard"></i>Charts
      </router-link>
      <router-link class="nav-item is-tab" to="/tables/projects">
        <i class="fa fa-list-alt"></i>Tables
      </router-link>
      <router-link class="nav-item is-tab" to="/about">
        <i class="fa fa-info-circle"></i>About
      </router-link>
    </div>
  </nav>
</template>
<script type="text/javascript">

export default {
  name: 'navbar',
};
</script>

<style scoped>
  .is-tab {
    text-indent: 10px;
  }

  .is-brand {
    font-weight: bold;
  }
</style>
