// Square code
console.group('Squares');

// const squareSide = 5;
// console.log('The square side measures: ' + squareSide + 'cm');

function squarePerimeter (side) {
    return side * 4;
}
squarePerimeter();
// console.log('The square perimeter is: ' + squarePerimeter + 'cm');

function squareArea(side) {
    return side * side;
};
squareArea();
// console.log('The square Area is: ' + squareArea + 'cm^2');
console.groupEnd();

// Triangle code
console.group('Triangles');
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;

// console.log(
//     'The triangle sides measures: ' 
//     + triangleSide1 
//     + 'cm, ' 
//     + triangleSide2 
//     + 'cm, ' 
//     + triangleBase 
//     + 'cm'
// );

// const triangleHeight =5.5;
// console.log('The triangle height is: ' + triangleHeight + 'cm');

function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
};

//console.log('The triangle perimeter is: ' + trianglePerimeter + 'cm');

function triangleArea(height, base) {
    return (height * base) / 2;
};

//console.log('The triangle Area is: ' + triangleArea + 'cm^2');

console.groupEnd();

// Circle code
console.group('Circle');

// Radio
// const circleRadio = 4;
// console.log('The circle radio is: ' + circleRadio + 'cm');

// Diameter
function circleDiameter(radio) {
    return radio * 2
};

//console.log('The circle diameter is: ' + circleDiameter + 'cm');

// PI
const PI = Math.PI;

// Circumference
function circlePerimeter(radio) {
    const diameter = circleDiameter(radio);
    return diameter * PI;
};

// Area
function circleArea(radio) {
    return (radio * radio) * PI;
};

console.groupEnd();

// Here we interact with the html

// Square

function calculateSquarePerimeter() {
    const input = document.getElementById('squareInput');
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
};

function calculateSquareArea() {
    const input = document.getElementById('squareInput');
    const value = input.value;

    const area = squareArea(value);
    alert(area);
};

// Triangle
function calculateTrianglePerimeter() {
    const input1 = document.getElementById('triangleInput1');
    const value1 = input1.value;

    const input2 = document.getElementById('triangleInput2');
    const value2 = input2.value;

    const base = document.getElementById('base');
    const valueBase = base.value;

    const perimeter = trianglePerimeter(value1, value2, valueBase);
    alert(perimeter);

};

function calculateTriangleArea() {
    const height = document.getElementById('triangleHeight');
    const heightValue = height.value;
    
    const baseArea = document.getElementById('baseArea');
    const baseValue = baseArea.value;

    const area = triangleArea(heightValue, baseValue);
    alert(area);
};



