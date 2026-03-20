import { t, getCurrentLang } from '../i18n.js';
import { serviceIcons } from '../icons.js';

export function renderHome() {
  const lang = getCurrentLang();
  const contactPath = lang === 'en' ? '/en/contact' : '/contact';
  const portfolioPath = lang === 'en' ? '/en/portfolio' : '/realisations';

  const services = [
    { key: '1', icon: serviceIcons.content },
    { key: '2', icon: serviceIcons.meta },
    { key: '3', icon: serviceIcons.strategy },
    { key: '4', icon: serviceIcons.ai },
    { key: '5', icon: serviceIcons.leads },
    { key: '6', icon: serviceIcons.websites },
    { key: '7', icon: serviceIcons.webapps },
    { key: '8', icon: serviceIcons.mobile },
    { key: '9', icon: serviceIcons.platforms },
  ];

  return `
    <!-- Hero -->
    <section class="hero" id="hero">
      <canvas class="hero-canvas" id="hero-canvas"></canvas>
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <div class="hero-badge reveal">
          <span class="hero-badge-dot"></span>
          <span data-i18n="hero.badge">${t('hero.badge')}</span>
        </div>
        <h1 class="hero-title reveal" data-i18n="hero.title">${t('hero.title')}</h1>
        <p class="hero-subtitle reveal" data-i18n="hero.subtitle">${t('hero.subtitle')}</p>
        <div class="hero-buttons reveal">
          <a href="${contactPath}" class="btn btn-white btn-lg" data-i18n="hero.cta1">${t('hero.cta1')}</a>
          <a href="${portfolioPath}" class="btn btn-outline btn-lg" data-i18n="hero.cta2">${t('hero.cta2')}</a>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section section-darker">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" data-i18n="services.title">${t('services.title')}</h2>
          <p class="section-subtitle" data-i18n="services.subtitle">${t('services.subtitle')}</p>
        </div>
        <div class="services-grid">
          ${services.map(s => `
            <div class="card reveal">
              <div class="card-icon">${s.icon}</div>
              <h3 class="card-title" data-i18n="service.${s.key}.title">${t(`service.${s.key}.title`)}</h3>
              <p class="card-desc" data-i18n="service.${s.key}.desc">${t(`service.${s.key}.desc`)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Why REDX -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" data-i18n="why.title">${t('why.title')}</h2>
          <p class="section-subtitle" data-i18n="why.subtitle">${t('why.subtitle')}</p>
        </div>
        <div class="stats-row">
          <div class="stat-card reveal">
            <span class="stat-icon">🤖</span>
            <h3 class="stat-title" data-i18n="why.1.title">${t('why.1.title')}</h3>
            <p class="stat-desc" data-i18n="why.1.desc">${t('why.1.desc')}</p>
          </div>
          <div class="stat-card reveal">
            <span class="stat-icon">📈</span>
            <h3 class="stat-title" data-i18n="why.2.title">${t('why.2.title')}</h3>
            <p class="stat-desc" data-i18n="why.2.desc">${t('why.2.desc')}</p>
          </div>
          <div class="stat-card reveal">
            <span class="stat-icon">🏗️</span>
            <h3 class="stat-title" data-i18n="why.3.title">${t('why.3.title')}</h3>
            <p class="stat-desc" data-i18n="why.3.desc">${t('why.3.desc')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Strip -->
    <section class="section section-darker">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title" data-i18n="logos.title">${t('logos.title')}</h2>
        </div>
        <div class="logo-strip reveal">
          <span class="logo-strip-item">ACME Corp</span>
          <span class="logo-strip-item">TechVista</span>
          <span class="logo-strip-item">NovaPay</span>
          <span class="logo-strip-item">CloudSync</span>
          <span class="logo-strip-item">DataFlow</span>
          <span class="logo-strip-item">PixelForge</span>
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
