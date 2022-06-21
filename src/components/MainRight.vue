<template>
  <div class="right">
    <div class="right1">
      <div class="content4"></div>
      <div class="bottom"></div>
    </div>
    <div class="right1">
      <div class="content5"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawLine4();
    this.drawLine5()
  },
  methods: {
    drawLine4() {
      //3.初始化实例对象 echarts.init(dom容器)
      var myChart = this.$echarts.init(document.querySelector(".content4"));

      window.addEventListener("resize", function () {
        myChart.resize();
      });
      //4.指定配置项和数据
      // prettier-ignore
      const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
      const dateList = data.map(function (item) {
        return item[0];
      });
      const valueList = data.map(function (item) {
        return item[1];
      });
      var option = {
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
          {
            show: false,
            type: "continuous",
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1,
          },
        ],
        title: [
          {
            left: "center",
            text: "Gradient along the y axis",
          },
          {
            top: "55%",
            left: "center",
            text: "Gradient along the x axis",
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            data: dateList,
          },
          {
            data: dateList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {},
          {
            gridIndex: 1,
          },
        ],

        grid: [
          {
            top: "5%",
            bottom: "60%",
          },
          {
            top: "60%",
            bottom: "20px",
          },
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            data: valueList,
          },
          {
            type: "line",
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
        ],
      };

      //5.将配置项设置给echarts实例对象，使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawLine5() {
      //3.初始化实例对象 echarts.init(dom容器)
      var myChart = this.$echarts.init(document.querySelector(".content5"));

      window.addEventListener("resize", function () {
        myChart.resize();
      });
      //4.指定配置项和数据
      const data = [];
      for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
      }
      var option = {
        xAxis: {
          max: "dataMax",
        },
        yAxis: {
          type: "category",
          data: ["A", "B", "C", "D", "E"],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2, // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: "X",
            type: "bar",
            data: data,
            label: {
              show: true,
              position: "right",
              valueAnimation: true,
            },
          },
        ],
        legend: {
          show: true,
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
      };
      function run() {
        for (var i = 0; i < data.length; ++i) {
          if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 2000);
          } else {
            data[i] += Math.round(Math.random() * 200);
          }
        }
        myChart.setOption({
          series: [
            {
              type: "bar",
              data,
            },
          ],
        });
      }
      setTimeout(function () {
        run();
      }, 0);
      setInterval(function () {
        run();
      }, 3000);

      //5.将配置项设置给echarts实例对象，使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style>
@import "../style/style.css";
</style>