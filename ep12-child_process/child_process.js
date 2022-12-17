const childProcess = require("child_process");

// run arbitrary command in shell
// run external programs using node

// 2 ways
// using spawn -- uses hooks
// using exec -- uses callback

// spawnSync -- sync variant
const operation = childProcess.spawn("ls", ["-al"], {
    shell: true, // run the command in a shell
    cwd: __dirname, // by default it is the current working dir
});

// adding hooks
operation.stdout.on("data", (data) => {
    console.log(`data is: ${data}`);
});

operation.on("close", (code) => {
    console.log('closed:', code);
});

operation.on("error", (err) => {
    console.log('error', err);
});

const operationSync = childProcess.spawnSync('ls', ['-al'], {
    shell: true,
    cwd: __dirname
});
console.log(operationSync.stdout);

// or use exec
// exec uses callback to handle errors
// execSync -- sync variant
const operation2 = childProcess.exec(
    "ls -all",
    {
        cwd: __dirname,
        shell: true,
    },
    (error, stdout, stderr) => {
        console.log("exec");
        console.log(stdout);
    }
);
console.log("exec sync");

const operation2Sync = childProcess.execSync('ls -al', {
    cwd: __dirname,
    shell: true,
})
console.log(`${operation2Sync}`)