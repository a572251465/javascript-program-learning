// const http = require("http");
const {exec} = require("child_process");

// const server = http.createServer((req, res) => {
//   res.end("hello");
// });
// server.listen(3000, () => {
//   console.log("server is running");
//   server.close()
// });

const instance = exec("dir", {cwd: process.cwd()}, (...args) => {
  console.log(args)
});
instance.kill("SIGINT");
instance.on("SIGINT", (...args) => {
  console.log("SIGINT", args)
})

instance.on("close", (...args) => {
  console.log(args)
})

// 此时拿下ctrl + c，会触发SIGINT事件
process.on("SIGINT", (...args) => {
  console.log(args)
  console.log("SIGINT");
  process.exit(0);
});

process.on("close", (...args) => {
  console.log("close")
  console.log(args)
});

// 当触发exit事件时，触发此方法
process.on("exit", (...args) => {
  console.log("exit", args);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM");
})

process.on("SIGUSR1", () => {
  console.log("SIGUSR1");
})


process.on("SIGQUIT", () => {
  console.log("SIGQUIT");
})

process.on("SIGHUP", () => {
  console.log("SIGHUP");
  process.exit(0);
})

process.on("SIGSTOP", () => {
  console.log("SIGSTOP");
})


process.on("SIGKILL", () => {
  console.log("SIGKILL");
});
