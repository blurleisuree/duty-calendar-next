'use client';

function Logo({ className, type = 'logoMini' }) {
  const logoMap = {
    mini: 'icons/LogoMini.svg',
    full: 'icons/logoFull.svg',
  };

  const logoLink = logoMap[type] || logoMap[mini];

  return <img className={`${className} min-w-10`} alt="Logo" src={logoLink} />;
}

export default Logo;
