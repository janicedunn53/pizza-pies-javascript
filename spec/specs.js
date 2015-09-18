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

});
