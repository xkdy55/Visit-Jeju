// 헤더 active

$(document).ready(function(){
    $(".h_nav>ul>li").on("mouseenter",function(){
        $("header").addClass("active")
        // $(".h_sub_nav_backgroundBox").css("display","block")
    })
    $("header").on("mouseleave",function(){
        $("header").removeClass("active")
    })
    // 헤더 서브 메뉴 active
      // 메뉴 아이콘 클릭 시
    $(".h_side_nav_menu_icon").on('click', function() {
        $("header").removeClass("active")
        $('.h_side_nav').show();
    });

    // 닫기 버튼 클릭 시
    $('.h_side_nav_escBtn').on('click', function() {
        $('.h_side_nav').hide();
    });
     



$(function() {
    // 메뉴 클릭 시 서브메뉴 토글
    $('.h_side_nav_box > a').on('click', function(e) {
        e.preventDefault(); // 링크 이동 방지

        const $subMenu = $(this).next('.h_side_nav_wrap_sub');

        // 다른 열린 서브 메뉴 닫기
        $('.h_side_nav_wrap_sub').not($subMenu).slideUp();
        
        
        // 클릭한 서브 메뉴 토글
        $subMenu.stop(true, true).slideToggle();
    });
});
    
})


// $(this).css("background-color","#fff");
        // $(this).css("color","#333");





