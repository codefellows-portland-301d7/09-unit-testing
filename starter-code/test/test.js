QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Arcticle', function(assert) {
    //TODO: write a test for the Article constructor
    var mockOpts = {
      title: 'title',
      category: 'category',
      author: 'author',
      authorUrl: 'authorUrl',
      publishedOn: 'publishedOn',
      body: 'body'
    };

    var testArticle = new Article(mockOpts);
    var expectation = Object.keys(mockOpts)[0];

    assert.equal(testArticle.title, expectation);
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    //TODO: verify that an instance of article has a toHtml method
    var mockOpts = {
      title: 'title'
    };

    var testArticle = new Article(mockOpts);
    var result = testArticle.toHtml;

    assert.notEqual(result, !'undefined');
  });
});

QUnit.module('Article Class', function() {
  QUnit.test('Article.allArticles should be an array', function(assert) {
    //TODO: write a test for the all articles property
  });
  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    //TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
  });
  QUnit.test('Article.allAuthors should get a unique name of authors', function(assert) {
    //TODO: write a test for Article.allAuthors
  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
});
