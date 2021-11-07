const express = require("express");
const router = express.Router();
const request = require("request");
const bitcore = require('bitcore-lib');
const CryptoAccount = require("send-crypto");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const RPC_PORT = process.env.RPC_PORT;

const headers = {
  "content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

router.get("/getblockcount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  console.log(USER)
  console.log(PASS)
  console.log(RPC_PORT)
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getbestblockhash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getconnectioncount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getdifficulty", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockchaininfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getmininginfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getpeerinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getrawmempool", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
  }]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/sendrawtransaction/:serializedtransaction", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${
    req.params.serializedtransaction
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

router.get("/sendrawtransactiontest", async (req, res) => {
  try {
    var privateKey = new bitcore.PrivateKey('a8f58765af5a90bc66064b7b985bb6cc4b0850e9bc771c51e70f2fb1e800fa68');
    var utxo = {
      "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
      "outputIndex" : 0,
      "address" : "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",
      "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",
      "satoshis" : 50000
    };
  
    console.log(privateKey)

    const account = new CryptoAccount(process.env.BTC_PRIVATE_KEY, {
        network: "testnet",
    });
    console.log(await account.address("BTC"));
    console.log(await account.getBalance("BTC"));
    
    const account2 = new CryptoAccount("71040770847d181850a9817db94c6e777f9c0a22ba9016be4c1984012b2720b0", {
      network: "testnet",
    })
    const addr2 = await account2.address("BTC");
    console.log(addr2);
    console.log(await account2.getBalance("BTC"));

    await account.send(addr2, 0.0001, "BTC");
  } catch (err) {
    console.log(err);
  }

  // var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"sendrawtransaction","params":["${
  //   req.params.serializedtransaction
  // }"]}`;
  // var options = {
  //   url: `http://${USER}:${PASS}@127.0.0.1:${RPC_PORT}/`,
  //   method: "POST",
  //   headers: headers,
  //   body: dataString
  // };

  // callback = (error, response, body) => {
  //   if (!error && response.statusCode == 200) {
  //     const data = JSON.parse(body);
  //     res.send(data);
  //   }
  // };
  // request(options, callback);
});

module.exports = router;
