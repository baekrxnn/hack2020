/* global $*/
window.counter = 0 ;
$(function() {
  $("#slider").slider();
  $("#slider").slider('option',{min: 0, max: 100});
  
});

$("#answer1").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 25){
    $(".answerSpace").text("thats correct! Only About 25 percent of jobs in tech are filled by women, while they make up 47 percent of the workforce");
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 25) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer2").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 3){
    $(".answerSpace").text("thats correct! As of 2016, only About 3 percent of tech jobs at facebook are filled by people who identify as Hispanic");
    $('.dropBtn').show();
    $(".moveON").show();
  } else if(answer < 3) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer3").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 18){
    $(".answerSpace").text("thats correct! As of 2016, only About 18 percent of tech jobs at Google (worldwide!) are filled by people who identify as women");
    $('.dropBtn').show();
    $(".moveON").show();
  } else if(answer < 18) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer4").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 41){
    $(".answerSpace").text("thats correct! As of 2016, Companies are only interviewing men 41% of the time for tech jobs");
    $('.dropBtn').show();
    $(".moveON").show();
  } else if(answer < 41) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer5").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 93){
    $(".answerSpace").text("thats correct! Although better than many other industires, women make $0.93 per dollar a man in similar roles make");
    $('.dropBtn').show();
    $(".moveON").show();
  } else if(answer < 93) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer6").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 6){
    $(".answerSpace").text("thats correct! Women are offered 6% less in salary compared to a man applying for the same position");
    $('.dropBtn').show();
    $(".moveON").show();
  } else if(answer < 6) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer7").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 77){
    $(".answerSpace").text("thats correct! San Francisco's rent is 277% over the national average");
    // info: san francisco's average rent (monthly) is $4500; national average is $1625 per month.
    $('.dropBtn').show();
    $(".moveON").show();
  } else if(answer < 77) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

("#answer7").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 77){
    $(".answerSpace").text("thats correct! San Francisco's rent is 277% over the national average");
    // info: san francisco's average rent (monthly) is $4500; national average is $1625 per month.
    $('.dropBtn').show();
    $(".moveON").show();
  } else if(answer < 77) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$('.dropBtn').click(function() {
  $('.dropInfo').show();
});
