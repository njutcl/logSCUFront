
// pages/more/feedback.js

Page({



  /**

   * 页面的初始数据

   */

  data: {

    // 评价图片

    evaluationImgUrl: "https://s1.ax1x.com/2018/08/05/PDM8Bj.png",

    starCheckedImgUrl: "https://s1.ax1x.com/2018/08/05/PDQ0it.png",

    starUnCheckedImgUrl: "https://s1.ax1x.com/2018/08/05/PDQ0it.png",



    // 建议内容

    opinion: "",



    starMap: [

      '非常好',

      '非常好',

      '非常好',

      '非常好',

      '非常好',

    ],



    evaluations: [

      {

        id: 0,

        name: "自我评价",

        image: "https://s1.ax1x.com/2018/08/05/PDMaCV.png",

        star: 0,

        note: ""

      },

      {

        id: 1,

        name: "平台评价",

        image: "https://s1.ax1x.com/2018/08/05/PDMd3T.png",

        star: 0,

        note: ""

      },

      {

        id: 2,

        name: "综合信誉积分",

        image: "https://s1.ax1x.com/2018/08/05/PDMN40.png",

        star: 0,

        note: ""

      }

    ]

  },



  /**

   * 评分

   */

  chooseStar: function (e) {

    const index = e.currentTarget.dataset.index;

    const star = e.target.dataset.star;

    let evaluations = this.data.evaluations;

    let evaluation = evaluations[index];

    // console.log(evaluation)

    evaluation.star = star;

    evaluation.note = this.data.starMap[star - 1];

    this.setData({

      evaluations: evaluations

    })

  }

})
