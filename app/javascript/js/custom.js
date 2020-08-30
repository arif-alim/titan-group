import * as ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax);

import Scrollbar from 'smooth-scrollbar';
window.Scrollbar = Scrollbar;
import Isotope from 'isotope-layout';
import jQueryBridget from 'jquery-bridget';
jQueryBridget( 'isotope', Isotope, $ );
import 'slick-carousel';
import 'magnific-popup';
import Swiper from 'swiper';

(function ( $ ) {

    "use strict";

    var dsnGrid={backgroundPosition:function(e,n,t){var o,i,a,s,r;return e instanceof jQuery==!1&&(e=jQuery(e)),t=this.getUndefinedVal(t,{}),o=this.getUndefinedVal(t.sizeX,"105%"),i=this.getUndefinedVal(t.sizeY,"105%"),s=this.getUndefinedVal(t.left,"-5%"),r=this.getUndefinedVal(t.top,"-5%"),a=this.getUndefinedVal(t.move,100),e.css({width:o,height:i,left:s,top:r,backgroundPositionX:"calc(50% - "+-2*a+"px)",backgroundPositionY:"calc(50% - "+-2*a+"px)"}),n=this.getUndefinedVal(n,1),e.parent().on("mousemove",function(o){if(void 0!==t.dataActive&&jQuery(this).find(e).hasClass(t.dataActive))return!1;var i=o.clientX/jQuery(this).width()-.5,s=o.clientY/jQuery(this).height()-.5;TweenLite.to(jQuery(this).find(e),n,{transformPerspective:100,x:a*i+a+" ",y:a*s+a+""}),void 0!==t.onEnter&&t.onEnter(jQuery(this),o)}).on("mouseleave",function(o){TweenMax.to(jQuery(this).find(e),n,{x:a,y:a,ease:Back.easeOut.config(4)}),void 0!==t.onLeave&&t.onLeave(jQuery(this),o)}),dsnGrid},parallaxIt:function(e,n,t,o){if(!(n.length<=0)){var i=n[0].getBoundingClientRect(),a=e.pageX-i.left,s=e.pageY-i.top,r=window.pageYOffset||document.documentElement.scrollTop;o=this.getUndefinedVal(o,.3),t=this.getUndefinedVal(t,-1),TweenMax.to(n,o,{x:(a-i.width/2)/i.width*t,y:(s-i.height/2-r)/i.width*t,ease:Power0.easeOut})}},scaleIt:function(e,n,t){if(void 0===n)return!1;var o=0;o=body.hasClass("dsn-effect-scroll")?e.scrollTop:e.scrollTop();var i,a,s;s=this.getUndefinedVal(t.plus,0),i=this.getUndefinedVal(t.position,!1);var r=n.offset();a=void 0===r||body.hasClass("dsn-effect-scroll")?0:r.top,i&&(a-=o);return o/(n.height()+a+s)},scrollerIt:function(e,n,t){if(void 0===n)return!1;var o,i,a,s=e.scrollTop();a=this.getUndefinedVal(t.duration,0),i=this.getUndefinedVal(t.plus,0);var r=n.offset();o=void 0!==r?r.top:0,o+=a;var d=n.height()+o+i;if(o<=s&&void 0!==t.action){var l=o-s,c=l/d,f=s/(n.height()+o+i);t.action({scroll:l,position:c,targetEnd:d,ScrollTop:s,num:f})}return f},setPositionMoveSection:function(e,n,t){if(void 0!==e){var o=e.offset(),i=void 0===o?0:o.top;n=dsnGrid.getUndefinedVal(n,2),t=dsnGrid.getUndefinedVal(t,0);var a=(e.innerHeight()+i+t)/2;e.css({marginBottom:a/n*-1})}},scrollTop:function(e,n,t,o){n=dsnGrid.getUndefinedVal(n,500),t=dsnGrid.getUndefinedVal(t,0);var i=0;"number"==typeof e?i=e:(e instanceof jQuery==!1&&(e=jQuery(e)),void 0!==(i=e.offset())&&(i=i.top)),jQuery("html, body").animate({scrollTop:i+t},n,o)},getUndefinedVal:function(e,n){return void 0===e?n:e},mouseMove:function(e,n,t){jQuery(window);var o=jQuery("body");if(dsnGrid.getUndefinedVal(o.data("dsn-mousemove"),!1)&&void 0!==e&&!(e.length<=0)&&null!==e){o.addClass("dsn-mousemove"),e instanceof jQuery==!1&&(e=jQuery(e));var i=e,a=!1;o.on("mousemove",function(e){TweenLite.to(i , .5 , {left:e.pageX,top:e.pageY})/*i.css({left:e.pageX,top:e.pageY})*/,void 0!==n&&void 0!==n.onUpdate&&n.onUpdate(e,e.pageX,e.pageY,i),void 0!==n&&void 0!==n.onComplete&&(a=!0,dsnGrid.endAnimate(i,function(e){a&&n.onComplete(e,i),a=!1}))})}},endAnimate:function(e,n){void 0!==n&&null!==n&&e.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){n(e)})},mouseWheel:function(e,n,t){e.bind("mousewheel DOMMouseScroll",function(e){e.originalEvent.wheelDelta>0||e.originalEvent.detail<0?void 0!==t&&t(e):void 0!==n&&n(e)})},numberText:function(e){return e<10&&e>0?"0"+e:e},convertTextLine:function(e,n){var t=e.html().trim(),o="";e.html("");for(var i=0;i<t.length;i++)0===i&&(o+='<div class="dsn-word-wrapper">')," "!==t.charAt(i)?o+='<span class="dsn-chars-wrapper">'+t.charAt(i)+"</span>":o+="</div>"+t.charAt(i)+'<div class="dsn-word-wrapper">';o+="</div>",n.append(o)},randomObjectArray:function(e,n){let t=this.getUndefinedVal(n,100);return e.sort(function(){return Math.round(Math.random())*t})},convertTextWord:function(e,n,t){var o=e.html().trim().split(" "),i="";e.html("");for(var a=0;a<o.length;a++)if(o[a].length>0){if(i+='<span class="dsn-wrapper">',t){i+='<span class="dsn-word-wrapper">';for(var s=0;s<o[a].length;s++)i+='<span class="dsn-chars-wrapper">'+o[a].charAt(s)+"</span>";i+="</span>"}else i+='<span class="dsn-word-wrapper">'+o[a]+"</span>";i+="</span>"}n.append(i)},getRndInteger:function(e,n){return Math.floor(Math.random()*(n-e))+e},pageLoad:function(e,n,t,o){var i=window.performance.timing,a=-1*(i.loadEventEnd-i.navigationStart)/1e3%50*10,s=e,r=n>e?1:-1,d=Math.abs(Math.floor((a+t)/100)),l=setInterval(function(){o(s+=r),s>=n&&clearInterval(l)},d);return l},embedVideo:function(e){jQuery("[data-dsn-video]").each(function(e){var n=jQuery(this),t=dsnGrid.removeAttr(n,"data-dsn-video");n.on("click",function(){n.addClass("dsn-video"),n.html('<div class="dsn-iframe-player">'+t+"</div>"),dsnGrid.scrollTop(n,1600,-100)})})},removeAttr:function(e,n){if(void 0!==e&&void 0!==n){var t=e.attr(n);return void 0!==t&&e.removeAttr(n),t}},moveIcon:function(e,n){e.on("mousemove",function(t){var o="top .15s ease-out,left .15s ease-out";n.css({"-webkit-transition":o,"-moz-transition":o,"-ms-transition":o,"-o-transition":o,transition:o,"pointer-events":"none"});var i=t.pageX,a=t.pageY-jQuery(this).offset().top;a>0&&a<jQuery(this).height()&&jQuery(this).offset().left<i&&i<e.width()?n.css({left:i,top:a}):TweenMax.to(n,.5,{left:"50%",top:"50%"})}).on("mouseleave",function(){TweenMax.to(n,.5,{left:"50%",top:"50%"})})},parallaxMoveElemnt:function(e,n,t,o,i){var a=e,s=e;if(void 0!==e.target&&(a=e.target,s=void 0!==e.element?e.element:e.target),!(s.length<=0)){t=void 0===t?.5:parseFloat(t),n=void 0===n?20:parseFloat(n),i=void 0!==i&&i;var r=$('<div class="icon-circle"></div>');a.append(r),a.off("mouseleave"),a.off("mouseenter"),a.off("mousemove"),a.on("mouseleave",function(e){var n={x:0,y:0,ease:Back.easeOut.config(4)};i&&(n.scale=1);var t=[s,r];void 0!==o&&t.push(o),TweenMax.to(t,1,n)}).on("mouseenter",function(e){var n={transformOrigin:"0 0"};i&&(n.scale="1.03"),TweenMax.to([s,r],.3,n)}).on("mousemove",function(e){dsnGrid.parallaxIt(e,s,n),dsnGrid.parallaxIt(e,r,2*n),void 0!==o&&dsnGrid.parallaxIt(e,o,-5,.5)})}},parallaxMoveElemntCir:function(e,n,t,o,i){var a=e,s=this;t=void 0===t?.5:parseFloat(t),n=void 0===n?20:parseFloat(n),i=void 0!==i&&i;var r=a.html(),d=$('<div class="icon-circle"></div>'),l=$('<div class="dsn-grid-parallax">'+r+"</div>");a.html(""),a.append(d),a.append(l),a.on("mouseleave",function(e){TweenMax.to(a,t,{scale:1}),TweenMax.to(l,.3,{scale:1,x:0,y:0}),TweenMax.to(d,t,{scale:1,x:0,y:0})}).on("mouseenter",function(e){TweenMax.to(a,t,{transformOrigin:"0 0",scale:1}),TweenMax.to(d,t,{scale:1.2})}).on("mousemove",function(e){s.parallaxIt(e,l,n),dsnGrid.parallaxIt(e,d,n)})},elementHover:function(e,n,t){e instanceof jQuery==!1&&(e=jQuery(e)),n instanceof jQuery==!1&&(n=jQuery(n)),n.on("mouseenter",function(){e.addClass(t)}).on("mouseleave",function(){e.removeClass(t)})},changeSizeText:function(e,n){e instanceof jQuery==!1&&(e=jQuery(e)),e.each(function(){var e=jQuery(this);for(var t in n)e.text().length>=parseInt(t)&&(console.log(n[t]),e.css(n[t]))})},convertToJQuery:function(e){return e instanceof jQuery==!1?jQuery(e):e},animateText:function(e,n,t,o){function i(){n.each(function(){let e=$(this);if(e.hasClass(a))return;let n=e.offset().top;void 0!==n&&s>n-(wind.height()-100)&&(e.hasClass(a)||e.addClass(a))})}(n=this.convertToJQuery(n)).each(function(){let e=$(this);dsnGrid.convertTextWord(e,e),void 0!==t&&e.attr(t,"animate"),void 0!==o&&e.removeClass(o),e.addClass("dsn-has-animate-text")});const a="dsn-animate";var s=0,r=null;e.getListener(function(e){s=void 0===e.offset?wind.scrollTop():0,r&&clearTimeout(r),r=setTimeout(i,10)})},imageLoad:function(){const e=$('[data-dsn-loader="div"]');e.each(function(){$(this).append('<div class="wait-loader"><div class="loader-inner"><div class="loader-circle"><div class="loader-layer"></div></div></div></div>')});e.imagesLoaded({background:".dsn-img-org"}).progress(function(e,n){let t=$(n.element).parents('[data-dsn-loader="div"]');t.length>0&&(t.addClass("dsn-img-loader-done dsn-animate"),t.attr("data-dsn-loader","divFinshed"))})},getBoundingClientRect:function(e){const n=e.getBoundingClientRect();return{top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height,x:n.x,y:n.y}},progressCircle:function(e){const n=$('[data-dsn-grid="progress-circle"]'),t=this.removeAttr(n,"data-dsn-grid-stroke");var o=void 0===t?"":'stroke="'+t+'"';n.css({position:"fixed",right:"-60px",bottom:"60px",width:"52px",height:"52px","z-index":"99999999"}),n.append('<svg class="dsn-progress-circle-up" width="100%" height="100%" '+o+' viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">\n        <path class="dsn-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition:  stroke-dashoffset 300ms linear 0s;stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 309;"></path>    </svg>');var i=wind;e.isScroller(!0)&&(i=e.getScrollbar()),e.getListener(function(e){let t=0,o=$(document).height()-wind.height();void 0===e.offset?t=wind.scrollTop():(t=e.offset.y,o=$(document).height()-i.getSize().content.height+100),t>70?(TweenMax.to(n,1,{ease:Back.easeOut.config(4),right:60}),n.find(".dsn-progress-path").css("stroke-dashoffset",300-Math.round(300*t/o)+"%")):TweenMax.to(n,1,{ease:Back.easeIn.config(4),right:-60})}),n.on("click",function(){e.isScroller(!0)?i.scrollTo(0,0,600):$("body,html").animate({scrollTop:0},300)})}};

    const wind = $( window );
    const body = $( "body" );
    const dataAttr = {
        animateTextAjax : ".dsn-nav-bar , .headefr-fexid .project-title .title-text-header .cat ,[data-dsn-animate=\"ajax\"] , footer" +
            ", .next-project , .root-project",
    };

    if ( navigator.userAgent.match( /Edge/i )
        || navigator.userAgent.match( /MSIE 10/i )
        || navigator.userAgent.match( /MSIE 9/i ) ) {
        $(".cursor").css( "display", "none" );
    }

    preloader();
    navBar();
    var effectScroll = effectScroller();
    var animate = effectAnimate();

    effectScroll.start();
    animate.allInt();
    reloadAjax();
    effectBackForward();

    /**
     * Execute data after ajax
     */
    function reloadAjax( $off ) {
        data_overlay();
        changeColor();
        background();
        initMap();
        LoadingPage();
        SliderProject();
        slick_client( wind );
        dsnAjax( $off ).ajaxLoad();
        mouseCirMove( $off );
        slidereProjects();
        Popup();
        gallery();
        viewAllWork();
        slider().run();
        //$( "a.vid" ).YouTubePopUp();
    }


    /***
     *
     * Loading Page
     *
     */
    function preloader() {
        var preloader = $( ".preloader" );
        var preloader_block = preloader.find( ".preloader-block" );
        var progress_number = preloader_block.find( ".percent" );
        var progress_title = preloader_block.find( ".title" );
        var progress_loading = preloader_block.find( ".loading" );

        var preloader_bar = preloader.find( ".preloader-bar" );
        var preloader_progress = preloader_bar.find( ".preloader-progress" );

        var preloader_after = preloader.find( ".preloader-after" );
        var preloader_before = preloader.find( ".preloader-before" );


        var timer = dsnGrid.pageLoad( 0, 100, 300, function ( val ) {
            progress_number.text( val );
            preloader_progress.css( "width", val + "%" );
        } );


        wind.on( "load", function () {

            clearInterval( timer );

            TweenMax.fromTo( preloader_progress, .5, { width : "95%" }, {
                width : "100%",
                onUpdate : function () {
                    var f = preloader_progress.width() / preloader_progress.parent().width() * 100;
                    progress_number.text( parseInt( f, 10 ) );

                },
                onComplete : function () {
                    TweenMax.to( preloader_bar, .5, { left : "100%" } );
                    TweenMax.to( progress_title, 1, { autoAlpha : 0, y : -100 } );
                    TweenMax.to( progress_loading, 1, { autoAlpha : 0, y : 100 } );
                    TweenMax.to( progress_number, 1, { autoAlpha : 0 } );

                    TweenMax.to( preloader_before, 1, { y : "-100%", delay : .7 } );
                    TweenMax.to( preloader_after, 1, {
                        y : "100%", delay : .7, onComplete : function () {
                            preloader.addClass( "hidden" );
                        },
                    } );
                },
            } );
        } );


    }


    function changeColor() {
        const $isLight = $( "[data-dsn-temp=\"light\"]" );
        if ( $isLight.length > 0 ) {
            body.addClass( "v-light" );
            let head_p = $( "[data-dsn-header=\"project\"]" );
            if ( head_p.length <= 0 )
                body.addClass( "menu-light" );
            else if ( head_p.hasClass( "header-hero-2" ) )
                body.addClass( "menu-light" );
        } else
            body.removeClass( "v-light" );
    }


    function slidereProjects() {

        $( ".client-see .slick-slider  " ).slick( {
            infinite : true,
            slidesToShow : 1,
            arrows : false,
            dots : true,
            fade : true,
            cssEase : "linear",
        } );


        $( " .our-news .slick-slider , .our-team .slick-slider , [data-dsn-col=\"2\"] .slick-slider" ).slick( {
            infinite : true,
            slidesToShow : 2,
            arrows : false,
            dots : true,
            responsive : [

                {
                    breakpoint : 800,
                    settings : {
                        slidesToShow : 1,
                        slidesToScroll : 1,
                    },
                },

            ],
        } );


        $( "[data-dsn-col=\"3\"] .slick-slider" ).slick( {
            infinite : true,
            slidesToShow : 3,
            arrows : false,
            dots : true,
            autoplay: true,
            responsive : [

                {
                    breakpoint : 800,
                    settings : {
                        slidesToShow : 2,
                        slidesToScroll : 2,
                    },
                },
                {
                    breakpoint : 600,
                    settings : {
                        slidesToShow : 1,
                        slidesToScroll : 1,
                    },
                },

            ],
        } );

    }

    function Popup() {
        let galleryPortfolios = $( ".gallery-col .box-im .image-zoom" );
        galleryPortfolios.magnificPopup( {
            delegate : "a",
            type : "image",
            closeOnContentClick : false,
            closeBtnInside : false,
            gallery : {
                enabled : true,
            },
            zoom : {
                enabled : true,
                duration : 300, // don't foget to change the duration also in CSS
                opener : function ( element ) {
                    return element.find( "img" );
                },
            },

        } );
    }

    /**
     * Parallax Image
     */
    function effectAnimate() {
        var controller = new ScrollMagic.Controller();
        const eHeaderProject = "[data-dsn-header=\"project\"]";
        const eNextProject = "[data-dsn-footer=\"project\"]";

        return {
            clearControl : function () {
                controller = new ScrollMagic.Controller();
            },
            isElemntId : function ( $id ) {
                return document.getElementById( $id ) !== null;
            },
            headerProject : function () {
                if ( $( eHeaderProject ).length <= 0 ) return false;
                let heroImg = $( "#dsn-hero-parallax-img" ),
                    heroTitle = $( "#dsn-hero-parallax-title" ),
                    fillTitle = $( "#dsn-hero-parallax-fill-title" ),
                    holder = $( "#descover-holder" ),
                    scale = 1.2;


                if ( heroImg.hasClass( "parallax-move-element" ) )
                    dsnGrid.parallaxMoveElemnt( {
                        target : $( eHeaderProject ),
                        element : heroImg.find( ".cover-bg" ),
                    }, 5, 1 );

                var parallax = new TimelineMax();


                //--> Hero Image Project
                if ( heroImg.length > 0 ) {
                    let s = heroImg.hasClass( "has-top-bottom" ) ? 1 : 1.08;
                    parallax.to( heroImg, 1,
                        { force3D : true, y : "30%", scale : s }
                        , 0 );

                }


                //--> Hero Title
                if ( heroTitle.length > 0 ) {
                    if ( heroTitle.hasClass( "project-title" ) ) scale = 1;
                    parallax.to( heroTitle, .8, {
                        force3D : true,
                        top : "30%",
                        autoAlpha : 0,
                        scale : scale,
                    }, 0 );
                }
                //--> Hero Fill Title
                if ( fillTitle.length > 0 ) {
                    parallax
                        .to( fillTitle, 1, {
                            force3D : true,
                            height : 80,
                        }, 0 )
                        .to( "#dsn-hero-parallax-fill-title h1", 1, {
                            force3D : true,
                            top : 0,
                        }, 0 )
                        .to( heroTitle.find( ".slider-header.slider-header-top" ), 1, {
                            force3D : true,
                            height : 0,
                        }, 0 );


                }


                //--> Hero Fill Title
                if ( holder.length > 0 )
                    parallax.to( holder, .8, {
                        force3D : true,
                        bottom : "-10%",
                        autoAlpha : 0,
                    }, 0 );


                if ( parallax._totalDuration <= 0 ) return false;
                var parallaxProject = new ScrollMagic.Scene( {
                    triggerElement : eHeaderProject,
                    triggerHook : 0,
                    duration : "100%",
                } )
                    .setTween( parallax )
                    .addTo( controller );

                let video = heroImg.find( "video" );
                if ( video.length > 0 || body.hasClass( "v-light" ) ) {
                    parallaxProject.on( "enter", function () {
                        if ( video.length > 0 )
                            video.get( 0 ).play();
                        if ( body.hasClass( "v-light" ) && !$( eHeaderProject ).hasClass( "header-hero-2" ) )
                            body.removeClass( "menu-light" );
                    } );
                    parallaxProject.on( "leave", function () {
                        if ( video.length > 0 )
                            video.get( 0 ).pause();
                        if ( body.hasClass( "v-light" ) && !$( eHeaderProject ).hasClass( "header-hero-2" ) )

                            body.addClass( "menu-light" );
                    } );
                }

                return parallaxProject;
            },
            nextProject : function () {

                let footerImg = $( "#dsn-next-parallax-img" ),
                    footerTitle = $( "#dsn-next-parallax-title" );

                let img = footImg();
                let title = footTitle();

                effectScroll.getListener( function ( e ) {
                    if ( img !== false ) img.refresh();
                    if ( title !== false ) title.refresh();
                } );

                if ( title !== false && body.hasClass( "v-light" ) ) {
                    title.on( "progress", function ( event ) {
                        if ( event.progress > 0.8 ) {
                            body.removeClass( "menu-light" );
                        } else {
                            body.addClass( "menu-light" );
                        }
                    } );

                }


                function footImg() {
                    if ( footerImg.length <= 0 ) return false;

                    return new ScrollMagic.Scene( {
                        triggerElement : eNextProject,
                        triggerHook : 1,
                        duration : "100%",
                    } )
                        .setTween( TweenMax.to( footerImg, 1,
                            {
                                force3D : true,
                                y : "30%",
                                scale : 1,
                                // width : '80%'
                            }
                            , 0 ) )
                        .addTo( controller );


                }

                function footTitle() {
                    if ( footerTitle.length <= 0 ) return false;

                    return new ScrollMagic.Scene( {
                        triggerElement : eNextProject,
                        triggerHook : .5,
                        duration : "55%",
                    } )
                        .setTween( TweenMax.to( footerTitle, 1,
                            {
                                force3D : true,
                                top : "0%",
                                opacity : 1,
                                ease : Power0.easeNone,
                            }
                            , 0 ) )
                        .addTo( controller );


                }


            },

            parallaxImg : function () {
                const moveUp = $( "[data-dsn-grid=\"move-up\"]" );

                moveUp.each( function () {
                    let _that = $( this );
                    _that.attr( "data-dsn-grid", "moveUp" );
                    let img = _that.find( "img:not(.hidden) , video" );

                    let triggerHook = dsnGrid.getUndefinedVal( _that.data( "dsn-triggerhook" ), 1 ),
                        duration = dsnGrid.getUndefinedVal( _that.data( "dsn-duration" ), (triggerHook !== 1) ? "100%" : "200%" );


                    if ( img.length > 0 ) {
                        var parallax;
                        if ( img.hasClass( "has-top-bottom" ) ) {
                            let pers = dsnGrid.getUndefinedVal( img.data( "dsn-move" ), "15%" );
                            parallax = TweenMax.to( img, 0.8, { force3D : true, y : pers, ease : Power0.easeNone } );
                        } else {
                            let y = dsnGrid.getUndefinedVal( img.data( "dsn-y" ), "10%" );
                            let scale = dsnGrid.getUndefinedVal( img.data( "dsn-scale" ), 1.1 );

                            if ( triggerHook !== 1 ) {
                                img.css( "top", 0 );
                                parallax = TweenMax.to( img, 2, { force3D : true, scale : scale, y : y } );
                            } else
                                parallax = TweenMax.to( img, 1, {
                                    force3D : true,
                                    scale : scale,
                                    y : y,
                                    ease : Power0.easeNone,
                                } );
                        }


                        var parallaxIt = new ScrollMagic.Scene( {
                            triggerElement : this,
                            triggerHook : triggerHook,
                            duration : duration,
                        } )
                            .setTween( parallax )
                            .addTo( controller );

                        effectScroll.getListener( function () {
                            parallaxIt.refresh();
                        } );
                    }
                } );
            },
            moveSection : function () {
                const moveUp = $( "[data-dsn-grid=\"move-section\"]" );
                moveUp.each( function () {
                    let _that = $( this );
                    _that.removeAttr( "data-dsn-grid" );
                    _that.addClass( "dsn-move-section" );
                    let move = dsnGrid.getUndefinedVal( _that.data( "dsn-move" ), -100 );
                    let triggerHook = dsnGrid.getUndefinedVal( _that.data( "dsn-triggerhook" ), 1 );
                    let opacity = dsnGrid.getUndefinedVal( _that.data( "dsn-opacity" ), _that.css( "opacity" ) );

                    let duration = dsnGrid.getUndefinedVal( _that.data( "dsn-duration" ), "150%" );
                    let resp = _that.data( "dsn-responsive" );

                    if ( resp === "tablet" && wind.width() < 992 ) return;


                    let parallax = TweenMax.to( _that, 2, { y : move, autoAlpha : opacity, ease : Power0.easeNone } );
                    var parallaxIt = new ScrollMagic.Scene( {
                        triggerElement : this,
                        triggerHook : triggerHook,
                        duration : duration,
                    } )
                        .setTween( parallax )
                        .addTo( controller );

                    effectScroll.getListener( function () {
                        parallaxIt.refresh();
                    } );
                } );
            },
            parallaxImgHover : function () {
                const parallax = $( "[data-dsn=\"parallax\"]" );
                if ( parallax.length === 0 || wind.width() < 992 ) {
                    return;
                }
                parallax.each( function () {
                    var _that = $( this ),
                        dsn_grid = dsnGrid.removeAttr( _that, "data-dsn" ),
                        speed = dsnGrid.removeAttr( _that, "data-dsn-speed" ),
                        move = dsnGrid.removeAttr( _that, "data-dsn-move" ),
                        scale = false;

                    if ( _that.hasClass( "image-zoom" ) ) scale = true;


                    dsnGrid.parallaxMoveElemnt( _that, move, speed, undefined, scale );

                } );
            },
            changeColor : function () {
                const v_b = "v-light";
                var isLight = body.hasClass( v_b );

                $( "[data-dsn=\"color\"]" ).each( function () {

                    let duration = dsnGrid.getUndefinedVal( $( this ).data( "dsn-duration" ), $( this ).outerHeight() + 370 );

                    var parallaxIt = new ScrollMagic.Scene( {
                        triggerElement : this,
                        triggerHook : 0.05,
                        duration : duration,
                    } )
                        .addTo( controller );

                    parallaxIt.on( "enter", function () {
                        if ( isLight )
                            body.removeClass( v_b );
                        else
                            body.addClass( v_b );
                    } );
                    parallaxIt.on( "leave", function () {
                        if ( isLight )
                            body.addClass( v_b );
                        else
                            body.removeClass( v_b );

                    } );

                    effectScroll.getListener( function () {
                        parallaxIt.refresh();
                    } );
                } );
            },
            animateText : function () {
                const $element = $( "[data-dsn-animate=\"text\"] , [data-dsn-animate=\"up\"]" );
                $element.each( function () {
                    let _that = $( this );
                    let triggerHook = 1;
                    if ( _that.data( "dsn-animate" ) === "text" ) {
                        dsnGrid.convertTextWord( _that, _that );
                        _that.attr( "data-dsn-animate", "animate" );
                    } else
                        triggerHook = 0.8;

                    var parallaxIt = new ScrollMagic.Scene( {
                        triggerElement : this,
                        reverse : false,
                        triggerHook : triggerHook,

                    } )
                        .setClassToggle( this, "dsn-active" )
                        .addTo( controller );
                    effectScroll.getListener( function () {
                        parallaxIt.refresh();
                    } );
                } );

            },
            headerBlog : function () {
                const header_project = $( "[data-dsn-header=\"blog\"]" );
                if ( header_project.length <= 0 || wind.width() < 992 ) return;


                var parallaxIt = new ScrollMagic.Scene( {
                    triggerElement : ".header-single-post",
                    triggerHook : 0,
                    duration : "100%",
                } )
                    .setTween( TweenMax.fromTo( header_project, 1, { width : "100%" }, { width : "80%" } ) )
                    .addTo( controller );

                effectScroll.getListener( function () {
                    parallaxIt.refresh();
                } );
            },
            allInt : function () {

                this.clearControl();
                let headProj = this.headerProject();
                effectScroll.getListener( function ( e ) {
                    if ( headProj !== false ) headProj.refresh();
                } );

                this.nextProject();
                this.parallaxImgHover();
                this.parallaxImg();
                this.moveSection();
                this.animateText();
                this.changeColor();
                // this.headerBlog();


            },
        };

    }

    /**
     * Effect SmoothScrollbar
     */
    function effectScroller() {
        const Scrollbar = window.Scrollbar;
        const locked_scroll = "locked-scroll";
        var myScrollbar = document.querySelector( "#dsn-scrollbar" );


        return {
            isMobile : function () {
                if ( navigator.userAgent.match( /Android/i )
                    || navigator.userAgent.match( /webOS/i )
                    || navigator.userAgent.match( /iPhone/i )
                    || navigator.userAgent.match( /iPad/i )
                    || navigator.userAgent.match( /iPod/i )
                    || navigator.userAgent.match( /BlackBerry/i )
                    || navigator.userAgent.match( /Windows Phone/i )
                    || navigator.userAgent.match( /Edge/i )
                    || navigator.userAgent.match( /MSIE 10/i )
                    || navigator.userAgent.match( /MSIE 9/i )
                    // || wind.width() <= 991
                    || false
                ) {
                    return true;
                }

                return false;
            }, isMobiles : function () {
                if ( navigator.userAgent.match( /Android/i )
                    || navigator.userAgent.match( /webOS/i )
                    || navigator.userAgent.match( /iPhone/i )
                    || navigator.userAgent.match( /iPad/i )
                    || navigator.userAgent.match( /iPod/i )
                    || navigator.userAgent.match( /BlackBerry/i )
                    || navigator.userAgent.match( /Windows Phone/i )
                    || navigator.userAgent.match( /Edge/i )
                    || navigator.userAgent.match( /MSIE 10/i )
                    || navigator.userAgent.match( /MSIE 9/i )
                    || wind.width() <= 991
                ) {
                    return true;
                }

                return false;
            },
            isScroller : function ( $print ) {
                if ( $print )
                    myScrollbar = document.querySelector( "#dsn-scrollbar" );


                let hasSc = !body.hasClass( "dsn-effect-scroll" ) || this.isMobile() || myScrollbar === null;
                if ( hasSc && $print ) {
                    body.addClass( "dsn-mobile" );
                }

                return !hasSc;
            },
            locked : function () {
                body.addClass( locked_scroll );
                if ( this.isScroller() ) {
                    let scroll = this.getScrollbar();
                    if ( scroll !== undefined ) {
                        scroll.destroy();
                    }
                }
            },
            unlocked : function () {
                body.removeClass( locked_scroll );
                this.start();
                animate.allInt();
                dsnGrid.progressCircle( effectScroll );

            },
            getScrollbar : function ( $id ) {
                if ( $id === undefined ) {
                    return Scrollbar.get( myScrollbar );
                }
                return Scrollbar.get( document.querySelector( $id ) );
            },
            getListener : function ( $obj ) {
                if ( $obj === undefined ) return;
                var $this = this;
                if ( $this.isScroller( true ) ) {
                    $this.getScrollbar().addListener( $obj );
                } else {
                    wind.on( "scroll", $obj );
                }
            },
            start : function () {
                dsnGrid.scrollTop( 0, 1 );
                $( ".scroll-to" ).on( "click", function ( e ) {
                    e.preventDefault();
                    let sc = wind;
                    if ( effectScroll.isScroller( true ) )
                        sc = effectScroll.getScrollbar();

                    TweenLite.to( sc, 1.5, {
                        scrollTo : $( ".wrapper" ).offset().top, ease :
                        Expo.easeInOut,
                    } );
                } );
                if ( !this.isScroller( true ) ) return;

                let dam = 0.05;
                if ( this.isMobiles() )
                    dam = 0.02;
                Scrollbar.init( myScrollbar, {
                    damping : dam,
                } );
                // this.commentScroll();
                // this.sidebarScroll();
                this.workScroll();

            },
            sliderScroll : function () {
                Scrollbar.init( document.querySelector( ".slider .main-slider .slider-nav-list" ), {
                    damping : 0.05,
                } );
            },
            menuScroll : function () {
                Scrollbar.init( document.querySelector( ".nav__content" ), {
                    damping : 0.05,
                } );
            },
            commentScroll : function () {
                const comment = document.querySelector( ".comment-modal .comment-modal-container" );
                if ( comment !== null )
                    Scrollbar.init( comment, {
                        damping : 0.05,
                    } );
            },

            sidebarScroll : function () {
                const comment = document.querySelector( ".dsn-sidebar .sidebar-single" );
                if ( comment !== null )
                    Scrollbar.init( comment, {
                        damping : 0.05,
                    } );
            },

            workScroll : function () {
                const comment = document.querySelector( ".dsn-all-work .dsn-work-scrollbar" );
                if ( comment !== null )
                    Scrollbar.init( comment, {
                        damping : 0.05,
                    } );
            },


        };

    }

    function slider() {
        const dsn_slider = $( ".dsn-slider" );
        const speed = 1.2;

        return {
            initSlider : function () {
                const slid_items = dsn_slider.find( ".slide-item" );
                const dsn_slider_content = dsn_slider.find( ".dsn-slider-content" );
                slid_items.each( function ( $index ) {
                    let $this = $( this );
                    $this.attr( "data-dsn-id", $index );
                    let slide_content = $( this ).find( ".slide-content" );
                    slide_content.attr( "data-dsn-id", $index );
                    if ( $index === 0 ) slide_content.addClass( "dsn-active dsn-active-cat" );
                    dsn_slider_content.append( slide_content );
                    let title = slide_content.find( ".title-text-header-inner a" );
                    dsnGrid.convertTextLine( title, title );
                } );
            },
            progress : function ( swiper ) {
                let interleaveOffset = 0.5;
                swiper.on( "progress", function () {

                    let swiper = this;
                    for ( let i = 0; i < swiper.slides.length; i++ ) {
                        let slideProgress = swiper.slides[ i ].progress,
                            innerOffset = swiper.width * interleaveOffset,
                            innerTranslate = slideProgress * innerOffset;
                        swiper.slides[ i ].querySelector( ".image-bg" ).style.transform =
                            "translateX(" + innerTranslate + "px) ";
                    }
                } );
            },
            slideChange : function ( swiper ) {
                var $this = this;
                swiper.on( "slideChange", start );


                function start() {

                    //--> Slider before changes
                    let contentOld = dsn_slider.find( ".dsn-slider-content .dsn-active" );
                    let numOld = contentOld.data( "dsn-id" );

                    //--> Slider current change
                    var slider = $( swiper.slides[ swiper.activeIndex ] );


                    let id = slider.data( "dsn-id" );
                    if ( numOld === id ) return;
                    dsn_slider.find( "[data-dsn=\"video\"] video" ).each( function () {
                        this.pause();
                    } );
                    let v = $( this.slides[ this.activeIndex ] ).find( "[data-dsn=\"video\"] video" );
                    if ( v.length > 0 ) v[ 0 ].play();


                    //--> Content Old
                    let content_letterOld = contentOld.find( ".dsn-chars-wrapper" );
                    contentOld.removeClass( "dsn-active-cat" );

                    //--> Content New
                    let contentNew = dsn_slider.find( ".dsn-slider-content [data-dsn-id=\"" + id + "\"]" );
                    let content_letterNew = contentNew.find( ".dsn-chars-wrapper" );


                    let $isRight = numOld > id;

                    let tl = new TimelineLite();

                    tl.staggerFromTo(
                        dsnGrid.randomObjectArray( content_letterOld, 0.3 ),
                        0.3,
                        $this.showText().title,
                        $this.hideText( $isRight ).title,
                        0.1,
                        0,
                        function () {
                            dsn_slider.find( ".dsn-slider-content .slide-content" ).removeClass( "dsn-active" );
                            dsn_slider.find( ".dsn-slider-content .slide-content" ).removeClass( "dsn-active-cat" );

                            contentNew.addClass( "dsn-active" );
                            contentNew.addClass( "dsn-active-cat" );
                        },
                    );


                    tl.staggerFromTo(
                        dsnGrid.randomObjectArray( content_letterNew, speed ),
                        speed,
                        $this.hideText( $isRight ).title,
                        $this.showText().title,
                        0.1,
                        "-=.8",
                    );


                }
            },
            showText : function () {
                return {
                    title : {
                        autoAlpha : 1,
                        x : "0%",
                        scale : 1,
                        rotation : 0,
                        ease : Elastic.easeInOut,
                        yoyo : true,

                    },
                    subtitle : {
                        autoAlpha : 1,
                        y : "0%",
                        ease : Elastic.easeOut,
                    },
                };
            },
            hideText : function ( $isRigth ) {
                let x = "-90%";
                if ( $isRigth ) x = "90%";
                return {
                    title : {
                        autoAlpha : 0,
                        x : x,
                        rotation : 8,
                        scale : 1.2,
                        ease : Elastic.easeOut,
                        yoyo : true,
                    },
                    subtitle : {
                        autoAlpha : 0,
                        y : x,
                        ease : Elastic.easeOut,
                    },
                };
            },
            touchStart : function ( swiper ) {
                swiper.on( "touchStart", function () {
                    let swiper = this;
                    for ( let i = 0; i < swiper.slides.length; i++ ) {
                        swiper.slides[ i ].style.transition = "";
                    }
                } );
            },
            setTransition : function ( swiper ) {
                swiper.on( "setTransition", function ( speed ) {
                    let swiper = this;
                    for ( let i = 0; i < swiper.slides.length; i++ ) {
                        swiper.slides[ i ].style.transition = speed + "ms";
                        swiper.slides[ i ].querySelector( ".image-bg" ).style.transition =
                            speed + "ms";
                    }
                } );
            },
            swiperObject : function () {
                return new Swiper( ".dsn-slider .slide-inner", {
                    speed : 1500,
                    allowTouchMove : true,
                    resistanceRatio : 0.65,
                    navigation : {
                        nextEl : ".dsn-slider .control-nav .next-container",
                        prevEl : ".dsn-slider .control-nav .prev-container",
                    },
                    pagination : {
                        el : ".dsn-slider .footer-slid .control-num span",
                        type : "custom",
                        clickable : true,
                        renderCustom : function ( swiper, current, total ) {
                            return dsnGrid.numberText( current );
                        },
                    },
                    on : {
                        init : function () {
                            this.autoplay.stop();
                            dsn_slider.find( "[data-dsn=\"video\"] video" ).each( function () {
                                this.pause();
                            } );
                        },
                        imagesReady : function () {
                            let v = $( this.slides[ this.activeIndex ] ).find( "[data-dsn=\"video\"] video" );
                            if ( v.length > 0 ) v[ 0 ].play();
                        },
                    },
                } );

            },


            run : function () {
                if ( dsn_slider.length <= 0 ) return;
                this.initSlider();
                var swiper = this.swiperObject();
                this.progress( swiper );
                this.touchStart( swiper );
                this.setTransition( swiper );
                this.slideChange( swiper );


                if ( $( ".nav-slider" ).length <= 0 ) return;
                // // Navigation Slider
                let navSliderOptions = {
                    speed : 1500,
                    slidesPerView : 3,
                    centeredSlides : true,
                    touchRatio : 0.2,
                    slideToClickedSlide : true,
                    direction : "vertical",
                    resistanceRatio : 0.65,

                };
                let navSlider = new Swiper( ".nav-slider", navSliderOptions );

                //
                // // Matching sliders
                swiper.controller.control = navSlider;
                navSlider.controller.control = swiper;

            },
        };
    }


    function viewAllWork() {
        const $view = $( ".view-all" );
        if ( $view.length <= 0 ) return;
        const $classes = "dsn-show-work",
            $classes_active = "dsn-active",
            $classes_active_enter = "dsn-active-enter",
            $classes_active_leve = "dsn-active-leve"
        ;

        $view.on( "click", function () {
            body.toggleClass( $classes );
        } );


        const $nav_list = $( ".nav-work-box" ),
            $Items = $nav_list.find( ".work-item" ),
            $nav_box_img = $( ".nav-work-img-box" );

        $Items.each( function ( $index ) {
            let _that = $( this );
            _that.attr( "data-dsn-id", $index );


            let img = _that.find( "img" );
            img.attr( "data-dsn-id", $index );
            if ( _that.hasClass( $classes_active ) ) img.addClass( $classes_active );
            $nav_box_img.append( img );

        } );

        $Items.on( "mouseenter", function () {

            let $this = getObjectImg( $( this ) );
            if ( $this.hasClass( $classes_active ) || body.hasClass( "dsn-ajax-effect" ) ) return;
            $Items.removeClass( $classes_active );
            $( this ).addClass( $classes_active );

            let $active = $nav_box_img.find( "." + $classes_active );

            $nav_box_img.find( "img" )
                        .removeClass( $classes_active )
                        .removeClass( $classes_active_enter )
                        .removeClass( $classes_active_leve );

            $active.addClass( $classes_active_leve );
            $this.addClass( $classes_active + " " + $classes_active_enter );
        } );

        function getObjectImg( $this ) {
            let id = $this.data( "dsn-id" );
            return $nav_box_img.find( "img[data-dsn-id=\"" + id + "\"]" );
        }


    }

    function dsnAjax( $off ) {

        const text_main_root = "main.main-root";
        const _classAnimate = "dsn-effect-animate";
        const text_e_img = "[data-dsn-ajax=\"img\"]";
        var isAjax = true;

        return {
            main_root : $( text_main_root ),
            ajax_click : $( "a.effect-ajax " ),
            isEffectAjax : function () {
                return !body.hasClass( "dsn-ajax" );
            },
            ajaxLoad : function () {
                var $parent = this;
                if ( $off ) {
                    this.ajax_click.off( "click" );
                }


                this.ajax_click.on( "click", function ( e ) {
                    if ( $parent.isEffectAjax() ) return;
                    e.preventDefault();


                    var _that = $( this );
                    var url = _that.attr( "href" );
                    var _type = _that.data( "dsn-ajax" );
                    if ( url.indexOf( "#" ) >= 0 || url === undefined ) {
                        return;
                    }


                    if ( !isAjax ) return;
                    isAjax = false;
                    effectScroller().locked();


                    $parent.ajaxLoaderElemnt( true );


                    if ( _type === "slider" ) {
                        $parent.ajaxSlider( _that, url );
                    } else if ( _type === "list" ) {
                        $parent.ajaxList( _that, url );
                    } else if ( _type === "next-project" ) {
                        $parent.ajaxNextProject( _that, url );
                    } else if ( _type === "blog" ) {
                        $parent.ajaxBlog( _that, url );
                    } else if ( _type === "next" ) {
                        $parent.ajaxNext( _that, url );
                    } else if ( _type === "work" ) {
                        $parent.ajaxWork( _that, url );
                    } else {
                        $parent.ajaxNormal( url );
                    }


                } );

            },

            ajaxSlider : function ( $e, url ) {
                let $parent = this;

                let
                    active = $e.parents( ".slide-content" ),
                    id = active.data( "dsn-id" ),
                    img = $( ".dsn-slider .slide-item[data-dsn-id=\"" + id + "\"] .cover-bg" ).first();

                let _url = url;
                if ( _url !== undefined ) {

                    TweenMax.to( ".project-metas , .nav-slider ,.footer-slid ,.view-all , .dsn-all-work ", 0.8, {
                        autoAlpha : 0,
                        scale : 0.8,
                        // y: 50,
                        onComplete : function () {
                            img.removeClass( "hidden" );
                            img.find( "img" ).addClass( "hidden" );
                            $parent.createElement( img, _url, $( ".dsn-root-slider" ) );
                        },
                    } );
                }


            },
            ajaxList : function ( $e, url ) {
                let $parent = this;

                let
                    img = $( ".nav-work-img-box img.dsn-active" ).first();


                let _url = url;
                if ( _url !== undefined ) {
                    TweenMax.to( ".nav-work-box .list-main", 0.8, {
                        autoAlpha : 0,
                        onComplete : function () {
                            $parent.createElement( img, _url );
                            setTimeout( function () {
                                body.removeClass( "dsn-show-work" );
                            }, 1000 );

                        },
                    } );
                }
            },
            ajaxNextProject : function ( $e, url ) {
                let $parent = this;
                let
                    active = $e.parents( ".next-project" ),
                    img = active.find( ".bg-image" ).first();

                let _url = url;
                if ( _url !== undefined ) {

                    TweenMax.to( "footer", 0.8, { autoAlpha : 0, y : -50 } );
                    TweenMax.staggerTo( active.find( ".project-title" ).find( "span , h5" ), 0.8, {
                        autoAlpha : 0,
                        y : -50,

                    }, 0.1, function () {
                        $parent.createElement( img, _url, active.find( ".bg" ) );
                    } );
                }
            },
            ajaxBlog : function ( $e, url ) {
                let $parent = this;
                let
                    active = $e.parents( ".post-list-item" ),
                    img = active.find( ".bg" ).first();

                let _url = url;
                if ( _url !== undefined ) {


                    TweenMax.to( img.find( "img" ), 0.8, {
                        scale : 1,
                        height : "100%",
                        top : 0,
                        y : "0%",
                    } );


                    TweenMax.to( ".post-list-item-content", 0.8, {
                        autoAlpha : 0,
                        scale : 0.8,
                        onComplete : function () {
                            $parent.createElement( img.find( "img" ), _url );
                        },
                    } );
                }
            },
            ajaxWork : function ( $e, url ) {
                let img = $e.find( "img" );
                img.removeClass( "hidden" );
                let $parent = this;

                TweenMax.to( img, 0.8, {
                    scale : 1,
                    height : "100%",
                    top : 0,
                    y : "0%",
                    onComplete : function () {

                        $parent.createElement( img, url );
                    },
                } );


            },


            createElement : function ( $e, url, $target, $letter, $targetLtter ) {
                let $parent = this;
                let container = $( "<div class=\"active-ajax-e\"></div>" );
                container.css( {
                    position : "fixed",
                    width : "100%",
                    height : "100%",
                    top : 0,
                    left : 0,
                    zIndex : 999,
                    visibility : "hidden",
                    opacity : 0,
                } );
                container.css( "background-color", body.css( "background-color" ) );
                var img_move = $parent.addElement( container, $e, $target );

                body.append( container );


                let dealy = 0;
                let speed = .5;
                TweenMax.to( container, 1, {
                    autoAlpha : 1,
                    ease : Power4.easeInOut,
                    onComplete : CompleteShowImage,
                } );


                function CompleteShowImage() {
                    body.removeClass( _classAnimate );
                    $parent.loader( url, function ( $e, responseText, jqXHR ) {
                        var img = $( text_e_img );
                        if ( img.length <= 0 ) {

                            // return;
                            TweenMax.to( [ container, img_move ], 1, {
                                width : 0,
                                autoAlpha : 0,
                                delay : 1,
                                ease : Expo.easeIn,
                                onStart : function () {
                                    effectScroller().unlocked();
                                    reloadAjax();
                                },
                                onComplete : function () {
                                    body.addClass( _classAnimate );
                                    setTimeout( function () {
                                        container.remove();
                                    }, 500 );

                                },
                            } );
                            return false;

                        }


                        img = img.first();
                        var position = img.offset();
                        if ( position === undefined ) {
                            position = {
                                top : 0,
                                left : 0,
                            };
                        }
                        dealy = .8;
                        speed = 1;
                        TweenMax.to( img_move, 1, {
                            top : position.top,
                            left : position.left,
                            width : img.width(),
                            height : img.height(),
                            objectFit : "cover",
                            borderRadius : 0,
                            onComplete : function () {
                                TweenMax.to( container, speed, {
                                    height : 0,
                                    onComplete : function () {
                                        effectScroller().unlocked();
                                        $parent.showAnimate();

                                    },
                                } );
                                TweenMax.to( img_move, speed, {
                                    autoAlpha : 0,
                                    delay : dealy,
                                    onComplete : function () {
                                        container.remove();
                                    },
                                } );
                            },
                        } );


                    } );
                }

            },
            addElement : function ( container, $e, $target ) {
                if ( $e === undefined || $e.length <= 0 ) return undefined;


                if ( $target === undefined || $target.length <= 0 ) {
                    $target = $e;
                }

                let $section = $e.clone();
                let position = $target[ 0 ].getBoundingClientRect();
                if ( position === undefined ) {
                    position = {
                        left : 0,
                        top : 0,
                    };
                }
                $section.css( {
                    position : "absolute",
                    display : "block",
                    transform : "",
                    transition : "",
                    objectFit : "cover",
                } );
                $section.css( dsnGrid.getBoundingClientRect( $target[ 0 ] ) );
                container.append( $section );
                return $section;
            },

            ajaxNormal : function ( url ) {
                var _that = this;
                var elemnt_ajax = $( "<div class=\"class-ajax-loader\"></div>" );
                elemnt_ajax.css( {
                    position : "fixed",
                    left : 0,
                    top : 0,
                    width : "100%",
                    height : "100%",
                    backgroundColor : "#960C09",
                    zIndex : 900199,
                    "-webkit-transform" : "translateY(100%)",
                    "-ms-transform" : "translateY(100%)",
                    transform : "translateY(100%)",
                } );
                body.append( elemnt_ajax );
                var height_d = $( document ).height() - wind.height() - 150;
                var s_t = wind.scrollTop();
                if ( s_t < height_d ) {
                    TweenMax.fromTo( this.main_root, 1, {
                        y : 0,
                    }, {
                        y : -150,
                        ease : Expo.easeIn,
                    } );

                }


                TweenMax.to( elemnt_ajax, 1, {
                    y : 0,
                    ease : Expo.easeIn,
                    onComplete : function () {
                        _that.loader( url, function () {
                            dsnGrid.scrollTop( 0, 1 );
                            effectScroller().unlocked();
                        } );
                    },
                } );
            },
            hideAnimate : function () {
                TweenMax.set( $( dataAttr.animateTextAjax ), { autoAlpha : 0, y : -50 } );
            },
            showAnimate : function () {
                TweenMax.staggerTo( $( dataAttr.animateTextAjax ), 1, { autoAlpha : 1, y : 0 }, 0.2 );
            },

            loader : function ( url, callback ) {
                var _that = this;
                body.removeClass( "dsn-effect-animate" );
                this.main_root.load( url + " " + text_main_root + " > *", function ( responseText, textStatus, jqXHR ) {
                    var $elemnt = $( this );
                    _that.hideAnimate();

                    if ( textStatus === "error" ) {
                        window.location = url;
                        return;
                    }
                    _that.ajaxTitle( url );

                    history.pushState( null, null, url );
                    setTimeout( function () {
                        _that.animateAjaxEnd();

                        if ( callback !== undefined ) {
                            callback( $elemnt, responseText, jqXHR );
                        }
                        isAjax = true;
                    }, 500 );

                } );
            },
            animateAjaxEnd : function () {
                var _that = this;
                _that.main_root.css( "transform", "" );
                let ajax_section = $( ".class-ajax-loader" );

                TweenMax.fromTo( ajax_section, 1, {
                    y : "0%",
                }, {
                    y : "-100%",
                    ease : Expo.easeIn,
                    onComplete : function () {
                        ajax_section.remove();
                        _that.ajaxLoaderElemnt();
                        _that.showAnimate();
                    },
                    delay : 1,
                } );
                reloadAjax( true );


            },


            ajaxNext : function ( $e, url ) {
                var img_move = $( ".dsn-imgs[data-dsn-next=\"blog\"]" );
                var $parent = this;
                if ( img_move.length <= 0 ) {
                    $parent.ajaxNormal( url );
                    return;
                }
                TweenMax.set( img_move, {
                    autoAlpha : 1,
                    zIndex : 99999999,
                } );
                TweenMax.to( img_move, 1, {
                    top : 0,
                    ease : Expo.easeInOut,
                    onComplete : function () {
                        $( "[data-dsn-header=\"blog\"]" ).css( "width", "100%" );
                        $parent.createElement( img_move, url );
                    },
                } );


            },
            ajaxTitle : function ( url ) {
                $( "title" ).load( url + " title", "", function ( data ) {
                    document.title = $( this ).text();
                } );
                var admin_bar = $( "#wpadminbar" );
                if ( admin_bar.length > 0 ) {
                    admin_bar.load( url + " #wpadminbar", "", function ( data ) {
                        admin_bar.html( $( this ).html() );
                    } );
                }
            },
            ajaxLoaderElemnt : function ( $isShow ) {
                var $class = "dsn-ajax-effect";
                if ( $isShow )
                    body.addClass( $class );
                else
                    body.removeClass( $class );
            },


        };
    }

    /**
     *  -   event will be triggered by doing browser action such as
     *  a click on the back or forward button
     */
    function effectBackForward() {
        wind.on( "popstate", function ( e ) {
            $( "main.main-root" ).load( document.location + " main.main-root > *", function () {
                reloadAjax( true );
                effectScroller().unlocked();
            } );
        } );
    }

    /**
     *  Function Click Navigation Bar
     */
    function navBar() {

        var menu = $( ".menu-icon" );


        $( ".site-header .custom-drop-down > a" ).on( "click", function () {
            return false;
        } );

        wind.on( "load", function () {

            const site_heaer = $( ".site-header nav > ul" );
            if ( site_heaer.length <= 0 ) return;
            let ul = site_heaer[ 0 ].outerHTML;
            ul = $( ul );
            ul.attr( "class", "nav__list" );
            ul.find( "li.custom-drop-down" ).attr( "class", "nav__list-dropdown" );
            ul.find( "li" ).addClass( "nav__list-item" );
            let hedaerMobile = $( ".header-top .nav .nav__content" );
            if ( hedaerMobile !== undefined ) {
                hedaerMobile.prepend( ul );
            }

            const $nav_active = "nav-active";

            menu.on( "click", function () {
                body.toggleClass( $nav_active );
            } );

            $( ".nav__list-item:not(.nav__list-dropdown) " ).on( "click", function () {
                body.removeClass( "nav-active" );
            } );

            $( ".nav__list-dropdown > a" ).on( "click",
                function ( e ) {
                    e.preventDefault();
                    var _that = $( this ).parent();
                    var dispaly = _that.find( "ul" ).css( "display" );
                    $( ".nav__list-dropdown" ).find( "ul" ).slideUp( "slow" );
                    if ( dispaly !== "block" ) {
                        _that.find( "ul" ).slideDown( "slow" );
                    }

                },
            );


        } );

        wind.on( "scroll", function () {

            var bodyScroll = wind.scrollTop(),
                headerSmall = $( ".site-header , .header-top" )

            ;
            var $ofContent = $( ".page-content" ).offset();
            var $top = 70;
            if ( $ofContent !== undefined ) {
                $top = $ofContent.top;
            }
            if ( bodyScroll > $top ) {

                headerSmall.addClass( "header-stickytop" );
                $( ".sections" ).addClass( "body-pt" );

            } else {

                headerSmall.removeClass( "header-stickytop" );
                $( "body" ).css( "paddingTop", 0 );
            }
        } );

        var text_menu = $( ".header-top .header-container .menu-icon .text-menu" );
        if ( text_menu.length <= 0 ) return;
        var text_button = text_menu.find( ".text-button" );
        var text_open = text_menu.find( ".text-open" );
        var text_close = text_menu.find( ".text-close" );


        dsnGrid.convertTextWord( text_button, text_button, true );
        dsnGrid.convertTextWord( text_open, text_open, true );
        dsnGrid.convertTextWord( text_close, text_close, true );


    }

    /**
     *  - the function that move the cursor of an input element to the end
     *
     * @param $off
     *      $off is true stop event listener
     *
     */
    function mouseCirMove( $off ) {
        const $elemnet = ".cursor";
        if ( effectScroller().isMobiles() ) {
            // $elemnet.css('display' , 'none');
            return;
        }


        if ( $off !== undefined && $off === true ) {
            cursorEffect();
            return;
        }

        if ( $( "body" ).hasClass( "dsn-large-mobile" ) )
            return;

        dsnGrid.mouseMove( $elemnet );

        cursorEffect();

        function cursorEffect() {

            dsnGrid.elementHover( $elemnet, "a.link-pop , a > img", "cursor-view" );
            dsnGrid.elementHover( $elemnet, ".close-wind", "cursor-close" );
            dsnGrid.elementHover( $elemnet, "a:not(> img) , .dsn-button-sidebar,  button", "cursor-link" );
        }


    }



    /**
     *
     *  - Create an high quality justified gallery
     *    of image
     *
     */
    function gallery() {
        var galleryPortfolio = $( ".gallery-portfolio" );

        if ( galleryPortfolio.length < 1 )
            return;

        galleryPortfolio.justifiedGallery( {
            rowHeight : 300,
            margins : 15,
        } );

        galleryPortfolio.magnificPopup( {
            delegate : "a",
            type : "image",
            closeOnContentClick : false,
            closeBtnInside : false,
            mainClass : "mfp-with-zoom", // this class is for CSS animation below
            gallery : {
                enabled : true,
            },
            zoom : {
                enabled : true,
                duration : 300, // don't foget to change the duration also in CSS
                easing : "ease-in-out", // CSS transition easing function
                opener : function ( element ) {
                    return element.find( "img" );
                },

            },
            callbacks : {
                open : function () {
                    // Will fire when this exact popup is opened
                    // this - is Magnific Popup object
                    $( "html" ).css( { margin : 0 } );
                },
                close : function () {
                    // Will fire when popup is closed
                },
                // e.t.c.
            },

        } );
    }

    function LoadingPage() {

        const filter = $( ".filtering" );
        const gallery = $( ".gallery" );
        /* isotope
                  -------------------------------------------------------*/
        var $gallery = gallery.isotope( {
            // options
            itemSelector : ".item",
            transitionDuration : "0.5s",
        } );

        /* filter items on button click
            -------------------------------------------------------*/
        filter.on( "click", "button", function () {

            var filterValue = $( this ).attr( "data-filter" );

            $gallery.isotope( {
                filter : filterValue,
            } );

        } );


        filter.on( "click", "button", function () {
            $( this ).addClass( "active" ).siblings().removeClass( "active" );
            let sc = wind;
            if ( effectScroll.isScroller( true ) )
                sc = effectScroll.getScrollbar();

            setTimeout( function () {
                TweenLite.to( sc, 1.5, {
                    scrollTo : $gallery.offset().top - 150, ease :
                    Expo.easeInOut,
                } );
            }, 500 );

        } );

        $gallery.find( "video" ).each( function () {
            this.pause();
            let $this = $( this );
            $this.parents( ".item" ).find( "> a" ).on( "mouseenter", function () {

                $( this ).parents( ".item" ).find( "video" )[ 0 ].play();
            } ).on( "mouseleave", function () {
                $( this ).parents( ".item" ).find( "video" )[ 0 ].pause();
            } );
        } );
    }

})( jQuery );


function SliderProject() {

    $( ".slider-project .swiper-container" ).each( function ( $index ) {

        new Swiper( this, {
            slidesPerView : "auto",
            spaceBetween : 60,
            navigation : {
                nextEl : $( this ).parents( ".slider-project" ).find( ".slider-button-next" ),
                prevEl : $( this ).parents( ".slider-project" ).find( ".slider-button-prev" ),
            },
            pagination : {
                el : $( this ).parents( ".slider-project" ).find( ".swiper-pagination" ),
                type : "fraction",
            },
        } );
    } );

}


/**
 * Attr data overlay
 */
function data_overlay() {
    $( "[data-overlay-color]" ).each( function ( $index ) {
        var _that = $( this );
        var _color = dsnGrid.removeAttr( _that, "data-overlay-color" );
        _that.addClass( "dsn-overlay-" + $index );
        $( "body" ).append( "<style>.dsn-overlay-" + $index + "[data-overlay]:before{background: " + _color + ";}</style>" );
    } );
}


/**
 *
 * Function set background image from data background
 *
 */
function background() {

    var cover = $( ".cover-bg, section , [data-image-src]" );
    cover.each( function () {
        var attr = $( this ).attr( "data-image-src" );

        if ( typeof attr !== typeof undefined && attr !== false ) {
            $( this ).css( "background-image", "url(" + attr + ")" );
        }

    } );
}


/**
 *
 * slick Slider Client
 *
 */
function slick_client( wind ) {
    var client_curs = $( ".client-curs" );
    if ( client_curs.length > 0 ) {
        client_curs.slick( {
            slidesToShow : 1,
            slidesToScroll : 1,
            arrows : true,
            infinite : true,
            nextArrow : "<i class=\"fas fa-angle-right\"></i>",
            prevArrow : "<i class=\"fas fa-angle-left\"></i>",
            cssEase : "cubic-bezier(.9, .03, .41, .49)",
            speed : 700,
        } );

        if ( wind.width() > 991 ) {
            dsnGrid.parallaxMoveElemnt( client_curs.find( ".fas.fa-angle-right" ), 25 );
            dsnGrid.parallaxMoveElemnt( client_curs.find( ".fas.fa-angle-left" ), 25 );
        }


    }


}

function initMap() {
    var map_id = document.getElementById( "map" );
    var map_scropt_id = document.getElementById( "map_api" );


    if ( map_id === null ) return;
    // Styles a map in night mode.
    if ( map_scropt_id === null ) {
        var GOOGLE_MAP_KEY = "AIzaSyAmqHkfy3zQlkOVokyZLgElK6nKZREG8ds";

        var script = document.createElement( "script" );
        script.type = "text/javascript";
        script.id = "map_api";
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAP_KEY; //& needed
        document.body.appendChild( script );
    }

    setTimeout( function () {
        try {
            var map_att = $( "#map" );
            var lat = map_att.data( "dsn-lat" );
            var leg = map_att.data( "dsn-len" );
            var zoom = map_att.data( "dsn-zoom" );

            var letLeng = new google.maps.LatLng( lat, leg );
            var map = new google.maps.Map( map_id, {
                center : {
                    lat : lat,
                    lng : leg,
                },
                zoom : zoom,
                styles : [
                    {
                        "featureType" : "all",
                        "elementType" : "labels.text.fill",
                        "stylers" : [ {
                            "saturation" : 36,
                        },
                            {
                                "color" : "#000000",
                            },
                            {
                                "lightness" : 40,
                            },
                        ],
                    },
                    {
                        "featureType" : "all",
                        "elementType" : "labels.text.stroke",
                        "stylers" : [ {
                            "visibility" : "on",
                        },
                            {
                                "color" : "#000000",
                            },
                            {
                                "lightness" : 16,
                            },
                        ],
                    },
                    {
                        "featureType" : "all",
                        "elementType" : "labels.icon",
                        "stylers" : [ {
                            "visibility" : "off",
                        } ],
                    },
                    {
                        "featureType" : "administrative",
                        "elementType" : "geometry.fill",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 20,
                            },
                        ],
                    },
                    {
                        "featureType" : "administrative",
                        "elementType" : "geometry.stroke",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 17,
                            },
                            {
                                "weight" : 1.2,
                            },
                        ],
                    },
                    {
                        "featureType" : "landscape",
                        "elementType" : "geometry",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 20,
                            },
                        ],
                    },
                    {
                        "featureType" : "poi",
                        "elementType" : "geometry",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 21,
                            },
                        ],
                    },
                    {
                        "featureType" : "road.highway",
                        "elementType" : "geometry.fill",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 17,
                            },
                        ],
                    },
                    {
                        "featureType" : "road.highway",
                        "elementType" : "geometry.stroke",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 29,
                            },
                            {
                                "weight" : 0.2,
                            },
                        ],
                    },
                    {
                        "featureType" : "road.arterial",
                        "elementType" : "geometry",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 18,
                            },
                        ],
                    },
                    {
                        "featureType" : "road.local",
                        "elementType" : "geometry",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 16,
                            },
                        ],
                    },
                    {
                        "featureType" : "transit",
                        "elementType" : "geometry",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 19,
                            },
                        ],
                    },
                    {
                        "featureType" : "water",
                        "elementType" : "geometry",
                        "stylers" : [ {
                            "color" : "#000000",
                        },
                            {
                                "lightness" : 17,
                            },
                        ],
                    },
                ],

            } );
            google.maps.event.addDomListener( window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger( map, "resize" );
                map.setCenter( center );
            } );


            var marker = new google.maps.Marker( {
                position : letLeng,
                animation : google.maps.Animation.BOUNCE,
                icon : "/img/map-marker.png",
                title : "ASL",
                map : map,

            } );
        } catch ( e ) {
            console.log( e );
        }
    }, 1000 );


}



