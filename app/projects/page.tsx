import DesktopProjects from "./DesktopProjects";
import MobileProjects from "./MobileProjects";

export default function ProjectsPage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopProjects />
      </div>
      <div className="block md:hidden">
        <MobileProjects />
      </div>
    </>
  );
}