/*
 * quote.js
 * Generates quotes based on the contents of `titles`, `homes` and `users`
 */
var titles = ["$home sweet $home",
			 "There's no place like $home",
			 "$home is where your heart is",
			 "$home should be the\ntreasure chest of living",
			 "Even if you go to paradise\n you will miss $home",
			 "A $user's $home is his castle",
			 "Where thou art, that is $home",
			 "$home is heaven for the $user"];
var homes = ["~/","127.0.0.1","127.0.1.1","localhost","/home/"];
var users = ["hacker","programmer","geek","nerd"];

var title = document.getElementById("title");
var random = Math.floor(Math.random()*100)%titles.length;
var random2 = Math.floor(Math.random()*100)%homes.length;
var random3 = Math.floor(Math.random()*100)%users.length;
var value = titles[random].replace(/\$home/g,homes[random2]);

if(value.indexOf("$user")){
 value = value.replace(/\$user/g,users[random3]);
}
document.title = value;
title.innerHTML = value;
