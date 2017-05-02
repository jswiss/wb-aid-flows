<template lang="html">
  <div class="container">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 id="project-title" class="title is-1"> {{ project['Project title'] }}</h1>
        </div>
      </div>
    </section>
    <div id="pillars" class="columns">
      <div class="column is-4">
        <h3 class="title is-4"><span class="ndp">NDP Pillar:</span></h3>
        <p id="pillar">{{ project['NDP Pillar'] }}</p>
      </div>
      <div class="column is-4">
        <h3 class="title is-4"><span class="ndp">Primary Sector:</span></h3>
        <p id="pillar">{{ project['Primary Sector'] }}</p>
      </div>
      <div class="column is-4">
        <h3 class="title is-4"><span class="ndp">Related Sectors:</span></h3>
        <p id="pillar">{{ project['Links to other Sector'] || 'n/a' }}</p>
      </div>
    </div>
    <div id="desc" class="columns">
      <div class="column is-5" id="description">
        <h3 class="title is-4">Description:</h3>
        <p class="desc-text">{{ project['Project objectives / purpose'] || 'n/a' }}</p>
      </div>
    </div>
    <div id="value" class="columns">
      <div class="column is-5" id="project-value">
        <h3 class="title is-4">Total Project Value:</h3>
        <p class="desc-text">${{ project['Project Value (USD)'] | currency }}</p>
      </div>
    </div>
    <div id="disbursements" class="columns has-text-centered">
      <div class="column is-4">
        <h3 class="title is-4"><span class="disb">2015 Disbursement:</span></h3>
        <p class="year-disb">${{ project['2015 Disbursements (USD)'] | currency }}</p>
      </div>
      <div class="column is-4">
        <h3 class="title is-4"><span class="disb">2016 Disbursement:</span></h3>
        <p class="year-disb">${{ project['2016 Disbursements (USD)'] | currency }}</p>
      </div>
      <div class="column is-4">
        <h3 class="title is-4"><span class="disb">2017 Disbursement:</span></h3>
        <p class="year-disb">${{ project['2017 Disbursements (USD)'] | currency }}</p>
      </div>
    </div>
    <div id="funder" class="columns has-text-centered">
      <div class="column is-6">
        <h3 class="title is-4"><span class="donor">Reporting Agency:</span></h3>
        <p class="funder">{{ project['Reporting Agency'] || 'n/a' }}</p>
      </div>
      <div class="column is-6">
        <h3 class="title is-4"><span class="donor">Funder(s):</span></h3>
        <p class="funder">{{ project['Funders'] || 'n/a' }}</p>
      </div>
    </div>
    <div id="implementer" class="columns has-text-centered">
      <div class="column is-6">
        <h3 class="title is-4"><span class="imp">Implementer(s):</span></h3>
        <p class="implementer" id="implementer">{{ project['Implementers'] || 'n/a' }}</p>
      </div>
      <div class="column is-6">
        <h3 class="title is-4"><span class="imp">Implementer Category:</span></h3>
        <p class="implementer" id="imp-category">{{ project['Implementer Category'] || 'n/a' }}</p>
      </div>
    </div>
    <div id="website" class="columns">
      <div class="column is-5" id="project-website">
        <h3 class="title is-4">Project Website:</h3>
        <p class="url">{{ project['Links to project webpages or documents'] || 'n/a'}}</p>
      </div>
    </div>
    <div id="focuses" class="columns has-text-centered">
      <div class="column is-4">
        <h3 class="title is-4"><span class="focus">Gender:</span></h3>
        <p class="proj-focus">{{ project.Gender || 'n/a' }}</p>
      </div>
      <div class="column is-4">
        <h3 class="title is-4"><span class="focus">Capacity Building:</span></h3>
        <p class="proj-focus">{{ project['Capacity building'] || 'n/a' }}</p>
      </div>
      <div class="column is-4">
        <h3 class="title is-4"><span class="focus">Stabilization:</span></h3>
        <p class="proj-focus">{{ project.Stabilization || 'n/a' }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import store from '../../vuex/store';

  const projects = store.state.projectTable;

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
  #pillars {
    margin-top: 3%;
  }
  .title {
    margin-bottom: 2px;
  }
  #project-title {
    text-indent: 8px;
  }
  #funder {
    margin-top: 2%;
  }
</style>
