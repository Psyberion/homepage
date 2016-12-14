/*
 * conf.js
 * Contains configuration for the site, such as search engine and links
 */

/*
 * `search` contains the URL to your search engnie of choice
 */
var search = "https://www.google.com/search";

/*
 * `webisites` defines the link blocks that are displayed on the site.
 * Each key-value pair defines one link block, where the key is the block title.
 * The value is an array containing one array per link.
 * The first value of these arrays is the URL you want to link to
 * The second value of these arrays is the link text you want to display
 */
var websites =
[
	{"block1":
		[
			["http://example.com","example"],
			["http://foo.bar","foo.bar"]
		]
	},
	{
	"block2":
		[
			["http://mysite.com/","my site"],
			["http://yoursite.com/","your site"],
		]
	}
]
