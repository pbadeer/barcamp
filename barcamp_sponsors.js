var fs = require('fs');
var ls = require('ls');
var ejs = require('ejs');

var sponsorGroups = [
  { path: "1-platinum", title: "Platinum", widthClass: "w-third-ns" },
  { path: "2-gold",     title: "Gold",     widthClass: "w-30-ns"    },
  { path: "3-silver",   title: "Silver",   widthClass: "w-25-ns"    },
  { path: "4-bronze",   title: "Bronze",   widthClass: "w-20-ns"    }
]


function sponsorData(sponsorGroup){
  var sponsorGroupPath = 'images/sponsors/' + sponsorGroup.path + '/*.*'

  return {
    path: sponsorGroup.path,
    title: sponsorGroup.title,
    widthClass: sponsorGroup.widthClass,
    sponsors: ls(sponsorGroupPath).map(function(lsObject){
      return lsObject.file
    })
  }
}

sponsors = sponsorGroups.map(function(g) { return sponsorData(g) });

ejs.renderFile("index.ejs", sponsors, (err, result) => {
    if (err) {
        logger.log('info', 'error encountered: ' + err);
    }
    else {
        try {
            fs.writeFileSync('index.html', result, 'utf8');
        } catch(err) {
            if (err) {
                throw err;
            }
        }

    }
});