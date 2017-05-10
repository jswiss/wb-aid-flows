  <template lang="html">
    <div id="chart-menu">
      <div class="columns is-mobile">
        <div class="outline">
          <router-link class="nav-item" to="/charts/oda-chart" >
            <div id="chart-selector-1" class="column">
              <span>
                <i class="fa fa-area-chart fa-4x"></i>
              </span>
              <h4 class="sidebar-title">
                ODA Trends
              </h4>
            </div>
          </router-link>
        </div>
        <div class="outline">
          <router-link class="nav-item" to="/charts/aid-by-category" >
            <div id="chart-selector-2" class="column">
              <i class="fa fa-bar-chart fa-4x"></i>
              <h4 class="sidebar-title">
                Aid by 
                <br>
                Category
              </h4>
            </div>
          </router-link>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <router-link class="nav-item" to="/charts/aid-location" >
            <div id="chart-selector-3" class="column">
              <i class="fa fa-bar-chart fa-4x"></i>
              <h4 class="sidebar-title">
                Aid by
                <br>
                Location
              </h4>
            </div>
          </router-link>
        </div>
        <div class="outline">
          <router-link class="nav-item" to="/charts/aid-via-funds" >
            <div id="chart-selector-4" class="column">
              <i class="fa fa-line-chart fa-4x"></i>
              <h4 class="sidebar-title">
                Aid via
                <br>
                Funds
              </h4>
            </div>
          </router-link>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <router-link class="nav-item" to="/charts/aid-by-ndp-pillar" >
            <div id="chart-selector-5" class="column">
              <i class="fa fa-bar-chart fa-4x"></i>
              <h4 class="sidebar-title">
                Aid by
                <br>
                NDP Pillar
              </h4>
            </div>
          </router-link>
        </div>
          <div class="outline">
            <router-link class="nav-item" to="/charts/aid-on-treasury">
              <div id="chart-selector-6" class="column">
                <i class="fa fa-bar-chart fa-4x"></i>
                <h4 class="sidebar-title">
                 Aid Delivered
                 <br>
                 on Treasury
                </h4>
              </div>
            </router-link>
          </div>
      </div>
    </div>
  </template>

<script type="text/javascript">

export default {
  name: 'ChartsTabs',
};
</script>

  <style>
    .outline {
      /*border: 1px solid rgba(0, 209, 178, 0.7);*/
      margin: 1px;
    }

    .sidebar-title {
      font-size: 12px;
    }

    #chart-menu {
      margin: 3% 0 0 0;
    }

  </style>
