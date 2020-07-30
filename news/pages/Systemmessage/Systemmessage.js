//logs.js
var util = require('../../../utils/util.js')
const app = getApp()
Page({
  data: {
    navTab: ["系统消息"],
    currentNavtab: "1",
    normalList: [],
    dingdanList:[]
  },  
  onLoad: function () {
   
    var that = this;
    // that.computeScrollViewHeight();
    var announcement= that.data.normalList;
    var dingdan = that.data.dingdanList;
    wx.showLoading({
      title: '加载中',
      icon: 'loading',
    });
    wx.request({
      url: app.globalData.url + '/announce/getAnnounce',
      method: "GET",
      header: {
        'content-type': 'application/json', // 默认值
      },
      success(res) {
        // console.log("174");
        console.log(res);
        /*if (res.data.results.length>0){
          that.setData({
            have_order: true
          })
        }*/
        var results = res.data.results;
        for (var i = 0; i < res.data.results.length; i++) {

          //字符串格式处理
          results[i].createdTime = util.formatTime(new Date(results[i].createdTime));
        
        }
        announcement = results;
        that.setData({
          normalList: announcement
        })
      
        },
        complete() {
          wx.hideLoading();
        }
      })
      },

      
  
  dingdan:function(){
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
     var that=this;
     var normalList=that.data.normalList;
     var index = e.currentTarget.dataset.index;
      var announceInfo = normalList[index];
      var id = announceInfo.id;
      var announce = JSON.stringify(that.data.normalList);
      wx.navigateTo({
        url: './system/system?announce=' + announce+ '&id=' +id,
      })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // loadMoreOrder() {
    //   var that = this;
    //   var index = that.data.navbarActiveIndex;
    //   var search = wx.getStorageSync("search");
    //   if (!search) {
    //     search = "";
    //   }
    //   if (index == 0) {
    //     var flag = normalFlag;
    //     var length = normalLength;
    //   } else if (index == 1) {
    //     var flag = timeFlag;
    //     var length = timeLength;
    //   } else if (index == 2) {
    //     var flag = priceFlag;
    //     var length = priceLength;
    //   }
    //   if (flag == 1) {
    //     //do nothing,即表明数据已经加载完全，并且showToast已经触发
    //   } else if (flag == 0) {
    //     if (length < LENGTH) { //数据加载完全，但showToast未触发
    //       wx.showToast({
    //         title: '无更多数据',
    //         duration: 1000
    //       });
    //       that.setFlag(index);
    //     } else { //仍有数据加载（也可能是数据项数刚好为10的整数倍）
    //       var orderList = that.getOrderList(index);
    //       //var page=that.setPage(index);
    //       if (index == 1) {
    //         that.loadOrder(orderList, 1, search, timePage, 1, '');
    //       } else if (index == 2) {
    //         that.loadOrder(orderList, 2, search, pricePage, '', 1);
    //       } else if (index == 0) {
    //         that.loadOrder(orderList, 0, search, normalPage, '', '');
    //       }
    //     }
    //   }
    // }
  },

  // computeScrollViewHeight() {
  //   var that = this;
  //   var query = wx.createSelectorQuery().in(this)
  //   query.select('.news-search').boundingClientRect()
  //   query.select('.navbar').boundingClientRect()
  //   query.exec(res => {
  //     //得到标题的高度
  //     var searchHeight = res[0].height;
  //     var navHeight = res[1].height;
  //     //scroll-view的高度 = 屏幕高度- navHeight
  //     //获取屏幕可用高度
  //     var screenHeight = wx.getSystemInfoSync().windowHeight
  //     //计算 scroll-view 的高度
  //     var scrollHeight = screenHeight - navHeight - searchHeight;
  //     that.setData({
  //       scrollHeight: scrollHeight
  //     })
  //     // console.log(scrollHeight);
  //   })
  // }


})
 