import { t, getCurrentLang } from '../i18n.js';

export function renderAbout() {
  const lang = getCurrentLang();
  const contactPath = lang === 'en' ? '/en/contact' : '/contact';

  return `
    <section class="hero" style="min-height: 50vh;">
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <h1 class="hero-title reveal" data-i18n="about.title">${t('about.title')}</h1>
        <p class="hero-subtitle reveal" data-i18n="about.subtitle">${t('about.subtitle')}</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section section-darker">
      <div class="container">
        <div class="about-hero reveal">
          <div class="about-hero-text">
            <h2 class="section-title" data-i18n="about.story.title">${t('about.story.title')}</h2>
            <p class="section-subtitle" style="text-align:left; margin: var(--spacing-md) 0;" data-i18n="about.story.p1">${t('about.story.p1')}</p>
            <p class="section-subtitle" style="text-align:left; margin: var(--spacing-sm) 0 0;" data-i18n="about.story.p2">${t('about.story.p2')}</p>
          </div>
          <div class="about-hero-visual">
            <span>X</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" data-i18n="about.values.title">${t('about.values.title')}</h2>
        </div>
        <div class="about-values">
          <div class="value-card reveal">
            <span class="value-icon">💡</span>
            <h3 class="value-title" data-i18n="about.value.1.title">${t('about.value.1.title')}</h3>
            <p class="value-desc" data-i18n="about.value.1.desc">${t('about.value.1.desc')}</p>
          </div>
          <div class="value-card reveal">
            <span class="value-icon">⭐</span>
            <h3 class="value-title" data-i18n="about.value.2.title">${t('about.value.2.title')}</h3>
            <p class="value-desc" data-i18n="about.value.2.desc">${t('about.value.2.desc')}</p>
          </div>
          <div class="value-card reveal">
            <span class="value-icon">🚀</span>
            <h3 class="value-title" data-i18n="about.value.3.title">${t('about.value.3.title')}</h3>
            <p class="value-desc" data-i18n="about.value.3.desc">${t('about.value.3.desc')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section section-darker">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" data-i18n="about.timeline.title">${t('about.timeline.title')}</h2>
        </div>
        <div class="timeline">
          ${[1, 2, 3, 4].map(i => `
            <div class="timeline-item reveal">
              <span class="timeline-year" data-i18n="about.timeline.${i}.year">${t(`about.timeline.${i}.year`)}</span>
              <h3 class="timeline-title" data-i18n="about.timeline.${i}.title">${t(`about.timeline.${i}.title`)}</h3>
              <p class="timeline-desc" data-i18n="about.timeline.${i}.desc">${t(`about.timeline.${i}.desc`)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="hero-watermark">X</div>
      <div class="container cta-banner-content reveal">
        <h2 class="cta-banner-title" data-i18n="cta.title">${t('cta.title')}</h2>
        <p class="cta-banner-subtitle" data-i18n="cta.subtitle">${t('cta.subtitle')}</p>
        <a href="${contactPath}" class="btn btn-white btn-lg" data-i18n="cta.btn">${t('cta.btn')}</a>
      </div>
    </section>
  `;
}
