import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingButtonProps {
  service?: string;
  therapist?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "coral" | "outline";
  className?: string;
  ctaPosition?: string;
}

const BookingButton = ({
  service = "",
  therapist: _therapist = "",
  size = "default",
  variant = "coral",
  className = "",
  ctaPosition = "general",
}: BookingButtonProps) => {
  // Fixed external booking URL for all buttons
  const bookingUrl =
    "https://booksteam.com/Customer/BookNowServices.aspx?k=8b140436531&";

  const handleClick = () => {
    // GA4 tracking (type-safe window access)
    if (typeof window !== "undefined") {
      const w = window as unknown as {
        gtag?: (command: string, eventName: string, params: Record<string, unknown>) => void;
      };
      w.gtag?.("event", "outbound_booking_click", {
        event_category: "outbound",
        event_label: service || "general",
        link_target: "booking_partner",
        cta_position: ctaPosition,
      });
    }
  };

  return (
    <div className="space-y-2">
      <Button
        variant={variant}
        size={size}
        className={className}
        asChild
        onClick={handleClick}
      >
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book ${service || "appointment"} — opens external booking in a new tab`}
        >
          Book Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
      {/*<p className="text-xs text-muted-foreground">*/}
      {/*  You'll be redirected to our booking partner to complete your booking and payment.*/}
      {/*</p>*/}
    </div>
  );
};

export default BookingButton;
