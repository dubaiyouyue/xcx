//index.js
Page({
  data: {
    url: "",
    title: "正在加载...",
    imgcss:'',
    modalHidden: true,
    srcsc:'收藏',
    srcsimg:'/screenshots/user_star.png?1',
    wd:'全部',
    wdsrc:'/screenshots/clear_all.png?1',
    wdm:'1',
    pid:'',
    sssjjjjsrc:'',
    sssjjjj:'',
    kkgg:'0',
    sscc:'0',
    wdkkgg:'0',
    bzkhkcss:'1',
    ssccccsokkkk:'0'

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
                sssjjjj:that.data.sssjjjj,
                wdfirst:options.wdfirst
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

        if(!that.data.wdm){
          that.setData({
            bzkhkshang:that.data.pid,
            srcshang:that.data.src,
            textsrcshang:that.data.textsrc
          })
        }



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
                
                  that.setData({
                    bzkhkcss:that.data.wdm
                  })
                
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
      title:'图片已被删除！',
      src:'/screenshots/timg.jpg',
      textsrc:'/screenshots/timg.jpg'
    })
    return false;

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
  //不再看
  bzkhk:function(){

      wx.showToast({
          title: '正在获取...',
          mask:"true",
          icon:"loading",
          duration: 180000
      })

    /*this.setData({
      title:'正在加载...'
    })*/
    var that = this;
    var newbzkhkshang=that.data.pid;
    var newsrcshang=that.data.src;
    var newtextsrcshang=that.data.textsrc;
    


    if(!that.data.bzkhkcss){
      that.setData({
        pid:that.data.bzkhkshang,
        src:that.data.srcshang,
        textsrc:that.data.textsrcshang,
        bzkhkshang:newbzkhkshang,
        srcshang:newsrcshang,
        textsrcshang:newtextsrcshang
      })


        /*var Cts = that.data.scpid;
        var ctsssok=0;
        if(Cts.indexOf('-'+that.data.pid) >= 0 ) { 
            ctsssok=1;
        } 
    var sfzsccccn=(that.data.scpid).indexOf(that.data.pid);*/

        /*var myscpid=(that.data.scpid).split("#");
        if (!Array.indexOf) {  
            Array.prototype.indexOf = function (obj) {  
                for (var i = 0; i < this.length; i++) {  
                    if (this[i] == obj) {  
                        return i;  
                    }  
                }  
                return -1;  
            }  
        }  
        var indexscc = myscpid.indexOf(that.data.pid);//为index赋值为0 */

     wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
                    url: 'https://blog.iswtf.com/xcxrequestkg.php',
                      data: {
                        code: res.code,
                        wdid:that.data.pid
                      },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
                //console.log(123)
                //that.setData(res.data)
                /*that.setData({
                  ssccccsokkkk:res.data.ssccccsokkkk
                })*/
                        if(res.data.ssccccsokkkk){
                            that.setData({
                              srcsc:'取消收藏',
                              srcsimg:'/screenshots/star_989.png?1'
                            })
                        }else{
                            that.setData({
                              srcsc:'收藏',
                              srcsimg:'/screenshots/user_star.png?1'
                            })
                        }
                      wx.hideLoading()
              }
            })
          }
        }})


    


      console.log(that.data);
    }
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
              image:"/screenshots/fail.png?1",
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
                          image:"/screenshots/Success.png?1",
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
                    image:"/screenshots/fail.png?1",
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
                                    image:"/screenshots/fail.png?1",
                                    duration: 3000
                                  })
                              return false;
                          }
                                  wx.showToast({
                                    title: '取消成功',
                                    mask:"true",
                                    image:"/screenshots/Success.png?1",
                                    duration: 2000
                                  })

                                    that.setData({
                                      srcsc:'收藏',
                                      srcsimg:'/screenshots/user_star.png?1',
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
                              image:"/screenshots/fail.png?1",
                              duration: 3000
                            })
                            return false;
                        }
                        wx.showToast({
                          title: '收藏成功',
                          mask:"true",
                          image:"/screenshots/Success.png?1",
                          duration: 2000
                        })
                                  /*if((that.data.scpid).length > 0) var asc = that.data.scpid;//[];// 创建数组
                                  else var asc=[];
                                  //asc[0]=0;
                                  asc.push(that.data.pid);
                                  //asc.push(that.data.bzkhkshang);
                                  //asc =asc.join("-");*/
                                  /*var nnewwsscc=that.data.scpid;
                                  if(nnewwsscc) nnewwsscc=nnewwsscc+that.data.pid+'#';
                                  else nnewwsscc='#'+that.data.pid+'#';
                                    ,
                                    scpid:nnewwsscc
                                  
                                  */
                          that.setData({
                            srcsc:'取消收藏',
                            srcsimg:'/screenshots/star_989.png?2',
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


        if(!this.data.sscc && !this.data.wdm){
            wx.showToast({
              title: '没有收藏图片',
              image: '/screenshots/fail.png?1',
              duration: 2000
            })
            return false;
        }

        var wdold=this.data.wd;
        var wdoldt=this.data.wdsrc;
        var wdoldm=this.data.wdm;
          var wd='全部';
          var wdsrc='/screenshots/clear_all.png?1';
          var wdm='1';
              wx.redirectTo({
                url: '/pages/index/index'
              })
              return false;
        if(wdoldm){
          wd='我的';
          wdsrc='/screenshots/user_collection.png?1';
          wdm='';
        }
          this.setData({
            wd:wd,
            wdsrc:wdsrc,
            wdm:wdm,
            bzkhkcss:wdm
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
                                      image:"/screenshots/Success.png?1",
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

        if(!this.data.wdkkgg){
            wx.showToast({
              title: '暂无上传照片',
              image: '/screenshots/fail.png?3',
              duration: 2000
            })
            return false;
        }

        wx.redirectTo({
          url: '/wd/wd/wd?wdid=1'
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
                            var newwdkkgg=that.data.wdkkgg+1;
                            that.setData({
                              src:res.data.src,
                              textsrc:res.data.textsrc,
                             wdkkgg:newwdkkgg
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