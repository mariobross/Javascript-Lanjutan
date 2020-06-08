function map(array, func){
    var result = [];
    for(i = 0; i<array.length; i++){
        result.push(func(array[i]));
    }
    return result;
}

function questionable(func){
    return function(array){
        return map(array, func);
    }
}

g = function(x){return x*x};
f = questionable(g);
h = questionable([1,2,3]);
console.log(questionable(g,[1,2,3]));
console.log(questionable([1,2,3], g));
console.log(f([1,2,3]))
console.log(g(h));
// console.log(h(g));


function catcher(x){
    try{
        console.log('A')
        call(x)
        console.log('B')
    }catch(e){
        console.log('C');
    }finally{
        console.log('D');
    }
}

console.log(catcher('D'));

// person={
//     name: john,
//     age : 18
// }

person2 = {
    'name': 'john',
    'age' : 18
}

person3={
    name: 'john',
    age : 18
}
console.log( person2.name, person3.name);

var x = 100;
function blah1(){
    x = 5;
    console.log(x);
}
function blah2(){
    var x = 6;
    console.log(x);
}

blah1();
blah2();
console.log(x);


var arr=[];
for(var i=0; i<10; i++){
    var f = function(){
        console.log(i);
    }
    arr.push(f);
}
for(var j = 1; j < arr.length; j++){
    arr[j]();
}

// var arrs=[];
// for(var c=0; c<10; i++){
//     var p = function(c){
//         return function(){
//             console.log(c)
//         }
//     };
//     arrs.push(p);
// }
// for(var d = 1; d < arrs.length; d++){
//     if(arrs[d] != arrs[d-1]){
//         arrs[d]();
//     }
// }

// console.log(arrs);

mahasiswa = function(name){
    this.name = name;
}
mahasiswa.prototype.age = 18;
alvin = new mahasiswa("alvin");
console.log(alvin.name, alvin.age);
mahasiswa.prototype.age = 20;
berto = new mahasiswa("berto");
console.log(alvin.name, alvin.age);
console.log(berto.name, berto.age);


Person = function(name){
    this.name = name;
}
Person.prototype.age = 18;
Alvian = new Person("Alvian");
Batax = new Person("Batax");
Batax.age = 20;

if(Alvian.hasOwnProperty('name')){
    console.log('The first condition was true')
}
if(Batax.hasOwnProperty('name')){
    console.log('The second condition was true')
}
if(Alvian.hasOwnProperty('age')){
    console.log('The third condition was true')
}
if(Batax.hasOwnProperty('age')){
    console.log('The fourth condition was true')
}


