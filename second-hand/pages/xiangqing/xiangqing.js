var util = require('../../../utils/util.js');
const app = getApp();
Page({
  data: {
    order: []
  },
  ownerdetai: function (options) {
    var that = this;
    var order = that.data.order;
    wx.navigateTo({
      url: '/pages/paotui/xiangqing/ownerdetai/ownerdetai?head=' + order.order_owner.head_img + '&name=' + order.order_owner.wx_name
    })
  },
  onLoad: function (options) {
    var that = this;
    //console.log(options);
    var order = JSON.parse(options.order);
    order.received_pos = options.received_pos;
    that.handleOrder(order);
   // console.log(order);
  },
  report: function () {
    wx.navigateTo({
      url: '/pages/paotui/xiangqing/orderreport/orderreport',
    })
  },
  handleOrder(e) {
    var that = this;
    var order = e;
    order.createTime = util.formatTime(new Date(order.createTime));
    order.expireDateTime = util.formatTime(new Date(order.expireDateTime));
    //order.Ocampus = order.Ocampus;
    order.weight = (parseFloat(order.goods_weight)).toFixed(2);
    order.money = (parseFloat(order.money)).toFixed(2);
    //var orderOwnerTmp = order.order_owner;
    order.order_owner = order.order_owner.replace(/\'/g, "\"");
    order.order_owner = JSON.parse(order.order_owner);
    order.order_owner.head_img = app.globalData.imgUrl + order.order_owner.head_img;

    console.log(order);
    //var orderOwner = 'order.order_owner';
    that.setData({
      order: order
    })
  },
  getOrderInfo(e) { //获得某个订单的更多信息，需要登录
    var that = this;
    //console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var orderList = that.getOrderList(that.data.navbarActiveIndex);
    var orderInfo = orderList[index];
    var received_pos = orderInfo.received_pos;
    wx.request({
      url: app.globalData.url + '/order3/getOrder',
      data: {
        sessionid: wx.getStorageSync('sessionid'),
        orderid: orderList[index].orderid
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        console.log(res);
        var order = JSON.stringify(res.data.order3);
        wx.navigateTo({
          url: '../../xiangqing/ownerdetai/ownerdetai?order=' + order + '&received_pos=' + received_pos,
        })
      }
    })
  },
  receiveOrder() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否确认接单',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: app.globalData.url + '/order3/receiveOrder',
            data: {
              //sessionid: wx.getStorageSync('sessionid'),
              orderid: that.data.order.orderid
            },
            method: 'GET',
            header: {
              'Content-Type': 'application/json',
              'Cookie': wx.getStorageSync('sessionid')
            },
            success(res) {
              //下单成功
              console.log(res);
              if (res.statusCode == 200) {
                wx.showToast({
                  title: '接单成功',
                  icon: 'success',
                  duration: 1500,
                  mask: true
                })
                setTimeout(function () {
                  wx.switchTab({
                    url: '/pages/shouye/shouye',
                  })
                }, 1000);
               // setTimeout(function () {
                //  wx.switchTab({
                 //   url: '/pages/dingdan/dingdan',
                 // })
               // }, 1500)
              } else {
                wx.showToast({
                  title: '接单失败',
                  icon: 'none',
                  duration: 1500,
                  mask: true
                })
                setTimeout(function () {
                  wx.switchTab({
                    url: '/pages/news/news',
                  })
                }, 1500)
              }
            }
          })
        } else if (res.cancel) {
          //do nothing
        }
      }
    })
  }
})