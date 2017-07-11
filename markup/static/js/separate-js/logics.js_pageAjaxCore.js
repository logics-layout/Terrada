(function() {
  $(document).ready(function() {
    var _checkCatLink, _directory, _fnTpl, _setUrl, _uri, ajaxUrl, body, categoryList, classAjaxGet, getContent, keyQueryOptionDelete, onAjaxSuccess, uriCheck, viewAjaxCatalog;
    if (!(window.history && history.pushState)) {
      return false;
    }

    /*
     * http://medialize.github.io/URI.js/about-uris.html
     */
    _uri = new URI(location.href);
    categoryList = $('.side-menu_catalog ul');
    body = $('body');
    uriCheck = null;

    viewAjaxCatalog = $('.viewAjaxCatalog');
    // _checkCatLink = function() {
    //   var linkActive;
    //   linkActive = $("a[href='" + (_uri.directory()) + "/']");
    //   if (linkActive[0]) {
    //     return linkActive.parents('li').addClass('active').children('ul').slideDown(300).end().siblings('li').removeClass('active').find('li').removeClass('active').end().find('ul').slideUp(300);
    //   } else {
    //     return categoryList.find('li').filter('.active').removeClass('active').find('ul').slideUp(300);
    //   }
    // };
    // _checkCatLink();

    window.getContent = function(url, options, addEntry) {
      if(url){
        url = new URI(url);
        _uri.search(url.search(true));
        _uri.pathname(url.pathname(true));
      }
      if (addEntry == null) {
        addEntry = true;
      }
      if (options == null) {
        options = {};
      }
      options.animation = (options.animation) ? options.animation : 54;
      urlRes = _uri.toString();
      if (addEntry) {
        if (urlRes === uriCheck) {
          return false;
        }
        uriCheck = urlRes;
        history.pushState(options, null, uriCheck);
      }else{
        options.animation--;
      }

      // _checkCatLink();
      PageTransitions.loadAjax.apply(this, [url, options, addEntry]);
    };
    window.addEventListener('popstate', (function(e) {
      var state = arguments[0].state;
      if(state){
        window.getContent(location.href, state, false);
      }else{
        location.reload();
      }
    }), false);
  });

}).call(this);
