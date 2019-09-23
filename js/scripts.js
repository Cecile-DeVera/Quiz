$("#recommendationQuiz").submit(function(event) {

  event.preventDefault();

  var answers = $(this).serializeArray();

  var scores = {
    python: 0,
    javascript: 0,
    csharp: 0,
    ruby: 0,
  };
  for(var answer of answers){
    scores[answer.value] += 1;
  }



  var maxLanguage ="python"
  for(var language in scores){
    if(scores[language] > score[maxLanguage]){
      maxLanguage = language;
    }
  }

$("#recommendationQuiz").css('display', 'none');
$(".result#"+maxLanguage).css('display', 'block');

});
