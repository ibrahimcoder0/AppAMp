

$(document).ready(function () {
  // 02. Mobile Menu Js
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '991',
    meanExpand: ['<i class="fas fa-plus"></i>'],
  });

  ////////////////////////////////////////////////////
  // 03. Sidebar Js
  $('.ic-menu-toggle').on('click', function () {
    $('.ic-sidebar-menu').addClass('opened');
    $('.body-overlay').addClass('opened');
  });
  $('.sidebar-close').on('click', function () {
    $('.ic-sidebar-menu').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });

  ////////////////////////////////////////////////////
  // 04. Body overlay Js
  $('.body-overlay').on('click', function () {
    $('.ic-sidebar-menu').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });



});
