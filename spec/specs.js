describe('Pizza', function() {
  it("creates a new pizza order with the given specifications", function() {
    var testPizza = new Pizza(3, "Italian Combo", "Medium");
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppingCombo).to.equal("Italian Combo");
    expect(testPizza.pieSize).to.equal("Medium");
  });

  it("adds the pieSizePrice method to all pizzas", function() {
    var testPizza = new Pizza(3, "Italian Combo", "Medium");
    expect(testPizza.pieSizePrice()).to.equal(5);
  });

  it("adds the toppingComboPrice method to all pizzas", function() {
    var testPizza = new Pizza(3, "Italian Combo", "Medium");
    expect(testPizza.toppingComboPrice()).to.equal(5);
  });

  it("adds the quantityPrice method to all pizza orders", function() {
    var testPizza = new Pizza(3, "Italian Combo", "Medium");
    expect(testPizza.quantityPrice()).to.equal(9);
  });

  it("creates the total pizza price", function () {
    var testPizza = new Pizza(3, "Italian Combo", "Medium");
    expect(testPizza.totalPrice()).to.equal(19);
  });
});
