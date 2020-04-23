//there are two ways to export: gobal export y global parcial
module.exports.info = function info(text) {
    console.log("INFO:", text);
    return text;
}

function error(text) {
    console.log("ERROR:", text);
    return text;
}

module.exports.error = error;

// module.exports = { info, error }; // i export the funtions//It's not the most optim