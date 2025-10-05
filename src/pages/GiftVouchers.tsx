import { Gift, Check, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GiftVouchers = () => {
  const vouchers = [
    {
      name: "Express Treatment",
      amount: "$50",
      description: "Perfect for a quick 30-minute focused massage",
      includes: ["30-minute session", "Choice of massage type", "Valid for 6 months"],
    },
    {
      name: "Signature Session",
      amount: "$90",
      description: "Our most popular 60-minute full body treatment",
      includes: ["60-minute session", "Any massage style", "Valid for 12 months"],
      popular: true,
    },
    {
      name: "Extended Relaxation",
      amount: "$130",
      description: "Luxurious 90-minute comprehensive treatment",
      includes: ["90-minute session", "Premium experience", "Valid for 12 months"],
    },
  ];

  const packages = [
    {
      name: "Couples Retreat",
      price: "$180",
      description: "Side-by-side 60-minute massages for two",
      features: ["Two simultaneous 60-min sessions", "Private couple's room", "Refreshments included"],
    },
    {
      name: "Wellness Series",
      price: "$260",
      description: "Three 60-minute sessions for ongoing care",
      features: ["Three 60-min sessions", "Can be shared", "18-month validity"],
    },
  ];

  const handlePurchaseClick = (voucherType: string) => {
    const voucherUrl = `https://booksteam.com/Customer/BookNowGiftCertificates.aspx?k=8b140436531&`;
    
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "outbound_booking_click", {
        event_category: "outbound",
        event_label: `Gift Voucher - ${voucherType}`,
        link_target: "booking_partner",
        cta_position: "gift_vouchers",
      });
    }

    window.open(voucherUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-16 sm:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Gift className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Gift Vouchers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Give the gift of wellness and relaxation. Perfect for birthdays, anniversaries, 
              or just to show someone you care.
            </p>
          </div>
        </section>

        {/* Standard Vouchers */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Individual Treatment Vouchers
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the perfect amount for any massage service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vouchers.map((voucher) => (
                <Card
                  key={voucher.name}
                  className={`p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all hover:-translate-y-1 ${
                    voucher.popular ? "ring-2 ring-accent relative" : ""
                  }`}
                >
                  {voucher.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {voucher.name}
                    </h3>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">
                      {voucher.amount}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {voucher.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {voucher.includes.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Button
                      variant="coral"
                      className="w-full"
                      onClick={() => handlePurchaseClick(voucher.name)}
                    >
                      Purchase
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Instant email delivery via our booking partner
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Package Vouchers */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Special Package Vouchers
              </h2>
              <p className="text-lg text-muted-foreground">
                Premium experiences and multi-session packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packages.map((pkg) => (
                <Card key={pkg.name} className="p-8 shadow-soft hover:shadow-hover transition-all bg-card">
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-heading font-bold text-primary mb-3">
                      {pkg.price}
                    </div>
                    <p className="text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Button
                      variant="coral"
                      className="w-full"
                      onClick={() => handlePurchaseClick(pkg.name)}
                    >
                      Purchase Package
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Instant email delivery via our booking partner
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                How Gift Vouchers Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Purchase Online
                </h3>
                <p className="text-sm text-muted-foreground">
                  Click any purchase button to be securely redirected to our booking partner
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Instant Delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Receive a beautiful PDF voucher via email immediately after purchase
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Book & Redeem
                </h3>
                <p className="text-sm text-muted-foreground">
                  Recipient books online or by phone using the unique voucher code
                </p>
              </div>
            </div>

            <Card className="mt-12 p-6 bg-muted/50">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Important Information
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Vouchers are non-refundable but can be transferred to another person</li>
                <li>• Validity period starts from purchase date (see each voucher for specific duration)</li>
                <li>• Can be used toward any service of equal or greater value</li>
                <li>• If treatment cost exceeds voucher value, difference can be paid at time of booking</li>
                <li>• For assistance or questions, call us at 07 929 7994</li>
              </ul>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GiftVouchers;
