/**

 @Name：gui.slide 创UI示例
 @Author：Lily
    
 */

layui.define(['jquery'],function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
    var v = '1.0.0'; //版本号
    var obj = {
    slide: function(){
       var $ = layui.$;

        sanMenu();
        navMult();
        fullNav();
        user();
        sch();       
        schFlex();
        schSel();
        fliter();
        alertC();
        backTop();
        fixedBar();
        tableExp();
        lytDraw();
        langChg();

        function sanMenu(){
            // 左侧垂直导航
            var menuObj = $('.gui-menu');
            var menuItem = $('.gui-menu-item');
            //var iframeObj = $("#if-main");
            var expandObj = $('.gui-menu li a');
            var sanMenu = $('.gui-menu .gui-sub-submenu a');

            menuItem.on('click',function(){
                $(this).parents('.gui-menu').find('.gui-menu-item').removeClass('on');
                $(this).addClass('on');
                // iframeObj.contents().find("body").remove();
                // iframeObj.attr("src","");
                // iframeObj.attr("src",$(this).find("a").attr("post"));
                // iframeObj.load(function(){
                //     changeHeight();
                // });
            });

            expandObj.on('click',function(){
                var ddlength = $(this).parent().find('.gui-sub-menu').length;
                if( ddlength == 0 ){
                    $(this).addClass('on');
                }else{
                    if($(this).next('.gui-sub-menu').is(':hidden')){
                        $(this).next('.gui-sub-menu').slideDown();
                        $(this).find('.gui-nav-tool').removeClass('gui-lefttool-on');
                    }
                    else {
                        $(this).next('.gui-sub-menu').slideUp();
                        $(this).find('.gui-nav-tool').addClass('gui-lefttool-on');
                    }
                }
            });
            //三级
            sanMenu.on('click',function(){
                var ddlength = $(this).parent().find('ul').length;
                if( ddlength == 0 ){
                    $(this).addClass('on');
                }else{
                    if($(this).next('ul').is(':hidden')){
                        $(this).next('ul').slideDown();
                        $(this).find('.gui-nav-tool').removeClass('gui-lefttool-on');
                    }
                    else {
                        $(this).next('ul').slideUp();
                        $(this).find('.gui-nav-tool').addClass('gui-lefttool-on');
                    }
                }
            });

            //对比得到最大高度并赋给各包块
            // function changeHeight(){
            //     var r_h = iframeObj.contents().find("body").height();
            //     $(".right-main").height(r_h);
            // };

            menuObj.each(function(){
                $('.gui-menu .gui-menu-item:first').click();
            });

            

        }

        function navMult(){
            // nav-mult
            //一级导航-二级内容
            $('.gui-lvl-item').hover(function(){
                var $this = $(this);
                var $link = $this.children('a');
                var $curSub = $this.find('.gui-level2-menu');

                $link.addClass('hov');
                $curSub.addClass('active');

            }, function(){
                var $this = $(this);
                var $link = $this.children('a');
                var $curSub = $this.find('.gui-level2-menu');

                $link.removeClass('hov');
                $curSub.removeClass('active');
            });

            //二级导航-三级内容
            $('.gui-level2-item').hover(function(){
                var $this = $(this);
                var $link = $this.children('a');
                var $curSub = $this.find('.gui-level3-menu');

                $link.addClass('hov');
                $curSub.addClass('active');

            }, function(){
                var $this = $(this);
                var $link = $this.children('a');
                var $curSub = $this.find('.gui-level3-menu');

                $curSub.removeClass('active');
                $link.removeClass('hov');
            })

            //三级菜单链接按钮hover
            $('.link-list a').hover(function(){
                var $this = $(this);
                $this.addClass('hov');

            }, function(){
                var $this = $(this);
                $this.removeClass('hov');
            });

            // function scrollHeight() {
            //     $widH = $(window).height();
            //     $('.gui-lvl-inner').height($widH - 84);
            // }
            // scrollHeight();
            // $(window).resize(function(){
            //     scrollHeight();
            // });

            // nicescroll
            // function showScroll() {
            //     // 判断niceScroll插件是否存在
            //     if(!$('.gui-level3-menu').niceScroll) return;
            //     $('.gui-level3-menu').niceScroll({
            //         cursorcolor:'#222',
            //         cursorwidth: '6',
            //         cursorborderradius: '8',
            //         cursoropacitymin: '0',
            //         cursorborder: '0',
            //         hidecursordelay: 800,
            //         horizrailenabled:true,
            //         background: '',
            //         cursorfixedheight:'80'
            //     });
            // }
            // showScroll();
        }

        function fullNav(){
            var $navItem = $('.gui-nav-full .gui-nav-item');

            $navItem.click(function(){
                $(this).addClass('gui-this');
                $(this).find('.gui-nav-child').slideDown();
                $(this).siblings().removeClass('gui-this');
                $(this).siblings().find('.gui-nav-child').slideUp();

            });

        }


        // 用户
        function user(){
            $('.gui-info').on('click',function(){
                $(this).next('.gui-lst-wrap').slideToggle();
            });

            $(document).mouseup(function(e){
              var _con = $('.gui-user');   // target
              if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                  _con.find('.gui-lst-wrap').slideUp();
              }
            });  
        }

        //搜索
        //gui-sch
        function sch(){
            $(".gui-sch .gui-ipt").focus(function(){
                $(this).parent().find('.gui-drop-show').slideDown();
            });
            $(".gui-sch .gui-lst li").on('click',function(){
                $(this).parents('.gui-drop-show').slideUp();
            });

            $(document).mouseup(function(e){
                var _con = $('.gui-sch');   // target
                if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                    _con.find('.gui-drop-show').slideUp();
                }
            }); 
        }

        //gui-sch-flex
        function schFlex(){
            $('.gui-sch-flex button').on('click',function(){
                $(this).parent().stop(true).animate({width:'400px'},500);
                $(this).addClass('gui-btn');
                $(this).parent().find('.gui-ipt').addClass('gui-bclr-g');
            });
            $('.gui-sch-flex i').on('click',function(){
                $(this).parent().stop(true).animate({width:'400px'},500);
                $(this).parent().find('button').addClass('gui-btn');
                $(this).parent().find('.gui-ipt').addClass('gui-bclr-g');
            });

            $(".gui-sch-flex .gui-ipt").focus(function(){
                $(this).parent().find('.gui-drop-show').slideDown();
                $(this).addClass('gui-bclr-o');
            });
            $('.gui-sch-flex .gui-lst li').on('click',function(){
                $(this).parents('.gui-drop-show').slideUp();
                $(this).parents('.gui-sch-flex').find('.gui-ipt').removeClass('gui-bclr-o');
            });

            $(document).mouseup(function(e){
                var _con = $('.gui-sch-flex');   // target
                if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                    _con.find('.gui-drop-show').slideUp();
                    _con.animate({width:'62px'},500);
                    _con.find('button').removeClass('gui-btn');
                    _con.find('.gui-ipt').removeClass('gui-bclr-g');
                    _con.find('.gui-ipt').removeClass('gui-bclr-o');
                }
            });
        }

        // gui-sch-sel
        function schSel(){
            $('.gui-sch-sel .gui-ipt').focus(function(){
                $(this).parent().find('.gui-drop-show').slideDown();
                $(this).parent().addClass('gui-bclr-o');
            });
            $('.gui-sch-sel .gui-lst li').on('click',function(){
                $(this).parents('.gui-drop-show').slideUp();
                $(this).parents('.gui-sch-sel').removeClass('gui-bclr-o');
            });
            $(document).mouseup(function(e){
                var _con = $('.gui-sch-sel');   // target
                if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                    _con.find('.gui-drop-show').slideUp();
                    _con.removeClass('gui-bclr-o');
                }
            });  
        }
        
        function fliter(){
           // 表单条件筛选
            var $sItem = $('.sg-item').find('.item');
            var $mItem = $('.multi-item').find('.item');
            $sItem.on('click',function(){
                $(this).addClass('on');
                $(this).siblings().removeClass('on');
            });
            $mItem.on('click',function(){
                $(this).toggleClass('on');
            });

            // 表单条件筛选3
            var $sItems = $('.sg-item').find('.item-s');
            var $mItems = $('.multi-item').find('.item-s');
            $sItems.on('click',function(){
                $(this).addClass('on');
                $(this).siblings().removeClass('on');
            });
            $mItems.on('click',function(){
                $(this).toggleClass('on');
            }); 
        }
        
        // 提示框
        function alertC(){
            $('.gui-alert').on('click','.alert-close',function(){
                $(this).parent('.gui-alert').hide();
            }); 
        }

        function backTop(){
            $(window).scroll(function(event) {
                var st = $(document).scrollTop();
                if( st > 200 ) {
                    $('.gui-back-top').fadeIn(400);
                }else {
                    $('.gui-back-top').fadeOut(400);
                }
            });

            // 点击返回顶部按钮，返回顶部
            $(document).on('click', '.gui-back-top', function() {
                $('body,html').stop().animate({'scrollTop': '0'}, 600);
            });
        }  

        function fixedBar(){
            $(window).scroll(function(event) {
                var st = $(document).scrollTop();
                if( st > 200 ) {
                    $('.gui-backtop').fadeIn(400);
                }else {
                    $('.gui-backtop').fadeOut(400);
                }
            });

            // 点击返回顶部按钮，返回顶部
            $(document).on('click', '.gui-backtop', function() {
                $('body,html').stop().animate({'scrollTop': '0'}, 600);
            });
        }

        function tableExp(){
            //全选
            $('.gui-chk-all').on('click', '.layui-form-checkbox', function(){
                var check = $(this);
                if(!check.hasClass('layui-form-checked')){
                    $(this).parents('.gui-table').find('.layui-form-checkbox').removeClass('layui-form-checked');
                }else{
                    $(this).parents('.gui-table').find('.layui-form-checkbox').addClass('layui-form-checked');
                }

            });

            // 上传
            $('.gui-upload').click(function() {
                $(this).siblings('input[type="file"]').click();
            })

        }

        // 布局示例
        function lytDraw(){
            $(document).on('click','.gui-btn-menu',function(){
                $(this).toggleClass('on');
                $(this).parents('.gui-lyt-draw').find('.gui-lyt-sd').stop(true).animate({'left':'-240px'},500);
                $(this).parents('.gui-lyt-draw').find('.gui-lyt-bd').stop(true).animate({'left':'0'},500);
            });
            $(document).on('click','.gui-btn-menu.on',function(){
                $(this).parents('.gui-lyt-draw').find('.gui-lyt-sd').stop(true).animate({'left':'0'},500);
                $(this).parents('.gui-lyt-draw').find('.gui-lyt-bd').stop(true).animate({'left':'240px'},500);
            });
        }

        function langChg(){
            $(document).on('mouseover','.gui-change',function(){
                $(this).find('.gui-lst').show().addClass('layui-anim layui-anim-upbit');
                $(this).find('.gui-chg-item').addClass('arrow-up');
            });
            $(document).on('mouseleave','.gui-change',function(){
                $(this).find('.gui-lst').hide();
                $(this).find('.gui-chg-item').removeClass('arrow-up');
            });
            $(document).on('click','.gui-lst li',function(){
                var valLang = $(this).find('a').text();
                $(this).parents('.gui-change').find('.gui-chg-item').text(valLang);
            });
        }


    }
  };

  //输出gui接口
  exports('gui', obj);

});