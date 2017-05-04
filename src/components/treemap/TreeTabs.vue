<!-- tree tabs-->
<template lang="html">
  <div id="tables" class="container is-fluid">
    <div class="tabs is-centered">
      <ul>
        <li>
          <router-link class="nav-item is-tab" to="/treemap-2017">
            2017 Aid Flows
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/treemap-2016">
            2016 Aid Flows
          </router-link>
        </li>
        <li>
          <router-link class="nav-item is-tab" to="/treemap-2015">
            2015 Aid Flows
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">

export default {
  name: 'TreeTabs',
  data() {
    return {
      seen: true,
    }
  }
};
</script>

<style scoped>
  .nav-item {
    margin: 6px 30px 6px 30px;
  }
</style>