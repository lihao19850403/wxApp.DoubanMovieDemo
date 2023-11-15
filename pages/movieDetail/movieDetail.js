// pages/movieDetail/movieDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    movie: {},
    directors: [],
    casts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + options.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b',
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        console.log(res);
        var movie = res.data;
        that.setData({
          movie: movie,
          directors: movie.directors,
          casts: movie.casts
        });
        wx.setNavigationBarTitle({
          title: movie.title
        });
      }
    });
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      },
    });
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  switchNav: function(event) {
    var id = event.currentTarget.id;
    this.setData({
      currentTab: id
    });
  },

  swiperChanged: function (event) {
    var id = event.detail.current;
    this.setData({
      currentTab: id
    });
  }
})