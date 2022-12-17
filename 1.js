// let obj = {
//     uname:'1',
//     age:12,
//     height:156
// }
// let objArr = Object.entries(obj).filter(([k]) => 'uname'.includes(k))
// Object.fromEntries(objArr)
// console.log(objArr)
const randomString = () => Math.random().toString(36).slice(2)
console.log(randomString())