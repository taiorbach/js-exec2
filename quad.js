function calculate(){

    const num1  = 1
     const num2 = 2
     const num3 = 3

console.log(num1,num2,num3)
const result = (-1 * num2 + Math.sqrt(Math.pow(num2, 2) - (4 * num1 * num3))) / (2 * num1);     
const result2 = (-1 * num2 - Math.sqrt(Math.pow(num2, 2) - (4 * num1 * num3))) / (2 * num1);
      
 console.log(result,result2)
            document.getElementById ('x1').innerHTML = result
             document.getElementById ('x2').innerHTML = result2

     
      
}
    

 
