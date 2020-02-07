/* global $*/



$(function() {
  $("#slider").slider();
  $("#slider").slider('option',{min: 0, max: 100});
  
});

$("button").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
});

$("#start").click(function() {
  
});