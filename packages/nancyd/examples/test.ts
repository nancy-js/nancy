import { createConfig } from "../src/createConfig.js";
import { nancyd } from "../src/index.js";


const config = createConfig({
  executablePath: "nancyd",
  chainId: "nancy-1",
});


await nancyd.init(config, {
  defaultDenom: "frida",
  overwrite: true,
});

await nancyd.keys.add(config, "frida", {
  recover:
    "gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat",
});

await nancyd.genesis.addGenesisAccount(
  config,
  "frida",
  ["100000000000frida"],
  {}
);

await nancyd.genesis.gentx(config, "frida", "1000000frida", {});

await nancyd.genesis.collectGentxs(config);

await nancyd.genesis.bank.addBalance(
  config,
  "nancy14cx5a2wf2l8t5sjm65wjxsjvx3f54cytkahal9",
  ["1frida", "999curie"]
);

const proc = nancyd.start(config, {
  grpcWeb: {},
  api: {
    enable: true,
    enabledUnsafeCors: true,
  },
});
proc.subscribe((message) => {
  console.log(message);
});
// Bun.serve({
//   fetch(req, server) {
//     // upgrade the request to a WebSocket
//     if (server.upgrade(req)) {
//       return; // do not return a Response
//     }
//     return new Response("Upgrade failed :(", {
//       status: 500,
//     });
//   },
//   websocket: {
//     message(ws, message) {},
//     open(ws) {
//       console.log("open", ws);

//       proc.subscribe((message) => {
//         console.log(message);
//         ws.send(JSON.stringify(message));
//       });
//     },
//   }, // handlers
//   port: 8081,
// });
