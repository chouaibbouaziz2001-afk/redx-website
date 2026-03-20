import { t, getCurrentLang } from '../i18n.js';
import { serviceIcons } from '../icons.js';

export function renderServices() {
  const lang = getCurrentLang();
  const contactPath = lang === 'en' ? '/en/contact' : '/contact';

  const services = [
    { key: '1', icon: serviceIcons.content },
    { key: '2', icon: serviceIcons.meta },
    { key: '3', icon: serviceIcons.strategy },
    { key: '4', icon: serviceIcons.ai, hasSubs: true },
    { key: '5', icon: serviceIcons.leads },
    { key: '6', icon: serviceIcons.websites },
    { key: '7', icon: serviceIcons.webapps },
    { key: '8', icon: serviceIcons.mobile },
    { key: '9', icon: serviceIcons.platforms },
  ];

  return `
    <section class="hero" style="min-height: 50vh;">
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <h1 class="hero-title reveal" data-i18n="services.title">${t('services.title')}</h1>
        <p class="hero-subtitle reveal" data-i18n="services.subtitle">${t('services.subtitle')}</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div class="services-grid">
          ${services.map(s => `
            <div class="card reveal">
              <div class="card-icon">${s.icon}</div>
              <h3 class="card-title" data-i18n="service.${s.key}.title">${t(`service.${s.key}.title`)}</h3>
              <p class="card-desc" data-i18n="service.${s.key}.desc">${t(`service.${s.key}.desc`)}</p>
              ${s.hasSubs ? `
                <div class="sub-services">
                  <div class="sub-service">
                    <span class="sub-service-label" data-i18n="service.4.sub1.label">${t('service.4.sub1.label')}</span>
                    <span data-i18n="service.4.sub1.desc">— ${t('service.4.sub1.desc')}</span>
                  </div>
                  <div class="sub-service">
                    <span class="sub-service-label" data-i18n="service.4.sub2.label">${t('service.4.sub2.label')}</span>
                    <span data-i18n="service.4.sub2.desc">— ${t('service.4.sub2.desc')}</span>
                  </div>
                  <div class="sub-service">
                    <span class="sub-service-label" data-i18n="service.4.sub3.label">${t('service.4.sub3.label')}</span>
                    <span data-i18n="service.4.sub3.desc">— ${t('service.4.sub3.desc')}</span>
                  </div>
                </div>
              ` : ''}
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
