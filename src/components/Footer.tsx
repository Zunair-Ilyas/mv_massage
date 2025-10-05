import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+6479297994"
                className="flex items-start space-x-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>07 929 7994</span>
              </a>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Greerton, Tauranga<br />New Zealand</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>By appointment</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/services"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/therapists"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Meet Our Therapists
              </Link>
              <Link
                to="/gift-vouchers"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Gift Vouchers
              </Link>
              <Link
                to="/contact"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              MV Massage
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Remedial Massage Therapists in Greerton, Tauranga.
              Specializing in remedial, Thai, deep tissue, and wellness treatments.
            </p>
            <p className="text-xs text-muted-foreground">
              All bookings and gift vouchers handled securely by our booking partner.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MV Massage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
