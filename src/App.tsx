import { Mail } from 'lucide-react'
import { profile } from './data/profile'
import { ProfileHeader } from './components/ProfileHeader'
import { SocialLinks } from './components/SocialLinks'
import { Shopping } from './components/Shopping'
import { Footer } from './components/Footer'
import './App.css'

export default function App(){
  return <main className="page">
    <div className="background-glow background-glow-one" />
    <div className="background-glow background-glow-two" />
    <div className="container">
      <ProfileHeader />
      <SocialLinks />
      <Shopping />
      <section className="contact-section" aria-label="Contacto">
        <div className="contact-heading"><span className="section-line" /><p className="contact-title">Contacto</p><span className="section-line" /></div>
        <div className="contact-buttons">
          <a className="email-button" href={`mailto:${profile.contact.email}`} aria-label={`Contactar por correo: ${profile.contact.email}`}>
            <Mail /><span>Contáctame</span>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  </main>
}