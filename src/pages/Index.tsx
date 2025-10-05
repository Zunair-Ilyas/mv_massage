import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import heroVideo from "@/assets/background.mp4";
import heroPoster from "@/assets/hero-massage.jpg";
import massageTherapy from "@/assets/massage-therapy.jpg";
import relaxationImg from "@/assets/relaxation.jpg";
import thaiImg from "@/assets/thai.jpg";
import deepTissueImg from "@/assets/deeptissue.jpg";

const Index = () => {
  const services = [
    {
      name: "Deep Tissue Massage",
      image: deepTissueImg,
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
      image: relaxationImg,
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
      image: thaiImg,
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
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely wonderful experience. The therapist was professional and really listened to my needs. Left feeling completely restored.",
    },
    {
      name: "James K.",
      rating: 5,
      text: "Best massage I've had in Tauranga. The clinic is warm and welcoming, and the deep tissue work was exactly what I needed.",
    },
    {
      name: "Emma T.",
      rating: 5,
      text: "I visit monthly for Thai massage. Booking through their partner is easy, and the quality is consistently excellent.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            poster={heroPoster}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/40" />

          <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Restore calm.<br />Book your healing hour.
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Remedial Massage Therapists in Greerton, Tauranga
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookingButton size="lg" ctaPosition="home_hero" />
              <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        {/*<section className="bg-card border-y border-border py-6">*/}
        {/*  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">*/}
        {/*      <div className="flex items-center space-x-2">*/}
        {/*        <Phone className="h-5 w-5 text-primary" />*/}
        {/*        <span className="font-semibold">07 929 7994</span>*/}
        {/*      </div>*/}
        {/*      <div className="flex items-center space-x-2">*/}
        {/*        <MapPin className="h-5 w-5 text-primary" />*/}
        {/*        <span>Greerton, Tauranga</span>*/}
        {/*      </div>*/}
        {/*      <div className="flex items-center space-x-1">*/}
        {/*        {[...Array(5)].map((_, i) => (*/}
        {/*          <Star key={i} className="h-4 w-4 fill-accent text-accent" />*/}
        {/*        ))}*/}
        {/*        <span className="ml-2 font-semibold">5.0 Rating</span>*/}
        {/*      </div>*/}
        {/*      <p className="text-muted-foreground text-center md:text-left">*/}
        {/*        Bookings & vouchers handled securely by our booking partner*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Featured Services */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Most Popular Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from a range of professional massage therapies tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <Card key={service.name} className="p-6 shadow-soft hover:shadow-hover transition-all hover:-translate-y-1">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-14 w-14 rounded-md object-cover mb-3"
                    loading="lazy"
                  />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.durations.map((duration) => (
                      <div
                        key={duration.time}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <span className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {duration.time}
                        </span>
                        <span className="font-semibold text-foreground">{duration.price}</span>
                      </div>
                    ))}
                  </div>

                  <BookingButton
                    service={service.name}
                    size="sm"
                    className="w-full"
                    ctaPosition={`home_services_${service.name.toLowerCase().replace(/\s+/g, '_')}`}
                  />
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Real experiences from real people
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-card shadow-soft">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-sm text-muted-foreground">
                    — {testimonial.name}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-16 sm:py-24 bg-cover bg-center"
          style={{ backgroundImage: `url(${massageTherapy})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today or call us for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookingButton size="lg" variant="coral" ctaPosition="home_cta_bottom" />
              <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                <a href="tel:+6479297994">Call 07 929 7994</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
