//creates an expression
//Groups of Operators
//() [] -> .
//! ~ *
//++ --
//+ -
//* / %
//>> <<
//&
//|
//^ 
//&&
//||
//Rare Group: , ?: + - (type) sizeof = += -= /= %= &= ^= |= >>= <<=
//Change probabilities of certain operators
var NUM_OPS = 6;

function getOp() {
   switch(Math.random()*12) {
   }
}

function getNewExpression(exp, op) {
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
