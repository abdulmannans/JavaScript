var age = 21
var x = age>=21 ? "You can Enter" : "You are Not Eligble";

console.log(x);

if (true) {
    console.log('sumit');
} else {
    if (5 > 3) {
        console.log('1')
    } else {
        console.log('2')
    }
}

var summit = true ? "sumit" : 5>3 ? '1' : '2'; 
var puzzle = false?false?"free":false?"code":"camp":true?"course":"joke answer";

console.log(puzzle);
console.log(summit);

if(false){
    if(false){
        console.log("free");
    }else{
        if(false){
            console.log("code");
        }else{
            console.log("camp"); 
            
        }
    }
}else{
    if(true){
        console.log("course");
    }else{
        console.log("joke answer");
    }
    
}