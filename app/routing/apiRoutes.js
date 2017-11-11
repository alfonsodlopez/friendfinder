/*Your apiRoutes.js file should contain two routes: 
* A GET route with the url /api/friends. This will be 
used to display a JSON of all possible friends. 
* A POST routes /api/friends. This will be used to handle 
incoming survey results. This route will also be used to 
handle the compatibility logic.*/
var path = require("path");
var friends = require("../data/friends.js");

module.exports = {
  getFriends: function(req,res) {
	res.json(friends.friends);
  console.log("Get friends are: "+ friends.friends)
},
  postFriends: function(req, res) {
  var newFriend = req.body;

console.log("newFriend", newFriend);

  var compatibilityArray = [];
  friends.friends.forEach(function(friend) {
  	var compatibilityScore = 0;
  	friend.scores.forEach(function(score,idx) {
  		var diffScore = Math.abs(newFriend.scores[idx] - score)
  		compatibilityScore += diffScore;
  	})
  	compatibilityArray.push(compatibilityScore);

  });
  console.log(compatibilityArray);
  var bestFriend = [];
  var bestMatch = compatibilityArray[0];
  compatibilityArray.forEach(function(diff, idx){
    console.log(diff, idx)
  	if(diff < bestMatch){
  		bestFriend = friends.friends[idx];
  	}
  })

  res.json(bestFriend);
  console.log("Best friend is: " + bestFriend)
  friends.friends.push(newFriend)

  }
}

