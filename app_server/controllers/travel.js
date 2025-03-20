var fs = require('fs');
 var trips = JSON.parse(fs.readFileSync('.data/trips.json','utf8')); 
/*Gets the homepage*/
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = {
    travel
}