
const fs = require('fs');
const axios = require('axios');
const argv = process.argv;


const cat = path => {
    let text;
    fs.readFile(path, function(err, data) {
        console.log("______")
        if (err) {
          // handle possible error
          console.error(`Error reading ${path}: ${err}`);
          // kill the process and tell the shell it errored
          process.exit(1);
        }
        text = data;
      });
}

// cat(argv[2])

async function webCat(url) {
    try {
        const res = await axios.get(url)
        return res.data
    } catch(err) {
    // handle error
    console.log(`Error fetching ${path}: ${err}`);
    process.exit(1);
  }
}

function readWriteFile(read, write) {

    

    let file_read = read
    console.log(file_read)

    if (file_read.slice(0, 4) === 'http') {
        file_read = webCat(file_read);
      } else {
        file_read=cat(file_read);
    }


    fs.writeFile(write, file_read, "utf8", function(err) {
        if (err) {

          console.error(`Couldnt write ${write} : ${err}`);
          process.exit(1);
        }
        console.log(`# no output, but ${write} contains contents of ${read}`);
      });

}


const argument = argv[2]

if(argument == '--out'){
    try{
        readWriteFile(argv[3], argv[4])
    } 
    catch(err){
        console.error('Couldnt write ${write} : ${err}')
        process.exit(1);
    }
} else {
    if (argument.slice(0, 4) === 'http') {
        console.log(webCat(argument));
      } else {
        console.log(cat(file_read));
    }
}



