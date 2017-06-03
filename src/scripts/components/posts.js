var $ = require('jquery');
var sol = require('sol-comp');
var template = require('./post.jade');
var endpointUrl = 'https://kitchenmag.ru/promo_api/heinz/posts';

var loadData = memoize(function(url) {
  return $.get(url);
})

sol.component('posts', {
  init: function() {
    loadData(endpointUrl).then(this.render.bind(this))
  },

  render: function(data) {
    this.$block.append(data.read_more.map(function(post) {
      return template(post)
    }).join(''))

    this.$block.slick({
      centerMode: false,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 341,
          settings: {
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    })
  }
})

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}
