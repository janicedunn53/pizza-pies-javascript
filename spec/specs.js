describe('Pizza', function() {
  it("creates a new pizza order with the given specifications", function() {
    var testPizza = new Pizza(3, "Queen", "Medium");
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppingCombo).to.equal("Queen");
    expect(testPizza.pieSize).to.equal("Medium");
  });
});
