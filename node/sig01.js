const {spawn} = require("child_process");

const instance = spawn("dir", [], {shell: true, cwd: process.cwd()});

const chunks = [];
instance.stdout.on("data", (data) => {
  chunks.push(data);
});

instance.stdout.on("end", () => {
  console.log(chunks.length)
  console.log(Buffer.concat(chunks).toString(), "--------------------");
})

instance.stderr.on("data", (data) => {
  console.log(data.toString());
});

instance.on("close", (code) => {
  console.log("close");
  console.log(code);
});
