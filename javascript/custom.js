// function helloWorld(fname, lname) {
//     console.log("Hello, " + fname + " " + lname, this)
// }

// var helcat = helloWorld.call({}, "siva", "krishna")

// helcat


function sample() {
    const name = "Siva Krishna"

    return {
        funcOne: function () {
            return "Func One: " + name
        },
        funcTwo: function (customName) {
            return "Func Two: " + customName
        }
    }
}

console.log(sample().funcOne())
console.log(sample().funcTwo("Krishna"))