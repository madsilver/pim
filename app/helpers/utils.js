const crypto = require("crypto");
const path = require("path");

module.exports = {

    logPath: () => {
        function pad(num) {
            return (num > 9 ? "" : "0") + num;
        }

        let time = new Date();
        let month  = time.getFullYear() + "" + pad(time.getMonth() + 1);
        return path.join(process.cwd(), "log", month, pad(time.getDate())) + "-access.log";
    },

    crypto: (password) => {
        let shaSum = crypto.createHash("sha256");
        shaSum.update(password);
        return shaSum.digest("hex");
    }

};
