  <template lang="html">
    <div id="chart-menu">
      <div class="columns">
        <div class="outline">
          <div id="chart-selector-1" class="column">
            <span>
              <i class="fa fa-bar-chart fa-4x"></i>
            </span>
            <h4 class="sidebar-title">Chart 1</h4>
          </div>
        </div>
        <div class="outline">
          <div id="chart-selector-2" class="column">
            <i class="fa fa-line-chart fa-4x"></i>
            <h4 class="sidebar-title">Chart 2</h4>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <div id="chart-selector-3" class="column">
            <i class="fa fa-area-chart fa-4x"></i>
            <h4 class="sidebar-title">Chart 3</h4>
          </div>
        </div>
        <div class="outline">
          <div id="chart-selector-4" class="column">
            <i class="fa fa-line-chart fa-4x"></i>
            <h4 class="sidebar-title">Chart 4</h4>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="outline">
          <div id="chart-selector-5" class="column">
            <i class="fa fa-bar-chart fa-4x"></i>
            <h4 class="sidebar-title">Chart 5</h4>
          </div>
        </div>
          <div class="outline">
            <div id="chart-selector-6" class="column">
              <i class="fa fa-bar-chart fa-4x"></i>
              <h4 class="sidebar-title">Chart 6</h4>
            </div>
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
      border: 1px solid rgba(0, 209, 178, 0.7);
    }

    .sidebar-title {
      font-size: 12px;
    }

  </style>
