import { t } from '../i18n.js';

export function render404() {
    return `
    <section class="hero" style="min-height: 80vh;">
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <div class="reveal" style="margin-bottom: var(--spacing-lg);">
          <span style="font-size: 120px; font-weight: 900; opacity: 0.2; display: block; line-height: 1;">404</span>
        </div>
        <h1 class="hero-title reveal" data-i18n="404.title">${t('404.title')}</h1>
        <p class="hero-subtitle reveal" data-i18n="404.subtitle">${t('404.subtitle')}</p>
        <div class="hero-buttons reveal">
          <a href="/" class="btn btn-white btn-lg" data-link data-i18n="404.cta">${t('404.cta')}</a>
        </div>
      </div>
    </section>
  `;
}
