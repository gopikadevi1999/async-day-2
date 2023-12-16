// promise using normal

/*const age = parseInt(prompt("Enter a age"));
const promiseEle = new Promise(function(resolve, reject){
    if( age>= 18 ){
        resolve("You are Eligible to vote!");
    }
    else{
        reject(" You are not eligible to vote");
    }
})
//console.log(promiseEle);
promiseEle.then((data) => console.log(data)).catch((error) => console.log(error));*/

// using function promise

/*function promiseEle1() {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are Eligible to vote!");
    } else {
      reject(" You are not eligible to vote");
    }
  });
}
promiseEle1()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));*/

//promise chaining

/*function add(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num + 2), 2000);
    });
}
add(0)
    .then((data1) => {
        console.log(data1);
        return add(data1);
    })
    .then((data2) => {
        console.log(data2);
        return add(data2);
    })
    .then((data3) => {
        console.log(data3);
        return add(data3);
    })
    .then((data4) => {
        console.log(data4);
        return add(data4);
    })
    .then((data5) => {
        console.log(data5);
        return add(data5);
    }).catch((error) => {console.log(error);})*/

//!promise.all()
/*
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise1 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise1 is rejected"), 4000);
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise2 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise2 is rejected"), 4000);
  }
});
const promise3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise3 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise3 is rejected"), 4000);
  }
});
Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/

//!promise.allsettled
/*const promise1 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("Promise1 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise1 is rejected"), 4000);
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise2 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise2 is rejected"), 4000);
  }
});
const promise3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise3 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise3 is rejected"), 4000);
  }
});
const result = Promise.allSettled([promise1,promise2,promise3]).then((data) =>
  data.forEach((result) => console.log(result))
);
*/

//using fetch method

fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((ele) => {
        for (let i = 0; i < ele.length; i++) {
            console.log(ele[i].name.common);
            const div = document.createElement("div");
            div.innerText = `${ele[i].name.common}`
            document.body.append(div);
        }
    });












