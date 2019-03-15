// var arr = ["enlists","google","inlets","banana" ,"istlen"]
// var listen = "listen"
// var arr_final = []
// var listen1 = listen.split("")
// var listen2 = listen1.sort()
// arr.forEach(function(currentValue,index,array){
//     var arr1 = (currentValue);
//     var arr2 = arr1.split("")
//     var arr3 = arr2.sort()
//     //console.log(arr3)
    
    
//     if (listen2 == arr3){
//         arr_final.push(arr3.join())
//     }
// })

// console.log(arr_final)

var arr = ["enlists","google","inlets","banana" ,"istlen"]

function compaire(word){
let split_word = word 
.split("")
.sort()
.join("");

for(var i = 0; i<Array.length;i++){
    let curr_element = array[i]
    .split("")
    .sort()
    .join("")
    if (curr_element == split_word){
        arr.push(array[i]);

    }


}
console.log(split_word)
}

compaire("listen");