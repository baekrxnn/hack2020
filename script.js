/* global $*/



$(function() {
  $("#slider").slider();
  $("#slider").slider('option',{min: 0, max: 100});
  
});

$("button").click(function() {
  $("button").hide();
  let answer = $("#slider").slider();
  console.log(answer);
});

$("#start").click(function() {
  
});