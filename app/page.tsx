'use client';

import { useState, useEffect } from 'react';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Jab tak detect ho raha hai, tab tak default desktop dikhao taaki flicker na ho
  if (isMobile === null) return <DesktopHome />;

  return isMobile ? <MobileHome /> : <DesktopHome />;
}