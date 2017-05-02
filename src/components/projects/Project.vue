<template lang="html">
  <div class="container">
    <div id="title">
      <h1 id="project-title" class="title is-1"> {{ project['Project title'] }}</h1>
    </div>
    <div class="info-title">
      <h3 class="title is-3">Basic Information</h3>
    </div>
    <div id="basic-info" class="info-box">
      <div id="pillars" class="columns">
        <div class="column is-4">
          <h4 class="title is-4 is-bold"><span class="ndp">NDP Pillar:</span></h4>
          <p class="pillar">{{ project['NDP Pillar'] }}</p>
        </div>
        <div class="column is-4">
          <h4 class="title is-4 is-bold"><span class="ndp">Primary Sector:</span></h4>
          <p class="pillar">{{ project['Primary Sector'] }}</p>
        </div>
        <div class="column is-4">
          <h4 class="title is-4 is-bold"><span class="ndp">Related Sectors:</span></h4>
          <p class="pillar">{{ project['Links to other Sector'] || 'n/a' }}</p>
        </div>
      </div>
      <div id="desc" class="columns">
        <div class="column is-5" id="description">
          <h4 class="title is-4 is-bold">Description:</h4>
          <p class="desc-text">{{ project['Project objectives / purpose'] || 'n/a' }}</p>
        </div>
        <div class="column is-2"></div>
        <div class="column is-5" id="project-website">
          <h4 class="title is-4">Project Website:</h4>
          <a v-bind:href="project['Links to project webpages or documents']"><p class="url">{{ project['Links to project webpages or documents'] || 'n/a'}}</p></a>
        </div>
      </div>
    </div>
    <div class="info-title">
      <h3 class="title is-3">Financial Information</h3>
    </div>
    <div id="financial-info" class="info-box">
      <div id="value" class="columns">
        <div class="column is-3" id="project-value">
          <h4 class="title is-4 is-bold">Total Project Value:</h4>
          <p id="total-value" class="desc-text">${{ project['Project Value (USD)'] | currency }}</p>
        </div>
        <div class="column is-3">
          <h4 class="title is-4 is-bold"><span class="disb">2015 Disbursement:</span></h4>
          <p class="year-disb">${{ project['2015 Disbursements (USD)'] | currency }}</p>
        </div>
        <div class="column is-3">
          <h4 class="title is-4 is-bold"><span class="disb">2016 Disbursement:</span></h4>
          <p class="year-disb">${{ project['2016 Disbursements (USD)'] | currency }}</p>
        </div>
        <div class="column is-3">
          <h4 class="title is-4 is-bold"><span class="disb">2017 Disbursement:</span></h4>
          <p class="year-disb">${{ project['2017 Disbursements (USD)'] | currency }}</p>
        </div>
      </div>
      <div id="table-allocation">
        <h3 class="title is-4 is-bold">Project Disbursements by Year & Location</h3>
        <table class="table is-bordered is-striped is-narrow">
        <thead>
          <tr>
            <th><abbr title=""></abbr></th>
            <th><abbr title="Federal Government of Somalia">FGS</abbr></th>
            <th><abbr title="Benadir">Benadir</abbr></th>
            <th><abbr title="2015, USD">Galmudug</abbr></th>
            <th><abbr title="Hiiraan & Middle Shabelle">HiirShabelle</abbr></th>
            <th><abbr title="Jubaland">Jubaland</abbr></th>
            <th><abbr title="Puntland">Puntland</abbr></th>
            <th><abbr title="Somaliland">Somaliland</abbr></th>
            <th><abbr title="South West">South West</abbr></th>
            <th><abbr title="Unattributed">Unattributed</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="year-row">2015</td>
            <td>${{ project['FGS - 2015'] || 0 | currency }}</td>
            <td>${{ project['Benadir - 2015'] || 0 | currency }}</td>
            <td>${{ project['Galmudug - 2015'] || 0 | currency }}</td>
            <td>${{ project['Hiiraan & Middle Shabelle - 2015'] || 0 | currency }}</td>
            <td>${{ project['Jubaland - 2015'] || 0 | currency }}</td>
            <td>${{ project['Puntland - 2015'] || 0 | currency }}</td>
            <td>${{ project['Somaliland - 2015'] || 0 | currency }}</td>
            <td>${{ project['South West - 2015'] || 0 | currency }}</td>
            <td>${{ project['Unattributed - 2015'] || 0 | currency }}</td>
          </tr>
          <tr>
            <td class="year-row">2016</td>
            <td>${{ project['FGS - 2016'] || 0 | currency }}</td>
            <td>${{ project['Benadir - 2016'] || 0 | currency }}</td>
            <td>${{ project['Galmudug - 2016'] || 0 | currency }}</td>
            <td>${{ project['Hiiraan & Middle Shabelle - 2016'] || 0 | currency }}</td>
            <td>${{ project['Jubaland - 2016'] || 0 | currency }}</td>
            <td>${{ project['Puntland - 2016'] || 0 | currency }}</td>
            <td>${{ project['Somaliland - 2016'] || 0 | currency }}</td>
            <td>${{ project['South West - 2016'] || 0 | currency }}</td>
            <td>${{ project['Unattributed - 2016'] || 0 | currency }}</td>
          </tr>
          <tr>
            <td class="year-row">2017</td>
            <td>${{ project['FGS - 2017'] || 0 | currency }}</td>
            <td>${{ project['Benadir - 2017'] || 0 | currency }}</td>
            <td>${{ project['Galmudug - 2017'] || 0 | currency }}</td>
            <td>${{ project['Hiiraan & Middle Shabelle - 2017'] || 0 | currency }}</td>
            <td>${{ project['Jubaland - 2017'] || 0 | currency }}</td>
            <td>${{ project['Puntland - 2017'] || 0 | currency }}</td>
            <td>${{ project['Somaliland - 2017'] || 0 | currency }}</td>
            <td>${{ project['South West - 2017'] || 0 | currency }}</td>
            <td>${{ project['Unattributed - 2017'] || 0 | currency }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <div class="info-title">
      <h3 class="title is-3">Funders and Implementers</h3>
    </div>
    <div id="basic-info" class="info-box">
      <div id="funder" class="columns has-text-centered">
        <div class="column is-5">
          <h4 class="title is-4 is-bold"><span class="donor">Reporting Agency:</span></h4>
          <p class="funder">{{ project['Reporting Agency'] || 'n/a' }}</p>
        </div>
        <div class="column is-2"></div>
        <div class="column is-5">
          <h4 class="title is-4 is-bold"><span class="imp">Implementer(s):</span></h4>
          <p class="implementer" id="implementer">{{ project['Implementers'] || 'n/a' }}</p>
        </div>
      </div>
      <div id="implementer" class="columns has-text-centered">
        <div class="column is-5">
          <h4 class="title is-4 is-bold"><span class="donor">Funder(s):</span></h4>
          <p class="funder">{{ project['Funders'] || 'n/a' }}</p>
        </div>
        <div class="column is-2"></div>
        <div class="column is-5">
          <h4 class="title is-4 is-bold"><span class="imp">Implementer Category:</span></h4>
          <p class="implementer" id="imp-category">{{ project['Implementer Category'] || 'n/a' }}</p>
        </div>
      </div>
    </div>
    <div class="info-title">
      <h3 class="title is-3">Project Thematic Focuses</h3>
    </div>
    <div id="basic-info" class="info-box">
      <div id="focuses" class="columns has-text-centered">
        <div class="column is-4">
          <h4 class="title is-4 is-bold"><span class="focus">Gender:</span></h4>
          <p class="proj-focus">{{ project.Gender || 'n/a' }}</p>
        </div>
        <div class="column is-4">
          <h4 class="title is-4 is-bold"><span class="focus">Capacity Building:</span></h4>
          <p class="proj-focus">{{ project['Capacity building'] || 'n/a' }}</p>
        </div>
        <div class="column is-4">
          <h4 class="title is-4 is-bold"><span class="focus">Stabilization:</span></h4>
          <p class="proj-focus">{{ project.Stabilization || 'n/a' }}</p>
        </div>
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
    margin-top: 0%;
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
  .year-row {
    font-weight: bold;
  }
  #table-allocation {
    margin-top: 2%;
  }
  .info-box {
    border: 1px solid #8D8D8D;
    margin: 2%;
    padding: 0% 2% 1% 2%;
    box-shadow: 1px 1px 3px #c6c6c6;
  }
  .info-title {
    margin-top: 2%;
  }
  #total-value {
    font-weight: bold;
  }
  #value {
    margin-top: 1%;
  }
</style>
