const fs = require("fs").promises;

const filename = process.argv[2];

async function challenge() {
  const data = await (await fs.readFile(filename)).toString();

  console.log(data);
}

challenge();
