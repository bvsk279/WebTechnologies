// // console.log("Helloworld")

// a = 2
// console.log(a)
// console.log(window)

// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolved!")
//     }, 500)
// })

// promise.then(function (hi) { console.log("Helloworld") })
// console.log("End!")



// (function () {
//     if (confirm("hey is it ok?")) {
//         console.log("Confirmed!")
//     } else {
//         console.log("Not Confirmed")
//     }
// })()


var sample = function () {
    return function two() {
        return function three() {
            return "Four"
        }
    }
}
console.log(sample()()())

var hello = function () {
    var helcat = () => {
        return "Hello"
    }
}
console.log()