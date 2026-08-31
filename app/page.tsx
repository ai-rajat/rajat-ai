'use client';

import { useState, useEffect } from 'react';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (mobile) {
    return <MobileHome />;
  }

  return <DesktopHome />;
}