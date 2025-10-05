import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo_transparent.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Therapists", href: "/therapists" },
    { name: "Services", href: "/services" },
    { name: "Gift Vouchers", href: "/gift-vouchers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="MV Massage logo"
              className="h-9 w-auto"
              decoding="async"
            />
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold text-foreground">
                MV Massage
              </span>
              <span className="text-xs text-muted-foreground">Remedial Massage Therapists</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+6479297994"
              className="flex items-center space-x-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>07 929 7994</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-muted"
                      : "text-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+6479297994"
                className="flex items-center space-x-2 px-4 py-3 text-base font-semibold text-foreground hover:text-primary transition-colors border-t border-border mt-4 pt-4"
              >
                <Phone className="h-5 w-5" />
                <span>07 929 7994</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
