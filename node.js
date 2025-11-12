// create a file,
// adding data to file, if file exists write at last, if not create the file and then write
// path

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from "node:process";

// console.log(process.cwd());


async function createNewFile(filename, data) {
    let cwd = process.cwd();
    try {
        if ( !fs.existsSync( path.join(cwd, filename) ) ) {
            // console.log(cwd);
            fs.writeFile( path.join(cwd, filename), data , (err) => {
                console.error(err);
            });
        } else {
            console.error("File already exists");
        }
    } catch(err) {
        console.error(err);

    }

};


createNewFile("file.js", "console.log(`from file`)");
