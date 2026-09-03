import DesktopCatalogue from "./DesktopCatalogue";
import MobileCatalogue from "./MobileCatalogue";

export default function CataloguePage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopCatalogue />
      </div>
      <div className="block md:hidden">
        <MobileCatalogue />
      </div>
    </>
  );
}