console.log(1);
setTimeout(function(){
    console.log(2);
}, 1000);
setTimeout(function(){
    console.log(3);
}, 2000);
setTimeout(function(){
    console.log(4);
}, 0)
console.log(5);
var start = new Date();
while(true){
    var now = new Date();
    if(now - start > 500){
        break;
    }
}
console.log(6);