function triangleAnalyzer(side1, side2, side3){
    filterImpossibleTriangles.apply(this, arguments);
    return typeOfTriangle(side1,side2,side3);
}
function filterImpossibleTriangles(side1, side2, side3){
    var numberOfSides = arguments.length;
    if(removeImpossibleTriangles(side1, side2, side3, numberOfSides)){
        throw "Error: Triangle cannot exist";
    }
}
function typeOfTriangle(side1, side2, side3){
    if (trueIfEquilateral(side1, side2, side3)){
        return "equilateral"
    }
    else if(trueIfIsosceles(side1, side2, side3)){
        return "isosceles";
    }
    return "scalene";
}
function trueIfEquilateral(side1, side2, side3) {
    return side1 === side2 && side2 === side3;
}
function trueIfIsosceles(side1, side2, side3) {
    return side1 === side2 || side2 === side3 || side1 === side3;
}
function removeImpossibleTriangles(side1, side2, side3, numberOfSides) {
    return side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2 || numberOfSides !== 3 || side1 === 0 ||side2;
}