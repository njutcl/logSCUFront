// pages/shouye/shouye.js
// 首页的轮播图
Page({
  daiqukuaidi: function () {
    wx.navigateTo({
      url: '/pages/daiqukuaidi/daiqukuaidi',
    })
  },
  topaotui: function () {
    wx.navigateTo({
      url: '/pages/paotui/paotui',
    })
  },
  toershoujiaoyi: function () {
    wx.navigateTo({
      url: '/second-hand/pages/ershoujiaoyi',
    })
  },
  // zhongcao: function () {
  //   wx.navigateTo({
  //   url: '/zhongcao/pages/zhongcao',
  //   })
  // },
  toquestion: function () {
    wx.navigateTo({
      url: '/pages/question/question',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 首页的轮播图
    imgUrls: [
      "/image/shouye/express.png",
      "/image/shouye/milk.png",
      "/image/shouye/lipstick.png",
      "/image/shouye/clothes.png",
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
 
    //背景颜色
    pageBackgroundColor: 'transparent',
    /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {

      // canvas
      const ctx = wx.createCanvasContext('myCanvas')
      ctx.scale(0.7, 0.7)
      ctx.setLineWidth(2)
      ctx.moveTo(10, 10)
      ctx.lineTo(20, 20)
      ctx.lineTo(30, 10)
      ctx.setStrokeStyle('#3E97CC')
      ctx.stroke()
      ctx.draw()
    },
  }
})