// REDX Cookie Consent Banner — Loi 25 Québec / PIPEDA Compliant
import { getCurrentLang, t } from './i18n.js';
import { initTracking } from './analytics.js';

const CONSENT_KEY = 'redx_cookie_consent';

const consentText = {
    fr: {
        message: 'Nous utilisons des témoins (cookies) pour améliorer votre expérience et analyser notre trafic.',
        privacy: 'Consultez notre politique de confidentialité.',
        accept: 'Accepter tout',
        settings: 'Paramètres',
        decline: 'Refuser',
    },
    en: {
        message: 'We use cookies to improve your experience and analyze our traffic.',
        privacy: 'View our privacy policy.',
        accept: 'Accept All',
        settings: 'Settings',
        decline: 'Decline',
    },
};

export function initCookieConsent() {
    const consent = localStorage.getItem(CONSENT_KEY);

    // If already decided, init tracking if accepted
    if (consent === 'accepted') {
        initTracking();
        return;
    }
    if (consent === 'declined') {
        return;
    }

    // First visit — show banner
    showBanner();
}

function showBanner() {
    const lang = getCurrentLang();
    const txt = consentText[lang] || consentText.fr;
    const privacyLink = lang === 'fr' ? '/politique-de-confidentialite' : '/en/privacy-policy';

    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.innerHTML = `
    <div class="cookie-banner-content">
      <p class="cookie-banner-text">
        ${txt.message}
        <a href="${privacyLink}" class="cookie-banner-link">${txt.privacy}</a>
      </p>
      <div class="cookie-banner-actions">
        <button class="btn btn-primary btn-sm cookie-btn-accept">${txt.accept}</button>
        <button class="btn btn-outline btn-sm cookie-btn-settings">${txt.settings}</button>
        <button class="cookie-btn-decline">${txt.decline}</button>
      </div>
    </div>
  `;

    document.body.appendChild(banner);

    // Animate in
    requestAnimationFrame(() => {
        banner.classList.add('visible');
    });

    // Accept
    banner.querySelector('.cookie-btn-accept').addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        removeBanner(banner);
        initTracking();
    });

    // Decline
    banner.querySelector('.cookie-btn-decline').addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        removeBanner(banner);
    });

    // Settings (for now, same as decline — placeholder)
    banner.querySelector('.cookie-btn-settings').addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        removeBanner(banner);
    });
}

function removeBanner(banner) {
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 300);
}

// Update banner language when language toggles (if banner is still showing)
export function updateConsentBannerLang() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    const lang = getCurrentLang();
    const txt = consentText[lang] || consentText.fr;
    const privacyLink = lang === 'fr' ? '/politique-de-confidentialite' : '/en/privacy-policy';

    const textEl = banner.querySelector('.cookie-banner-text');
    if (textEl) {
        textEl.innerHTML = `${txt.message} <a href="${privacyLink}" class="cookie-banner-link">${txt.privacy}</a>`;
    }
    const acceptBtn = banner.querySelector('.cookie-btn-accept');
    if (acceptBtn) acceptBtn.textContent = txt.accept;
    const settingsBtn = banner.querySelector('.cookie-btn-settings');
    if (settingsBtn) settingsBtn.textContent = txt.settings;
    const declineBtn = banner.querySelector('.cookie-btn-decline');
    if (declineBtn) declineBtn.textContent = txt.decline;
}
