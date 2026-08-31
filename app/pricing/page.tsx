import DesktopPricing from "./DesktopPricing";
import MobilePricing from "./MobilePricing";

export default function PricingPage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopPricing />
      </div>
      <div className="block md:hidden">
        <MobilePricing />
      </div>
    </>
  );
}