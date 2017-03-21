function triangleTest(side1, side2, side3){
  invalidTriangleTester.apply(this, arguments);
  invalidTriangleTester(side1, side2, side3);
  return typeOfTriange(side1, side2, side3);
}
function invalidTriangleTester(side1, side2, side3){
  for (var i in arguments){
    if(Math.sign(arguments[i]<=0)){
        throw "Error: each side of the triangle must be a positive number";
    }
  }
    function impossibleTriangle() {
        return side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2;
    }
    if (arguments.length !== 3){
        throw "Error: a triangle must have 3 sides";
  }
    else if(impossibleTriangle()){
        throw "Error: the sum of two sides must be greater than the third";
  }
}

function typeOfTriange(side1, side2, side3){

    function allSameLengths() {
        return side1 === side2 && side2 === side3;
    }

    function twoSameLengths() {
        return side1 === side2 || side2 === side3 || side1 === side3;
    }

    if (allSameLengths()){
        return "equilateral"
    }
    else if(twoSameLengths()){
        return "isosceles";
    }
    else{
        return "scalene"
    }
  }

triangleTest(1,2);
