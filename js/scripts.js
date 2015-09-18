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

Pizza.prototype.toppingComboPrice = function() {
  var baseToppingComboPrice = 0;

  if (this.toppingCombo === "Italian Combo") {
    return baseToppingComboPrice + 5;
  } else if (this.toppingCombo === "Veggie Combo") {
    return baseToppingComboPrice + 6;
  } else {
    return baseToppingComboPrice + 7;
  }
};

Pizza.prototype.quantityPrice = function() {
  var baseQuantityPrice = 3;
  var totalQuantityPrice = this.quantity * baseQuantityPrice;
  return totalQuantityPrice;
}
