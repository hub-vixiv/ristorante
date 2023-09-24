/*******************************
 * バーガーボタンの表示・非表示
*/
$(function() {
    $('.open_btn').on('click',function(){// .menuをクリックすると〜
        $('.open_btn').toggleClass('active');
        $('.header_menu').toggleClass('active');

    });
});

/*******************************
 * 出てきたメニューをクリックした時
*/
$(function() {
  $('.nav a').on('click',function(){// .menuをクリックすると〜
      $('.open_btn').toggleClass('active');
      $('.header_menu').toggleClass('active');
    });
  });

/*******************************
 * ヘッダーを途中で表示
 */
$(function() {
    // 変数にクラスを入れる
    var header = $('.header_wrap');
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    if(windowWidth <= 768){
      header.addClass('fixed');
      $('.open_btn').addClass('fixed');
    }else{
      //スクロールしてファーストビューを過ぎるころメニューを表示
      $(window).on('load scroll', function(){
        if($(this).scrollTop() > windowHeight-300) {
          header.addClass('fixed');
          $('.open_btn').addClass('fixed');
        }else{
          header.removeClass('fixed');
          $('.open_btn').removeClass('fixed');
    
        }
      });
    }
  });
  
  
/*******************************
 * トップへ戻るボタンを途中で表示
 */
  $(function() {
    // 変数にクラスを入れる
    var pagetop = $('.to_pagetop');
    //スクロールしてページトップから720に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 600) {
        pagetop.addClass('active');
      }else{
        pagetop.removeClass('active');
      }
    });
    //スクロールしてトップへ戻る
    pagetop.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
  });
  

/*******************************
 * スムーズスクロール
 */
$('a[href*="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top-100;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
  
/****************************
 * ふわっと表示
 */
function scroll_fade_in(){
  $('.fade_item').each(function(){ //fadeupというクラス名が
    var elemPos = $(this).offset().top-0;//要素より、60px上の位置
    var scroll = $(window).scrollTop(); //スクロールした距離
    var windowHeight = $(window).height();//ウィンドウの高さ
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fade_active')
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  scroll_fade_in();

});// ここまで画面をスクロールをしたら動かしたい場合の記述

$(window).on("load", function() {
  $('.fade_onload').fadeIn(2000); 
});