var fs = require('fs');
var ejs = require('ejs');

data = {
  sponsors: []
}

ejs.renderFile("src/index.ejs", data, (err, result) => {
    if (err) {
        console.log('info', 'error encountered: ' + err);
    }
    else {
        try {
            fs.writeFileSync('build/index.html', result, 'utf8');
        } catch(err) {
            if (err) {
                throw err;
            }
        }

    }
});