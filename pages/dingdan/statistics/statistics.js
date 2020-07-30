var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
  main: {
    title: '总订单数',
    data: [7, 6, 9, 9],
    categories: ['代取快递', '二手交易', '需要顺带', '可顺带']
  },
  sub: [{
    title: '代取快递订单数量',
    data: [1, 1, 2, 1, 1, 1],
    categories: ['未完成', '进行中', '未评价', '已完成', '已取消', '已过期']
  }, {
      title: '二手交易订单数量',
    data: [1, 2, 0, 1, 1, 1],
      categories: ['未完成', '进行中', '未评价', '已完成', '已取消', '已过期']
  }, {
      title: '需要顺带订单数量',
    data: [1, 0, 2, 1, 4, 1],
      categories: ['未完成', '进行中', '未评价', '已完成', '已取消', '已过期']
  }, {
      title: '可顺带订单数量',
    data: [2, 1, 4, 1, 1, 0],
      categories: ['未完成', '进行中', '未评价', '已完成', '已取消', '已过期']
  }]
};
Page({
  data: {
    chartTitle: '总订单数',
    isMainChartDisplay: true
  },
  backToMainChart: function () {
    this.setData({
      chartTitle: chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData({
      categories: chartData.main.categories,
      series: [{
        name: '成交量',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '件';
        }
      }]
    });
  },
  touchHandler: function (e) {
    var index = columnChart.getCurrentDataIndex(e);
    if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
        chartTitle: chartData.sub[index].title,
        isMainChartDisplay: false
      });
      columnChart.updateData({
        categories: chartData.sub[index].categories,
        series: [{
          name: '订单数量',
          data: chartData.sub[index].data,
          format: function (val, name) {
            return val.toFixed(2) + '件';
          }
        }]
      });

    }
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '订单数量',
        data: chartData.main.data,
        format: function (val, name) {
          return val.toFixed(2) + '件';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '件';
        },
        title: '订单数量',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth,
      height: 200,
    });
  }
});