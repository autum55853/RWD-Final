"use strict";

$(document).ready(function () {
  $('.left_menu li').click(function (event) {
    $(this).addClass('pointed').siblings().removeClass('pointed');
  });
  $('.mobile_nav').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
});
//# sourceMappingURL=all.js.map
