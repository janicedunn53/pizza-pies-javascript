describe('Pizza', function() {
  it("creates a new pizza order with the given specifications", function() {
    var testPizza = new Pizza(3, "italian-combo", "medium");
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppingCombo).to.equal("italian-combo");
    expect(testPizza.pieSize).to.equal("medium");
  });

  it("adds the pieSizePrice method to all pizzas", function() {
    var testPizza = new Pizza(3, "italian-combo", "medium");
    expect(testPizza.pieSizePrice()).to.equal(5);
  });

  it("adds the toppingComboPrice method to all pizzas", function() {
    var testPizza = new Pizza(3, "italian-combo", "medium");
    expect(testPizza.toppingComboPrice()).to.equal(5);
  });

  it("adds the quantityPrice method to all pizza orders", function() {
    var testPizza = new Pizza(3, "italian-combo", "medium");
    expect(testPizza.quantityPrice()).to.equal(9);
  });

  it("creates the total pizza price", function () {
    var testPizza = new Pizza(3, "italian-combo", "medium");
    expect(testPizza.totalPrice()).to.equal(19);
  });
});
