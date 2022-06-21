<template>
  <div id="app">
    <Header />
    <div class="footer">
      <Left />
      <Right />
    </div>
  </div>
</template>

<script>

import Header from './components/MainHeader.vue'
import Left from './components/MainLeft.vue'
import Right from './components/MainRight.vue'
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  name: 'App',
  data() {
    return {
      Map: null,//地图对象
    }
  },
  created() {
    window._AMapSecurityConfig = {
      securityJsCode: '25c8f161cfff7a480ca0bf76d940a674',
    }
    let that = this;
    AMapLoader.load({
      "key": "92464967a2fae3bd7b59bff429d5211b",// 申请好的Web端开发者Key，首次调用 load 时必填
      
      "plugins": [],// 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      that.Map = new AMap.Map('app', {
                resizeEnable: true,
                center: [116.479126, 39.998563],
                zoom: 20,
                pitch: 65,
                rotation: 4.509173845626157,
                viewMode: '3D', //开启3D视图,默认为关闭
                buildingAnimation: true, //楼块出现是否带动画

            })
            that.Map.addControl(new AMap.ControlBar({
                showZoomBar: false,
                showControlButton: true,
                position: {
                    right: '10px',
                    top: '10px'
                }
            }));
    }).catch(e => {
      console.log(e);
    })
  },
  components: {
    Header,
    Left,
    Right
  }
}
</script>

<style>
@import './style/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
    display: flex;
    flex-direction: column;
    height: 100vh;
}

</style>
