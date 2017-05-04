 <!--home page-->
<template>
  <div class="columns is-gapless">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      <tree-tabs></tree-tabs>
      <tree-map-2015 v-if="['TreeMap2015'].indexOf($route.name) > -1"></tree-map-2015>
      <tree-map-2016 v-if="['TreeMap2016'].indexOf($route.name) > -1"></tree-map-2016>
      <tree-map-2017 v-if="['TreeMap2017'].indexOf($route.name) > -1"></tree-map-2017>
      <div class="disclaimer">
        <p class="disclaimer-text">
          * Projects under a certain value, relative to the largest project within each subsector, are not shown in this chart. To see all projects, please visit the <router-link to="/tables/projects">projects table</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import HomeText from './HomeText';
import TreeTabs from './treemap/TreeTabs';
import TreeMap2015 from './treemap/TreeMap2015';
import TreeMap2016 from './treemap/TreeMap2016';
import TreeMap2017 from './treemap/TreeMap2017';

export default {
  name: 'home',
  components: {
    HomeText,
    TreeTabs,
    TreeMap2015,
    TreeMap2016,
    TreeMap2017,
  },
};
</script>

<style scoped>
  .disclaimer-text {
    font-style: italic;
    font-size: 12px;
    color: gray;
  }
</style>
