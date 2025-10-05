import { Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
// Add avatar UI imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// Import a few existing images to use as thumbnails
import clinicInterior from "@/assets/clinic-interior.jpg";
import heroMassage from "@/assets/hero-massage.jpg";
import interior3 from "@/assets/Interior3.png";
import massageTherapy from "@/assets/massage-therapy.jpg";
import deeptissue from "../assets/deeptissue.jpg"
import footmassage from "../assets/footmassage.png"
import pregnancy from "../assets/Pregnancy_JPG.jpg"
import hotstone from "../assets/hotstones.jpg"
import thai from "../assets/thai.jpg"
import mini from "../assets/Mini-Miracle 01.jpg"
import relaxation from "../assets/relaxation.jpg"

// Define types for services
type Duration = {
  time: string;
  price: string;
  ideal: string;
};

interface Service {
  name: string;
  image?: string; // imported assets resolve to string at build-time
  description: string;
  benefits: string[];
  durations: Duration[];
  note?: string;
}

const Services = () => {
  const services: Service[] = [
    {
      name: "Deep Tissue Massage",
      image: deeptissue,
      description:
        "A firmer pressure massage to eliminate muscular pain and tension. Deep Tissue massage is designed to relieve severe tension in the muscle and the connective tissue or fascia.  Deep tissue massage is often recommended for individuals who experience consistent pain, are involved in heavy physical activity such as athletes, and patients who have sustained physical injury",
      benefits: [
        "Relieves chronic muscle tension and stiffness",
        "Improved posture and flexibility",
        "Improves blood circulation",
        "Stress reduction and relaxation",
      ],
      durations: [
        { time: "30 min", price: "$50", ideal: "" },
        { time: "45 min", price: "$68", ideal: "" },
        { time: "60 min", price: "$85", ideal: "" },
        { time: "90 min", price: "$120", ideal: "" },
        { time: "120 min", price: "$150", ideal: "" },
      ],
    },
    {
      name: "Relaxation Massage",
      image: relaxation,
      description:
        "Our Relaxation Massage is based on Swedish Massage therapy.   As the best known type of bodywork, one of the primary goals of the Swedish massage technique is to relax the entire body. Relaxation massage is also beneficial for increasing the level of oxygen in the blood, decreasing muscle toxins, improving circulation and flexibility while releasing tension.",
      benefits: [
        "Promotes deep relaxation and calmness",
        "Improves sleep quality",
        "Boosts circulation and lymphatic flow",
        "Relieves mild muscle soreness and fatigue",
      ],
      durations: [
        { time: "30 min", price: "$50", ideal: "" },
        { time: "45 min", price: "$68", ideal: "" },
        { time: "60 min", price: "$85", ideal: "" },
        { time: "90 min", price: "$120", ideal: "" },
        { time: "120 min", price: "$150", ideal: "" },
      ],
    },
    {
      name: "Traditional Thai Massage",
      image: thai,
      description:
        "Twenty-Five Century old deep-type massage technique with assisted Yoga positions that bring mind, body, and spirit into a state of balance and harmony (also known as Nuat Pan Bo'ran or Thai Yoga massage). This stimulation of the body's self-healing mechanisms is the perfect therapy for relieving mental or physical stress and discomfort.",
      benefits: [
        "Enhances body flexibility and joint mobility",
        "Improves blood flow and energy circulation",
        "Boosts overall energy and vitality",
        "Relieves fatigue and stress",
      ],
      durations: [
        { time: "30 min", price: "$50", ideal: "" },
        { time: "45 min", price: "$68", ideal: "" },
        { time: "60 min", price: "$85", ideal: "" },
        { time: "90 min", price: "$120", ideal: "" },
        { time: "120 min", price: "$150", ideal: "" },
      ],
    },
    {
      name: "Pregnancy Massage",
      image: pregnancy,
      description:
        "Massage benefits your whole system and allows you to become more aware of your body. Let us help reduce your tension, lower your stress levels and ease those aches and pains.  We use special waxes and oils for this treatment.",
      benefits: [
        "Relieves back, neck, and shoulder pain",
        "Reduces swelling in legs, feet, and hands",
        "Decreases stress and anxiety",
        "Supports overall comfort and well-being during pregnancy",
      ],
      durations: [
        { time: "45 min", price: "$68", ideal: "" },
        { time: "60 min", price: "$85", ideal: "" },
      ],
      note:
        "Please note although towards the end of 3rd trimester massage can be hugely beneficial, we do not recommend during 1st trimester.",
    },
    {
      name: "Reflexology",
      image: footmassage,
      description:
        "This is an ancient Chinese Therapy using finger and thumb techniques on specific reflex points which correspond to different areas of the body. It helps stimulate the body's natural healthy process allowing you to achieve physical and emotional well-being. Come and experience this heavenly foot treatment for yourself.",
      benefits: [
        "Promotes overall relaxation and stress relief",
        "Helps relieve headaches and tension",
        "Balances internal organ functions",
        "Enhances mood and emotional well-being",
      ],
      durations: [
        { time: "30 min", price: "$50", ideal: "" },
        { time: "45 min", price: "$68", ideal: "" },
      ],
    },
    {
      name: "Hot Stones Massage",
      image: hotstone,
      description:
        "This ancient soothing massage treatment concentrates on the use of warm basalt stones for a deep relaxation massage. The heat eases pain and releases tension from aching muscles to create a sense of well-being ...Bliss for the mind, body and spirit.",
      benefits: [
        "Relieves deep muscle tension and stiffness",
        "Eases pain from chronic conditions or injuries",
        "Enhances sleep quality",
        "Boosts overall sense of calm and well-being",
      ],
      durations: [
        { time: "45 min", price: "$80", ideal: "Back Only" },
        { time: "75 min", price: "$115", ideal: "Full Body" },
      ],
    },
    {
      name: "Pamper Packages",
      image: mini,
      description:
        "We offer two luxurious pamper packages designed to refresh your body and mind. Mini-Miracle is a 60-minute pamper experience featuring a 30-minute massage of your choice followed by a 30-minute mini facial — a perfect taste of luxury with a soothing blend of bodywork and skincare. For a longer indulgence, our Feel Good package offers 90 minutes of pure relaxation, beginning with a 60-minute massage of your choice and ending with a rejuvenating 30-minute mini facial. It’s the ultimate balance of therapeutic bodywork and dreamlike tranquility — and our most popular pamper package.",
      benefits: [
        "Combines massage and mini facial for complete relaxation",
        "Customizable massage of your choice",
        "Perfect for self-care or gifting to a loved one",
        "Available in 60-minute and 90-minute options",
      ],
      durations: [
        { time: "60 min", price: "$102", ideal: "Mini Miracle" },
        { time: "90 min", price: "$136", ideal: "Feel Good" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-16 sm:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional massage therapy tailored to your unique needs. All treatments are provided by qualified, experienced therapists.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <Card
                  key={service.name}
                  className={`p-6 sm:p-8 lg:p-10 shadow-soft hover:shadow-hover transition-all ${
                    index % 2 === 0 ? "bg-card" : "bg-muted/30"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Service Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="h-12 w-12 ring-1 ring-border">
                            <AvatarImage
                              src={services[0] ? (service.image || "/placeholder.svg") : "/placeholder.svg"}
                              alt={service.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="text-xs font-medium text-muted-foreground">
                              IMG
                            </AvatarFallback>
                          </Avatar>
                          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                            {service.name}
                          </h2>
                        </div>
                        <p className="text-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                          What to Expect
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.note && (
                        <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg">
                          <p className="text-sm text-foreground">
                            <strong>Note:</strong> {service.note}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Pricing & Booking */}
                    <div className="lg:col-span-1">
                      <div className="bg-card border border-border rounded-lg p-6 space-y-4 sticky top-24">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Durations & Pricing
                        </h3>

                        <div className="space-y-3">
                          {service.durations.map((duration) => (
                            <div
                              key={duration.time}
                              className="pb-3 border-b border-border last:border-0 last:pb-0"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="flex items-center font-semibold text-foreground">
                                  <Clock className="h-4 w-4 mr-2 text-primary" />
                                  {duration.time}
                                </span>
                                <span className="text-xl font-bold text-primary">
                                  {duration.price}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground ml-6">
                                {duration.ideal}
                              </p>
                            </div>
                          ))}
                        </div>

                        <BookingButton
                          service={service.name}
                          size="default"
                          className="w-full mt-4"
                          ctaPosition={`services_${service.name
                            .toLowerCase()
                            .replace(/\s+/g, "_")}`}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ/Info Section */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              Good to Know
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  What to Bring
                </h3>
                <p className="text-muted-foreground text-sm">
                  Just yourself! We provide clean linens, towels, and a comfortable environment. Wear comfortable clothing for Thai massage.
                </p>
              </Card>
              <Card className="p-6 bg-card">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-muted-foreground text-sm">
                  Please provide 24 hours notice for cancellations. Late cancellations may incur a fee.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
