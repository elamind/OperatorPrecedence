//creates an expression
//Change probabilities of certain operators
var NUM_OPS = 6;

function getOp() {
   //returns an operator randomly (uses probability consts)
}

function getNewExpression(exp, op) {
   //switch using arity
   //possibly call a function to determine whether to add parens
}

function createExpression() {
   //use NUMOPS number of operators
   var exp = ""; 
   for(int i = 0; i < NUM_OPS; i++) {
      var op = getOp();
      getNewExpression(exp, op);
   }
   return exp;
}
