QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Arcticle', function(assert) {
    //TODO: write a test for the Article constructor
    var testObject = {
      id: 0,
      title: 'testTitle',
      author: 'testAuthor'};

    var result = new Article(testObject);

    assert.propEqual(result, testObject);
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    //TODO: verify that an instance of article has a toHtml method
    var testObject = {
      id: 0,
      title: 'testTitle',
      author: 'testAuthor'};

    var result = new Article(testObject);


    assert.ok(result.toHtml);
  });
});

QUnit.module('Article Class', function() {
  QUnit.test('Article.allArticles should be an array', function(assert) {
    //TODO: write a test for the all articles property
    assert.ok(Array.isArray(Article.allArticles));
  });
  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    //TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
    var testArray = [
      {
        author: "Virginia Sawayn",
        authorUrl: "http://http://rachael.com",
        body: "## The IB application is down, transmit the redundant application so we can transmit the IB application!↵↵If we parse the array, we can get to the XSS array through the redundant XSS array! Perspiciatis dolores aspernatur.↵Similique distinctio accusamus exercitationem fugit commodi quia ullam vitae.↵Veritatis blanditiis et sint at corporis. Aliquid consequatur occaecati ab.↵Sunt et ut vitae cupiditate sint placeat dolore et.↵Et deserunt consequatur error alias. Architecto ut non et qui consequuntur molestias quae est consectetur.↵Ea voluptatem ut iusto corporis rerum expedita. Repellat numquam hic ut aspernatur fugiat voluptate culpa.↵Quos molestias accusamus. Optio vitae omnis recusandae. You can't parse the system without overriding the online ADP system! Rerum id veniam tempora vel quae.↵Non vel et fugiat odit debitis ut qui.↵Aut sed ad aut praesentium iure accusantium neque omnis rerum.↵Culpa quas saepe odit. Eos eveniet non et et laboriosam.↵Doloribus vitae est dolores quia.↵Eius consequatur nisi accusamus quos cumque corporis magnam aut quo.↵Sint cupiditate optio sunt est et est minus.↵Ut velit dolorem et.↵Dolore eum deserunt.↵ Ea sit suscipit non aspernatur.↵Sed aspernatur dolores.↵Rerum cum ipsam error quia.↵Sed mollitia quos.↵Blanditiis eos explicabo ipsam modi unde voluptatibus natus incidunt.↵",
        category: "bus",
        id: 28,
        publishedOn: "2015-12-26",
        title: "Programming Open-source Hard drive Cards"
      },
      {
        author: "Toto",
        authorUrl: "http://http://rachael.com",
        body: "## The IB application is down, transmit the redundant application so we can transmit the IB application!↵↵If we parse the array, we can get to the XSS array through the redundant XSS array! Perspiciatis dolores aspernatur.↵Similique distinctio accusamus exercitationem fugit commodi quia ullam vitae.↵Veritatis blanditiis et sint at corporis. Aliquid consequatur occaecati ab.↵Sunt et ut vitae cupiditate sint placeat dolore et.↵Et deserunt consequatur error alias. Architecto ut non et qui consequuntur molestias quae est consectetur.↵Ea voluptatem ut iusto corporis rerum expedita. Repellat numquam hic ut aspernatur fugiat voluptate culpa.↵Quos molestias accusamus. Optio vitae omnis recusandae. You can't parse the system without overriding the online ADP system! Rerum id veniam tempora vel quae.↵Non vel et fugiat odit debitis ut qui.↵Aut sed ad aut praesentium iure accusantium neque omnis rerum.↵Culpa quas saepe odit. Eos eveniet non et et laboriosam.↵Doloribus vitae est dolores quia.↵Eius consequatur nisi accusamus quos cumque corporis magnam aut quo.↵Sint cupiditate optio sunt est et est minus.↵Ut velit dolorem et.↵Dolore eum deserunt.↵ Ea sit suscipit non aspernatur.↵Sed aspernatur dolores.↵Rerum cum ipsam error quia.↵Sed mollitia quos.↵Blanditiis eos explicabo ipsam modi unde voluptatibus natus incidunt.↵",
        category: "bus",
        id: 28,
        publishedOn: "2015-12-26",
        title: "Programming Open-source Hard drive Cards"
      },
      {
        author: "Santa",
        authorUrl: "http://http://rachael.com",
        body: "## The IB application is down, transmit the redundant application so we can transmit the IB application!↵↵If we parse the array, we can get to the XSS array through the redundant XSS array! Perspiciatis dolores aspernatur.↵Similique distinctio accusamus exercitationem fugit commodi quia ullam vitae.↵Veritatis blanditiis et sint at corporis. Aliquid consequatur occaecati ab.↵Sunt et ut vitae cupiditate sint placeat dolore et.↵Et deserunt consequatur error alias. Architecto ut non et qui consequuntur molestias quae est consectetur.↵Ea voluptatem ut iusto corporis rerum expedita. Repellat numquam hic ut aspernatur fugiat voluptate culpa.↵Quos molestias accusamus. Optio vitae omnis recusandae. You can't parse the system without overriding the online ADP system! Rerum id veniam tempora vel quae.↵Non vel et fugiat odit debitis ut qui.↵Aut sed ad aut praesentium iure accusantium neque omnis rerum.↵Culpa quas saepe odit. Eos eveniet non et et laboriosam.↵Doloribus vitae est dolores quia.↵Eius consequatur nisi accusamus quos cumque corporis magnam aut quo.↵Sint cupiditate optio sunt est et est minus.↵Ut velit dolorem et.↵Dolore eum deserunt.↵ Ea sit suscipit non aspernatur.↵Sed aspernatur dolores.↵Rerum cum ipsam error quia.↵Sed mollitia quos.↵Blanditiis eos explicabo ipsam modi unde voluptatibus natus incidunt.↵",
        category: "bus",
        id: 28,
        publishedOn: "2015-12-26",
        title: "Programming Open-source Hard drive Cards"
      }
    ];

    Article.loadAll(testArray);

    assert.equal(Article.allArticles.length, testArray.length);

    Article.allArticles = [];
  });
  QUnit.test('Article.allAuthors should get a unique name of authors', function(assert) {
    //TODO: write a test for Article.allAuthors
    Article.allArticles = [
      {author: 'Toto'},
      {author: 'Dolore'},
      {author: 'Dorthy'},
      {author: 'Santa'},
      {author: 'Toto'},
      {author: 'Dolore'},
      {author: 'Claus'}
    ];

    assert.equal(Article.allAuthors().length, 5);

    Article.allArticles = [];
  });
  //STRETCH: write a test for Article.numWordsAll
  QUnit.test('Article.numWordsAll should return the total number of words in all of the blog entires', function(assert) {
    Article.allArticles = [
      {body: 'Ha! Ha! Ha! You can\'t catch me!'}, //7
      {body: 'I run it up the flagpole and see who still looks but no one ever does'}, //16
      {body: 'I\'m not sick but I\'m not well. And it\'s a sin to live so well.'} //15
    ];
    console.log(Article.allArticles);
    assert.equal(Article.numWordsAll(), 42);


    Article.allArticles = [];
  });
  //STRETCH: write a test for Article.fetchAll
});
