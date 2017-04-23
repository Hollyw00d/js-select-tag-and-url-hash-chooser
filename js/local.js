/* Local JS */
(function() {
  "use strict";

  // Start jQuery Document Ready
  $(document).ready(function() {

    // Portfolio page (front page) code to show and hide project categories AND
    // code runs ONLY if on Portfolio page (front page)
    if( $("body.home").length > 0 ) {

      // Variables for the hash change and SELECT tag JS
      var featuredProjectsDataAttr = "featured-projects";
      var featuredProjectsSection = $("#" + featuredProjectsDataAttr + "-section");
      var allProjectsSection = $("#all-projects-section");
      var portfolioProjectChooser = $("#portfolio-project-chooser");

      portfolioProjectChooser.on("change", function() {
        var chosenOptionTagDataAttr = $(this).find("option:selected").attr("data-project-category");


        // If OPTION tag chosen is NOT "featured-projects" then
        // ONLY display portfolio projects from chosen portfolio projects, like "JavaScript and jQuery"
        if( chosenOptionTagDataAttr !== featuredProjectsDataAttr ) {
          if( featuredProjectsSection.hasClass("show-override") ) {
            featuredProjectsSection.removeClass("show-override").addClass("hide-override");
          }

          allProjectsSection.find("h2").removeClass("show-override").addClass("hide-override");
          allProjectsSection.find("li").removeClass("show-inlineblock-override").addClass("hide-override");

          allProjectsSection.find("h2[data-project-category=" + chosenOptionTagDataAttr + "]").removeClass("hide-override").addClass("show-override");
          allProjectsSection.find("li[data-project-category=" + chosenOptionTagDataAttr + "]").removeClass("hide-override").addClass("show-inlineblock-override");
        }
        // ELSE "featured-projects" OPTION tag IS CHOSEN  then
        // ONLY display "Featured Projects" portfolio item
        else {
          if( featuredProjectsSection.hasClass("hide-override") ) {
            featuredProjectsSection.removeClass("hide-override").addClass("show-override");
          }

          allProjectsSection.find("h2").removeClass("show-override").addClass("hide-override");
          allProjectsSection.find("li").removeClass("show-inlineblock-override").addClass("hide-override");
        }
      });
    }

  });

})();