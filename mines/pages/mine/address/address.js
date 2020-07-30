var app = getApp()
Page({
  data: {
    index1: 0,
    Ocampus: ['江安', '望江', '华西'],
  name:"",
  phone:"",
  detail:"",
  },
  bindViewTapindex: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onPullDownRefresh() {
    wx.setNavigationBarTitle({
      title: '我的地址'
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    setTimeout(function () {
      wx.stopPullDownRefresh(); //停止加载
      wx.hideNavigationBarLoading(); //隐藏加载icon
    }, 2000)
  },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
  },

  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  onLoad: function () {
    var that=this;
    that.loadAddress();
  }, 

  loadAddress:function(){
    var that = this;
    wx.request({
      url: app.globalData.url + '/account/getAddress',
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Cookie': wx.getStorageSync('sessionid')
      },
      success(res) {
        var info= res.data.replace(/\'/g, "\"");
        info=JSON.parse(info);
        let phone =info.phone;
        let address =info.receiveAddress;
        let name = info.name;
        that.setData({
         name: name,
         phone:phone,
         detail:address
        })
      }
    })
  },
  formSubmit: function (e) {
    console.log(e);
    let header = app.globalData.header;
    header['Cookie'] = wx.getStorageSync("sessionid");
    let data = {
     name: e.detail.value.name,
      phone: e.detail.value.phone,
      receive_pos: e.detail.value.receive_pos
    };
    console.log(data);

    wx.request({
      url: app.globalData.url + '/account/myAddress',
      data: data,
      method: 'POST',
      header: header,
      success: function (res) {
        if (res.statusCode == 200) {
          wx.showToast({
            title: "保存成功",
            icon: 'success',
            duration: 1000,
            mask: true,
          });
          setTimeout(function () {
            wx.navigateBack({

            })
          }, 1000);


        }
        else {
          wx.showToast({
            title: res.data.msg,
            icon: 'loading',
            duration: 1000,
          })
        }
      }
    })

  },


})