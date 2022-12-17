// run node app.js 
console.log('heyaa');

// process.argv shows an array of the arguments passed to node
console.log(process.argv);

// getting arguments passed to node
console.log(process.argv[2]);


if (process.argv[2] === "on") {
    console.log("turn on the light");
} else {
    console.log("turn off the light");
}

