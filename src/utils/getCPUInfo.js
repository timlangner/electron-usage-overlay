const si = require('systeminformation');

async function getCPUInfo() {
    try {
        const data = await si.cpu();
        console.log('CPU Information:');
        console.log('- manufacturer: ' + data.manufacturer);
        console.log('- brand: ' + data.brand);
        console.log('- speed: ' + data.speed);
        console.log('- cores: ' + data.cores);
        console.log('- physical cores: ' + data.physicalCores);
    } catch (e) {
        console.log(e)
    }
}

exports.getCPUInfo = getCPUInfo;
