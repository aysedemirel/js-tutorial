// const makeServerRequesEmpty = new Promise((resolve,reject) => {});
/////////////////////////
const myPromise = new Promise((resolve, reject) => {
  let cond;
  if(cond) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
/////////////////////////
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result=>{console.log(result)});
makeServerRequest.catch(error=>{console.log(error)});