const a = document.getElementById ("a");
const b = document.getElementById ("b");
const c = document.getElementById ("c");
const x1 = document.getElementById ("x1")
const x2 = document.getElementById ("x2")

function calculate(){

       let sqr = Math.sqrt(parseFloat(b.value) * parseFloat(b.value) - 4 * parseFloat(a.value) * parseFloat(c.value))
      document.getElementById ('x1').value = parseFloat(-b.value) + sqr / (2 * parseFloat(a.value))
     document.getElementById ('x2').value = parseFloat(-b.value) - sqr / (2 * parseFloat(a.value))

     
      
}
    

   

