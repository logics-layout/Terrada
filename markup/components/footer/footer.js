var checkFooterHeight = function(){
    var footer = $('.page__content-footer');
    // console.log(footer.closest(''));
    footer.filter(':visible').each(function () {
        var _this = $(this),
            footerHeight = _this[0].offsetHeight;
        
        if(_this.closest('.page__wrapper-page.pt-page-current')[0]){
            _this.closest('.page__content').css("padding-bottom", footerHeight+"px");
        }
    });
};
checkFooterHeight();