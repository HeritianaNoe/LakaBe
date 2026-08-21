// Lova Telo — behaviour: mobile nav toggle + scroll-spy on the app sections.
const translations = {
  mg: {
    nav_bible: "Baiboly",
    nav_fanorona: "Fanorona",
    nav_calendar: "Alimanaka",
    nav_imerina: "Imerina",
    nav_fihirana: "Fihirana",
    hero_eyebrow: "Fitehirizana teknolojia malagasy",
    hero_title_accent: "Iray ny fikasana.",
    hero_lead: "Ny Baiboly vakiana isan'andro, ny lalao nampifandraisana taranaka maro, ny kalendrie ara-pinoana, ny quiz momba ny tantara ary ny fihirana — natao ho an'ny fitaovana manaraka ny taona, kanefa mitazona ny votoatiny.",
    hero_scroll: "Hijerena ny rehetra",
    bible_eyebrow: "01 — Famakiana",
    bible_title: "Baiboly",
    bible_desc: "Application famakiana Baiboly, natao mba ho namana isan'andro: mari-pamantarana miloko ny andininy tianao hotsarovana, fanoratana naoty manokana eo am-pamakiana, fikarohana haingana amin'ny andininy rehetra, ary fizarana na fanaovana kopy ny andininy iray na toko iray manontolo amin'ny hiaraha-mamaky.",
    bible_feat_1: "Marika miloko amin'ny andininy",
    bible_feat_2: "Naoty mifandray amin'ny toko sy andininy",
    bible_feat_3: "Fikarohana amin'ny andininy rehetra",
    bible_feat_4: "Kopia sy fizarana toko iray manontolo",
    fanorona_eyebrow: "02 — Filalaovana",
    fanorona_title: "Fanorona",
    fanorona_desc: "Ny fanorona dia lalao malaza teto Madagasikara hatramin'ny ela, izay mampiasa saina: ny fisamborana vato ataon'ny mpilalao amin'ny fandalovana na fisintonana no mahatonga ny fifandonana isaky ny fihetsika iray. Ity application ity dia mitondra io lalao io ao anaty fitaovana finday na desktop, ho an'izay te-hifampiseho na hifanandrina amin'ny sakaiza.",
    fanorona_feat_1: "Fanorona amin'ny fomba nentim-paharazana",
    fanorona_feat_2: "Fisamborana amin'ny fandalovana sy fisintonana",
    fanorona_feat_3: "Milalao amin'ny olona iray hafa eo amin'ny finday iray",
    fanorona_feat_4: "Fampahatsiahivana ny fitsipiky ny lalao",
    cal_eyebrow: "03 — Kalendrie ara-pinoana",
    cal_title: "Alimanaka",
    cal_desc: "Ny Alimanaka dia kalendrie litorjika katolika, manaraka ny tsingerin-taona ara-pivavahana (Fiaviana, Karemy, Paka, sns.) sy ny loko litorjika mifanaraka amin'ny vanim-potoana tsirairay. Miaraka amin'izany, misy ny rakitry ny Olomasina — tantaram-piainan'ny Olomasina tsirairay mbamin'ny fetiny — mba hahafahan'ny mpampiasa mahafantatra sy mankalaza ny Olomasina isan'andro.",
    cal_feat_1: "Kalendrie litorjika katolika isan'andro",
    cal_feat_2: "Tsingerin-taona sy loko litorjika",
    cal_feat_3: "Rakitry ny Olomasina — tantara sy fetiny",
    cal_feat_4: "Fikarohana Olomasina manokana",

    imerina_eyebrow: "04 — Quiz Imerina",
    imerina_title: "Imerina",
    imerina_desc: "Tongasoa eto amin'ity quiz fohy ity izay hampahatsiahy antsika ny tantara manan-danja teto Imerina. Andramo valio am-pahatsiarovana ny fanontaniana rehetra ato! Ny anaran'ny mpanjaka, ny daty ary ny tantara nisy. Misy dingana telo ny lalao ary nasiana fetra ny fieritreretana ny valiny.",
    imerina_feat_1: "Zavatra marina sy nisy",
    imerina_feat_2: "Misy dingana telo",
    imerina_feat_3: "Nasiana fetra ny fieritreretana",
    imerina_feat_4: "Daty maro tsara ho tadidy",

    fihirana_eyebrow: "05 — Fihirana Katolika",
    fihirana_title: "Fihirana",
    fihirana_desc: "Ny Fihirana dia fitambaran'ny hira masina ampiasaina ao amin'ny Fiangonana Katolika, na amin'ny lamesa, na amin'ny fotoam-pivavahana hafa. Izy io dia fomba iray hanomezana voninahitra an'Andriamanitra amin'ny alalan'ny feo, ny tononkira, ary ny fo. Nasiana sokajy sy fomba fitadiavana mba ho mora ampiasaina. Marihana fa mbola dingana voalohany ihany io izao fa mbola maro ny zavatra tokony hiova. Misy hira 60 izay be mpahalala indrindra ao anatiny.",
    fihirana_feat_1: "Misy hira 60",
    fihirana_feat_2: "Handalam-panavaozana",
    fihirana_feat_3: "Hira voafantina tsara",
    fihirana_feat_4: "Misy sokajy maro",
    fihirana_feat_5: "Afaka zaraina amin'ny namana",

    other_title: "Hafa",
    other_desc: "Amin'izao vanim-potoana nomerika izao dia misy fomba vaovao hampianarana ny ankizy ny teny Malagasy sy ny kolontsaina malagasy amin'ny alalan'ny lalao. Anisan'izany ny fampiharana Android toy ny Fanorona 5, Fanorona 3 ary ny Volana, izay natao manokana ho an'ny ankizy mba handalinany ny teny Malagasy sady milalao. Marihana fa ho an'i Android daholo ireto.",

    footer_zip_note: "Ny fichier rehetra halainao ato dia zip avokoa. Ny antony voalohany dia mba ho maivana ny fakana azy ary mba tsisy sakana eo ampisotonana azy amin'ny mety ahiahy ny system hoe virus. Manaraka izany ny fampiasana ireo asa tanako ireo dia maimaim-poana no zaraina ka tsy misy ny fiatohana na fanonerana raha sendra misy olana mitranga.",
    footer_author: "Aogositra 2026\nMpanoratra RASOLOMANANA Heritiana Noe.\nrasolomananaheritiana@gmail.com\nANTANANARIVO - MADAGASIKARA"
  },
  fr: {
    nav_bible: "Bible",
    nav_fanorona: "Fanorona",
    nav_calendar: "Almanach",
    nav_imerina: "Imerina",
    nav_fihirana: "Hymnaire",
    hero_eyebrow: "Conservatoire de technologies malgaches",
    hero_title_accent: "Une vision unique.",
    hero_lead: "La Bible quotidienne, le jeu traditionnel, le calendrier liturgique, le quiz historique et l'hymnaire — conçus pour les appareils modernes tout en préservant leur essence d'origine.",
    hero_scroll: "Découvrir tout",
    bible_eyebrow: "01 — Lecture",
    bible_title: "Bible",
    bible_desc: "Une application de lecture biblique conçue pour être votre compagnon quotidien: surlignage couleur des versets clés, prise de notes personnelles, recherche rapide dans tous les textes et partage facile de versets ou de chapitres entiers.",
    bible_feat_1: "Surlignage en couleur des versets",
    bible_feat_2: "Notes liées aux chapitres et versets",
    bible_feat_3: "Recherche rapide dans tous les versets",
    bible_feat_4: "Copie et partage de chapitres entiers",
    fanorona_eyebrow: "02 — Jeu",
    fanorona_title: "Fanorona",
    fanorona_desc: "Le Fanorona est un jeu traditionnel malgache de stratégie et de réflexion: la capture de pièces par approche ou retrait rend chaque coup passionnant. Cette application l'apporte sur mobile et ordinateur pour défier vos proches.",
    fanorona_feat_1: "Fanorona traditionnel complet",
    fanorona_feat_2: "Captures par approche et par retrait",
    fanorona_feat_3: "Mode 2 joueurs sur le même appareil",
    fanorona_feat_4: "Règles du jeu incluses",
    cal_eyebrow: "03 — Calendrier spirituel",
    cal_title: "Almanach",
    cal_desc: "Almanach est un calendrier liturgique catholique qui suit les temps forts de l'année (Avent, Carême, Pâques...) et leurs couleurs correspondantes. Il inclut une archive des saints avec leur histoire et date de fête quotidienne.",
    cal_feat_1: "Calendrier liturgique catholique quotidien",
    cal_feat_2: "Temps liturgiques et couleurs associées",
    cal_feat_3: "Registre des Saints — histoire et fêtes",
    cal_feat_4: "Recherche personnalisée de Saints",

    imerina_eyebrow: "04 — Quiz Imerina",
    imerina_title: "Imerina",
    imerina_desc: "Bienvenue dans ce court quiz qui nous rappelle l'histoire importante de l'Imerina. Essayez de répondre de mémoire à toutes les questions ! Les noms des rois, les dates et les événements marquants. Le jeu comporte trois niveaux et un temps limité pour réfléchir aux réponses.",
    imerina_feat_1: "Faits réels et historiques",
    imerina_feat_2: "Trois niveaux de difficulté",
    imerina_feat_3: "Temps de réflexion limité",
    imerina_feat_4: "Dates importantes à retenir",

    fihirana_eyebrow: "05 — Hymnaire catholique",
    fihirana_title: "Hymnaire",
    fihirana_desc: "L'Hymnaire est un recueil de chants sacrés utilisés dans l'Église catholique, que ce soit à la messe ou lors d'autres moments de prière. C'est une façon de rendre gloire à Dieu par la voix, les paroles et le cœur. Des catégories et une recherche ont été ajoutées pour faciliter l'utilisation. Notez qu'il s'agit encore d'une première version et que de nombreuses améliorations sont à venir. Il contient 60 hymnes parmi les plus connus.",
    fihirana_feat_1: "60 hymnes inclus",
    fihirana_feat_2: "En cours d'amélioration",
    fihirana_feat_3: "Chants soigneusement sélectionnés",
    fihirana_feat_4: "Plusieurs catégories",
    fihirana_feat_5: "Partage facile avec vos proches",

    other_title: "Autres",
    other_desc: "À l'ère du numérique, il existe de nouvelles façons d'apprendre aux enfants la langue et la culture malgaches à travers le jeu. Cela inclut des applications Android comme Fanorona 5, Fanorona 3 et Volana, conçues spécialement pour les enfants afin qu'ils approfondissent leur connaissance de la langue malgache tout en s'amusant. Veuillez noter qu'elles sont toutes destinées à Android.",

    footer_zip_note: "Tous les fichiers téléchargés ici sont au format ZIP. La raison principale est d'alléger le téléchargement et d'éviter tout blocage lors de l'extraction dû aux fausses alertes de virus du système. L'utilisation de ces travaux est gratuite et aucune responsabilité ni compensation n'est engagée en cas de problème.",
    footer_author: "Août 2026\nAuteur RASOLOMANANA Heritiana Noe.\nrasolomananaheritiana@gmail.com\nANTANANARIVO - MADAGASCAR"
  },
  en: {
    nav_bible: "Bible",
    nav_fanorona: "Fanorona",
    nav_calendar: "Almanac",
    nav_imerina: "Imerina",
    nav_fihirana: "Hymnal",
    hero_eyebrow: "Malagasy technology archive",
    hero_title_accent: "One shared vision.",
    hero_lead: "Daily scripture, traditional games, the liturgical calendar, a history quiz and the hymnal — crafted for modern devices while keeping their core essence intact.",
    hero_scroll: "Explore everything",
    bible_eyebrow: "01 — Reading",
    bible_title: "Bible",
    bible_desc: "A Bible reading app designed as a daily companion: color-coded verse highlighting, personal note-taking while reading, fast search across all scriptures, and easy copying or sharing of verses and full chapters.",
    bible_feat_1: "Color highlighting for verses",
    bible_feat_2: "Notes linked to chapters and verses",
    bible_feat_3: "Fast search across all scriptures",
    bible_feat_4: "Copy and share full chapters",
    fanorona_eyebrow: "02 — Gaming",
    fanorona_title: "Fanorona",
    fanorona_desc: "Fanorona is a historic Malagasy strategy board game: capturing pieces by approach or withdrawal creates tactical tension in every move. This application brings it to mobile and desktop for friendly matches.",
    fanorona_feat_1: "Traditional Fanorona gameplay",
    fanorona_feat_2: "Captures by approach and withdrawal",
    fanorona_feat_3: "Play with a friend on a single device",
    fanorona_feat_4: "In-game rules and reminders",
    cal_eyebrow: "03 — Spiritual Calendar",
    cal_title: "Almanac",
    cal_desc: "Almanac is a Catholic liturgical calendar following the sacred liturgical cycles (Advent, Lent, Easter, etc.) and seasonal colors. It features a rich archive of Saints' lives and feast days to discover every day.",
    cal_feat_1: "Daily Catholic liturgical calendar",
    cal_feat_2: "Liturgical cycles and seasonal colors",
    cal_feat_3: "Saints archive — life story & feast days",
    cal_feat_4: "Search for specific Saints",

    imerina_eyebrow: "04 — Imerina Quiz",
    imerina_title: "Imerina",
    imerina_desc: "Welcome to this short quiz that reminds us of the important history of Imerina. Try to answer all the questions from memory! The names of the kings, the dates and the events that took place. The game has three levels and a time limit for thinking of the answers.",
    imerina_feat_1: "Real historical facts",
    imerina_feat_2: "Three levels of difficulty",
    imerina_feat_3: "Limited thinking time",
    imerina_feat_4: "Key dates to remember",

    fihirana_eyebrow: "05 — Catholic Hymnal",
    fihirana_title: "Hymnal",
    fihirana_desc: "The Hymnal is a collection of sacred songs used in the Catholic Church, whether at Mass or during other times of prayer. It is a way to give glory to God through voice, lyrics and heart. Categories and search have been added for easy use. Note that this is still a first version and many improvements are coming. It contains 60 of the most well-known hymns.",
    fihirana_feat_1: "60 hymns included",
    fihirana_feat_2: "Under continuous improvement",
    fihirana_feat_3: "Carefully selected songs",
    fihirana_feat_4: "Multiple categories",
    fihirana_feat_5: "Easy to share with friends",

    other_title: "Others",
    other_desc: "In this digital age, there are new ways to teach children the Malagasy language and culture through play. This includes Android applications such as Fanorona 5, Fanorona 3 and Volana, designed specifically for children to deepen their knowledge of the Malagasy language while having fun. Please note that these are all for Android.",

    footer_zip_note: "All files you download here are in ZIP format. The main reason is to make downloads lighter and to prevent any blocking during extraction caused by false virus alerts from the system. The use of these works is free of charge and no liability or compensation is accepted in case of any problem.",
    footer_author: "August 2026\nAuthor RASOLOMANANA Heritiana Noe.\nrasolomananaheritiana@gmail.com\nANTANANARIVO - MADAGASCAR"
  }
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  if (typeof event !== 'undefined' && event.target) {
    event.target.classList.add('active');
  } else {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.textContent.trim().toLowerCase() === lang) {
        btn.classList.add('active');
      }
    });
  }
}

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
          /* Fetch may fail on file:// preview; let the normal download proceed. */
        });
    });
  });
})();