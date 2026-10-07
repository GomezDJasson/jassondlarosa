import type { IconType } from 'react-icons'

interface Props { label:string; href:string; icon:IconType }

export function SocialLink({label,href,icon:Icon}:Props){
  return <a className={`social-tile social-${label.toLowerCase()}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
    <span className="social-icon"><Icon /></span>
    <span className="social-link-label">{label}</span>
  </a>
}