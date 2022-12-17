const fs = require('fs');
const path = require('path');


// win vs unix (mac & linux)
// win likes \
// unix likes /

// use path to resolve all conflicts

// __dirname

path.join();
path.resolve();


// writing content to file

const filePath = path.join(__dirname, 'readme.txt');

// async variant
fs.writeFile(filePath, 'heyaaaaa', (err) => {
    // after file is written
});

// sync variant
fs.writeFileSync(filePath, "heyaa", 'utf-8');

// sync variant
const content = fs.readFileSync(filePath, 'utf-8');

// async variant
fs.readFile(filePath, 'utf-8', (err, data) => {

    console.log(data);

});

// remove file
fs.rmSync(filePath , {
    force: false
});

fs.rm(filePath, (err) => {

});




