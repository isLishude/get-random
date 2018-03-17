const { string, number, uuid } = require("../dist/index");
const { expect } = require("chai");

describe("test string", function() {
  it("return a string", function() {
    expect(string()).to.be.a("string");
  });
  it("string's length is 6", function() {
    expect(string()).to.have.lengthOf(6);
  });
  it("string's length is 10", function() {
    expect(string(10)).to.have.lengthOf(10);
  });
});

describe("test number", function() {
  it("if param is string return 0", function() {
    expect(number("error", "error"))
      .to.be.a("number")
      .that.equal(0);
  });
  it("if param is out of safe number range return 0", function() {
    expect(number(0, 2 ** 53))
      .to.be.a("number")
      .that.equal(0);
  });
  it("get a number", function() {
    expect(number(2, 10)).to.be.a("number");
  });
  it("num in [2,10) ", function() {
    const num = number(2, 10);
    expect(num >= 2 && num <= 10).to.be.true;
  });
  it("param min > max ", function() {
    const num = number(10, 2);
    expect(num >= 2 && num <= 10).to.be.true;
  });
  it("if min === max return min", function() {
    const min = 100;
    const max = 100;
    const res = number(min, max);
    expect(res === min).to.be.true;
  });
});

describe("get uuid", function() {
  it("get 21 letter", function() {
    expect(uuid())
      .to.a("string")
      .that.have.lengthOf(21);
  });

  it("get 8 string", function() {
    expect(uuid(8))
      .to.a("string")
      .that.have.lengthOf(8);
  });
});
