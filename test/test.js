describe('triangleAnalyzer', function(){
    it('Should return "equilateral" if all sides are equal', function(){
        expect(triangleAnalyzer(2,2,2)).toEqual("equilateral");
    });
    it('Should return "isosceles" if two of the three sides are equal', function(){
        expect(triangleAnalyzer(3,3,4)).toEqual("isosceles");
    });
    it('Should return "scalene" if none of the sides are equal', function(){
        expect(triangleAnalyzer(1,2,3)).toEqual("scalene");
    });
    it('Should return "Error: Triangle cannot exist" if only two sides are given', function(){
        expect(function() {triangleAnalyzer(1,2)}).toThrow("Error: Triangle cannot exist");
    });
    it('Should return "Error: Triangle cannot exist" if any sides have negative lengths or equal zero', function(){
        expect(function() {triangleAnalyzer(1,2,0)}).toThrow("Error: Triangle cannot exist");
    });
    it('Should return "Error: Triangle cannot exist" if one side has a length that is greater than the sum of the other two', function(){
        expect(function() {triangleAnalyzer(1,2,10)}).toThrow("Error: Triangle cannot exist");
    });
    it('Should return "Error: Triangle cannot exist" if there are more than 3 sides', function(){
        expect(function() {triangleAnalyzer(1,2,3,4)}).toThrow("Error: Triangle cannot exist");
    });
    it('Should return "Error: Triangle cannot exist" if any of the sides are zero', function(){
        expect(function() {triangleAnalyzer(1,1,0)}).toThrow("Error: Triangle cannot exist");
    });
});