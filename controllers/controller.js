var express = require("express");
var Breit = require('../models/articles.js')


var app = express();

//router.get('/scrape', function(req, res) {

          

                                    /* Cheerio's find method will "find" the first matching child element in a parent.
                                     *    We start at the current element, then "find" its first child a-tag.
                                     *    Then, we "find" the lone child img-tag in that a-tag.
                                     *    Then, .attr grabs the imgs src value.
                                     * So: <figure>  ->  <a>  ->  <img src="link">  ->  "link"  */
                                    // var imgLink = $(element).find("a").find("img").attr("src");
                                    /*var url = $(element).children().attr('href');
    console.log(url);
    var title =  $(element).children().attr('title');
    var imgUrl = $(element).children().children().attr('src')
    var excerpt = $(element).children().next().children().next().text()
    // Push the image's URL (saved to the imgLink var) into the results array
    results.push({ link: url, title: title, imgURL: imgUrl, excerpt: excerpt });
  });*/

                                // After looping through each element found, log the results to the console
                                /* console.log(results);
  $('#scrapedText').text(results);
*/
                                /*app.post('/articles', function(error, doc) {
    var newBreit = new Breitbart;
  })
});

							
 */

 								