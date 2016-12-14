/*
 * parse.js
 * Generates the link-blocks on the home page by parsing the JSON
 * in "sites.js". The background colours of the span (`title` in the
 * code below) is decided from the colours defined in "colors.js".
 */
searchForm = document.getElementById("searchForm");
searchForm.setAttribute("action",search);
container = document.getElementById("container");
for(var i=0 ; i<websites.length ; i++){
	var key = Object.keys(websites[i])[0];
	var block = document.createElement("div");
	block.setAttribute("class","block");
	var title = document.createElement("span");
	title.setAttribute("class","header");
	title.innerHTML=key;
	title.style.backgroundColor = colors[i%colors.length];
	block.appendChild(title);
	for(var j=0 ; j<websites[i][key].length ; j++){
		aTag = document.createElement("a");
		aTag.setAttribute("href",websites[i][key][j][0]);
		aTag.innerHTML = websites[i][key][j][1];
		block.appendChild(aTag);
	}
	container.appendChild(block);
}
