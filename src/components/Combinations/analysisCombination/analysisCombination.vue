<template>
  <div id="3DAnalysis" class="sm-panel" v-if="analysisShow" v-drag>
    <div class="sm-content">
      <div class="sm-panel-header">
        <span :class="{titleColor:sightlineShow}" class="title-txt" @click="choose(0)">通视</span>
        <span :class="{titleColor:viewshedShow}" class="title-txt" @click="choose(1)">可视域</span>
        <span :class="{titleColor:shadowqueryShow}" class="title-txt" @click="choose(2)">阴影</span>
        <span :class="{titleColor:profileShow}" class="title-txt" @click="choose(3)">剖面</span>
        <span :class="{titleColor:skylineShow}" class="title-txt" @click="choose(4)">天际线</span>
        <span class="closeBtn" @click="toggleVisibility">&times;</span>
      </div>
      <!-- 调用子组件 -->
      <sm3d-sightline></sm3d-sightline>
      <sm3d-viewshed :spatial-analysis-url="spatialAnalysisUrl"></sm3d-viewshed>
      <sm3d-shadowquery></sm3d-shadowquery>
      <sm3d-profile></sm3d-profile>
      <sm3d-skyline></sm3d-skyline>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sm3dAnalysis",
  props: {},
  data() {
    return {
      sharedState: store.state,
      spatialAnalysisUrl:
       'http://www.supermapol.com/realspace/services/spatialAnalysis-data_all/restjsr/spatialanalyst/geometry/3d/viewshedbody.json'
    };
  },

  computed: {
    sightlineShow: function () {
      return this.sharedState.analysis[0];
    },
    viewshedShow: function () {
      return this.sharedState.analysis[1];
    },
    shadowqueryShow: function () {
      return this.sharedState.analysis[2];
    },
    profileShow: function () {
      return this.sharedState.analysis[3];
    },
    skylineShow: function () {
      return this.sharedState.analysis[4];
    },
    analysisShow: function () {
      return this.sharedState.toolBar[6];
    },
  },

  methods: {
    toggleVisibility() {
      //控制组件界面显隐
      store.setToolBarAction(6);
    },
    choose(i) {
      // 验证是否为点击事件，是则继续执行click事件，否则不执行
      let isClick = document
        .getElementById("3DAnalysis")
        .getAttribute("data-flag");
      if (isClick !== "true") {
        return false;
      }
      switch (i) {
        case 0:
          store.setAnalysisAction([1, 0, 0, 0, 0]);
          break;
        case 1:
          store.setAnalysisAction([0, 1, 0, 0, 0]);
          break;
        case 2:
          store.setAnalysisAction([0, 0, 1, 0, 0]);
          break;
        case 3:
          store.setAnalysisAction([0, 0, 0, 1, 0]);
          break;
        default:
          store.setAnalysisAction([0, 0, 0, 0, 1]);
      }
    },
  },
};
</script>

