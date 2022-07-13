const fs = require('fs');
const argv = process.argv;


const cat = path => {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          // handle possible error
          console.error(`Error reading ${path}: ${err}`);
          // kill the process and tell the shell it errored
          process.exit(1);
        }
        // otherwise success
        console.log(`file contents: ${data}`);
      });
}

cat(argv[2])