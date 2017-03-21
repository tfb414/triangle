
describe('triangleTest', function(){

  it('if 2,2,2 are passed in return "equilateral"', function(){
    expect(triangleTest(2,2,2)).toEqual("equilateral");
  });
  it('if 10,10,10 are passed in return "equilateral"', function(){
    expect(triangleTest(10,10,10)).toEqual("equilateral");
  });
  it('if 3,3,4 are passed in return "isosceles"', function(){
    expect(triangleTest(3,3,4)).toEqual("isosceles");
  });
  it('if 1,2,3 are passed in return "scalene"', function(){
  	expect(triangleTest(1,2,3)).toEqual("scalene");
  });
  it('if 1,2 are passed in return "Error: a triangle must have 3 sides"', function(){
  	expect(function() {triangleTest(1,2)}).toThrow("Error: a triangle must have 3 sides");
  });
  it('if 1,2,0 are passed in return "Error: each side of the triangle must be a positive number"', function(){
    expect(function() {triangleTest(1,2,0)}).toThrow("Error: each side of the triangle must be a positive number");
  });
  it('if 1,2,10 are passed in return "Error: the sum of two sides must be greater than the third"', function(){
    expect(function() {triangleTest(1,2,10)}).toThrow("Error: the sum of two sides must be greater than the third");
  });

});

