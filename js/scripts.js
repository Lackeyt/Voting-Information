$(document).ready(function() {
  $("form#age").submit(function(event) {

    const age = $("#ageSelect").val();
    event.preventDefault()

    if (age === "1") {
      $("#over18").show();
      $("#age").hide();
    } else {
      $("#under18").show();
      $("#age").hide();
    }
  });
});
