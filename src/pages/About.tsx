import { Heart, Award, Users, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clinicInterior from "@/assets/clinic-interior.jpg";
import interior from '../assets/Interior3.png'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-16 sm:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About MV Massage
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in wellness and healing, serving the Greerton community 
              with professional massage therapy since 2010.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    At MV Massage we specialise in remedial massage treatments.....
                    Traditional Thai massage, Deep Tissue, Reflexology, Sports, and Pregnancy massage, to name a few.
                  </p>
                  <p>
                    The Greerton clinic opened in July 2018, and without exception all the therapists are well trained
                    (and I would have to say talented) at what they do.
                    Each therapist has their own style developed over many years, and has learnt various techniques;
                    but the heart of MV Massage is remedial treatments of all kinds.
                  </p>
                  <p>
                    We also do Pamper Packages (usually a mix of massage and facial treatments)
                    and Hot Stone treatments which are lovely gift for a friend or loved one.
                  </p>
                  <p>
                    If you have stiffness, aches and pains, are training seriously - or just have a need to
                    enter a different world for a while and regenerate yourself, come and see us and "put yourself in our hands".
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={interior}
                  alt="MV Massage clinic interior"
                  className="rounded-lg shadow-soft w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-hover max-w-xs">
                  <p className="font-heading text-2xl font-bold mb-1">7+</p>
                  <p className="text-sm">Years serving the Tauranga community</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center bg-card shadow-soft hover:shadow-hover transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Compassionate Care
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every client is treated with kindness, respect, and genuine concern for their wellbeing
                </p>
              </Card>

              <Card className="p-6 text-center bg-card shadow-soft hover:shadow-hover transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Excellence
                </h3>
                <p className="text-sm text-muted-foreground">
                  Continuously improving our skills and knowledge to provide the highest quality care
                </p>
              </Card>

              <Card className="p-6 text-center bg-card shadow-soft hover:shadow-hover transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Inclusivity
                </h3>
                <p className="text-sm text-muted-foreground">
                  A welcoming space for everyone, celebrating diversity in our team and clients
                </p>
              </Card>

              <Card className="p-6 text-center bg-card shadow-soft hover:shadow-hover transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Community
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proud to be part of Greerton, supporting local health and wellness
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        {/*<section className="py-16 sm:py-24">*/}
        {/*  <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">*/}
        {/*    <h2 className="font-heading text-3xl font-bold text-foreground mb-8">*/}
        {/*      Qualifications & Memberships*/}
        {/*    </h2>*/}
        {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
        {/*      <div className="space-y-2">*/}
        {/*        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">*/}
        {/*          <Award className="h-10 w-10 text-primary" />*/}
        {/*        </div>*/}
        {/*        <h3 className="font-heading font-semibold text-foreground">*/}
        {/*          Massage New Zealand*/}
        {/*        </h3>*/}
        {/*        <p className="text-sm text-muted-foreground">*/}
        {/*          All therapists are registered members*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      <div className="space-y-2">*/}
        {/*        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">*/}
        {/*          <Award className="h-10 w-10 text-primary" />*/}
        {/*        </div>*/}
        {/*        <h3 className="font-heading font-semibold text-foreground">*/}
        {/*          ACC Registered*/}
        {/*        </h3>*/}
        {/*        <p className="text-sm text-muted-foreground">*/}
        {/*          We can help with ACC-funded treatments*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      <div className="space-y-2">*/}
        {/*        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">*/}
        {/*          <Award className="h-10 w-10 text-primary" />*/}
        {/*        </div>*/}
        {/*        <h3 className="font-heading font-semibold text-foreground">*/}
        {/*          Fully Insured*/}
        {/*        </h3>*/}
        {/*        <p className="text-sm text-muted-foreground">*/}
        {/*          Professional indemnity insurance coverage*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>

      <Footer />
    </div>
  );
};

export default About;
