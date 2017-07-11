var openPopup = function(id, method){
    var element = $(id),
        parent = element.closest('.header__poppup'),
        className = 'active';


    if(parent[0] && method){
        if(method=='clear'){
            parent.add('.header__table').add(element).removeClass(className);
        }else if(method=='open'){
            element.siblings().removeClass(className);
            parent.add('.header__table').add(element).addClass(className);
        }
    }
};

var clearPopup = function(){
    $('.header__poppup').removeClass('active');
    $('.header__poppup-item').removeClass('active');
};


var _fnMenuHeaderTop = function(toggle, list, slide) {
    var className, el, time;
    el = toggle.closest('.mobile-list-anim');
    className = 'active';

    if (toggle.prop("checked")) {
        el.addClass(className);
        openPopup(list, 'open');
    } else {
        el.removeClass(className);
        openPopup(list, 'clear');
    }
};

var menuHeaderTopToggle = $('#header-bottom-toggleMenuMbl');
var menuHeaderTopList = $('#navHeader');

menuHeaderTopToggle.change(function() {_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);});
_fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);

// $(document).click(function(e) {
//     var target;
//     target = $(e.target);
//     if ((!target.is(menuHeaderTopList) && !target.closest(menuHeaderTopList)[0]) && (!target.is(menuHeaderTopToggle) && !target.is('.menuTopMobel'))) {
//         menuHeaderTopToggle[0].checked = false;
//         _fnMenuHeaderTop(menuHeaderTopToggle, menuHeaderTopList, true);
//     }
// });

$('.header__poppup-btnClear, .header__poppup-item__clear').click(clearPopup);

$("[data-toggle='popup']").click(function () {
   var _this = $(this),
       popup = _this.attr('data-block');
    if(popup){
        openPopup(popup, 'open');
    }
});