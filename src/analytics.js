// REDX Analytics — GTM, Meta Pixel, dataLayer events, scroll tracking
// All tracking is gated behind cookie consent

import { getCurrentLang } from './i18n.js';

const GTM_ID = 'GTM-XXXXXXX';
const META_PIXEL_ID = 'XXXXXXXXXXXXXXXXXX';

let trackingInitialized = false;
let scrollDepthsFired = new Set();

// ========== Consent Check ==========
export function hasConsent() {
    return localStorage.getItem('redx_cookie_consent') === 'accepted';
}

// ========== Initialize All Tracking ==========
export function initTracking() {
    if (!hasConsent() || trackingInitialized) return;
    trackingInitialized = true;

    initGTM();
    initMetaPixel();
    initScrollDepthTracking();
    initOutboundLinkTracking();
}

// ========== Google Tag Manager ==========
function initGTM() {
    // GTM script
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.insertBefore(script, document.head.firstChild);

    // GTM noscript iframe
    if (!document.getElementById('gtm-noscript')) {
        const noscript = document.createElement('noscript');
        noscript.id = 'gtm-noscript';
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';
        noscript.appendChild(iframe);
        document.body.insertBefore(noscript, document.body.firstChild);
    }
}

// ========== Meta Pixel ==========
function initMetaPixel() {
    if (window.fbq) return;

    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');

    // Noscript fallback
    if (!document.getElementById('meta-pixel-noscript')) {
        const noscript = document.createElement('noscript');
        noscript.id = 'meta-pixel-noscript';
        const img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
        noscript.appendChild(img);
        document.body.appendChild(noscript);
    }
}

// ========== dataLayer Events ==========
export function trackPageView(pageName) {
    if (!hasConsent()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'page_view',
        page_name: pageName,
        page_language: getCurrentLang(),
        page_location: window.location.href,
    });

    // Meta Pixel PageView
    if (window.fbq) {
        window.fbq('track', 'PageView');
    }

    // Reset scroll depths on new page
    scrollDepthsFired = new Set();
}

export function trackCTAClick(ctaLabel) {
    if (!hasConsent()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'cta_click',
        cta_label: ctaLabel,
        page_location: window.location.href,
        language: getCurrentLang(),
    });
}

export function trackFormSubmit(selectedService) {
    if (!hasConsent()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'contact_form_submit',
        service_selected: selectedService,
        language: getCurrentLang(),
    });

    // Meta Pixel Lead event
    if (window.fbq) {
        window.fbq('track', 'Lead', {
            content_name: 'Contact Form',
            content_category: selectedService,
            currency: 'CAD',
        });
    }
}

export function trackServiceCardClick(serviceName) {
    if (!hasConsent()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'service_card_click',
        service_name: serviceName,
    });

    // Meta Pixel ViewContent
    if (window.fbq) {
        window.fbq('track', 'ViewContent', {
            content_name: serviceName,
            content_category: 'Service',
        });
    }
}

export function trackLanguageSwitch(newLang) {
    if (!hasConsent()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'language_switch',
        switched_to: newLang,
    });
}

export function trackContactClick() {
    if (!hasConsent()) return;
    if (window.fbq) {
        window.fbq('track', 'Contact');
    }
}

// ========== Scroll Depth Tracking ==========
function initScrollDepthTracking() {
    const thresholds = [25, 50, 75, 100];

    window.addEventListener('scroll', () => {
        if (!hasConsent()) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        thresholds.forEach(threshold => {
            if (scrollPercent >= threshold && !scrollDepthsFired.has(threshold)) {
                scrollDepthsFired.add(threshold);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'scroll_depth',
                    scroll_percent: threshold,
                    page_location: window.location.href,
                });
            }
        });
    }, { passive: true });
}

// ========== Outbound Link Tracking ==========
function initOutboundLinkTracking() {
    document.addEventListener('click', (e) => {
        if (!hasConsent()) return;
        const link = e.target.closest('a[href]');
        if (!link) return;
        const href = link.href;
        if (href && !href.includes(window.location.hostname) && href.startsWith('http')) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'outbound_click',
                outbound_url: href,
                link_text: link.textContent?.trim(),
            });
        }
    });
}
