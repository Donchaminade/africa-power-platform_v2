(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/africapowerplatform/contexts/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const storedTheme = localStorage.getItem('theme');
            const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const initialTheme = storedTheme || preferredTheme;
            setTheme(initialTheme);
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>prevTheme === 'light' ? 'dark' : 'light');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/africapowerplatform/contexts/ThemeContext.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "FaR+67HYMnxyxOLL3EkvHKRjhfs=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/africapowerplatform/locales/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    fr: {
        nav: {
            about: "L'Événement",
            program: "Agenda",
            speakers: "Speakers",
            sponsors: "Partenaires",
            register: "S'inscrire"
        },
        hero: {
            date_label: "Édition 2026 • COTONOU, BÉNIN",
            title_main: "Africa Power Platform",
            subtitle: "Le premier sommet dédié à Microsoft Power Platform en Afrique de l'Ouest. Une initiative panafricaine pour éduquer, connecter et impacter.",
            cta_register: "S'inscrire (Participant)",
            cta_discover: "Découvrir l'événement"
        },
        stats: {
            label_speakers: "Experts Attendus",
            label_participants: "Participants Qualifiés",
            label_days: "Jours d'Immersion",
            label_workshops: "Ateliers Pratiques"
        },
        about: {
            title: "Une plateforme pour <span class='text-brand-green'>l'avenir technologique</span> de l'Afrique",
            description_main: "Africa Power Platform est une initiative panafricaine structurante, pensée comme un rendez-vous annuel itinérant pour renforcer les communautés Microsoft Power Platform locales à travers l'Afrique francophone et anglophone.",
            description_secondary: "Au-delà d'un simple événement, nous bâtissons une plateforme collaborative continentale pour favoriser le partage de compétences, créer des ponts entre talents et entreprises, et faire émerger des solutions technologiques adaptées aux enjeux africains.",
            tagline_1_title: "Éduquer",
            tagline_1_text: "Donner la valeur immédiate aux talents via des cas d'usage concrets.",
            tagline_2_title: "Connecter",
            tagline_2_text: "Créer la connexion et la fierté communautaire.",
            tagline_3_title: "Impacter",
            tagline_3_text: "Attirer talents et partenaires par l'utilité prouvée."
        },
        speakers: {
            title: "Les <span class='text-brand-green'>Architectes</span> du Futur"
        },
        program: {
            pre_title: "L'AGENDA",
            title_main: "Deux jours <span class='text-brand-green'>d'immersion</span>",
            day1_title: "Jour 1 : Conférence",
            day1_subtitle: "Samedi 20 Juin 2026",
            d1_item1_title: "Keynotes d'Ouverture",
            d1_item1_desc: "Inspiration, vision et partage autour de la transformation digitale et du leadership.",
            d1_item2_title: "Panels Thématiques & Retours d'Expérience",
            d1_item2_desc: "Cas d'usage concrets en entreprise, agriculture, services publics et impact social.",
            d1_item3_title: "Networking Stratégique",
            d1_item3_desc: "Sessions de questions-réponses et rencontres avec les experts et communautés locales.",
            day2_title: "Jour 2 : Bootcamp Pratique",
            day2_subtitle: "Dimanche 21 Juin 2026",
            d2_item1_title: "Ateliers de Co-création",
            d2_item1_desc: "Mise en situation réelle pour concevoir et tester des solutions low-code répondant à des problématiques locales.",
            d2_item2_title: "Montée en Compétences",
            d2_item2_desc: "Expérimenter, recueillir des retours terrain et favoriser l'innovation collaborative."
        },
        registration: {
            title: "Participez à l'édition fondatrice",
            subtitle: "Que vous soyez développeur, entrepreneur, décideur ou simplement curieux, votre place est parmi nous pour co-construire l'avenir du low-code en Afrique.",
            cta_button: "Je réserve ma place"
        },
        gallery: {
            pre_title: "Archives Visuelles",
            title_part1: "L'Étincelle de",
            title_part2: "l'Innovation",
            view_all: "Voir Toute la Galerie"
        },
        location: {
            pre_title: "Le Lieu",
            title_part1: "Cœur de l'Innovation:",
            title_part2: "Cotonou",
            description: "L'événement se tiendra dans un lieu emblématique, facile d'accès et parfaitement équipé pour accueillir un sommet de cette envergure.",
            address_title: "Adresse",
            access_title: "Accès & Parking",
            access_value: "Parking disponible sur place. Facilement accessible en taxi."
        },
        sponsors: {
            pre_title: "Nos Partenaires",
            title_part1: "Ils soutiennent",
            title_part2: "l'innovation",
            button: "Devenir Partenaire"
        },
        team: {
            pre_title: "L'Équipe d'Organisation",
            title: "Propulsé par la <span class='text-brand-green'>Communauté</span>"
        },
        faq: {
            pre_title: "Questions Fréquentes",
            title: "Vos <span class='text-brand-green'>Questions</span>, Nos Réponses"
        },
        collaboration: {
            title: "Passez à l'action",
            subtitle: "L'Africa Power Platform n'est pas un projet d'intention. C'est un cadre d'action, prêt à être activé. Rejoignez-nous.",
            sponsor_cta: "Devenir Partenaire",
            talk_cta: "Proposer un Talk",
            panel_cta: "Proposer un Panel"
        },
        contact: {
            pre_title: "Restez Connecté",
            title: "Ne manquez aucune actualité",
            subtitle: "Inscrivez-vous à notre newsletter pour recevoir le programme détaillé, la liste des speakers et les annonces importantes.",
            placeholder: "Votre adresse email...",
            button: "S'inscrire",
            button_loading: "Envoi...",
            success_title: "Merci !",
            success_message: "Vous êtes bien inscrit à notre liste de diffusion.",
            error_message: "Veuillez entrer une adresse email valide.",
            whatsapp_tooltip: "Rejoignez la communauté WhatsApp"
        },
        footer: {
            tagline: "Éduquer, connecter et impacter avec le low-code en Afrique.",
            nav_title: "Navigation",
            contact_title: "Contact",
            social_title: "Suivez-nous",
            copyright: "Africa Power Platform. Tous droits réservés."
        }
    },
    en: {
        nav: {
            about: "The Event",
            program: "Agenda",
            speakers: "Speakers",
            sponsors: "Partners",
            register: "Register"
        },
        hero: {
            date_label: "2026 Edition • COTONOU, BENIN",
            title_main: "Africa Power Platform",
            subtitle: "The first summit dedicated to Microsoft Power Platform in West Africa. A pan-African initiative to educate, connect, and impact.",
            cta_register: "Register (Attendee)",
            cta_discover: "Discover the event"
        },
        stats: {
            label_speakers: "Expected Experts",
            label_participants: "Qualified Attendees",
            label_days: "Immersion Days",
            label_workshops: "Practical Workshops"
        },
        about: {
            title: "A platform for Africa's <span class='text-brand-green'>technological future</span>",
            description_main: "Africa Power Platform is a structuring pan-African initiative, designed as an annual, itinerant event to strengthen local Microsoft Power Platform communities across French and English-speaking Africa.",
            description_secondary: "Beyond a simple event, we are building a continental collaborative platform to foster skill sharing, create bridges between talents and companies, and promote the emergence of technological solutions adapted to African challenges.",
            tagline_1_title: "Educate",
            tagline_1_text: "Provide immediate value to talents through concrete use cases.",
            tagline_2_title: "Connect",
            tagline_2_text: "Create community connection and pride.",
            tagline_3_title: "Impact",
            tagline_3_text: "Attract talent and partners through proven utility."
        },
        speakers: {
            title: "The <span class='text-brand-green'>Architects</span> of the Future"
        },
        program: {
            pre_title: "THE AGENDA",
            title_main: "Two days of <span class='text-brand-green'>immersion</span>",
            day1_title: "Day 1: Conference",
            day1_subtitle: "Saturday, June 20, 2026",
            d1_item1_title: "Opening Keynotes",
            d1_item1_desc: "Inspiration, vision, and insights on digital transformation and leadership.",
            d1_item2_title: "Thematic Panels & Experience Sharing",
            d1_item2_desc: "Concrete use cases in business, agriculture, public services, and social impact.",
            d1_item3_title: "Strategic Networking",
            d1_item3_desc: "Q&A sessions and meetings with experts and local communities.",
            day2_title: "Day 2: Practical Bootcamp",
            day2_subtitle: "Sunday, June 21, 2026",
            d2_item1_title: "Co-creation Workshops",
            d2_item1_desc: "Real-world scenarios to design and test low-code solutions for local challenges.",
            d2_item2_title: "Skill Enhancement",
            d2_item2_desc: "Experiment, gather field feedback, and foster collaborative innovation."
        },
        registration: {
            title: "Join the founding edition",
            subtitle: "Whether you are a developer, entrepreneur, decision-maker, or simply curious, your place is with us to co-build the future of low-code in Africa.",
            cta_button: "I reserve my spot"
        },
        gallery: {
            pre_title: "Visual Archives",
            title_part1: "The Spark of",
            title_part2: "Innovation",
            view_all: "View Full Gallery"
        },
        location: {
            pre_title: "The Venue",
            title_part1: "Heart of Innovation:",
            title_part2: "Cotonou",
            description: "The event will be held at an iconic venue, easily accessible and perfectly equipped to host a summit of this scale.",
            address_title: "Address",
            access_title: "Access & Parking",
            access_value: "On-site parking available. Easily accessible by taxi."
        },
        sponsors: {
            pre_title: "Our Partners",
            title_part1: "They support",
            title_part2: "innovation",
            button: "Become a Partner"
        },
        team: {
            pre_title: "The Organizing Team",
            title: "Powered by the <span class='text-brand-green'>Community</span>"
        },
        faq: {
            pre_title: "Frequently Asked Questions",
            title: "Your <span class='text-brand-green'>Questions</span>, Our Answers"
        },
        collaboration: {
            title: "Take action",
            subtitle: "The Africa Power Platform is not a project of intention. It is a framework for action, ready to be activated. Join us.",
            sponsor_cta: "Become a Partner",
            talk_cta: "Propose a Talk",
            panel_cta: "Propose a Panel"
        },
        contact: {
            pre_title: "Stay Connected",
            title: "Don't miss any news",
            subtitle: "Subscribe to our newsletter to receive the detailed program, the list of speakers, and important announcements.",
            placeholder: "Your email address...",
            button: "Subscribe",
            button_loading: "Sending...",
            success_title: "Thank you!",
            success_message: "You have successfully subscribed to our mailing list.",
            error_message: "Please enter a valid email address.",
            whatsapp_tooltip: "Join the WhatsApp community"
        },
        footer: {
            tagline: "Educate, connect, and impact with low-code in Africa.",
            nav_title: "Navigation",
            contact_title: "Contact",
            social_title: "Follow Us",
            copyright: "Africa Power Platform. All rights reserved."
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/africapowerplatform/utils/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility to handle API calls with robust error handling.
 * Prevents "Unexpected token '<'" errors by checking content type.
 */ __turbopack_context__.s([
    "apiFetch",
    ()=>apiFetch
]);
async function apiFetch(url, options, fallbackData) {
    try {
        const response = await fetch(url, options);
        const contentType = response.headers.get("content-type");
        if (!response.ok) {
            let errorMessage = `Error ${response.status}: ${response.statusText}`;
            try {
                if (contentType && contentType.includes("application/json")) {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                }
            } catch (e) {
            // Ignore parse error
            }
            throw new Error(errorMessage);
        }
        if (!contentType || !contentType.includes("application/json")) {
            const text = await response.text();
            if (text.trim().startsWith("<?php") || text.trim().startsWith("<!DOCTYPE")) {
                console.warn(`API at ${url} is not configured on this server (PHP raw source returned). Using fallback data.`);
                if (fallbackData !== undefined) return fallbackData;
                throw new Error("API_NOT_CONFIGURED");
            }
            throw new Error("Invalid response format from server.");
        }
        return response.json();
    } catch (error) {
        if (fallbackData !== undefined) {
            console.warn(`Fetch to ${url} failed. Using fallback data.`, error);
            return fallbackData;
        }
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/africapowerplatform/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$locales$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/locales/translations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/utils/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('fr');
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const storedLang = localStorage.getItem('language');
            if (storedLang) setLanguage(storedLang);
            const loadSettings = {
                "LanguageProvider.useEffect.loadSettings": async ()=>{
                    try {
                        // Timeout de sécurité pour ne pas bloquer le splash screen
                        const timeoutPromise = new Promise({
                            "LanguageProvider.useEffect.loadSettings": (_, reject)=>setTimeout({
                                    "LanguageProvider.useEffect.loadSettings": ()=>reject(new Error('TIMEOUT'))
                                }["LanguageProvider.useEffect.loadSettings"], 3000)
                        }["LanguageProvider.useEffect.loadSettings"]);
                        // FIX: The fallback data must match the expected generic type { data: Settings }.
                        const fetchPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('power_api/settings.php', {}, {
                            data: {}
                        });
                        const res = await Promise.race([
                            fetchPromise,
                            timeoutPromise
                        ]);
                        // Assurer que le résultat est du type attendu avant de l'utiliser
                        if (res && typeof res === 'object' && 'data' in res && res.data !== undefined) {
                            setSettings(res.data);
                        }
                    } catch (err) {
                        console.warn("Could not load remote settings, some features might use default values.", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["LanguageProvider.useEffect.loadSettings"];
            loadSettings();
        }
    }["LanguageProvider.useEffect"], []);
    const toggleLanguage = ()=>{
        const newLang = language === 'fr' ? 'en' : 'fr';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };
    const t = (key)=>{
        // La fonction de traduction utilise uniquement les fichiers locaux
        const keys = key.split('.');
        let result = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$locales$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language];
        for (const k of keys){
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                return key;
            }
        }
        return result;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t,
            loading,
            settings
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/africapowerplatform/contexts/LanguageContext.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "NojmKdrHigQOMn9U5UxNyRgJhO8=");
_c = LanguageProvider;
const useTranslation = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
_s1(useTranslation, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/africapowerplatform/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/contexts/LanguageContext.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/Downloads/africapowerplatform/app/providers.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/africapowerplatform/app/providers.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/africapowerplatform/components/SplashScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
const SplashScreen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/images/logo.png",
                alt: "Africa Power Platform Logo",
                width: 80,
                height: 80,
                className: "animate-pulse"
            }, void 0, false, {
                fileName: "[project]/Downloads/africapowerplatform/components/SplashScreen.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Downloads/africapowerplatform/components/SplashScreen.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/africapowerplatform/components/SplashScreen.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SplashScreen;
const __TURBOPACK__default__export__ = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/africapowerplatform/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$app$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/app/providers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$components$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/africapowerplatform/components/SplashScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RootLayout({ children }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
            const timer = setTimeout({
                "RootLayout.useEffect.timer": ()=>{
                    setLoading(false);
                }
            }["RootLayout.useEffect.timer"], 2000); // 2 seconds
            return ({
                "RootLayout.useEffect": ()=>clearTimeout(timer)
            })["RootLayout.useEffect"];
        }
    }["RootLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "fr",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Africa Power Platform"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/africapowerplatform/app/layout.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/assets/images/logo.png"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/africapowerplatform/app/layout.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/africapowerplatform/app/layout.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300 antialiased",
                children: [
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$components$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/africapowerplatform/app/layout.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$app$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Providers"], {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Downloads/africapowerplatform/app/layout.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/africapowerplatform/app/layout.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/africapowerplatform/app/layout.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(RootLayout, "J7PPXooW06IQ11rfabbvgk72KFw=");
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_africapowerplatform_8045ae81._.js.map