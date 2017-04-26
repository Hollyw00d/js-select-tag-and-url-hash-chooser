/* Local JS */
(function() {
  "use strict";

  // Start jQuery Document Ready
  $(document).ready(function() {

    function portofolioChooser() {

      // Variables for the hash change and SELECT tag JS
      var showOverrideClass = "show-override";
      var hideOverrideClass = "hide-override";
      var hashSelectedClass = "hash-selected";
      var featuredProjectsDataAttr = "featured-projects";
      var featuredProjectsSection = $("#" + featuredProjectsDataAttr + "-section");
      var allProjectsSection = $("#all-projects-section");
      var portfolioProjectChooser = $("#portfolio-project-chooser");

      // Show featured items only
      function showFeatured(featuredId) {
        $(featuredId).removeClass(hideOverrideClass).addClass(showOverrideClass);
      }

      function hashChange(getSelectTag) {
        var hash = location.hash.slice(1);
        getSelectTag.find("option[data-project-category=" + hash + "]").prop("selected", "selected").addClass(hashSelectedClass);

        if( hash === featuredProjectsDataAttr ) {
          allProjectsSection.removeClass(showOverrideClass);
          featuredProjectsSection.removeClass(hideOverrideClass).addClass(showOverrideClass);
        }
        else {
          featuredProjectsSection.removeClass(showOverrideClass).addClass(hideOverrideClass);
          allProjectsSection.addClass(showOverrideClass);
         
          allProjectsSection.find("h2[data-project-category=" + hash + "]").removeClass(hideOverrideClass).addClass(showOverrideClass);
          allProjectsSection.find("li[data-project-category=" + hash + "]").removeClass(hideOverrideClass).addClass("show-inlineblock-override");
        }
      }

      // Portfolio page (front page) code to show and hide project categories AND
      // code runs ONLY if on Portfolio page (front page)
      if( $("body.home").length > 0 ) {

        showFeatured("#featured-projects-section");

        portfolioProjectChooser.on("change", function() {
          var chosenOptionTagDataAttr = $(this).find("option:selected").attr("data-project-category");
          portfolioProjectChooser.find("option").removeClass(hashSelectedClass);

          // If OPTION tag chosen is NOT "featured-projects" then
          // ONLY display portfolio projects from chosen portfolio projects, like "JavaScript and jQuery"
          if( chosenOptionTagDataAttr !== featuredProjectsDataAttr ) {

            if( featuredProjectsSection.hasClass(showOverrideClass) ) {
              featuredProjectsSection.removeClass(showOverrideClass).addClass(hideOverrideClass);
            }

            allProjectsSection.find("h2").removeClass(showOverrideClass).addClass(hideOverrideClass);
            allProjectsSection.find("li").removeClass("show-inlineblock-override").addClass(hideOverrideClass);

            allProjectsSection.find("h2[data-project-category=" + chosenOptionTagDataAttr + "]").removeClass(hideOverrideClass).addClass(showOverrideClass);
            allProjectsSection.find("li[data-project-category=" + chosenOptionTagDataAttr + "]").removeClass(hideOverrideClass).addClass("show-inlineblock-override");
            location.hash = "#" + chosenOptionTagDataAttr;
          }
          // ELSE "featured-projects" OPTION tag IS CHOSEN  then
          // ONLY display "Featured Projects" portfolio item
          else {
            if( featuredProjectsSection.hasClass(hideOverrideClass) ) {
              featuredProjectsSection.removeClass(hideOverrideClass).addClass(showOverrideClass);
            }

            allProjectsSection.find("h2").removeClass(showOverrideClass).addClass(hideOverrideClass);
            allProjectsSection.find("li").removeClass("show-inlineblock-override").addClass(hideOverrideClass);
            location.hash = "#" + featuredProjectsDataAttr;
          }
        });

        var getHashChange = hashChange(portfolioProjectChooser);

        $(window).on("hashchange", getHashChange);

        //window.addEventListener("hashchange", hashChange, false);

      }

    }

    portofolioChooser();

  });

})();