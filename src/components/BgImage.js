import bgMobileLight from '../images/bg-mobile-light.jpg';
import bgDesktopLight from '../images/bg-desktop-light.jpg';

import bgMobileDark from '../images/bg-mobile-dark.jpg';
import bgDesktopDark from '../images/bg-desktop-dark.jpg';

const BgImage = ({isDark}) => {
  return (
    <div className="bg-image">
      <img src={isDark ? bgMobileDark : bgMobileLight} alt="" id='mobile'/>
      <img src={isDark ? bgDesktopDark : bgDesktopLight} alt="" id='desktop'/>
    </div>
  )
}

export default BgImage;