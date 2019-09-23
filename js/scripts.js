$("#recommendationQuiz").submit(function(event) {
  event.preventDefault();

  var answers = $(this).serializeArray();

  console.log(answers);

});
