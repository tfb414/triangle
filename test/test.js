
describe('triangleAnalyzer', function(){

  it('if 2,2,2 are passed in return "equilateral"', function(){
    expect(triangleAnalyzer(2,2,2)).toEqual("equilateral");
  });
  it('if 10,10,10 are passed in return "equilateral"', function(){
    expect(triangleAnalyzer(10,10,10)).toEqual("equilateral");
  });
  it('if 3,3,4 are passed in return "isosceles"', function(){
    expect(triangleAnalyzer(3,3,4)).toEqual("isosceles");
  });
  it('if 1,2,3 are passed in return "scalene"', function(){
  	expect(triangleAnalyzer(1,2,3)).toEqual("scalene");
  });
  it('if 1,2 are passed in return "Error: Triangle cannot exist"', function(){
  	expect(function() {triangleAnalyzer(1,2)}).toThrow("Error: Triangle cannot exist");
  });
  it('if 1,2,0 are passed in return "Error: Triangle cannot exist"', function(){
    expect(function() {triangleAnalyzer(1,2,0)}).toThrow("Error: Triangle cannot exist");
  });
  it('if 1,2,10 are passed in return "Error: Triangle cannot exist"', function(){
    expect(function() {triangleAnalyzer(1,2,10)}).toThrow("Error: Triangle cannot exist");
  });

});

