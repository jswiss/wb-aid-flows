 <!--home page-->
<template>
  <div>
    <div id="topmost" class="columns is-mobile">
      <div class="column is-2 buffer"></div>
      <div class="column is-8">
        <p>
          For the past three years, aid flows in Somalia have been tracked through an annual mapping exercise. Significant progress has been made in improving aid transparency, which has served to inform better coordination. Aid data has also proven useful for monitoring aid effectiveness principles.
        </p>
        <br>
        <p>
          This website presents some of the key findings from the aid mapping exercise conducted in 2016. Additional data and analysis is provided in the 2017 report <a href="https://s3.eu-west-2.amazonaws.com/somaliaaidflows.so/assets/Aid+Flow+Booklet+2017.pdf">Aid Flows in Somalia</a>. The mapping exercise was led by the Aid Coordination Unit (ACU) in the Office of the Prime Minister. Analytical support was provided by the World Bank and United Nations. Coordination support was also provided by the Ministry of Planning, Investment, and Economic Promotion (MoPIEP). 
        </p>
        <br>
        <p>
          A total of 45 development partners and funds reported their aid flows to the ACU in 2016 (listed in report). The Federal Government of Somalia thanks all participating agencies for their high level of reporting.
        </p>
        <br>
        <div class="callout-box">
          <h4 class="title is-4">Somali Aid Information Management System (AIMS)</h4>
          <p>
            An innovative AIMS is under development to enable collaborative reporting and transparent dissemination of aid flow data in Somalia. The online system will allow development partners to easily input data and provide a set of automated “one click” reports for regularly recurring data requests (e.g. sector and state-specific reports, reports for the budget annex). It will also provide a single source for accessing both development and humanitarian flows by integrating humanitarian data collected through the OCHA Financial Tracking Service (FTS).
          </p>
          <br>
          <p>
            With a launch planned for the end of the year, the government will conduct its fourth interim aid mapping exercise in mid-2017 to ensure data is: i) collected in time to inform the 2018 budget, ii) disseminated to inform planning and coordination for NDP implementation, and iii) used to populate the online system before it comes online. This area of work has been led by the Aid Coordination Unit (ACU) and the Ministry of Planning and International Cooperation (MOPIC, which in March 2017 became the Ministry of Planning, Investment, and Economic Promotion - MoPIEP) in collaboration with Ministries of Planning in the Federal Member States, with the support of UNDP and the World Bank.
          </p>
        </div>
        <br>
        <p>
          For questions about the report or aid mapping exercise, please contact Rodo Ali, Aid Coordination Unit, <a href="mailto:acu.somalia@gmail.com?Subject=Somalia Aid Flows">acu.somalia@gmail.com</a>.
        </p>
      </div>
      <div class="column is-2"></div>
    </div>
    <div>
      <p id="support">Developed with the support of the World Bank and United Nations.</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'About',
  };
</script>

<style scoped>
  .callout-box {
    border: 1px solid #8D8D8D;
    margin: 2%;
    padding: 0% 2% 1% 2%;
    box-shadow: 1px 1px 3px #c6c6c6;
    background-color: #dcdcdc;
  }

  p {
    text-align: justify;
  }
  #topmost {
    margin-top: 20px;
  }
  .buffer {
    margin: 20px;
  }

  #support {
    text-align: center;
    margin: 2%;
    font-size: 11px;
    color: gray;
  }
</style>
