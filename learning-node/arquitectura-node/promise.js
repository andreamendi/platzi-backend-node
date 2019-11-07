const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("hello World!");
        } else {
            reject(new Error("Hello Error!"));
        }
    }, 2000);
    
});

promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log('message', msg))
    .catch(err => console.log('error', err));