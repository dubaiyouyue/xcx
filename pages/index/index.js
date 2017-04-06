//index.js
Page({
  data: {
    url: "",
    title: "正在加载...",
    imgcss:'',
    modalHidden: true,
    srcsc:'收藏',
    srcsimg:'/screenshots/user_star.png',
    wd:'我的',
    wdsrc:'/screenshots/user_collection.png',
    wdm:'',
    pid:'',
    sssjjjjsrc:'',
    sssjjjj:''

  },
  onLoad: function(options) {
    // Do some initialize when page load.
    this.setData({
      title:'正在加载...'
    })
    var that = this;

 
            
     wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
            url: 'https://blog.iswtf.com/xcxrequest.php',
              data: {
                code: res.code,
                wdm:that.data.wdm,
                pid:that.data.pid,
                sssjjjjsrc:that.data.src,
                sssjjjj:that.data.sssjjjj
              },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
                //console.log(123)
                that.setData(res.data)
            /*this.setData({
              title:'正在加载...'
            })*/
              }
            })
          }
        }})






  },
  onReady: function() {
    // Do something when page ready.
    //getApp().getUserInfo
    //console.log(getApp().globalData)
    //this.setData(getApp().globalData)
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
    this.setData({
      title:'正在加载...'
    })
    var that = this;


     wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
            url: 'https://blog.iswtf.com/xcxrequest.php',
              data: {
                code: res.code,
                wdm:that.data.wdm,
                pid:that.data.pid,
                sssjjjjsrc:that.data.src,
                sssjjjj:that.data.sssjjjj
              },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
                //console.log(123)
                that.setData(res.data)
            /*this.setData({
              title:'正在加载...'
            })*/
              }
            })
          }
        }})



   /* wx.request({
      url: 'https://blog.iswtf.com/xcxrequest.php?wdm='+that.data.wdm, //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        //console.log(123)
        that.setData(res.data)*/
        /*that.setData({
          title:'正在加载...'
        })*/
     /* }
    })*/
    wx.stopPullDownRefresh()
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
        /*this.setData({
          src:'https://blog.iswtf.com/xcxrequest.php?dimg='+this.data.src
        })*/
    return {
      title: 'iswtf.com',
      path: '/pages'
    }
},
  // Event handler.
  /*viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }*/
  imgload:function(){
    this.setData({
      title:'下拉刷新',
      imgcss:'1'
    })
  },
  imgerror:function(){
    this.setData({
      title:'加载失败！'
    })
    /*this.setData({
      title:'正在加载...'
    })*/
    var that = this;





     wx.login({
        success: function(res) {
          if (res.code) {
    wx.request({
            url: 'https://blog.iswtf.com/xcxrequest.php',
              data: {
                code: res.code,
                wdm:that.data.wdm,
                pid:that.data.pid,
                sssjjjjsrc:that.data.src,
                sssjjjj:that.data.sssjjjj
              },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        //console.log(123)
        that.setData(res.data)
        that.setData({
          title:'正在加载...'
        })
      }
    })
          }
        }})











  },
    // 长按
    onlongclick: function() {
        //this.setData( { modalHidden: false });
          wx.previewImage({
            current: this.data.src, // 当前显示图片的http链接
            urls: [this.data.src] // 需要预览的图片http链接列表
          })
    },
    // 保存
    onSaveClick: function( event ) {
        var mUrl = "";
        var that=this;
        if( event.currentTarget.dataset.url != null )
            mUrl = event.currentTarget.dataset.url;
        //console.log( "download：" + mUrl );
        //saveImage( mUrl );

          that.setData( {
              modalHidden: true
          });

          if(!mUrl){
            wx.showToast({
              title: '保存失败！',
              mask:"true",
              image:"/screenshots/fail.png",
              duration: 2000
            })
            return false;
          }
            wx.showToast({
              title: '正在保存...',
              mask:"true",
              icon:"loading",
              duration: 200000
            })
          wx.downloadFile( {
              url: mUrl,
              type: 'image',
              success: function( res ) {
                  /*console.log( "download success" );
                  that.setData( {
                      hidden: true,
                      toastHidden: false,
                      toastText: "恭喜你，图片保存成功"
                  });*/
                  var tempFilePaths = res.tempFilePath
                  //console.log( res );
                  wx.saveFile({
                    tempFilePath: tempFilePaths,
                    success: function(resss) {
                      //var savedFilePath = resss.savedFilePath
                      //console.log( savedFilePath )
                        wx.showToast({
                          title: '保存成功',
                          mask:"true",
                          image:"/screenshots/Success.png",
                          duration: 2000
                        })

                    }
                  })


              },
              fail: function( res ) {
                  /*console.log( "download fail" );
                  that.setData( {
                      hidden: true,
                      toastHidden: false,
                      toastText: "保存失败，请稍后再试"
                  });*/
                  wx.showToast({
                    title: '保存失败！',
                    mask:"true",
                    image:"/screenshots/fail.png",
                    duration: 2000
                  })
              },
              complete:function(res){
                  //console.log( "download complete" );
              }
          })

    },
    // 取消
    onCancelClick: function( event ) {
        this.setData( { modalHidden: true });
    },


    //收藏
    onShouc:function(){
       var that=this;
       if(this.data.srcsc=='已收藏') return false;
      if(this.data.srcsc=='取消收藏') {
          //return false;
            wx.showToast({
              title: '正在取消...',
              mask:"true",
              icon:"loading",
              duration: 200000
            })

                wx.login({
                  success: function(res) {
                    if (res.code) {
                      //发起网络请求
                      wx.request({
                        url: 'https://blog.iswtf.com/xcxrequestinfoqx.php',
                        data: {
                          code: res.code,
                          pid:that.data.pid,
                          sssjjjjsrc:that.data.src,
                          sssjjjj:that.data.sssjjjj
                        },
                        success: function(resddd) {
                          //console.log(resddd.data)
                                  wx.showToast({
                                    title: '取消成功',
                                    mask:"true",
                                    image:"/screenshots/Success.png",
                                    duration: 2000
                                  })

                                    that.setData({
                                      srcsc:'收藏',
                                      srcsimg:'/screenshots/user_star.png'
                                    })
                        }
                      })
                    } else {
                      //console.log('获取用户登录态失败！' + res.errMsg)
                    }
                    
                  }
                });

            return false;
      }
       
            wx.showToast({
              title: '正在收藏...',
              mask:"true",
              icon:"loading",
              duration: 200000
            })

      wx.login({
        success: function(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://blog.iswtf.com/xcxrequestinfo.php',
              data: {
                code: res.code,
                pid:that.data.pid,
                sssjjjjsrc:that.data.src,
                sssjjjj:that.data.sssjjjj
              },
              success: function(resddd) {
                //console.log(resddd.data)
                        wx.showToast({
                          title: '收藏成功',
                          mask:"true",
                          image:"/screenshots/Success.png",
                          duration: 2000
                        })

                          that.setData({
                            srcsc:'已收藏',
                            srcsimg:'/screenshots/star_989.png'
                          })
              }
            })
          } else {
            //console.log('获取用户登录态失败！' + res.errMsg)
          }
           
        }
      });
    },
    //我的
    wdall:function(){
        var wdold=this.data.wd;
        var wdoldt=this.data.wdsrc;
        var wdoldm=this.data.wdm;
          var wd='我的';
          var wdsrc='/screenshots/user_collection.png';
          var wdm='1';

        if(wdoldm){
          wd='全部';
          wdsrc='/screenshots/clear_all.png';
          wdm='';
        }
          this.setData({
            wd:wd,
            wdsrc:wdsrc,
            wdm:wdm
          })


          this.setData({
            title:'正在加载...'
          })
          var that = this;




     wx.login({
        success: function(res) {
          if (res.code) {
          wx.request({
            url: 'https://blog.iswtf.com/xcxrequest.php',
              data: {
                code: res.code,
                wdm:that.data.wdm,
                pid:that.data.pid,
                sssjjjjsrc:that.data.src,
                sssjjjj:that.data.sssjjjj
              },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
              //console.log(123)
              that.setData(res.data)
          /*this.setData({
            title:'正在加载...'
          })*/
            }
          })
          }
        }})


    }






})