$(function(){

    // *----- 함수정의 -----*

    // height값 window창 사이즈로 변경 함수
    function HeightResize(){
        var ht = $(window).height();
        // console.log(ht);
    
        $('.bodywrap section').height(ht);
        $('.bodywrap section').parent().height(ht);
        $('.main-slide .img-wrap a').height(ht);
        $('section>div').height(ht);
    }
    // 0.1초 지나고 창크기 변경 함수
    function setTime(){
        setTimeout(function(){
            HeightResize();
        },100);
    }
    function headerColor() {
        alert("hi");
        var chk_data = $(".first-slide").hasClass("swiper-slide-active");
        if (chk_data) {
            $("header>nav.gnb>ul>li>a").removeClass("black");
        }
        else {
             $("header>nav.gnb>ul>li>a").addClass("black");
        }
    }

    // *----- 함수호출 -----*
    HeightResize();
    setTime();

    // 창 리사이즈시
    $(window).on('resize',function(){
        HeightResize();
        // setTime();
    });
    // 스크롤시
    $(window).on('scroll',function(){
        
        HeightResize();
        // setTime();
        
    });
   
});
