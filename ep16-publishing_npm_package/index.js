const osu = require("node-os-utils");
const chalk = require("chalk");

// index.js is the primary file of the module, and the file that will be imported

function monitor(threshold) {
    function notify() {
        // send notification via email
        console.log(chalk.red(`Memory usage exceeded ${threshold}% !!`));
    }

    let intervalId;
    return {
        start() {
            intervalId = setInterval(async () => {
                // check ram
                const mem = osu.mem;

                const info = await mem.info();

                if (info.usedMemPercentage < threshold) {
                    return;
                }

                // if bigger than 16gb, we should warn the user
                notify();
            }, 1000);
        },
        stop() {
            if (!intervalId) {
                return console.error("Monitor is not running!!");
            }
            clearInterval(intervalId);
            intervalId = undefined;
        },
    };
}

module.exports = monitor;
