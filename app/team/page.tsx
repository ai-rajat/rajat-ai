import DesktopTeam from "./DesktopTeam";
import MobileTeam from "./MobileTeam";

export default function TeamPage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopTeam />
      </div>
      <div className="block md:hidden">
        <MobileTeam />
      </div>
    </>
  );
}