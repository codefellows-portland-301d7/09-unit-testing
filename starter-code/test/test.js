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


    var result =false;

    if(Article.allArticles){
      result = true;
    }

    assert.equal(result, true);

  });
  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    //TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
    var testArr = ['one']; //test array for allArticles argument
    Article.loadAll(testArr); //should populate allArticles within the Array it takes as an argument
    var result = Article.allArticles.length; // should populate allArticles with test Arr ( ['one']) ie. length=0
  //  console.log('with test ' + Article.allArticles);
    assert.equal(result, 1);
    Article.loadAll([]); //reset
  //  console.log('sans test ' + Article.allArticles); //check reset;

  });
  QUnit.test('Article.allAuthors should get a unique name of authors', function(assert) {
    //TODO: write a test for Article.allAuthors

    Article.allArticles = [{
      author: 'Brigitte'}, { author: 'Brigitte'}, { author: 'Will'}, {author: 'Will'}];

    var result = Article.allAuthors();
    var expected = 2;
    //console.log(result);
    assert.equal(result.length, expected);
    Article.allArticles = []; // reset global state


  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
});
