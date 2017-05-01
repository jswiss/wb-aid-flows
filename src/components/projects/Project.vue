<template lang="html">
  <div class="container">

  </div>
</template>

<script type="text/javascript">
  import store from '../../vuex/store';

  const projects = store.state.projectTable;

  function findTest(project, name) {
    return project['Project title'] === 'Mogadishu Clean-Up Support Project';
  }
  

  export default {
    name: 'Project',
    data() {
      return {
        projects: projects,
        project: null,
      };
    },
    mounted() {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData', 
    },
    methods: {
      fetchData() {
        const projectName = this.$route.params.projectName;
        function findProject(project) {
          return project['Project title'] === projectName;
        }
        this.project = projects.find(findProject);
        console.log(this.project);
      },
      // findProject(project) {
      //   return project['Project title'] === projectName;
      // }
    },
  }
</script>

<style scoped>

</style>
