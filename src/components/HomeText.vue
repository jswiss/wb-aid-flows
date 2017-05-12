 <!--home page 
<template lang="html">
  <div id="home">
    Home content will go here
  </div>
</template>-->

<template lang="html">
  <div class="title">
    <p class="text">
      This site provides tools for exploring the underlying data of the 2017 report <a href="https://s3.eu-west-2.amazonaws.com/somaliaaidflows.so/assets/Aid+Flow+Booklet+FINAL.pdf" target="_blank">Aid Flows in Somalia: Analysis of aid flow data</a>. The data was collected in the 2016 Aid Mapping Exercise led by the Aid Coordination Unit in the Office of the Prime Minister of the Federal Government of Somalia, with the support of the World Bank and United Nations. Find out more about the <router-link to="/about">Aid Mapping Exercise</router-link>.
    </p>
    <p class="text">
      The tree map on this page provides a tool for exploring development-focused disbursements by location and sector. It includes some humanitarian activities where relevant for coordination under the National Development Plan. However, it does not include the majority of lifesaving humanitarian aid disbursed in Somalia, which is reported to the <a href="https://fts.unocha.org/countries/206/sectors/2017" target="_blank">OCHA Financial Tracking Service</a>.
    </p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'HomeText',
  };
</script>

<style scoped>
  .title {
    display: inline-block;
  }
  .text {
    font-size: 16px;
    /*text-align: justify;*/
    line-height: 1.5;
    margin: 3%;
    margin-top: 15%;
    font-weight: 400;
  }
</style>
