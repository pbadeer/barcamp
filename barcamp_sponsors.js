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

// ejs.renderFile("index.ejs", sponsors, {}, function(err, str){
//     console.log(str);
//     // str => Rendered HTML string
// });

ejs.renderFile("index.ejs", sponsors, (err, result) => {
    if (err) {
        logger.log('info', 'error encountered: ' + err);
        // throw err;
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

// [ { path: 'sponsors/1-platinum',
//     full: 'sponsors/1-platinum/Agape_White.png',
//     file: 'Agape_White.png',
//     name: 'Agape_White' },
//   { path: 'sponsors/1-platinum',
//     full: 'sponsors/1-platinum/SCO_White.png',
//     file: 'SCO_White.png',
//     name: 'SCO_White' },
//   { path: 'sponsors/2-gold',
//     full: 'sponsors/2-gold/Alamo_White.png',
//     file: 'Alamo_White.png',
//     name: 'Alamo_White' },
//   { path: 'sponsors/2-gold',
//     full: 'sponsors/2-gold/LiquidSunshine_White.png',
//     file: 'LiquidSunshine_White.png',
//     name: 'LiquidSunshine_White' },
//   { path: 'sponsors/3-silver',
//     full: 'sponsors/3-silver/Hayneedle_White.png',
//     file: 'Hayneedle_White.png',
//     name: 'Hayneedle_White' },
//   { path: 'sponsors/4-bronze',
//     full: 'sponsors/4-bronze/Dylan_White.png',
//     file: 'Dylan_White.png',
//     name: 'Dylan_White' },
//   { path: 'sponsors/4-bronze',
//     full: 'sponsors/4-bronze/ESS_White.png',
//     file: 'ESS_White.png',
//     name: 'ESS_White' },
//   { path: 'sponsors/4-bronze',
//     full: 'sponsors/4-bronze/ScreenInk_White.png',
//     file: 'ScreenInk_White.png',
//     name: 'ScreenInk_White' } ]