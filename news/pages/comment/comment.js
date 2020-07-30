//logs.js
var util = require('../../../utils/util.js')
const app = getApp()
Page({
  data: {
    navTab: ["接单人", "发单人"],
    currentNavtab: "1",
    normalList: [],
    dingdanList: []
  },
  onLoad: function () {

    var that = this;
    // that.computeScrollViewHeight();
    var comment = that.data.normalList;
    var dingdan = that.data.dingdanList;
    wx.showLoading({
      title: '加载中',
      icon: 'loading',
    });
    wx.request({
      url: app.globalData.url + '/comment/getComments',
     // data:{
       // orderid: 1
      //},
      method: "GET",
      header: {
        'Content-Type': 'application/json',
        'Cookie': wx.getStorageSync('sessionid')
      },
      success(res) {
       
        console.log(res);
  var  results=res.data.results;
        // var comment = res.data.comment.replace(/\'/g, "\"");;

        // comment = JSON.parse(comment);
       
        that.setData({
          normalList: results
        })
        console.log(that.data.normalList);

      },
      complete() {
        wx.hideLoading();
      }
    })
  },



  dingdan: function () {
    wx.navigateTo({
      url: './dingdan/dingdan',
    })
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getDetail(e) { //获得某个订单的更多信息，需要登录
    var that = this;
    var normalList = that.data.normalList;
    var index = e.currentTarget.dataset.index;
    var commentInfo = normalList[index];
    var id = commentInfo.id;
    console.log(commentInfo);
    var comment = JSON.stringify(that.data.normalList);
    wx.navigateTo({
      url: './detail/detail?comment=' + comment + '&id=' + id,
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },
})
