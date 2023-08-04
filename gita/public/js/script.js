$(document).ready(function () {
  $("#menu-toggle").on("click", function () {
    $("body").toggleClass("active");
  });

  //Menu hassub class
  $(".primary-nav li:has(ul)")
    .addClass("menu-item-has-children")
    .click(function (e) {
      // e.preventDefault();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(".primary-nav li").removeClass("active");
        $(this).addClass("active");
      }
    });

  $(document).on("click", ".menu-item-has-children i", function () {
    $(".sub-menu").removeClass("show");
    $(this).next(".sub-menu").addClass("show");
  });

  // $(document).on("click", ".menu-item-has-children i", function () {
  //   $(".sub-menu").toggleClass("show");
  // });

  // $(document).on('click','.submenu__item--back',function(){
  //     $(".submenu").removeClass("show");
  //     if($(this).closest('li.hassub').parent('ul.submenu').length)
  //     $(this).closest('li.hassub').parent('ul.submenu').addClass('show');
  // });
  // For old mobile menu
  $(document).on("click", ".hassub i", function () {
    $(".submenu").toggleClass("show");
    // $(this).next('.submenu').addClass('show');
  });
  // $(document).on('click','.submenu__item--back',function(){
  //   $(".submenu-sub").removeClass("open");
  //   if($(this).closest('li.hassub').parent('ul.submenu-sub').length)
  //   $(this).closest('li.hassub').parent('ul.submenu-sub').addClass('open');
  // });

  //Hide menu on clicking outside
  $(document).on("click", function (e) {
    if ($(e.target).closest(".site-header").length === 0) {
      if ($("body").hasClass("active")) {
        if ($(".primary-nav ul li ul").hasClass("show")) {
          $(".primary-nav ul li ul.show").removeClass("show");
        }
        if ($(".primary-nav ul li ul").hasClass("open")) {
          $(".primary-nav ul li ul.open").removeClass("open");
        }
        $("body").removeClass("active");
      }
    }
  });

  // //Hide menu on clicking outside
  // $(document).on('click', function(e) {
  //   if ($(e.target).closest(".site-header").length === 0) {
  //     if ($('body').hasClass('active')) {
  //       $('body').removeClass('active');
  //     }
  //   }
  // });

  // SITE SEARCH
  $(document).on("click", ".search-field i.search-icon", function () {
    $(".site-search-field").toggleClass("open-search");
    $(this).toggleClass("active");
    $("body").toggleClass("open-srch");
    //$('.body-overlay').toggleClass('active');
  });

  //Hide search on clicking outside
  $(document).on("click", function (e) {
    if ($(e.target).closest(".search-field").length === 0) {
      $(".site-search-field").removeClass("open-search");
      $(".search-field i.search-icon").removeClass("active");
      $("body").removeClass("open-srch");
      //$('.body-overlay').removeClass('active');
    }
  });

  !!window["addEventListener"] && new WOW().init();

  $(".states-list .slide-item a").on("click", function (e) {
    // you should really use buttons here instead of preventing default behavior
    e.preventDefault();
    //this line gets the li that is active and the element clicked and toggles the classes between them (removes active from active and adds active to clicked), returns the index of the new active selection.
    $(this).parent().siblings(".active").addBack().removeClass("active");
    $(this).parent().siblings(".active").addBack().addClass("active");
    //this goes through all the divs in the location-wrapper and removes the active class from them. Then it finds the element with the same index of the active class from the nav and applies the active class
    $("#location-wrapper > .location")
      .removeClass("pulse")
      .eq($(".states-list .slide-item.active").index())
      .addClass("pulse");
  });
});
