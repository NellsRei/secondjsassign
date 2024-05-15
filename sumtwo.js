// Question Two
 
// Write a JavaScript function that takes a comma-separated numbers as input and returns the sum of those numbers. The function should validate the input:
 
// If any non-numeric characters are present (except commas), treat those values as zero.
// If the input string is empty, return zero.


function add(val){
    whole = []
   let a = val.toString().split(",")
   //console.log(a)

   for(let i of a){
        i = +i
        if (isNaN(i)){
        i = 0
        }
        // if(i == " "){      //serves the same purpose
        //     i = 0
        // }
        whole.push(i)
   }
   console.log(whole)

   return whole.reduce((acc,curr) => acc + +curr,0 )  //the second + is a uniry 

    // if(value in values !=Number){
    //     return 0
    // }else if(values==" "){
    //     return 0
    // }

    // return sum(values)

}
let val= "1,0,1,0,1,1,1,1, "
console.log(add(val))