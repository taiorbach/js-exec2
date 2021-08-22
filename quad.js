function calculate(){

     const num1  = document.getElementById ("a").value;
     const num2 = document.getElementById ("b").value;
     const num3 = document.getElementById ("c").value;
     
console.log(num1,num2,num3)
const result = parseFloat((-1 * num2 + Math.sqrt(Math.pow(num2, 2) - (4 * num1 * num3))) / (2 * num1));     
const result2 = parseFloat((-1 * num2 - Math.sqrt(Math.pow(num2, 2) - (4 * num1 * num3))) / (2 * num1));
      
 console.log(result,result2)
            document.getElementById ('x1').innerHTML = result
             document.getElementById ('x2').innerHTML = result2

     
      
}
    

 
