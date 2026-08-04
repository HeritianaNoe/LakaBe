// Lova Telo — behaviour: mobile nav toggle + scroll-spy on the three app sections.
(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Highlight the current section's nav link as the user scrolls.
  var sections = document.querySelectorAll(".app[id]");
  var navLinks = document.querySelectorAll(".nav__links a");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var map = {};
    navLinks.forEach(function (a) {
      map[a.getAttribute("href").replace("#", "")] = a;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (a) { a.style.color = ""; });
            var link = map[entry.target.id];
            if (link) link.style.color = "var(--tany)";
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  // Small confirmation nudge when a download link is used, in case the
  // .apk isn't in place yet (helps the owner notice a broken link fast).
  document.querySelectorAll(".dl").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var path = link.getAttribute("href");
      fetch(path, { method: "HEAD" })
        .then(function (res) {
          if (!res.ok) {
            e.preventDefault();
            console.warn("Tsy hita ny rakitra:", path, "— apetraho ao amin'ny lay downloads/ ilay .apk.");
          }
        })
        .catch(function () {
          /* Fetch may fail on file:// preview; let the normal download
             attempt proceed rather than blocking the user. */
        });
    });
  });
})();
