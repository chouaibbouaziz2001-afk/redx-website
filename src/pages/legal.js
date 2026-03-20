import { t } from '../i18n.js';

export function renderPrivacy() {
    return `
    <section class="hero" style="min-height: 40vh;">
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <h1 class="hero-title reveal" data-i18n="legal.privacy.title">${t('legal.privacy.title')}</h1>
      </div>
    </section>
    <section class="section section-darker">
      <div class="container container-narrow">
        <div class="legal-content reveal">
          <p data-i18n="legal.privacy.updated">${t('legal.privacy.updated')}</p>

          <h2 data-i18n="legal.privacy.h1">${t('legal.privacy.h1')}</h2>
          <p data-i18n="legal.privacy.p1">${t('legal.privacy.p1')}</p>

          <h2 data-i18n="legal.privacy.h2">${t('legal.privacy.h2')}</h2>
          <p data-i18n="legal.privacy.p2">${t('legal.privacy.p2')}</p>

          <h2 data-i18n="legal.privacy.h3">${t('legal.privacy.h3')}</h2>
          <p data-i18n="legal.privacy.p3">${t('legal.privacy.p3')}</p>

          <h2 data-i18n="legal.privacy.h4">${t('legal.privacy.h4')}</h2>
          <p data-i18n="legal.privacy.p4">${t('legal.privacy.p4')}</p>

          <h2 data-i18n="legal.privacy.h5">${t('legal.privacy.h5')}</h2>
          <p data-i18n="legal.privacy.p5">${t('legal.privacy.p5')}</p>
        </div>
      </div>
    </section>
  `;
}

export function renderTerms() {
    return `
    <section class="hero" style="min-height: 40vh;">
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <h1 class="hero-title reveal" data-i18n="legal.terms.title">${t('legal.terms.title')}</h1>
      </div>
    </section>
    <section class="section section-darker">
      <div class="container container-narrow">
        <div class="legal-content reveal">
          <p data-i18n="legal.terms.updated">${t('legal.terms.updated')}</p>

          <h2 data-i18n="legal.terms.h1">${t('legal.terms.h1')}</h2>
          <p data-i18n="legal.terms.p1">${t('legal.terms.p1')}</p>

          <h2 data-i18n="legal.terms.h2">${t('legal.terms.h2')}</h2>
          <p data-i18n="legal.terms.p2">${t('legal.terms.p2')}</p>

          <h2 data-i18n="legal.terms.h3">${t('legal.terms.h3')}</h2>
          <p data-i18n="legal.terms.p3">${t('legal.terms.p3')}</p>

          <h2 data-i18n="legal.terms.h4">${t('legal.terms.h4')}</h2>
          <p data-i18n="legal.terms.p4">${t('legal.terms.p4')}</p>

          <h2 data-i18n="legal.terms.h5">${t('legal.terms.h5')}</h2>
          <p data-i18n="legal.terms.p5">${t('legal.terms.p5')}</p>
        </div>
      </div>
    </section>
  `;
}
