const os= require('os');

const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(`System has been up from ${uptime}`);

const osInfo = {
    name: os.type(),
    release: os.version(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem()
}
console.log(osInfo);