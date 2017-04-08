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
    sssjjjj:'',
    kkgg:'0',
    sscc:'0'

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
      path: '/pages/index/index'
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
       if(this.data.srcsc=='已收藏' || this.data.srcsc=='暂无收藏') return false;
      if(this.data.srcsc=='取消收藏') {
          //return false;
            wx.showToast({
              title: '正在取消...',
              mask:"true",
              icon:"loading",
              duration: 120000
            })

                wx.login({
                  success: function(res) {
                    if (res.code) {
                      var newsscc=that.data.sscc-1;
                      //发起网络请求
                      wx.request({
                        url: 'https://blog.iswtf.com/xcxrequestinfoqx.php',
                        data: {
                          code: res.code,
                          pid:that.data.pid,
                          sssjjjjsrc:that.data.src,
                          sssjjjj:that.data.sssjjjj
                        },
                        header: {
                            'content-type': 'application/json'
                        },
                        success: function(resddd) {
                          //console.log(resddd.data)
                          if(resddd.data.actionsatus!='ok'){
                                  wx.showToast({
                                    title: '取消失败',
                                    mask:"true",
                                    image:"/screenshots/fail.png",
                                    duration: 3000
                                  })
                              return false;
                          }
                                  wx.showToast({
                                    title: '取消成功',
                                    mask:"true",
                                    image:"/screenshots/Success.png",
                                    duration: 2000
                                  })

                                    that.setData({
                                      srcsc:'收藏',
                                      srcsimg:'/screenshots/user_star.png',
                                      sscc:newsscc
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
              duration: 120000
            })

      wx.login({
        success: function(res) {
          if (res.code) {
            var newsscc=that.data.sscc+1;
            //发起网络请求
            wx.request({
              url: 'https://blog.iswtf.com/xcxrequestinfo.php',
              data: {
                code: res.code,
                pid:that.data.pid,
                sssjjjjsrc:that.data.src,
                sssjjjj:that.data.sssjjjj
              },
                header: {
                    'content-type': 'application/json'
                },
              success: function(resddd) {
                //console.log(resddd.data.actionsatus)
                        if(resddd.data.actionsatus!='ok'){
                            wx.showToast({
                              title: '收藏失败',
                              mask:"true",
                              image:"/screenshots/fail.png",
                              duration: 3000
                            })
                            return false;
                        }
                        wx.showToast({
                          title: '收藏成功',
                          mask:"true",
                          image:"/screenshots/Success.png",
                          duration: 2000
                        })

                          that.setData({
                            srcsc:'取消收藏',
                            srcsimg:'/screenshots/star_989.png',
                            sscc:newsscc
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
          var wd='全部';
          var wdsrc='/screenshots/clear_all.png';
          var wdm='1';

        if(wdoldm){
          wd='我的';
          wdsrc='/screenshots/user_collection.png';
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


    },
    //上传
    upimg:function(){



      var that=this;


      wx.chooseImage({
        success: function(res) {
          var tempFilePaths = res.tempFilePaths;

            wx.showToast({
              title: '正在上传...',
              mask:"true",
              icon:"loading",
              duration: 3600000
            })
           
var kkknew=-1;
var sssccggg=0;
var sssccgggsb=0;
var actionsatusid=0;
for (var k = 0, length = tempFilePaths.length; k < length; k++) {




            var newimgpuup=wx.login({
                success: function(res) {
                  //console.log(tempFilePaths.length);
                  //return false;
                  if (res.code) {
                    //console.log('fdasfdas111111')
                    var codeuup=res.code;
                    kkknew++;
                    wx.uploadFile({
                      url: 'https://blog.iswtf.com/xcxrequestup.php?code='+codeuup, //仅为示例，非真实的接口地址
                      filePath: tempFilePaths[kkknew],
                      name: 'file',
                      header: {
                          'content-type': 'application/json'
                      },
                      success: function(resuup){
                        resuup.data=JSON.parse(resuup.data); 
                        var actionsatus = resuup.data.actionsatus;
                        actionsatusid=resuup.data.actionsatusid;
                        //console.log(resuup.data.actionsatusid);
                        if(actionsatus=='ok' && actionsatusid){
                          sssccggg++;
                              if(k==length && k){
                                  wx.showToast({
                                      title: '上传 '+sssccggg+'张',//失败'+(length-sssccggg)+'张',
                                      mask:"true",
                                      image:"/screenshots/Success.png",
                                      duration: 2500
                                    })
                                that.wdsupimg(actionsatusid);
                              }
                              else newimgpuup;
                        }
                          //sssccggg++;
                          //console.log(resuup.data.actionsatusid);
                        //do something
                          //that.wdsupimg(codeuup);
                      },fail: () => {
                        sssccgggsb++;
                        //console.log(tempFilePaths[kkknew]);
                    },
                    complete:()=>{
                          
                              //console.log(tempFilePaths[k]);

                    }
                    })
                  }
                }})
                

}

        }
      })
    },
    //我的上传

    wdssswd:function(){
        wx.redirectTo({
          url: '/wd/wd/wd'
        })
        return false;
    },
    
    wdsupimg:function(wdid){




           var that=this;
            wx.login({
                success: function(res) {
                  //console.log('fdasfdas222222')
                  if (res.code) {


     
                        wx.request({
                          url: 'https://blog.iswtf.com/xcxrequestwd.php',
                            data: {
                              code: res.code,
                              wdid:wdid
                              /*wdm:that.data.wdm,
                              pid:that.data.pid,
                              sssjjjjsrc:that.data.src,
                              sssjjjj:that.data.sssjjjj*/
                            },
                          header: {
                              'content-type': 'application/json'
                          },
                          success: function(res) {
                            //res.data=JSON.parse(res.data);
                            //console.log(res.data)
                            that.setData({
                              src:res.data.src,
                              textsrc:res.data.textsrc
                             
                            })

 /*titlehh:'我的上传/',
                              wd:'全部',
                              wdsrc:'/screenshots/clear_all.png'*/

                        /*this.setData({
                          title:'正在加载...'
                        })*/
                          }
                        })
                  }
                }})


    }

                  
         




})