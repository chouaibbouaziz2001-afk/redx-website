import { t, getCurrentLang } from '../i18n.js';

export function renderContact() {
  const lang = getCurrentLang();

  // Generate time slot options
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const timeOptions = timeSlots.map(slot => `<option value="${slot}">${slot}</option>`).join('');

  // Min date = tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

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
          <form id="contact-form" action="https://formsubmit.co/redexagency1@gmail.com" method="POST" class="reveal">
            <!-- Formsubmit.co config -->
            <input type="hidden" name="_subject" value="Nouvelle demande REDX / New REDX inquiry">
            <input type="hidden" name="_captcha" value="true">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_next" value="${typeof window !== 'undefined' ? window.location.origin : ''}${lang === 'en' ? '/en' : ''}/contact?success=1">
            <input type="text" name="_honey" style="display:none">

            <div class="form-group">
              <label class="form-label" data-i18n="contact.name">${t('contact.name')}</label>
              <input type="text" name="name" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label" data-i18n="contact.email">${t('contact.email')}</label>
              <input type="email" name="email" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label" data-i18n="contact.company">${t('contact.company')}</label>
              <input type="text" name="company" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label" data-i18n="contact.service">${t('contact.service')}</label>
              <select name="service" class="form-select" required>
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

            <div class="form-group-row">
              <div class="form-group">
                <label class="form-label" data-i18n="contact.date">${t('contact.date')}</label>
                <input type="date" name="preferred_date" class="form-input" min="${minDate}" required />
              </div>
              <div class="form-group">
                <label class="form-label" data-i18n="contact.time">${t('contact.time')}</label>
                <select name="preferred_time" class="form-select" required>
                  <option value="" data-i18n="contact.time.placeholder">${t('contact.time.placeholder')}</option>
                  ${timeOptions}
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" data-i18n="contact.type">${t('contact.type')}</label>
              <div class="meeting-type-toggle">
                <label class="meeting-option">
                  <input type="radio" name="meeting_type" value="video_call" checked />
                  <span class="meeting-option-label">
                    <span class="meeting-option-icon">📹</span>
                    <span data-i18n="contact.type.video">${t('contact.type.video')}</span>
                  </span>
                </label>
                <label class="meeting-option">
                  <input type="radio" name="meeting_type" value="phone_call" />
                  <span class="meeting-option-label">
                    <span class="meeting-option-icon">📞</span>
                    <span data-i18n="contact.type.phone">${t('contact.type.phone')}</span>
                  </span>
                </label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" data-i18n="contact.message">${t('contact.message')}</label>
              <textarea name="message" class="form-textarea" rows="5" required></textarea>
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
