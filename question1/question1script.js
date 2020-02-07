
$(function() {
  $("#slider").slider();
  $("#slider").slider('option',{min: 0, max: 100});
  
});

$("#answer1").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 25){
    $(".answerSpace").text("thats correct! About 25 percent of jobs in tech are filled by women")
  } else if(answer < 25)
});
