const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("correctly unrolls a 3X3 square array", function() {
    const squareArray = [
      [1,2,3],
      [8,9,4],
      [7,6,5]
    ];
    const expectedUnrolledArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(unroll(squareArray)).toEqual(expectedUnrolledArray);
  });

});
