const generateInvoice = (invoice) => {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(invoice);
    const options = {
      hostname: "invoice-generator.com",
      port: 443,
      path: "/",
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    let data = [];
    const req = https.request(options, (res) => {
      res
        .on("data", (chunk) => {
          data.push(chunk);
        })
        .on("end", () => {
          const buffer = Buffer.concat(data);
          resolve(buffer);
        });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.write(postData);
    req.end();
  });
};

module.exports = [generateInvoice];
