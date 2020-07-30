//my.js
var StudentId = './mySetting/mySetting.js'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 查看是否授权

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  onPullDownRefresh() {
  
  },
  bindGetUserInfo: function (e) {
  
  },
  bindClear: function (e) {
    var that = this;
 wx.request({
   url: 'https://milestin.xyz:83/auth/logout',
   success: function () {
     wx.switchTab({
       url: '/pages/shouye/shouye',
     })
     wx.showModal({
         title: '提示',
         content: '退出账号成功',
     })
   }  
 })
  },
})
