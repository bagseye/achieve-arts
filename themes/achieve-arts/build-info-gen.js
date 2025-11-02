const fs = require('fs');

const buildFile = './assets/build-info.json';

// Build up new info
const newBuildData = {
    build: Math.floor(Date.now() / 1000),
};

// Update file
const formattedData = JSON.stringify(newBuildData);
fs.writeFileSync(buildFile, formattedData);