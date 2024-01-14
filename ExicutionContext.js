// //ekhane return korar jonno closure execution context toire hobe
// function getTopic(){
//     var msg='This is execution context'
//     console.log(msg);
//     return msg
//     }
// const msg=getTopic()
// console.log(msg);


// var topic='This is exec value'
// function getTopic(){
//     return topic
// }
// const value=getTopic()
// console.log(value);

// var a=1
// function one(){
//     console.log(a);
//     function two(){
//         console.log(b); //undefine
//         var b=2
//         function three(d){
//             console.log(c+d); //reference error
//             let c=3
//         }
//         three(5)
//         }
//     two()
//     }
// one()

//Lexical scope exec context
// function greetings(){
//     var msg='Hello world'
// }
// console.log(msg) //referenceError
