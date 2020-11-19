const fs = require("fs");
const IpfsHttpClient = require("ipfs-http-client");
const { urlSource, globSource } = IpfsHttpClient;
const ipfs = IpfsHttpClient({
  host: "18.138.102.196",
  port: "5002",
  protocol: "http",
});

async function uploadFolder() {
  const file = await ipfs.add(globSource("./xiaoxiaole", { recursive: true }));
  for await (x of file) {
    console.log(x);
  }
}

async function uploadFile() {
  const file = await ipfs.add({
    path: "test.mp4",
    content: fs.readFileSync("./test.mp4"),
  });
   console.log(file);
}

async function read(cid) {
  const file = await ipfs.cat(cid);
  for await (x of file) {
    console.log("-------read---------", x.toString());
  }
}

// read('Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD')
