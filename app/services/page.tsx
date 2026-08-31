import DesktopServices from "./DesktopServices";
import MobileServices from "./MobileServices";

export default function ServicesPage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopServices />
      </div>
      <div className="block md:hidden">
        <MobileServices />
      </div>
    </>
  );
}