$(function(){
  $("ul.subs").hide();
  $("div.main").click(function(){
    $("ul.subs").slideUp();
    $("div.main").removeClass("open");
    if($("+ul",this).css("display")=="none"){
      $("+ul",this).slideDown();
      $(this).addClass("open");
    }
    // 複数を開いた状態にしておくif文前のslideUpも消す
    // else{
    //   $("+ul, this").slideUp();
    // }
  }).mouseover(function(){
    $(this).addClass("rollover");
  }).mouseout(function(){
    $(this).removeClass("rollover");

  });
});
