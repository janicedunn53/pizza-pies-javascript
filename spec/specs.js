describe('Ticket', function() {
  it("creates a new Ticket with the given specifications", function() {
    var testTicket = new Ticket("first-run", "matinee", 21);
    expect(testTicket.movieRun).to.equal("first-run");
    expect(testTicket.showTime).to.equal("matinee");
    expect(testTicket.age).to.equal(21);
  });

  it("adds the movieRunPrice method to all tickets", function() {
    var testTicket = new Ticket("first-run", "matinee", 21);
    expect(testTicket.movieRunPrice()).to.equal(5);
  });

  it("adds the showTimePrice method to all tickets", function() {
    var testTicket = new Ticket("first-run", "matinee", 21);
    expect(testTicket.showTimePrice()).to.equal(4);
  });

  it("adds the agePrice method to all tickets", function() {
    var testTicket = new Ticket("first-run", "matinee", 21);
    expect(testTicket.agePrice()).to.equal(5);
  });

  it("create total movie price", function() {
    var testTicket = new Ticket("first-run", "matinee", 21);
    expect(testTicket.totalPrice()).to.equal(14);
  });
});
