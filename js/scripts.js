// back end logic
//front end logic


$(document).ready(function() {
  $("form#user-input").submit(function(event) {

    event.preventDefault();
    var favColor = $("input#color-answer").val();
    var favMovie = $("input#movie-answer").val();
    var favTV = $("input#tv-answer").val();
    var faves = [favColor, favMovie, favTV];
    faves.pop();
    faves.reverse();
    faves.push(favTV);
    $("#user-faves").show();
    $("#output").text(faves[0]);
    $("#output1").text(faves[1]);
    $("#output2").text(faves[2]);
  });
});
