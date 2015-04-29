'use strict';
$(function() {
  var images;
  window.kPsources = [];
  var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
  };
  var renderImages = function(images) {
    var $main = $('#content');
    images.forEach(function(img) {
        window.kPsources.push(img.link);

      $main.append('<img src="' + img.link + '" />')
    });

  };
  $.ajax({
    url: ('https://api.imgur.com/3/album/kittyCounter'),
    method: 'GET',
    headers: {'Authorization': 'Client-ID ec9b69172ca8140'}
  })
  .done(function(res) {
    images = res.data.images
    renderImages(images);
    kittyCounter();
  })
  .fail(function(err) {
    console.log(err);
  });

});
