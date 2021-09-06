// function test() {
//     setTimeout(function () {
//         console.log('setTimeout');​
//     },0)

//     // const p = ​ new Promise(function (resolve) {  ​
//     //     console.log('promise');​
//     //     resolve(true)​
//     // }).then(function () {
//     //     ​
//     //     console.log('then');​
//     // })

//     ​console.log('console');
    

// test();

const promise = new Promise((resolve, reject) => {
    // console.log(1)
    resolve()
    console.log(1)
    console.log(2)
})
promise.then(() => {
    console.log(3)
})
console.log(4)
// }