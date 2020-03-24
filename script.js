$(function(){

  $('.slider-btn').click(function(){
    var activeIndex=$('.slider-image').index($('.active-image'));
    if($(this).hasClass('right-btn')){
      $('.slider-image').removeClass('active-image');
      if(activeIndex===$('.slider-image').length-1){
        $('.slider-image').eq(0).addClass('active-image');
      }
      else{
        $('.slider-image').eq(activeIndex+1).addClass('active-image');
      }
    }
    else{
      $('.slider-image').removeClass('active-image');
      if(activeIndex===0){
        $('.slider-image').eq($('.slider-image').length-1).addClass('active-image');
      }
      else{
        $('.slider-image').eq(activeIndex-1).addClass('active-image');
      }
    }

  });


  $('#top-btn').click(function(){
    $('html,body').animate({'scrollTop':'0'},300);
  });

  $('.top-btns').click(function(){
    var clickedBtn =$(this).attr('data-href');
    var distance =$(clickedBtn).offset().top;
    $('html,body').animate({'scrollTop':distance},500);
  });

  $('#learnmore-toggle').click(function(){
    if($('.learnmore-contents').hasClass('active')){
      $('.learnmore-contents').removeClass('active');
      $('.learnmore-contents').slideUp(200);
      $('#learnmore-toggle').text('もっと知りたい人はこちらをクリック')
    }
    else{
      $('.learnmore-contents').addClass('active');
      $('.learnmore-contents').slideDown(200);
      $('#learnmore-toggle').text('FAQを閉じる')
    }
  });

  $('.faq-item').click(function(){
    if($(this).find('.answer').hasClass('active')){
      $(this).find('.answer').removeClass('active');
      $(this).find('.answer').slideUp(200);
    }
    else{
      $(this).find('.answer').addClass('active');
      $(this).find('.answer').slideDown(200);
    }
  });  
});