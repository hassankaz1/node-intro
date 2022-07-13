const fs = require('fs');
const axios = require('axios');
const argv = process.argv;


const cat = path => {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          // handle possible error
          console.error(`Error reading ${path}:
          Error: ENOENT: no such file or directory, open ${path}`);
          // kill the process and tell the shell it errored
          process.exit(1);
        }
        // otherwise success
        console.log(`file contents: ${data}`);
      });
}

// cat(argv[2])

async function webCat(url) {
    try {
        const res = await axios.get(url)
        console.log(res.data)
    } catch(err) {
    // handle error
    console.log(`Error fetching ${path}: ${err}`);
    process.exit(1);
  }
}

const argument = argv[2]


if (argument.slice(0, 4) === 'http') {
    webCat(argument);
  } else {
    cat(argument);
}


