function Pizza(quantity, toppingCombo, pieSize) {
  this.quantity = parseInt(quantity);
  this.toppingCombo = toppingCombo;
  this.pieSize = pieSize;
}

Pizza.prototype.pieSizePrice = function() {
  var basePieSizePrice = 0;

  if (this.pieSize === "Medium") {
    return basePieSizePrice + 5;
  } else {
    return basePieSizePrice + 6;
  }
};
