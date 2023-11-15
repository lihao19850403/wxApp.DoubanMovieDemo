// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    imgUrls: [
      "../../images/advertisement1.png",
      "../../images/advertisement2.png",
      "../../images/advertisement3.png",
      "../../images/advertisement4.png"
    ],
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log('获取了系统信息：', res);
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      },
    });
    this.loadMovies();
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

  swiperChanged: function(event) {
    var id = event.detail.current;
    this.setData({
      currentTab: id
    });
  },

  loadMovies: function() {
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        var subjects = res.data.subjects;
        var size = subjects.length; // 电影总数量。
        var len = parseInt(size / 3); // 排列电影介绍都行数。
        console.log(len);
        console.log(subjects);
        that.setData({
          movies: subjects,
          winHeight: (len + 1) * 230
        });
      }
    });
  },

  loadDetail: function(event) {
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id=' + id
    });
  }
})