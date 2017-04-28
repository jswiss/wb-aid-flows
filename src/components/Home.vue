 <!--home page-->
<template>
  <div class="columns is-gapless">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      <tree-map></tree-map>
    </div>
  </div>
</template>

<script type="text/javascript">
import HomeText from './HomeText';
import TreeMap from './TreeMap';

export default {
  name: 'home',
  components: {
    HomeText,
    TreeMap,
  },
};
</script>

<style scoped>

</style>
