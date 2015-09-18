function Ticket(movieRun, showTime, age) {
  this.movieRun = movieRun;
  this.showTime = showTime;
  this.age = parseInt(age);
}

Ticket.prototype.movieRunPrice = function() {
  var baseRunPrice = 0;

  if (this.movieRun === "first-run") {
    return baseRunPrice + 5;
  } else {
    return baseRunPrice + 4;
  }
};


Ticket.prototype.agePrice = function() {
  var baseAgePrice = 0;

  if (this.age <= 11) {
    return baseAgePrice + 3;
  } else if (this.age >= 65) {
    return baseAgePrice + 4;
  } else {
    return baseAgePrice + 5;
  }
};

Ticket.prototype.showTimePrice = function() {
  var baseShowTimePrice = 0;

  if (this.showTime === "morning") {
    return baseShowTimePrice + 3;
  } else if (this.showTime === "matinee") {
    return baseShowTimePrice + 4;
  } else {
    return baseShowTimePrice + 5;
  }
};

Ticket.prototype.totalPrice = function() {
  return this.movieRunPrice() + this.agePrice() + this.showTimePrice();
};


$(document).ready(function() {
  $("form#ticket-choice").submit(function(event) {
    event.preventDefault();

    var movieRunInput = $('input[name=movie]:checked').val();
    var showTimeInput = $('input[name=showtime]:checked').val();
    var ageInput = parseInt($('input#age').val());

    var newTicket = new Ticket(movieRunInput, showTimeInput, ageInput);

    $("#total-price").text("$" + newTicket.totalPrice() + ".00");


    $(".show-price").show("fold");
  });
});
