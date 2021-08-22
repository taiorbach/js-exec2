const a = document.getElementById ("a");
const b = document.getElementById ("b");
const c = document.getElementById ("c");


function calculate(){

       let sqr = Math.sqrt(-b^2-4*a*c)
            x1s   = (-b) + sqr / (2 * a)
             x2s  = (-b) - sqr / (2 * a)

            document.getElementById ('x1').value = x1s
             document.getElementById ('x2').value = x2s
     
      
}
    

   

