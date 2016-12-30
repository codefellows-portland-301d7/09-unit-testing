'use strict';

QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Arcticle', function(assert) {
    var obj = {
      title: 'train days'
    };

    var testArticle = new Article(obj);

    assert.equal(testArticle.title, 'train days');
    //TODO: DONNNNNE write a test for the Article constructor
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    var obj = {
      title: 'train days'
    };

    var testArticle = new Article(obj);
    var testMethod = testArticle.toHtml;

    assert.notEqual(testMethod, 'undefined');
    //TODO: Done. verify that an instance of article has a toHtml method
    //pseudo-article prints toHtml method when called
    //how do you check if the article object has a certain property? check that article.toHtml is not undefined
    //notEqual(article.toHTML, undefined)
  });
});

QUnit.module('Article Class', function() {
  QUnit.test('Article.allArticles should be an array', function(assert) {
    //TODO done: write a test for the all articles property
    // typeOf Article.allArticles = []
    assert.ok(Array.isArray(Article.allArticles));
  });
  QUnit.test('Article.loadAll should set an array of Article instances to Article.allArticles', function(assert) {
    //TODO done: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
    var testArrOfObj = [{title: 'title1'}, {title: 'title2'}, {title: 'title3'}];
    var testLoadAll = Article.loadAll(testArrOfObj);

    assert.equal(Article.allArticles[0].title, 'title1');
  });
  QUnit.test('Article.allAuthors should get a unique name of authors', function(assert) {
    //TODO done: write a test for Article.allAuthors

    var nameList = [{author: 'joe'}, {author: 'jane'}, {author: 'joe'}];
    var loadArticleArticles = Article.loadAll(nameList);

    var authorLoad = Article.allAuthors();
    QUnit.log(function(){
      console.log('authorLoad: ', authorLoad);
    });

    assert.equal(authorLoad.length, 2);
    assert.equal(authorLoad[0], 'joe');
  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
});
