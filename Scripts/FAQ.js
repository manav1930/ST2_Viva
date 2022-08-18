$(document).ready(function(){
  $(".ques:first").click(function(){
      $(".ans:first").slideToggle();
});
$(".ques:first").toggle(
  function(){$(".ques:first").css({"color": "#008C95", "font-weight":"bold" });},
  function(){$(".ques:first").css({"color": "black", "font-weight": "normal"});
});
$("ul li:nth-child(3)").click(function(){
  $("ul li:nth-child(4)").slideToggle();
});
$("ul li:nth-child(3)").toggle(
    function(){$("ul li:nth-child(3)").css({"color": "#008C95", "font-weight": "bold"});},
    function(){$("ul li:nth-child(3)").css({"color": "black", "font-weight":"normal"});
  });

$("ul li:nth-child(5)").click(function(){
  $("ul li:nth-child(6)").slideToggle();
});
$("ul li:nth-child(5)").toggle(
  function(){$("ul li:nth-child(5)").css({"color": "#008C95", "font-weight": "bold"});},
    function(){$("ul li:nth-child(5)").css({"color": "black", "font-weight":"normal"});
});

$("ul li:nth-child(7)").click(function(){
  $("ul li:nth-child(8)").slideToggle();
});
$("ul li:nth-child(7)").toggle(
  function(){$("ul li:nth-child(7)").css({"color": "#008C95", "font-weight": "bold"});},
    function(){$("ul li:nth-child(7)").css({"color": "black", "font-weight":"normal"});
});

$("ul li:nth-child(9)").click(function(){
  $("ul li:nth-child(10)").slideToggle();
});
$("ul li:nth-child(9)").toggle(
  function(){$("ul li:nth-child(9)").css({"color": "#008C95", "font-weight": "bold"});},
    function(){$("ul li:nth-child(9)").css({"color": "black", "font-weight":"normal"});
});

$("ul li:nth-child(11)").click(function(){
  $("ul li:nth-child(12)").slideToggle();
});
$("ul li:nth-child(11)").toggle(
  function(){$("ul li:nth-child(11)").css({"color": "#008C95", "font-weight": "bold"});},
    function(){$("ul li:nth-child(11)").css({"color": "black", "font-weight":"normal"});
});
});