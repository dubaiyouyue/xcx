//index.js
Page({
  data: {
        wdkkgg:0,
        imgloadiilok:''

  },
  onLoad: function(options) {
            wx.showToast({
              title: '正在加载...',
              mask:"true",
              icon:"loading",
              duration: 180000
            })
    var that = this;

 
            
     wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
            url: 'https://blog.iswtf.com/xcxrequestwd.php',
              data: {
                code: res.code
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
      //console.log('下拉');
    wx.showToast({
        title: '正在加载...',
        mask:"true",
        icon:"loading",
        duration: 180000
    })
    var that = this;
     wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
            url: 'https://blog.iswtf.com/xcxrequestwd.php',
              data: {
                code: res.code
              },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
             
                that.setData(res.data)
        
              }
            })
          }
        }})


      wx.stopPullDownRefresh()
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    //console.log('上拉');
  },

  imgload:function(){
      
    this.setData({
      imgcss:'1'
    })
    //if(!this.data.imgloadiilok) 
    wx.hideLoading()
  },




  onShareAppMessage: function () {
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

    //返回首页
    shouye:function(){
        wx.redirectTo({
        url: '/pages/index/index'
        })
        return false;
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
              duration: 360000
            })




var kkknew=-1;
var sssccggg=0;
var sssccgggsb=0;
var actionsatusid=0;
for (var k = 0, length = tempFilePaths.length; k < length; k++) {



            var newimgpuup=wx.login({
                success: function(res) {
                  //console.log('fdasfdas222222')
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
                                      image:"/screenshots/Success.png?1",
                                      duration: 2500
                                    })
                                that.wdsupimg(actionsatusid);
                              }
                              else newimgpuup;
                        }

                          //console.log(resuup.data.actionsatusid);
                        //do something
                          //that.wdsupimg(codeuup);
                      }/*,
                      complete:function(resuup){
                        console.log(resuup.data.actionsatusid);
                      }*/
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
                              /*pid:wdid
                              wdm:that.data.wdm,
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
                            var newwdkkgg=that.data.wdkkgg+1;
                            that.setData({
                              src:res.data.src,
                              textsrc:res.data.textsrc,
                              wdkkgg:newwdkkgg,
                              pid:wdid
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


    },
    // 长按
    onlongclick: function() {
        //this.setData( { modalHidden: false });
          wx.previewImage({
            current: this.data.src, // 当前显示图片的http链接
            urls: [this.data.src] // 需要预览的图片http链接列表
          })
    },
    //删除
    deletes:function(){

        var that = this;
        if(!that.data.wdkkgg){
            wx.showToast({
              title: '暂无上传照片',
              image: '/screenshots/fail.png?1',
              duration: 2000
            })
            return false;
        }
        wx.showModal({
            title: '提示',
            content: '确定要删除这张照片吗？',
            success: function(res) {
                if (res.confirm) {
                    //console.log('确定')

                    wx.showToast({
                        title: '正在删除...',
                        mask:"true",
                        icon:"loading",
                        duration: 180000
                    })
                    
                    wx.login({
                        success: function(res) {
                        if (res.code) {
                            wx.request({
                            url: 'https://blog.iswtf.com/xcxrequestwd.php',
                            data: {
                                code: res.code,
                                deletesid:that.data.pid
                            },
                            header: {
                                'content-type': 'application/json'
                            },
                            success: function(res) {
                                that.setData({
                                    imgloadiilok:1
                                })

                                    var ccsssdd='删除失败';
                                    var sssccddimg='/screenshots/fail.png?1';

                                if(that.data.pid>0){
                                      ccsssdd='删除成功';
                                      sssccddimg='/screenshots/Success.png?1';
                                }
                                wx.showToast({
                                    title: ccsssdd,
                                    mask:"true",
                                    image:sssccddimg,
                                    duration: 2000
                                })
                                var t=setTimeout(function(){that.setData(res.data)},1800)
                                
                                that.setData({
                                    imgloadiilok:''
                                })
                            }
                            })
                        }
                        }})


                } else if (res.cancel) {
                    //console.log('取消')
                    return false;
                }
            }
        })


    },
    imgerror:function(){

    var that = this;





     wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
            url: 'https://blog.iswtf.com/xcxrequestwd.php',
              data: {
                code: res.code
              },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
             
                that.setData(res.data)
        
              }
            })
          }
        }})











  },
  //我的最新
  wdoo:function(){
        if(!this.data.wdkkgg){
            wx.showToast({
              title: '暂无上传照片',
              image: '/screenshots/fail.png?1',
              duration: 2000
            })
            return false;
        }

    wx.showToast({
        title: '正在加载...',
        mask:"true",
        icon:"loading",
        duration: 180000
    })
    var that = this;
     wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
            url: 'https://blog.iswtf.com/xcxrequestwd.php',
              data: {
                code: res.code,
                wdid:1
              },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
             
                that.setData(res.data)
        
              }
            })
          }
        }})
  }

})