$.ajaxSetup({
	cache: false,
	beforeSend: function (jqXHR, settings) {
    	settings.data = settings.data && settings.data.length > 0 ? (settings.data + "&") : "";
    	settings.data = settings.data + "__RequestVerificationToken=" + $('input[name="__RequestVerificationToken"]').val();
    	return true;
	}
});

function initialDeviceSwitch() {
        var pageinfo = $("#pageinfo");
        var l = window.location;
        if (pageinfo.length == 0 && window.frames.length > 0) {
            pageinfo = $(window.frames[0].document).find("#pageinfo");
            l = window.frames[0].document.location;
        }
        $(".m-deviceSwitch").show();
        if (pageinfo.length == 0) {
            $(".m-deviceSwitch").hide();
            return;
        }
        $("#secUrl").attr("data-host", l.host).attr("data-pathname", l.pathname).attr("data-search", l.search).attr("data-hash", l.hash);
        var pagedevice = pageinfo.attr("data-device");
        $(".m-deviceSwitch").find("li[data-device=" + pagedevice + "]").addClass("active").find("a").addClass("z-current");
        $(".m-deviceSwitch").find("li").not(".active").click(function () {
            var secUrl = $("#secUrl");
            var host = secUrl.attr("data-host");
            var pathname = secUrl.attr("data-pathname");
            var search = secUrl.attr("data-search");
            var hash = secUrl.attr("data-hash");
            var npagedevice = $(this).attr("data-device");
            var mobileUrl = "http://" + host;
            if (npagedevice == "Pc") {
                mobileUrl = mobileUrl + pathname + search.replace("deviceModel=mobile", "deviceModel=pc") + hash;
            } else if (npagedevice == "Mobile") {
                var toUrl = pathname + search.replace("deviceModel=pc", "deviceModel=mobile") + hash;
                mobileUrl = mobileUrl + "/Runtime/MobileContainer?url=" + encodeURIComponent(toUrl);
            }
            // change device
            $.ajax({
                cache: false,
                url: "/Common/ChangeRunTimeDeviceMode",
                type: "post",
                data: { type: npagedevice },
                dataType: "json",
                success: function (result) {
                    if (result.IsSuccess) {
                        window.top.location.href = mobileUrl;
                    }
                },
                error: function () { }
            });
        });
}

tem_51_47_page = 1;
tem_51_47_sliderset3_init = function () {
	var jssor_1_options_tem_51_47 = {
    	$AutoPlay: "False"=="True"?false:"off" == "on",//自动播放
    	$PlayOrientation: 1,//2为向上滑，1为向左滑
    	$Loop: 1,//循环

    	$Idle: parseInt("1000"),//切换间隔
    	$SlideDuration: "1000",//延时
    	
    	$SlideEasing: $Jease$.$OutQuint,
            
     	$CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: GetSlideAnimation("1", "1000"),
        },
            
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ActionMode: "1"
        }
        
    };

    //初始化幻灯
    var slide = new $JssorSlider$("jssor_1", jssor_1_options_tem_51_47);
/*
    $('#smv_tem_51_47').data('jssor_slide', slide);

    //resize游览器的时候触发自动缩放幻灯秀
    $(window).bind("resize", function (e) {
        if (e.target == this) {
            var $this = $('#slider_smv_tem_51_47');
            var ww = $(window).width();
            var width = $this.parent().width();

            if (ww > width) {
                var left = parseInt((ww - width) * 10 / 2) / 10;
                $this.css({ 'left': -left });
            } else {
                $this.css({ 'left': 0 });
            }
            slide.$ScaleWidth(ww);
        }
    });

    //幻灯栏目自动或手动切换时触发的事件
    slide.$On($JssorSlider$.$EVT_PARK, function (slideIndex, fromIndex) {
        var $slideWrapper = $("#slider_smv_tem_51_47 .w-slide-inner:last");
        var $fromSlide = $slideWrapper.find(".content-box:eq(" + fromIndex + ")");
        var $curSlide = $slideWrapper.find(".content-box:eq(" + slideIndex + ")");

        $("#smv_tem_51_47").attr("selectArea", $curSlide.attr("data-area"));
        $fromSlide.find(".animated").smanimate("stop");
        $curSlide.find(".animated").smanimate("stop");
        $("#switch_tem_51_47 .page").html(slideIndex + 1);
        $curSlide.find(".animated").smanimate("replay");
        return false;
    });
    //切换栏点击事件
    $("#switch_tem_51_47 .left").unbind("click").click(function () {
        if(tem_51_47_page==1){
            tem_51_47_page =2;
        } else {
            tem_51_47_page = tem_51_47_page - 1;
        }
        $("#switch_tem_51_47 .page").html(tem_51_47_page);
        slide.$Prev();
        return false;
    });
    $("#switch_tem_51_47 .right").unbind("click").click(function () {
        if(tem_51_47_page==2){
            tem_51_47_page = 1;
        } else {
        	tem_51_47_page = tem_51_47_page + 1;
    	}
    	$("#switch_tem_51_47 .page").html(tem_51_47_page);
    	slide.$Next();
    	return false;
    });

    */
};

    var con_236_50_init = function () {
        var jssor_options = {
            $AutoPlay: "True" == "True",//自动播放
            $AutoPlaySteps: parseInt("1"),
            $SlideDuration: parseInt("2000"),
            $SlideWidth: parseInt("249"),
            $SlideSpacing: parseInt("0"),
            $Cols: parseInt("2"),
            $SlideEasing: $Jease$.$Linear,
            $PauseOnHover: 4,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: parseInt("1")
            }
        };

        var jssor_1_slider = new $JssorSlider$("ulList_con_236_50", jssor_options);

        /*responsive code begin*/
        /*remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1920);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*responsive code end*/
    };

        var callback_con_233_21 = function() {
            var sv = $("#smv_con_233_21");
            var titlelines = parseInt(sv.find(".w-list-ul").attr("data-title-autolines"));
            var desclines = parseInt(sv.find(".w-list-ul").attr("data-desc-autolines"));
            var desc_line_height =sv.find(".w-list-desc").css("line-height");
            sv.find(".w-list-desc").css("max-height", parseInt(desc_line_height) * desclines);

            var titleItem = sv.find(".w-list-titlelink");
            var title_height = titleItem.css("height");
            sv.find(".w-list-item.w-list-nopic").css("min-height", parseInt(title_height));

            var title_line_height = titleItem.css("line-height");
            titleItem.css("max-height", parseInt(title_line_height) * titlelines);
            sv.find("img").cutFill();
        }
        callback_con_233_21();

    var con_235_32_init = function () {
        var jssor_options = {
            $AutoPlay: "True" == "True",//自动播放
            $AutoPlaySteps: parseInt("1"),
            $SlideDuration: parseInt("2000"),
            $SlideWidth: parseInt("249"),
            $SlideSpacing: parseInt("0"),
            $Cols: parseInt("3"),
            $SlideEasing: $Jease$.$Linear,
            $PauseOnHover: 4,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: parseInt("1")
            }
        };

        var jssor_1_slider = new $JssorSlider$("ulList_con_235_32", jssor_options);

        /*responsive code begin*/
        /*remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1920);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*responsive code end*/
    };

    var con_237_33_init = function () {
        var jssor_options = {
            $AutoPlay: "True" == "True",//自动播放
            $AutoPlaySteps: parseInt("1"),
            $SlideDuration: parseInt("2000"),
            $SlideWidth: parseInt("249"),
            $SlideSpacing: parseInt("0"),
            $Cols: parseInt("1"),
            $SlideEasing: $Jease$.$Linear,
            $PauseOnHover: 4,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: parseInt("1")
            }
        };

        var jssor_1_slider = new $JssorSlider$("ulList_con_237_33", jssor_options);

        /*responsive code begin*/
        /*remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1920);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*responsive code end*/
    };


$(function () {


	
	if ($("#prevMainFrame").length > 0) {
    	$("#prevMainFrame").load(initialDeviceSwitch);
    } else {
    	initialDeviceSwitch();
    }

    InitImageSmv("tem_3_57", "101", "44", "1");

    var $nav = $("#smv_tem_2_35 .w-nav");
    var $inner = $("#smv_tem_2_35 .w-nav-inner");
    var rightBorder = parseInt($nav.css("border-right-width"));
    var leftBorder = parseInt($nav.css("border-left-width"));
    var topBorder = parseInt($nav.css("border-top-width"));
    var bottomBorder = parseInt($nav.css("border-bottom-width"));
    var height = $("#smv_tem_2_35").height();
    var width = $('#smv_tem_2_35').width();
    $nav.height(height - topBorder - bottomBorder);
    $nav.width(width - leftBorder - rightBorder);
    $inner.height(height - topBorder - bottomBorder).css("line-height", height - topBorder - bottomBorder+"px");


    $('#nav_tem_2_35').find('.w-subnav').hide();
    var $this, item, itemAll;
    $('#nav_tem_2_35').off('mouseenter').on('mouseenter', '.w-nav-inner', function () {
        itemAll = $('#nav_tem_2_35').find('.w-subnav');
        $this = $(this);
        item = $this.find('.w-subnav');
        item.slideDown();
    }).off('mouseleave').on('mouseleave', '.w-nav-inner', function () {
        item = $(this).find('.w-subnav');
        item.stop().slideUp(function () {
    	});
    });
    SetNavSelectedStyle('nav_tem_2_35');//选中当前导航    

    var $this = $('#slider_smv_tem_51_47');
    var dh = $(document).height();
        var wh = $(window).height();
        var ww = $(window).width();
        var width = 1000;
        //区分页头、页尾、内容区宽度
        if ($this.parents(".header").length > 0 ) {
            width = $this.parents(".header").width();
        } else if ($this.parents(".footer").length > 0 ){
            width = $this.parents(".footer").width();
        } else {
            width = $this.parents(".smvContainer").width();
        }

        if (ww > width) {
            var left = parseInt((ww - width) * 10 / 2) / 10;
            $this.css({ 'left': -left, 'width': ww });
        } else {
            $this.css({ 'left': 0, 'width': ww });
        }

        //解决手机端预览PC端幻灯秀时不通栏问题
        if (VisitFromMobile()) {
            $this.css("min-width", width);
            setTimeout(function () {
                var boxleft = (width - 330) / 2;
                $this.find(".w-slide-btn-box").css("left", boxleft + "px");
            }, 300);
        }
        $this.children().not(".slideArrow").css({ "width": $this.width() });

        tem_51_47_sliderset3_init();
/*
        var areaId = $("#smv_tem_51_47").attr("tareaid");
        if(areaId==""){
            var mainWidth = $("#smv_Main").width();
            $("#smv_tem_51_47 .slideset_AreaC").css({"width":mainWidth+"px","position":"relative","margin":"0 auto"});
        }else{
            var controlWidth = $("#smv_tem_51_47").width();
            $("#smv_tem_51_47 .slideset_AreaC").css({"width":controlWidth+"px","position":"relative","margin":"0 auto"});
        }
        $("#smv_tem_51_47").attr("selectArea", "Area0");

        var arrowHeight = $('#slider_smv_tem_51_47 .w-slide-arrowl').eq(-1).outerHeight();
        var arrowTop = (18 - arrowHeight) / 2;
        $('#slider_smv_tem_51_47 .w-slide-arrowl').eq(-1).css('top', arrowTop);
        $('#slider_smv_tem_51_47 .w-slide-arrowr').eq(-1).css('top', arrowTop);    
 
        var resize = function () {
            $("#smv_con_152_36 >.yibuFrameContent>.fullcolumn-inner").width($("#smv_con_152_36").parent().width());
            $('#bannerWrap_con_152_36').fullScreen(function (t) {
                if (VisitFromMobile()) {
                    t.css("min-width", t.parent().width())
                }
            });
        }
        $(window).resize(function (e) {
            if (e.target == this) {
                resize();
            }
        });
        resize();  
       
        InitImageSmv("con_239_45", "225", "225", "1");   

        InitImageSmv("con_242_13", "225", "225", "1");  

        InitImageSmv("con_184_29", "111", "111", "2"); 

        var resize = function () {
            $("#smv_con_193_4 >.yibuFrameContent>.fullcolumn-inner").width($("#smv_con_193_4").parent().width());
            $('#bannerWrap_con_193_4').fullScreen(function (t) {
                if (VisitFromMobile()) {
                    t.css("min-width", t.parent().width())
                }
            });
        }
        $(window).resize(function (e) {
            if (e.target == this) {
                resize();
            }
        });
        resize();     

        $("#smv_con_236_50").find("img").cutFill();
        con_236_50_init();    
        
        var resize = function () {
            $("#smv_con_218_6 >.yibuFrameContent>.fullcolumn-inner").width($("#smv_con_218_6").parent().width());
            $('#bannerWrap_con_218_6').fullScreen(function (t) {
                if (VisitFromMobile()) {
                    t.css("min-width", t.parent().width())
                }
            });
        }
        $(window).resize(function (e) {
            if (e.target == this) {
                resize();
            }
        });
        resize();   

        InitImageSmv("con_223_37", "479", "353", "2");  

        $("#smv_con_235_32").find("img").cutFill();
        con_235_32_init();  

        $("#smv_con_237_33").find("img").cutFill();
        con_237_33_init();    
        
        InitImageSmv("con_240_8", "225", "225", "1");     

        InitImageSmv("tem_54_37", "42", "42", "2");   

        InitImageSmv("tem_55_36", "46", "46", "2"); 

        InitImageSmv("tem_56_39", "50", "40", "2");      

        $('#smv_tem_61_22').smartNPLeavewordControl({ controlId: 'smv_tem_61_22', emptyPrefix:'请输入', correctMailPrefix: '请输入正确的', contentMaxLength: '不能超过200个字符', postSucess: '提交成功', postFail: '提交失败'});     
*/

});

    (function () {
        JPlaceHolder(leavewordPlaceHolder);
        function leavewordPlaceHolder() {
            var placeHeight = $(".w-guestbook-item.w-placeholder .placeholder-text .placeholder-text-in").height();
            $(".w-guestbook-item.w-placeholder .placeholder-text .placeholder-text-in").css("lineHeight", placeHeight + "px");
        };

    })(jQuery);
    $(function () {
        var resize = function () {
            $("#smv_tem_52_15 >.yibuFrameContent>.fullcolumn-inner").width($("#smv_tem_52_15").parent().width());
            $('#bannerWrap_tem_52_15').fullScreen(function (t) {
                if (VisitFromMobile()) {
                    t.css("min-width", t.parent().width())
                }
            });
        }
        $(window).resize(function (e) {
            if (e.target == this) {
                resize();
            }
        });
        resize();
    });
            $(function () {
                jsmart.autoContainer = 0;
                jsmart.autoComputeCallback = function () {
                    if (jsmart.autoContainer) {
                        clearTimeout(jsmart.autoContainer);
                        jsmart.autoContainer = 0;
                    }
                    jsmart.autoContainer = setTimeout(function () {
                        if (window.refreshBgScroll) {
                            window.refreshBgScroll();
                        }
                    }, 50);
                }
                $("div[bgscroll]").each(function () {
                    var bgscroll = $(this).attr("bgscroll");
                    $(this).lzparallax({ effect: bgscroll, autoPosition: false, clone: true });
                });
            });
            window.refreshBgScroll = function () {
                $("div[bgscroll]").each(function () {
                    var bgscroll = $(this).attr("bgscroll");
                    var bgclear = $(this).attr("bgclear");
                    $(this).removeAttr("bgclear");
                    $(this).lzparallax("refresh", bgscroll, bgclear);
                });
            }
        $(function() {
            $("img.lazyload").lazyload({ skip_invisible: false, effect: "fadeIn", failure_limit: 15, threshold: 100 });
            $('.animated').smanimate();
            $('.smartRecpt').smrecompute();
            setCurrentPageTitle('首页', 2);
            xwezhan.initWz();

            if ($("#txtDeviceSwitchEnabled").val() == "hide") {
                $(".m-deviceSwitch").css("display", "none");
            }
        });

















