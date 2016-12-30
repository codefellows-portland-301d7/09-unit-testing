var testArticle = new Article({
  title: 'Transmitting Open-source Arrays',
  category: 'firewall',
  author: 'Dr. Tressie Kuphal',
  authorUrl: 'http://http://corrine.net',
  publishedOn: '2014-01-22',
  body: '## The RSS sensor is down, synthesize the open-source sensor so we can synthesize the RSS sensor!\n\ntransmitting the driver won\'t do anything, we need to navigate the optical EXE driver! Rerum sunt quia.\nQui illo saepe inventore facilis eius doloribus.\nEt qui omnis.\nPraesentium et animi eos labore dicta et qui aut facere.\nSunt maiores voluptatibus provident dolorem sed nihil velit.\n \rIpsum rerum et et sit earum aut omnis sint unde.\nInventore ullam molestiae et reiciendis.\n'
});

QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Arcticle', function(assert) {
    //TODO: DONE// write a test for the Article constructor


    assert.equal(testArticle.category, 'firewall');
    assert.equal(testArticle.publishedOn, '2014-01-22');
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    //TODO: DONE// verify that an instance of article has a toHtml method
    assert.equal(typeof(testArticle.toHtml),'function');
  });
});

QUnit.module('Article Class', function() {
  var t1Test =
    [{
      title: 'test 1',
      author: 'test 2'
    },
      {
        title: 'test 2',
        author: 'test 2'
      },
      {
        title: 'test 3',
        author: 'test 3'
      }
    ];

  QUnit.test('Article.allArticles should be an array', function(assert) {
    //TODO: DONE// write a test for the all articles property
    assert.equal((Array.isArray(Article.allArticles)), true);
  });
  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    //TODO: DONE// write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
    Article.loadAll(t1Test);
    assert.equal(Article.allArticles.length, 3);

  });
  QUnit.test('Article.allAuthors should get a unique name of authors', function(assert) {
    //TODO: DONE// write a test for Article.allAuthors
    Article.loadAll(t1Test);
    assert.equal(Article.allAuthors().length, 2);
  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
});
