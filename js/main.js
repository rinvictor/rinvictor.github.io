// Language toggle (EN / ES). Remembers the choice; defaults to the browser language.
(function () {
    var TITLES = {
        en: 'Víctor Rincón Yepes | Senior Computer Vision & Deep Learning Engineer',
        es: 'Víctor Rincón Yepes | Ingeniero Senior de Visión Artificial y Deep Learning'
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.title = TITLES[lang];
        try { localStorage.setItem('lang', lang); } catch (e) {}
    }

    function initialLanguage() {
        try {
            var saved = localStorage.getItem('lang');
            if (saved === 'en' || saved === 'es') return saved;
        } catch (e) {}
        return (navigator.language || 'en').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
    }

    window.toggleLanguage = function () {
        setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es');
    };

    setLanguage(initialLanguage());
})();
