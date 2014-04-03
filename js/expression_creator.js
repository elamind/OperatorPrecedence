//changes length of expression (by number of operators)
var NUM_OPS = 6;

//Groups of Operators
var group1 = [parentheses, brackets, arrow, dot];
var group2 = [logicalNot, bitwiseNot, dereference];
var group3 = [increment, decrement];
var group4 = [add, subtract];
var group5 = [multiply, divide, modulus];
var group6 = [bitShiftLeft, bitShiftRight];
var group7 = [bitAnd];
var group8 = [bitOr];
var group9 = [bitXor];
var group10 = [logicalAnd];
var group11 = [logicalOr];
var group12 = [less, lessThanEqual];
var group13 = [greater, greaterThanEqual];
var group14 = [notEqual, equal];
var group15 = [unaryPlus, unaryMinus, typecast, sizeof, ternaryOp, assigns,
   addAssigns, subtractAssigns, multiplyAssigns, divideAssigns, modulusAssigns,
   andAssigns, xorAssigns, orAssigns, leftShiftAssigns, rightShiftAssigns, comma   ];
var groups = [group1, group2, group3, group4, group5, group6, group7, group8,
   group9, group10, group11, group12, group13, group14, group15];

function pickGroup(group) {
   return group[Math.random()*group.length];
}

function getOp() {
   return pickGroup(groups[Math.random()*15+1]);
}

function getNewExpression(exp, op) {
   //create an expression using op, then somehow add it into exp
   //possibly call a function to determine whether to add parens
   switch(op.arity) {
      case 1:
         break;
      case 2:
         break;
      case 3:
         break;
   }
}

function createExpression() {
   var exp = ""; 

   for(int i = 0; i < NUM_OPS; i++) {
      var op = getOp();
      exp = getNewExpression(exp, op);
   }

   return exp;
}
