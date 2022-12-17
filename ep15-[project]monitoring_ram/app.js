const osu = require('node-os-utils');
const chalk = require('chalk');

const threshold = process.argv[2];

if(!threshold){
    console.error('must pass in an arg.')
    process.exit(1);
}


function notify(){
    // send notification via email or other messaging platform

    console.log(chalk.red(`Memory usage exceeded ${threshold}% !!`));


}


function monitor(){
    const intervalId = setInterval(async () => {
        // check ram
        const mem = osu.mem;

        const info = await mem.info();

        if (info.usedMemPercentage < Number(threshold)) {
            return;
        }

        // if bigger than 16gb, we should warn the user
        notify();

    }, 1000);
}

monitor();