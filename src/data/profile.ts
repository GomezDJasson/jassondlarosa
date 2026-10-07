import { FaDiscord, FaFacebookF, FaInstagram, FaTiktok, FaTwitch, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export const profile = {
  name: 'Jasson D La Rosa',
  description: 'Figura Pública',
  tagline: 'Conecta conmigo en mis redes sociales',
  logo: './assets/logo-jassondlarosa.png',
  socialLinks: [
    { label:'Discord', href:'https://discord.gg/rggrhAYpZS', icon:FaDiscord },
    { label:'Twitch', href:'https://www.twitch.tv/jassondlarosa', icon:FaTwitch },
    { label:'Facebook', href:'https://www.facebook.com/jassondlarosa', icon:FaFacebookF },
    { label:'Instagram', href:'https://www.instagram.com/jassondlarosa/', icon:FaInstagram },
    { label:'X', href:'https://twitter.com/jassondlarosa', icon:FaXTwitter },
    { label:'TikTok', href:'https://www.tiktok.com/@jassondlarosa', icon:FaTiktok },
    { label:'YouTube', href:'https://www.youtube.com/@jassondlarosa', icon:FaYoutube },
  ],
  shopping:{
    label:'Compras',
    title:'Stefa Store',
    description:'Visita nuestra tienda y descubre lo que tenemos para ti.',
    href:'https://stefastore.com',
  },
  contact:{ email:'jassondlarosa@gmail.com' },
  footer:{
    copyright:'© 2026 Jasson D La Rosa. Todos los derechos reservados.',
    href:'https://portafolio-jasson.vercel.app/',
  },
} as const