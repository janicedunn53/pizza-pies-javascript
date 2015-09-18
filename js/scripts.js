function Pizza(quantity, toppingCombo, pieSize) {
  this.quantity = parseInt(quantity);
  this.toppingCombo = toppingCombo;
  this.pieSize = pieSize;
}

Pizza.prototype.pieSizePrice = function() {
  var basePieSizePrice = 0;

  if (this.pieSize === "medium") {
    return basePieSizePrice + 5;
  } else {
    return basePieSizePrice + 6;
  }
}

Pizza.prototype.toppingComboPrice = function() {
  var baseToppingComboPrice = 0;

  if (this.toppingCombo === "italian-combo") {
    return baseToppingComboPrice + 5;
  } else if (this.toppingCombo === "veggie-combo") {
    return baseToppingComboPrice + 6;
  } else {
    return baseToppingComboPrice + 7;
  }
}

Pizza.prototype.quantityPrice = function() {
  var baseQuantityPrice = 3;
  var totalQuantityPrice = this.quantity * baseQuantityPrice;
  return totalQuantityPrice;
}

Pizza.prototype.totalPrice = function() {
  return this.pieSizePrice() + this.toppingComboPrice() + this.quantityPrice();
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var pieSizeInput = $('input[name=size]:checked').val();
    var toppingComboInput = $('input[name=combo]:checked').val();
    var quantityInput = parseInt($('input#quantity').val());

    var newPizza = new Pizza(pieSizeInput, toppingComboInput, quantityInput);

    $("#total-price").text("$" + newPizza.totalPrice() + ".00");

    $(".show-price").show();
  });
});
