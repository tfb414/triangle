function triangleAnalyzer(side1, side2, side3){
    filterImpossibleTriangles.apply(this, arguments);
    return typeOfTriangle.apply(this, arguments);
}

function filterImpossibleTriangles(side1, side2, side3){
    var numberOfSides = arguments.length;
    if(removeImpossibleTriangles(side3, side1, side2, numberOfSides)){
        throw "Error: Triangle cannot exist";
    }
}

function typeOfTriangle(){
    if (isEquilateral.apply(this, arguments)){
        return "equilateral"
    }
    else if(isIsosceles.apply(this,arguments)){
        return "isosceles";
    }
    return "scalene";
}

function isEquilateral(side1, side2, side3) {
    return side1 === side2 && side2 === side3;
}
function isIsosceles(side1, side2, side3) {
    return side1 === side2 || side2 === side3 || side1 === side3;
}
function removeImpossibleTriangles(side3, side1, side2, numberOfSides) {
    return side3 > side1 + side2 || side1 > side2 + side3 || side2 > side1 + side3 || numberOfSides !== 3;
}


