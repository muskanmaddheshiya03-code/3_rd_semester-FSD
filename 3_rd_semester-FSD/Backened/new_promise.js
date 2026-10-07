function GetData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
}
let promise = GetData(123);
const GetPromise=()=>{
    return new Promise((resolve, reject) => {
        console.log("i m a promise");
        resolve("Promise resolved successfully!");
        reject("Promise rejected!");
    });
    let promise = GetPromise();
    promise.then(() => {
        console.log("promise is fullfilled");
        
