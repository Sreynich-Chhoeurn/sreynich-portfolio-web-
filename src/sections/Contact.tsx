import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/contact.css';

const contactEmail = 'sreynich.chhoeurn.dev@gmail.com';
const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Sreynich-Chhoeurn' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/sreynich-chhoeurn-a92119401/' },
];

export default function Contact() {
  const { t, language } = useLanguage();
  const requiredText = (text: string) => t(text).split('*').map((part, index) => <React.Fragment key={index}>{index > 0 && <span className="contact-required-star">*</span>}{part}</React.Fragment>);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [draftOpened, setDraftOpened] = useState(false);
  function update(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(value => ({ ...value, [event.target.name]: event.target.value }));
    setDraftOpened(false);
  }
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `${t('Portfolio enquiry')} — ${form.name.trim()}`;
    const body = `${t('Name')}: ${form.name.trim()}\n${t('Email')}: ${form.email.trim()}\n\n${form.message.trim()}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }
  return <section id="contact" className="portfolio-contact" aria-labelledby="contact-heading">
    <div className="portfolio-container">
      <header className="contact-heading"><span className="contact-eyebrow"><MessageSquare size={18} aria-hidden="true" />{t('Get in Touch')}</span><h2 id="contact-heading">{language === 'en' ? <>Let's Work <span>Together!</span></> : t("Let's Work Together!")}</h2><p>{t("Have a project in mind or want to collaborate? I'd love to hear from you!")}</p></header>
      <div className="contact-layout">
        <div className="contact-info-panel">
          <div className="contact-intro-icon"><MessageSquare size={26} aria-hidden="true" /></div>
          <h3>{t('Start a conversation')}</h3><p className="contact-intro-copy">{t('Share your idea, ask a question, or get in touch about an opportunity.')}</p>
          <ul className="contact-methods">
            <li><span className="contact-method-icon"><Mail size={20} aria-hidden="true" /></span><div><h4>{t('Email')}</h4><a href={`mailto:${contactEmail}`}>{contactEmail}<ArrowUpRight size={15} aria-hidden="true" /></a></div></li>
            <li><span className="contact-method-icon"><Phone size={20} aria-hidden="true" /></span><div><h4>{t('Phone')}</h4><p>{t('Available Upon Request')}</p></div></li>
            <li><span className="contact-method-icon"><MapPin size={20} aria-hidden="true" /></span><div><h4>{t('Location')}</h4><p>{t('Phnom Penh, Cambodia')}</p></div></li>
          </ul>
          <div className="contact-socials"><h4>{t('Follow Me')}</h4><div>{socials.map(({ name, icon: Icon, url }) => <a key={name} href={url} target="_blank" rel="noopener noreferrer"><Icon size={18} aria-hidden="true" /><span>{name}</span><ArrowUpRight size={13} aria-hidden="true" /></a>)}</div></div>
        </div>
        <div className="contact-form-panel">
          <div className="contact-form-heading"><span className="contact-step" aria-hidden="true"><Send size={22} /></span><div><h3>{t('Write a message')}</h3><p>{t('Your email app will open with your message ready to review and send.')}</p></div></div>
          <form onSubmit={submit}>
            <div className="contact-field-row">
              <div className="contact-field"><label htmlFor="contact-name">{requiredText('Name *')}</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={update} placeholder={t('Your name')} /></div>
              <div className="contact-field"><label htmlFor="contact-email">{requiredText('Email *')}</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={update} placeholder="you@example.com" /></div>
            </div>
            <div className="contact-field"><label htmlFor="contact-message">{requiredText('Message *')}</label><textarea id="contact-message" name="message" required rows={6} maxLength={3000} value={form.message} onChange={update} placeholder={t('Tell me about your project or just say hello!')} /></div>
            <div className="contact-form-footer"><span>{requiredText('Fields marked * are required.')}</span><button type="submit">{t('Open Email Draft')}<ArrowUpRight size={18} aria-hidden="true" /></button></div>
            {draftOpened && <p className="contact-draft-status" role="status">{t('If your email app did not open, email me directly using the link on this page. Your message is still here.')}</p>}
          </form>
        </div>
      </div>
    </div>
  </section>;
}

