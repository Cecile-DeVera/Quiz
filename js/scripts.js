$(document).ready(function() {
 $("#recommendationQuiz").submit(function(event) {
  event.preventDefault();


//Get all answers from the form
  var answers = $(this).serializeArray();

//Keeping track of language scores
  var scores = {
    "python": 0,
    "javascript": 0,
    "csharp": 0,
    "ruby": 0,
  };

//Add 1 for each of the language chosen
  for(var answer of answers){
    scores[answer.value] += 1;
  }

  var maxLanguage = "python";
  for(var language in scores){
    if(scores[language] > scores[maxLanguage]){
        maxLanguage = language;
    }
  }

$(document).ready(function(){
  $("button").click(function(){
    location.reload(true);
  });
});

  $("#recommendationQuiz").css('display', 'none');
  $(".result#" + maxLanguage).css('display', 'block');
 });
});
