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
"[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$africapowerplatform$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/africapowerplatform/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/africapowerplatform/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Downloads_africapowerplatform_c29b978f._.js.map