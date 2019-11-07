const asyncCallback = function(cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "hello World!");
    } else {
      cb(new Error("Hello Error!"));
    }
  }, 2000);
};

asyncCallback((err, msg) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("message", msg);
  }
});