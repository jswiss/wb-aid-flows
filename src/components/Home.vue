 <!--home page-->
<template>
  <div id="topmost" class="columns is-gapless is-mobile">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      <!--<tree-tabs></tree-tabs>-->
    <div class="field">
      <p class="control" id="radios">
        <label class="radio">
          <input type="radio" name="question" value="2017" v-on:click="tree = 2017, tree2017 = true">
          2017 Project-level Disbursements
        </label>
        <label class="radio">
          <input type="radio" name="question" value="2016" v-on:click="tree = 2016, tree2017 = false">
          2016 Project-level Disbursements
        </label>
        <label class="radio">
          <input type="radio" name="question" value="2015" v-on:click="tree = 2015, tree2017 = false">
          2015 Project-level Disbursements
        </label>
      </p>
    </div>
      <!--<tree-map-2015 v-if="['TreeMap2015'].indexOf($route.name) > -1"></tree-map-2015>
      <tree-map-2016 v-if="['TreeMap2016'].indexOf($route.name) > -1"></tree-map-2016>
      <tree-map-2017 v-if="['TreeMap2017'].indexOf($route.name) > -1"></tree-map-2017>-->
      <tree-map-2015 v-if="tree === 2015"></tree-map-2015>
      <tree-map-2016 v-if="tree === 2016"></tree-map-2016>
      <tree-map-2017 v-if="tree2017"></tree-map-2017>
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
  data() {
    return {
      tree: '',
      tree2017: true,
    };
  },
};
</script>

<style scoped>
  .disclaimer-text {
    font-style: italic;
    font-size: 12px;
    color: gray;
  }
  #topmost {
    margin-top: 25px;
  }
</style>
