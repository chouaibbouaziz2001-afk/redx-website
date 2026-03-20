// REDX SEO Manager — Per-page meta tags, OG, hreflang, schema.org
import { getCurrentLang } from './i18n.js';

const BASE_URL = 'https://redx.ca';

// Per-page SEO data
const seoData = {
    home: {
        fr: {
            title: 'REDX — Agence Digitale Propulsée par l\'IA | Montréal',
            description: 'REDX : agence digitale propulsée par l\'IA à Montréal. Stratégie marketing, automatisation IA, création de contenu, développement web et mobile.',
            path: '/',
        },
        en: {
            title: 'REDX — AI-Powered Digital Agency | Montreal',
            description: 'REDX: AI-powered digital agency in Montreal. Marketing strategy, AI automation, content creation, web and mobile development.',
            path: '/en/',
        },
    },
    services: {
        fr: {
            title: 'Nos Services — REDX | Marketing IA, Développement & Contenu',
            description: 'Découvrez les services REDX : publicités Meta, automatisations IA, création de contenu, développement web et mobile, génération de leads.',
            path: '/services',
        },
        en: {
            title: 'Our Services — REDX | AI Marketing, Development & Content',
            description: 'Discover REDX services: Meta ads, AI automations, content creation, web and mobile development, lead generation.',
            path: '/en/services',
        },
    },
    about: {
        fr: {
            title: 'À Propos — REDX | Agence IA & Marketing Digital Montréal',
            description: 'Apprenez-en plus sur REDX, l\'agence digitale propulsée par l\'IA qui aide les entreprises à dominer le digital depuis Montréal.',
            path: '/a-propos',
        },
        en: {
            title: 'About Us — REDX | AI & Digital Marketing Agency Montreal',
            description: 'Learn about REDX, the AI-powered digital agency helping businesses dominate the digital landscape from Montreal.',
            path: '/en/about',
        },
    },
    portfolio: {
        fr: {
            title: 'Réalisations — REDX | Études de Cas & Portfolio',
            description: 'Explorez nos réalisations : projets e-commerce, campagnes marketing, applications mobiles et plateformes SaaS propulsés par l\'IA.',
            path: '/realisations',
        },
        en: {
            title: 'Case Studies — REDX | Portfolio & Projects',
            description: 'Explore our work: e-commerce projects, marketing campaigns, mobile apps and SaaS platforms powered by AI.',
            path: '/en/portfolio',
        },
    },
    contact: {
        fr: {
            title: 'Contactez-nous — REDX | Agence Digitale Montréal',
            description: 'Contactez REDX pour démarrer votre projet digital. Appel stratégique gratuit avec notre équipe à Montréal.',
            path: '/contact',
        },
        en: {
            title: 'Contact Us — REDX | Digital Agency Montreal',
            description: 'Contact REDX to start your digital project. Free strategy call with our team in Montreal.',
            path: '/en/contact',
        },
    },
    privacy: {
        fr: {
            title: 'Politique de Confidentialité — REDX',
            description: 'Politique de confidentialité de REDX. Découvrez comment nous protégeons vos données personnelles.',
            path: '/politique-de-confidentialite',
        },
        en: {
            title: 'Privacy Policy — REDX',
            description: 'REDX privacy policy. Learn how we protect your personal data.',
            path: '/en/privacy-policy',
        },
    },
    terms: {
        fr: {
            title: 'Conditions d\'Utilisation — REDX',
            description: 'Conditions d\'utilisation du site web REDX. Termes et conditions générales.',
            path: '/conditions-utilisation',
        },
        en: {
            title: 'Terms of Use — REDX',
            description: 'REDX website terms of use. General terms and conditions.',
            path: '/en/terms-of-use',
        },
    },
};

// Schema.org JSON-LD for homepage
const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "REDX",
    "url": "https://redx.ca",
    "logo": "https://redx.ca/logo.png",
    "description": "Agence digitale propulsée par l'IA — automatisation, marketing, développement web et mobile.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "addressCountry": "CA"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["French", "English"]
    },
    "sameAs": [
        "https://www.facebook.com/redx",
        "https://www.instagram.com/redx",
        "https://www.linkedin.com/company/redx"
    ]
};

export function updateSEO(pageKey) {
    const lang = getCurrentLang();
    const data = seoData[pageKey]?.[lang] || seoData.home[lang];
    const frData = seoData[pageKey]?.fr || seoData.home.fr;
    const enData = seoData[pageKey]?.en || seoData.home.en;

    // Title
    document.title = data.title;

    // Lang attribute
    document.documentElement.lang = lang;

    // Meta description
    setMeta('description', data.description);

    // Canonical
    setLink('canonical', BASE_URL + data.path);

    // hreflang
    setLink('alternate[hreflang="fr"]', BASE_URL + frData.path, 'alternate', { hreflang: 'fr' });
    setLink('alternate[hreflang="en"]', BASE_URL + enData.path, 'alternate', { hreflang: 'en' });
    setLink('alternate[hreflang="x-default"]', BASE_URL + frData.path, 'alternate', { hreflang: 'x-default' });

    // Open Graph
    setMeta('og:title', data.title, true);
    setMeta('og:description', data.description, true);
    setMeta('og:image', BASE_URL + '/og-image-redx.jpg', true);
    setMeta('og:url', BASE_URL + data.path, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', lang === 'fr' ? 'fr_CA' : 'en_CA', true);
    setMeta('og:locale:alternate', lang === 'fr' ? 'en_CA' : 'fr_CA', true);

    // Twitter / X Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', data.title);
    setMeta('twitter:description', data.description);
    setMeta('twitter:image', BASE_URL + '/og-image-redx.jpg');

    // Schema.org JSON-LD (homepage only)
    let schemaEl = document.getElementById('schema-org');
    if (pageKey === 'home') {
        if (!schemaEl) {
            schemaEl = document.createElement('script');
            schemaEl.id = 'schema-org';
            schemaEl.type = 'application/ld+json';
            document.head.appendChild(schemaEl);
        }
        schemaEl.textContent = JSON.stringify(schemaOrg);
    } else if (schemaEl) {
        schemaEl.remove();
    }
}

function setMeta(name, content, isProperty = false) {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setLink(id, href, rel = 'canonical', attrs = {}) {
    const selectorId = id.replace(/[\[\]"=]/g, '_');
    let el = document.querySelector(`link[data-seo-id="${selectorId}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('data-seo-id', selectorId);
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    Object.entries(attrs).forEach(([key, val]) => el.setAttribute(key, val));
}

// Export seoData for sitemap generation or route mapping
export { seoData, BASE_URL };
