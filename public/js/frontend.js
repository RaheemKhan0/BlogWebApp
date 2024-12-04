var MenuBarButton = $("#Mobile-Menu-Button");
var Menu = $("#mobile-menu");

function toggleMenuBar() {
   MenuBarButton.on('click', () => {
    if (Menu.hasClass("hidden")) {  // Removed the extra dot
      Menu.removeClass("hidden");  // Removed the extra dot
    } else {
      Menu.addClass("hidden");  // Removed the extra dot
    }
  });
}

$("Mobile-Menu-Button").on('click', toggleMenuBar())
