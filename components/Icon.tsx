import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import { BiLogoDribbble } from 'react-icons/bi';

BiLogoTwitter


interface IconProps {
    icon: string
}


const Icon = ({icon}:IconProps) => {
  return (
    <div className='bg-rose-500 w-14 h-14 flex items-center justify-center rounded-full'>
      <a hidden={!(icon==='linkedin')} href="https://www.linkedin.com/in/jhon-janer-torres/"><BiLogoLinkedin  className="icon" /></a>
      <a hidden={!(icon==='instagram')} href="https://www.instagram.com/janert_art/"><BiLogoInstagramAlt       className="icon" /></a>    
    </div>
  )
}

export default Icon