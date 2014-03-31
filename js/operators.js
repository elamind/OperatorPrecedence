//constructor for an Operator
//Each Operator must have 3 properties: Associativity, Arity, and Level
//Associativity can be either left to right or right to left 
//Arity is the number of arguments the operator takes (1, 2, or 3)
//Level is the level of priority the operator has in order of operations
function Operator(lToR, arr, lev) {
   this.leftToRight = lToR;
   this.arity = arr;
   this.level = lev;
}

//Each operator has a method that returns the correct syntax for an expression
//Make sure to check whether each operator can take only a variable on either side

//Level 1 Operators
var parentheses = new Operator(true, 2, 1);
var brackets = new Operator(true, 2, 1);
var arrow = new Operator(true, 2, 1);
var dot = new Operator(true, 2, 1);

//Level 2 Operators
var logicalNot = new Operator(false, 1, 2);
var bitwiseNot = new Operator(false, 1, 2);
var increment = new Operator(false, 1, 2);
var decrement = new Operator(false, 1, 2);
var unaryPlus = new Operator(false, 1, 2);
var unaryMinus = new Operator(false, 1, 2);
var dereference = new Operator(false, 1, 2);
var typecast = new Operator(false, 1, 2);
var sizeof = new Operator(false, 1, 2);

//Level 3
var multiply = new Operator(true, 2, 3);
var divide = new Operator(true, 2, 3);
var modulus = new Operator(true, 2, 3);

//Level 4
var add = new Operator(true, 2, 4);
var subtract = new Operator(true, 2, 4);

//Level 5
var bitShiftLeft = new Operator(true, 2, 5);
var bitShiftRight = new Operator(true, 2, 5);

//Level 6
var less = new Operator(true, 2, 6);
var lessThanEqual = new Operator(true, 2, 6);
var greater = new Operator(true, 2, 6);
var greaterThanEqual = new Operator(true, 2, 6);

//Level 7
var equal = new Operator(true, 2, 7);
var notEqual = new Operator(true, 2, 7);

//Level 8
var bitAnd = new Operator(true, 2, 8);

//Level 9
var bitXor = new Operator(true, 2, 9);

//Level 10
var bitOr = new Operator(true, 2, 10);

//Level 11
var logicalAnd = new Operator(true, 2, 11);

//Level 12
var logicalOr = new Operator(true, 2, 12);

//Level 13
var ternaryOp = new Operator(false, 3, 13);

//Level 14
var assigns = new Operator(false, 2, 14);
var addAssigns = new Operator(false, 2, 14);
var subtractAssigns = new Operator(false, 2, 14);
var multiplyAssigns = new Operator(false, 2, 14);
var divideAssigns = new Operator(false, 2, 14);
var modulusAssigns = new Operator(false, 2, 14);
var andAssigns = new Operator(false, 2, 14);
var xorAssigns = new Operator(false, 2, 14);
var orAssigns = new Operator(false, 2, 14);
var leftShiftAssigns= new Operator(false, 2, 14);
var rightShiftAssigns= new Operator(false, 2, 14);

//Level 15
var comma = new Operator(true, 2, 15);
