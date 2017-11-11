/*Your htmlRoutes.js file should include two routes: A GET Route to /survey
which should display the survey page. A default, catch-all route that leads to
home.html which displays the home page.*/
var path = require("path");

module.exports.home = function(req,res){
	res.sendFile(path.join(__dirname,'../public/home.html'));
}
module.exports.survey = function(req,res){
	res.sendFile(path.join(__dirname,'../public/survey.html'));
}
