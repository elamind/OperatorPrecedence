//Consider lvalues...

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
parenthesis.toString = function(name, param) {
   return name + ".(" + param + ")";
}
var brackets = new Operator(true, 2, 1);
brackets.toString = function(name, index) {
   return name + "[" + index + "]";
}
var arrow = new Operator(true, 2, 1);
arrow.toString = function(name, property) {
   return name + "->" + property;
}
var dot = new Operator(true, 2, 1);
dot.toString = function(name, property) {
   return name + "." + property;
}

//Level 2 Operators
var logicalNot = new Operator(false, 1, 2);
logicalNot.toString = function(param) {
   return "!" + param;
}
var bitwiseNot = new Operator(false, 1, 2);
bitwiseNot.toString = function(param) {
   return "~" + param;
}
var increment = new Operator(false, 1, 2);
increment.toString = function(param) {
   if(Math.random() > 0.5) {
      return "++" + param;
   } else {
      return param + "++";
   }
}
var decrement = new Operator(false, 1, 2);
decrement.toString = function(param) {
   if(Math.random() > 0.5) {
      return "--" + param;
   } else {
      return param + "--";
   }
}
var unaryPlus = new Operator(false, 1, 2);
unaryPlus.toString = function(param) {
   return "+" + param;
}
var unaryMinus = new Operator(false, 1, 2);
unaryMinus.toString = function(param) {
   return "-" + param;
}
var dereference = new Operator(false, 1, 2);
dereference.toString = function(param) {
   return "*" + param;
}
var typecast = new Operator(false, 2, 2);
typecast.toString = function(type, param) {
   return "(" + type + ")" + param;
}
var sizeof = new Operator(false, 1, 2);
sizeof.toString = function(param) {
   return "sizeof(" + param + ")";
}

//Level 3
var multiply = new Operator(true, 2, 3);
multiply.toString = function(a, b) {
   return a + "*" + b;
}
var divide = new Operator(true, 2, 3);
divide.toString = function(a, b) {
   return a + "/" + b;
}
var modulus = new Operator(true, 2, 3);
modulus.toString = function(a, b) {
   return a + "%" + b;
}

//Level 4
var add = new Operator(true, 2, 4);
add.toString = function(a, b) {
   return a + "+" + b;
}
var subtract = new Operator(true, 2, 4);
subtract.toString = function(a, b) {
   return a + "-" + b;
}

//Level 5
var bitShiftLeft = new Operator(true, 2, 5);
bitShiftLeft.toString = function(num, shift) {
   return num + " << " + shift;
}
var bitShiftRight = new Operator(true, 2, 5);
bitShiftRight.toString = function(num, shift) {
   return num + " >> " + shift;
}

//Level 6
var less = new Operator(true, 2, 6);
less.toString = function(a, b) {
   return a + " < " + b;
}
var lessThanEqual = new Operator(true, 2, 6);
lessThanEqual.toString = function(a, b) {
   return a + " <= " + b;
}
var greater = new Operator(true, 2, 6);
greater.toString = function(a, b) {
   return a + " > " + b;
}
var greaterThanEqual = new Operator(true, 2, 6);
greaterThanEqual.toString = function(a, b) {
   return a + " >= " + b;
}

//Level 7
var equal = new Operator(true, 2, 7);
equal.toString = function(a, b) {
   return a + " == " + b;
}
var notEqual = new Operator(true, 2, 7);
notEqual.toString = function(a, b) {
   return a + " != " + b;
}

//Level 8
var bitAnd = new Operator(true, 2, 8);
bitAnd.toString = function(a, b) {
   return a + " & " + b;
}

//Level 9
var bitXor = new Operator(true, 2, 9);
bitXor.toString = function(a, b) {
   return a + " ^ " + b;
}

//Level 10
var bitOr = new Operator(true, 2, 10);
bitOr.toString = function(a, b) {
   return a + " | " + b;
}

//Level 11
var logicalAnd = new Operator(true, 2, 11);
logicalAnd.toString = function(a, b) {
   return a + " && " + b;
}

//Level 12
var logicalOr = new Operator(true, 2, 12);
logicalOr.toString = function(a, b) {
   return a + " || " + b;
}

//Level 13
var ternaryOp = new Operator(false, 3, 13);
ternaryOp.toString = function(a, b, c) {
   return a + "?" + b + ":" + c;
}

//Level 14
var assigns = new Operator(false, 2, 14);
assigns.toString = function(a, b) {
   return a + " = " + b;
}
var addAssigns = new Operator(false, 2, 14);
addAssigns.toString = function(a, b) {
   return a + " += " + b;
}
var subtractAssigns = new Operator(false, 2, 14);
subtractAssigns.toString = function(a, b) {
   return a + " -= " + b;
}
var multiplyAssigns = new Operator(false, 2, 14);
multiplyAssigns.toString = function(a, b) {
   return a + " *= " + b;
}
var divideAssigns = new Operator(false, 2, 14);
divideAssigns.toString = function(a, b) {
   return a + " /= " + b;
}
var modulusAssigns = new Operator(false, 2, 14);
modulusAssigns.toString = function(a, b) {
   return a + " %= " + b;
}
var andAssigns = new Operator(false, 2, 14);
andAssigns.toString = function(a, b) {
   return a + " &= " + b;
}
var xorAssigns = new Operator(false, 2, 14);
xorAssigns.toString = function(a, b) {
   return a + " ^= " + b;
}
var orAssigns = new Operator(false, 2, 14);
orAssigns.toString = function(a, b) {
   return a + " |= " + b;
}
var leftShiftAssigns= new Operator(false, 2, 14);
leftShiftAssigns.toString = function(a, b) {
   return a + " <<= " + b;
}
var rightShiftAssigns= new Operator(false, 2, 14);
rightShiftAssigns.toString = function(a, b) {
   return a + " >>= " + b;
}

//Level 15
var comma = new Operator(true, 2, 15);
comma.toString = function(a, b) {
   return a + ", " + b;
}
