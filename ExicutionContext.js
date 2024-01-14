//ekhane return korar jonno closure execution context toire hobe
function getTopic(){
    var msg='This is execution context'
    console.log(msg);
    return msg
    }
const msg=getTopic()
console.log(msg);

