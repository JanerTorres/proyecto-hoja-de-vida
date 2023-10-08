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
        <BiLogoFacebook hidden={!(icon==='facebook')} className="icon" />
        <BiLogoInstagramAlt hidden={!(icon==='instagram')} className="icon" />
        <BiLogoTwitter hidden={!(icon==='twitter')} className="icon" />
        <BiLogoLinkedin hidden={!(icon==='linkedin')} className="icon" />
        <BiLogoYoutube hidden={!(icon==='youtube')} className="icon" />
        <BiLogoDribbble hidden={!(icon==='dribbble')} className="icon" />
    </div>
  )
}

export default Icon