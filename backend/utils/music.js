const bpmValues = [
    40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200
];

async function getBPMValues() {
    return bpmValues;
}

module.exports = {
    getBPMValues: getBPMValues
}