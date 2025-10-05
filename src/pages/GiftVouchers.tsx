import { Gift, ExternalLink, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GiftVouchers = () => {
  const voucherUrl = "https://booksteam.com/Customer/BookNowGiftCertificates.aspx?k=8b140436531&";

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
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Give the gift of wellness with a simple, flexible voucher.
            </p>
          </div>
        </section>

        {/* Text-only content with CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Card className="p-6 sm:p-8 shadow-soft">
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-foreground">
                  Wondering what to give a friend or loved one for a treat?
                </p>
                <p className="text-foreground">
                  How about a gift certificate — we have combinations of vouchers to suit most needs and pockets, and a gift certificate gives her or him the flexibility to suit themselves on what treatment(s) would be most appreciated.
                </p>
                <p className="text-foreground">
                  Call into the clinic, or click below to order online and save gas and time!
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="coral" className="w-full sm:w-auto">
                  <a href={voucherUrl} target="_blank" rel="noopener noreferrer">
                    Order Online
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href="tel:+6479297994">
                    <Phone className="mr-2 h-4 w-4" /> Call 07 929 7994
                  </a>
                </Button>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                Orders are handled securely by our booking partner.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GiftVouchers;
