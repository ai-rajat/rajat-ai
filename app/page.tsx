import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

export default function Home() {
  return (
    <>
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <DesktopHome />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileHome />
      </div>
    </>
  );
}