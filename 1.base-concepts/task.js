function solveEquation(a, b, c) {
  let arr = []; 
  let root = 0; 
  let discriminant = 0;
  discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant < 0){
	  arr = [];
  }
  
  if (discriminant === 0){
	  root = -b / (2 * a);
	  arr[0] = root;
  }
  
  if (discriminant > 0) {
	  root = ((-b + Math.sqrt(discriminant)) / (2 * a));
	  arr[0] = root;
	  root = ((-b - Math.sqrt(discriminant)) / (2 * a));
	  arr[1] = root;
  }
     
  return arr; // array
}

