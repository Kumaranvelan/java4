let x = [9,1,6,2,8,4,10,28,5,12]
for(let i=0; i<x.length; i++)
for(let j=i+1; j<x.length; j++)
 if(x[i] > x[j]) {
 let y = x[i];
  x[i] = x[j];
  x[j] = y;
 
console.log(x)
 }
 document.write("The Ascending order of X =" + x)