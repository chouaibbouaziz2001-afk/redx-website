import { t, getCurrentLang } from '../i18n.js';

export function renderContact() {
  return `
    <section class="hero" style="min-height: 50vh;">
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <h1 class="hero-title reveal" data-i18n="contact.title">${t('contact.title')}</h1>
        <p class="hero-subtitle reveal" data-i18n="contact.subtitle">${t('contact.subtitle')}</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div class="contact-grid">
          <form id="contact-form" class="reveal">
            <div class="form-group">
              <label class="form-label" data-i18n="contact.name">${t('contact.name')}</label>
              <input type="text" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label" data-i18n="contact.email">${t('contact.email')}</label>
              <input type="email" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label" data-i18n="contact.company">${t('contact.company')}</label>
              <input type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label" data-i18n="contact.service">${t('contact.service')}</label>
              <select class="form-select" required>
                <option value="" data-i18n="contact.service.placeholder">${t('contact.service.placeholder')}</option>
                <option value="content" data-i18n="service.1.title">${t('service.1.title')}</option>
                <option value="meta" data-i18n="service.2.title">${t('service.2.title')}</option>
                <option value="strategy" data-i18n="service.3.title">${t('service.3.title')}</option>
                <option value="ai" data-i18n="service.4.title">${t('service.4.title')}</option>
                <option value="leads" data-i18n="service.5.title">${t('service.5.title')}</option>
                <option value="websites" data-i18n="service.6.title">${t('service.6.title')}</option>
                <option value="webapps" data-i18n="service.7.title">${t('service.7.title')}</option>
                <option value="mobile" data-i18n="service.8.title">${t('service.8.title')}</option>
                <option value="platforms" data-i18n="service.9.title">${t('service.9.title')}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" data-i18n="contact.message">${t('contact.message')}</label>
              <textarea class="form-textarea" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;" data-i18n="contact.submit">${t('contact.submit')}</button>
          </form>

          <div class="contact-info reveal">
            <h3 style="font-size: var(--font-size-xl); font-weight: 800; margin-bottom: var(--spacing-lg);" data-i18n="contact.info.title">${t('contact.info.title')}</h3>
            <div class="contact-info-item">
              <div class="contact-info-icon">✉</div>
              <div>
                <div class="contact-info-label" data-i18n="contact.info.email.label">${t('contact.info.email.label')}</div>
                <a href="mailto:info@redx.agency" class="contact-info-value" data-i18n="footer.email">${t('footer.email')}</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">📞</div>
              <div>
                <div class="contact-info-label" data-i18n="contact.info.phone.label">${t('contact.info.phone.label')}</div>
                <a href="tel:+21356358393" class="contact-info-value" data-i18n="footer.phone">${t('footer.phone')}</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">📍</div>
              <div>
                <div class="contact-info-label" data-i18n="contact.info.location.label">${t('contact.info.location.label')}</div>
                <div class="contact-info-value" data-i18n="contact.info.location.value">${t('contact.info.location.value')}</div>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">🕐</div>
              <div>
                <div class="contact-info-label" data-i18n="contact.info.hours.label">${t('contact.info.hours.label')}</div>
                <div class="contact-info-value" data-i18n="contact.info.hours.value">${t('contact.info.hours.value')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
