 <!--home page-->
<template>
  <div class="columns is-gapless">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      <tree-map-2015></tree-map-2015>
    </div>
  </div>
</template>

<script type="text/javascript">
import HomeText from './HomeText';
import TreeMap2015 from './TreeMap2015';

export default {
  name: 'home',
  components: {
    HomeText,
    TreeMap2015,
  },
};
</script>

<style scoped>

</style>
