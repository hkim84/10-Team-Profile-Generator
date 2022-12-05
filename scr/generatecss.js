const fs = require('fs');

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./scr/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });

        });
    });
};

module.exports = {copyFile};