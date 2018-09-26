module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s+/g,"");
  const firstPos = equation.indexOf("*");
  const secondPos = equation.lastIndexOf("*");
  const endPos = equation.length;
  const a = equation.slice(0, firstPos);
  const b = equation.slice(firstPos + 4, secondPos);
  const c = equation.slice(secondPos + 2, endPos);
  const discriminant = b * b - 4 * a * c;
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);  
  let arr = [x1.toFixed(0), x2.toFixed(0)];
  arr.sort((x1, x2) => x1 - x2);
  return arr;
}