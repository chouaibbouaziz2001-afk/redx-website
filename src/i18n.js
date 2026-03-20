// REDX Bilingual Translation System
const translations = {
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.portfolio': 'Réalisations',
    'nav.contact': 'Contact',
    'nav.cta': 'Contactez-nous',

    // Hero
    'hero.badge': 'Agence digitale propulsée par l\'IA',
    'hero.title': 'On fait croître votre business avec <span class="highlight">l\'IA et la créativité</span>',
    'hero.subtitle': 'REDX est une agence digitale propulsée par l\'IA — stratégie, automatisation, contenu et technologie, tout sous un même toit.',
    'hero.cta1': 'Commencer maintenant',
    'hero.cta2': 'Voir nos réalisations',

    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Tout ce dont votre entreprise a besoin pour dominer le digital.',
    'service.1.title': 'Création de Contenu',
    'service.1.desc': 'Contenu percutant conçu pour votre marque — vidéos, visuels, copywriting et publications qui convertissent.',
    'service.2.title': 'Publicités Meta',
    'service.2.desc': 'Campagnes publicitaires pilotées par les données sur Meta. Stratégie, créatifs, ciblage et optimisation, on s\'occupe de tout.',
    'service.3.title': 'Stratégie Marketing',
    'service.3.desc': 'Stratégies marketing sur mesure alignées à vos objectifs — du positionnement de marque à l\'exécution des campagnes.',
    'service.4.title': 'Automatisations IA',
    'service.4.desc': 'Solutions d\'intelligence artificielle pour automatiser vos processus d\'affaires.',
    'service.4.sub1.label': 'Agents d\'appel IA',
    'service.4.sub1.desc': 'Agents vocaux intelligents qui gèrent vos appels entrants et sortants 24h/24, 7j/7',
    'service.4.sub2.label': 'Chatbots IA',
    'service.4.sub2.desc': 'Bots conversationnels pour site web, WhatsApp et Messenger',
    'service.4.sub3.label': 'Automatisation d\'entreprise',
    'service.4.sub3.desc': 'Automatisation complète de vos processus d\'affaires par l\'IA',
    'service.5.title': 'Génération de Leads',
    'service.5.desc': 'Systèmes multicanaux qui remplissent votre pipeline de prospects qualifiés en continu.',
    'service.6.title': 'Sites Web',
    'service.6.desc': 'Sites web haute performance, optimisés pour la conversion et le référencement.',
    'service.7.title': 'Applications Web',
    'service.7.desc': 'Applications web sur mesure conçues pour la rapidité, la scalabilité et l\'expérience utilisateur.',
    'service.8.title': 'Applications Mobiles',
    'service.8.desc': 'Applications mobiles natives et multiplateformes pour iOS et Android.',
    'service.9.title': 'Plateformes',
    'service.9.desc': 'Plateformes SaaS et écosystèmes digitaux complets, construits de zéro.',

    // Why REDX
    'why.title': 'Pourquoi REDX ?',
    'why.subtitle': 'Ce qui nous distingue des autres agences.',
    'why.1.title': 'Propulsé par l\'IA',
    'why.1.desc': 'On intègre l\'intelligence artificielle dans chaque aspect de nos stratégies pour des résultats supérieurs.',
    'why.2.title': 'Axé sur les résultats',
    'why.2.desc': 'Chaque action est mesurée, analysée et optimisée pour maximiser votre retour sur investissement.',
    'why.3.title': 'Agence Full-Stack',
    'why.3.desc': 'Du contenu à la technologie, tout est réuni sous un même toit. Pas besoin de coordonner 10 fournisseurs.',

    // Logos
    'logos.title': 'Ils nous font confiance',

    // CTA Banner
    'cta.title': 'Prêts à passer à la vitesse supérieure ?',
    'cta.subtitle': 'Réservez un appel stratégique gratuit avec notre équipe.',
    'cta.btn': 'Contactez-nous',

    // Footer
    'footer.tagline': 'L\'agence qui automatise votre croissance.',
    'footer.col1': 'Navigation',
    'footer.col2': 'Services',
    'footer.col3': 'Contact',
    'footer.rights': '© 2025 REDX. Tous droits réservés.',
    'footer.email': 'info@redx.agency',
    'footer.phone': '+213 563 58 39 38',

    // Contact Page
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêts à démarrer votre prochain projet ? Envoyez-nous un message.',
    'contact.name': 'Nom',
    'contact.email': 'Courriel',
    'contact.company': 'Entreprise',
    'contact.service': 'Service qui vous intéresse',
    'contact.service.placeholder': 'Sélectionnez un service',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer ma demande',
    'contact.info.title': 'Informations',
    'contact.info.email.label': 'Courriel',
    'contact.info.phone.label': 'Téléphone',
    'contact.info.location.label': 'Emplacement',
    'contact.info.location.value': 'Alger, Algérie',
    'contact.info.hours.label': 'Heures',
    'contact.info.hours.value': 'Lun - Ven, 9h - 18h',

    // About Page
    'about.title': 'À propos de REDX',
    'about.subtitle': 'L\'agence digitale qui propulse votre croissance.',
    'about.story.title': 'Notre Histoire',
    'about.story.p1': 'REDX est née d\'une vision simple : réunir technologie de pointe, intelligence artificielle et créativité humaine pour offrir aux entreprises un avantage compétitif majeur dans le monde digital.',
    'about.story.p2': 'Notre équipe de stratèges, développeurs et créatifs travaille en synergie pour concevoir des solutions qui transforment réellement les entreprises.',
    'about.values.title': 'Nos Valeurs',
    'about.value.1.title': 'Innovation',
    'about.value.1.desc': 'On repousse constamment les limites de ce qui est possible avec la technologie et l\'IA.',
    'about.value.2.title': 'Excellence',
    'about.value.2.desc': 'Chaque projet est traité avec la plus haute exigence de qualité et de performance.',
    'about.value.3.title': 'Impact',
    'about.value.3.desc': 'On ne crée pas juste du beau — on crée des solutions qui génèrent des résultats concrets.',
    'about.timeline.title': 'Notre Parcours',
    'about.timeline.1.year': '2022',
    'about.timeline.1.title': 'Fondation de REDX',
    'about.timeline.1.desc': 'Lancement de l\'agence avec une mission claire : démocratiser l\'accès à l\'IA pour les entreprises.',
    'about.timeline.2.year': '2023',
    'about.timeline.2.title': 'Expansion des services',
    'about.timeline.2.desc': 'Ajout des services d\'automatisation IA et de développement de plateformes.',
    'about.timeline.3.year': '2024',
    'about.timeline.3.title': 'Reconnaissance',
    'about.timeline.3.desc': 'Plus de 50 entreprises accompagnées et des résultats qui parlent d\'eux-mêmes.',
    'about.timeline.4.year': '2025',
    'about.timeline.4.title': 'L\'ère de l\'IA',
    'about.timeline.4.desc': 'Intégration profonde de l\'IA dans tous nos services pour des résultats exponentiels.',

    // Portfolio
    'portfolio.title': 'Nos Réalisations',
    'portfolio.subtitle': 'Découvrez comment nous avons aidé nos clients à dominer leur marché.',
    'portfolio.view': 'Voir le projet',
    'portfolio.1.title': 'Plateforme E-commerce Premium',
    'portfolio.1.tag': 'Application Web',
    'portfolio.1.desc': 'Refonte complète d\'une plateforme e-commerce avec intégration IA pour recommandations personnalisées.',
    'portfolio.2.title': 'Campagne Lead Gen B2B',
    'portfolio.2.tag': 'Marketing Digital',
    'portfolio.2.desc': 'Stratégie multicanale ayant généré 2 500+ leads qualifiés en 3 mois.',
    'portfolio.3.title': 'App Mobile FinTech',
    'portfolio.3.tag': 'Application Mobile',
    'portfolio.3.desc': 'Application bancaire mobile avec authentification biométrique et tableau de bord IA.',
    'portfolio.4.title': 'Système d\'Automatisation IA',
    'portfolio.4.tag': 'Automatisation IA',
    'portfolio.4.desc': 'Chatbot IA et agent d\'appel pour une entreprise de services avec 10 000+ interactions/mois.',
    'portfolio.5.title': 'Identité de Marque SaaS',
    'portfolio.5.tag': 'Création de Contenu',
    'portfolio.5.desc': 'Branding complet et stratégie de contenu pour une startup SaaS en croissance.',
    'portfolio.6.title': 'Plateforme SaaS RH',
    'portfolio.6.tag': 'Plateforme',
    'portfolio.6.desc': 'Plateforme complète de gestion des ressources humaines avec modules IA intégrés.',

    // Legal Pages
    'legal.privacy.title': 'Politique de Confidentialité',
    'legal.privacy.updated': 'Dernière mise à jour : Mars 2025',
    'legal.privacy.h1': 'Collecte de données',
    'legal.privacy.p1': 'REDX collecte certaines informations personnelles lorsque vous utilisez notre site web, y compris votre nom, adresse courriel, et numéro de téléphone lorsque vous remplissez notre formulaire de contact. Nous utilisons également des témoins (cookies) pour analyser le trafic.',
    'legal.privacy.h2': 'Utilisation des données',
    'legal.privacy.p2': 'Vos données personnelles sont utilisées uniquement pour répondre à vos demandes, améliorer nos services, et vous envoyer des communications pertinentes avec votre consentement.',
    'legal.privacy.h3': 'Protection des données',
    'legal.privacy.p3': 'Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.',
    'legal.privacy.h4': 'Témoins (Cookies)',
    'legal.privacy.p4': 'Notre site utilise des témoins essentiels et analytiques. Les témoins analytiques (Google Analytics, Meta Pixel) ne sont activés qu\'après votre consentement explicite, conformément à la Loi 25 du Québec.',
    'legal.privacy.h5': 'Vos droits',
    'legal.privacy.p5': 'Conformément à la Loi sur la protection des renseignements personnels (LPRPDE/PIPEDA) et la Loi 25 du Québec, vous avez le droit d\'accéder à vos données, de les corriger, et de demander leur suppression. Contactez-nous à info@redx.agency.',

    'legal.terms.title': 'Conditions d\'Utilisation',
    'legal.terms.updated': 'Dernière mise à jour : Mars 2025',
    'legal.terms.h1': 'Acceptation des conditions',
    'legal.terms.p1': 'En accédant au site web de REDX (redx.ca), vous acceptez d\'être lié par ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre site.',
    'legal.terms.h2': 'Propriété intellectuelle',
    'legal.terms.p2': 'Tout le contenu présent sur ce site — incluant textes, images, logos, design et code — est la propriété de REDX et est protégé par les lois canadiennes sur le droit d\'auteur.',
    'legal.terms.h3': 'Utilisation du site',
    'legal.terms.p3': 'Vous pouvez consulter notre site à des fins d\'information. Toute reproduction, distribution ou utilisation commerciale du contenu sans autorisation écrite est interdite.',
    'legal.terms.h4': 'Limitation de responsabilité',
    'legal.terms.p4': 'REDX fournit ce site « tel quel » sans garantie d\'aucune sorte. Nous ne sommes pas responsables des dommages directs ou indirects résultant de l\'utilisation de ce site.',
    'legal.terms.h5': 'Loi applicable',
    'legal.terms.p5': 'Ces conditions sont régies par les lois du Québec, Canada. Tout litige sera soumis aux tribunaux compétents de Montréal.',

    // 404
    '404.title': 'Page introuvable',
    '404.subtitle': 'La page que vous cherchez n\'existe pas ou a été déplacée.',
    '404.cta': 'Retour à l\'accueil',

    // Footer Legal
    'footer.legal': 'Légal',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.portfolio': 'Case Studies',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact Us',

    // Hero
    'hero.badge': 'AI-Powered Digital Agency',
    'hero.title': 'We Grow Businesses With <span class="highlight">AI & Creativity</span>',
    'hero.subtitle': 'REDX is an AI-powered digital agency — strategy, automation, content, and technology, all under one roof.',
    'hero.cta1': 'Get Started',
    'hero.cta2': 'See Our Work',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Everything your business needs to dominate the digital landscape.',
    'service.1.title': 'Content Creation',
    'service.1.desc': 'Scroll-stopping content crafted for your brand — videos, graphics, copywriting, and social media assets that convert.',
    'service.2.title': 'Meta Ads',
    'service.2.desc': 'Data-driven paid advertising campaigns on Meta platforms. We handle strategy, creatives, targeting, and optimization.',
    'service.3.title': 'Marketing Strategy',
    'service.3.desc': 'Full-funnel marketing strategies tailored to your goals — from brand positioning to campaign execution.',
    'service.4.title': 'AI Automations',
    'service.4.desc': 'Artificial intelligence solutions to automate your business processes.',
    'service.4.sub1.label': 'AI Call Agents',
    'service.4.sub1.desc': 'Intelligent voice agents that handle inbound/outbound calls 24/7',
    'service.4.sub2.label': 'AI Chatbots',
    'service.4.sub2.desc': 'Smart conversational bots for websites, WhatsApp, and Messenger',
    'service.4.sub3.label': 'Enterprise Automation',
    'service.4.sub3.desc': 'End-to-end business process automation using AI',
    'service.5.title': 'Lead Generation',
    'service.5.desc': 'Multi-channel lead gen systems that fill your pipeline with qualified prospects consistently.',
    'service.6.title': 'Websites',
    'service.6.desc': 'High-performance, conversion-optimized websites built to impress and rank.',
    'service.7.title': 'Web Apps',
    'service.7.desc': 'Custom web applications designed for scale, speed, and seamless user experience.',
    'service.8.title': 'Mobile Apps',
    'service.8.desc': 'Native and cross-platform mobile apps built for iOS and Android.',
    'service.9.title': 'Platforms',
    'service.9.desc': 'Full-scale SaaS platforms and digital ecosystems built from the ground up.',

    // Why REDX
    'why.title': 'Why REDX?',
    'why.subtitle': 'What sets us apart from other agencies.',
    'why.1.title': 'AI-Powered',
    'why.1.desc': 'We integrate artificial intelligence into every aspect of our strategies for superior results.',
    'why.2.title': 'Results-Driven',
    'why.2.desc': 'Every action is measured, analyzed, and optimized to maximize your return on investment.',
    'why.3.title': 'Full-Stack Agency',
    'why.3.desc': 'From content to technology, everything under one roof. No need to coordinate 10 different vendors.',

    // Logos
    'logos.title': 'Trusted By',

    // CTA Banner
    'cta.title': 'Ready to Scale?',
    'cta.subtitle': 'Book a free strategy call with our team.',
    'cta.btn': 'Contact Us',

    // Footer
    'footer.tagline': 'The agency that automates your growth.',
    'footer.col1': 'Navigation',
    'footer.col2': 'Services',
    'footer.col3': 'Contact',
    'footer.rights': '© 2025 REDX. All rights reserved.',
    'footer.email': 'info@redx.agency',
    'footer.phone': '+213 563 58 39 38',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your next project? Send us a message.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.service': 'Service of interest',
    'contact.service.placeholder': 'Select a service',
    'contact.message': 'Message',
    'contact.submit': 'Send my request',
    'contact.info.title': 'Information',
    'contact.info.email.label': 'Email',
    'contact.info.phone.label': 'Phone',
    'contact.info.location.label': 'Location',
    'contact.info.location.value': 'Algiers, Algeria',
    'contact.info.hours.label': 'Hours',
    'contact.info.hours.value': 'Mon - Fri, 9AM - 6PM',

    // About Page
    'about.title': 'About REDX',
    'about.subtitle': 'The digital agency that fuels your growth.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'REDX was born from a simple vision: combine cutting-edge technology, artificial intelligence, and human creativity to give businesses a major competitive advantage in the digital world.',
    'about.story.p2': 'Our team of strategists, developers, and creatives work in synergy to design solutions that truly transform businesses.',
    'about.values.title': 'Our Values',
    'about.value.1.title': 'Innovation',
    'about.value.1.desc': 'We constantly push the boundaries of what\'s possible with technology and AI.',
    'about.value.2.title': 'Excellence',
    'about.value.2.desc': 'Every project is treated with the highest standards of quality and performance.',
    'about.value.3.title': 'Impact',
    'about.value.3.desc': 'We don\'t just create beautiful things — we build solutions that generate real results.',
    'about.timeline.title': 'Our Journey',
    'about.timeline.1.year': '2022',
    'about.timeline.1.title': 'REDX Founded',
    'about.timeline.1.desc': 'Agency launched with a clear mission: democratize access to AI for businesses.',
    'about.timeline.2.year': '2023',
    'about.timeline.2.title': 'Service Expansion',
    'about.timeline.2.desc': 'Added AI automation services and platform development capabilities.',
    'about.timeline.3.year': '2024',
    'about.timeline.3.title': 'Recognition',
    'about.timeline.3.desc': 'Over 50 businesses served with results that speak for themselves.',
    'about.timeline.4.year': '2025',
    'about.timeline.4.title': 'The AI Era',
    'about.timeline.4.desc': 'Deep AI integration across all services for exponential results.',

    // Portfolio
    'portfolio.title': 'Case Studies',
    'portfolio.subtitle': 'Discover how we\'ve helped our clients dominate their market.',
    'portfolio.view': 'View project',
    'portfolio.1.title': 'Premium E-commerce Platform',
    'portfolio.1.tag': 'Web Application',
    'portfolio.1.desc': 'Complete redesign of an e-commerce platform with AI integration for personalized recommendations.',
    'portfolio.2.title': 'B2B Lead Gen Campaign',
    'portfolio.2.tag': 'Digital Marketing',
    'portfolio.2.desc': 'Multi-channel strategy that generated 2,500+ qualified leads in 3 months.',
    'portfolio.3.title': 'FinTech Mobile App',
    'portfolio.3.tag': 'Mobile App',
    'portfolio.3.desc': 'Mobile banking app with biometric authentication and AI-powered dashboard.',
    'portfolio.4.title': 'AI Automation System',
    'portfolio.4.tag': 'AI Automation',
    'portfolio.4.desc': 'AI chatbot and call agent for a service company with 10,000+ interactions/month.',
    'portfolio.5.title': 'SaaS Brand Identity',
    'portfolio.5.tag': 'Content Creation',
    'portfolio.5.desc': 'Complete branding and content strategy for a growing SaaS startup.',
    'portfolio.6.title': 'HR SaaS Platform',
    'portfolio.6.tag': 'Platform',
    'portfolio.6.desc': 'Complete human resources management platform with integrated AI modules.',

    // Legal Pages
    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.updated': 'Last updated: March 2025',
    'legal.privacy.h1': 'Data Collection',
    'legal.privacy.p1': 'REDX collects certain personal information when you use our website, including your name, email address, and phone number when you fill out our contact form. We also use cookies to analyze traffic.',
    'legal.privacy.h2': 'Use of Data',
    'legal.privacy.p2': 'Your personal data is used solely to respond to your inquiries, improve our services, and send you relevant communications with your consent.',
    'legal.privacy.h3': 'Data Protection',
    'legal.privacy.p3': 'We implement technical and organizational security measures to protect your personal data against unauthorized access, modification, disclosure, or destruction.',
    'legal.privacy.h4': 'Cookies',
    'legal.privacy.p4': 'Our site uses essential and analytical cookies. Analytical cookies (Google Analytics, Meta Pixel) are only activated after your explicit consent, in compliance with Quebec\'s Law 25.',
    'legal.privacy.h5': 'Your Rights',
    'legal.privacy.p5': 'Under PIPEDA and Quebec\'s Law 25, you have the right to access, correct, and request deletion of your data. Contact us at info@redx.agency.',

    'legal.terms.title': 'Terms of Use',
    'legal.terms.updated': 'Last updated: March 2025',
    'legal.terms.h1': 'Acceptance of Terms',
    'legal.terms.p1': 'By accessing the REDX website (redx.ca), you agree to be bound by these terms of use. If you do not accept these terms, please do not use our site.',
    'legal.terms.h2': 'Intellectual Property',
    'legal.terms.p2': 'All content on this site — including text, images, logos, design, and code — is the property of REDX and is protected by Canadian copyright laws.',
    'legal.terms.h3': 'Site Usage',
    'legal.terms.p3': 'You may browse our site for informational purposes. Any reproduction, distribution, or commercial use of content without written authorization is prohibited.',
    'legal.terms.h4': 'Limitation of Liability',
    'legal.terms.p4': 'REDX provides this site "as is" without warranty of any kind. We are not liable for any direct or indirect damages resulting from the use of this site.',
    'legal.terms.h5': 'Governing Law',
    'legal.terms.p5': 'These terms are governed by the laws of Quebec, Canada. Any dispute shall be submitted to the competent courts of Montreal.',

    // 404
    '404.title': 'Page Not Found',
    '404.subtitle': 'The page you\'re looking for doesn\'t exist or has been moved.',
    '404.cta': 'Back to Home',

    // Footer Legal
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  }
};

let currentLang = localStorage.getItem('redx-lang') || 'fr';

export function t(key) {
  return translations[currentLang]?.[key] || translations['fr']?.[key] || key;
}

export function getCurrentLang() {
  return currentLang;
}

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('redx-lang', lang);
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translation;
    } else if (el.tagName === 'OPTION') {
      el.textContent = translation;
    } else {
      el.innerHTML = translation;
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update page title
  document.title = lang === 'fr'
    ? 'REDX — Agence Digitale Propulsée par l\'IA'
    : 'REDX — AI-Powered Digital Agency';
}

export function initLang() {
  setLanguage(currentLang);
}
