import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import emImg from "../assets/Em.png"
import valImg from "../assets/Val.png"
import samImg from "../assets/Sam.png"

const Therapists = () => {
  const therapists = [
    {
      name: "Em",
      title: "",
      specialties: ["Hot Stones Massage", "Deep Tissue Massage", "Traditional Thai Massage"],
      languages: ["English", "Thai", "Isaan"],
      bio: "Em grew up in in North-East Thailand where massage for health and spicy food are way of life.  She has trained both in Traditional Thai massage and European massage and has developed her own unique style that suits her talented and healing hands. Em's goal is to have every client leave in better condition than they arrived.  She has no patience for treatments or therapists that are not effective and that passion shows in her long list of satisfied clients.",
      qualifications: [],
      photo: emImg,
    },
    {
      name: "Val",
      title: "",
      specialties: ["Deep Tissue Massage", "Feel Good Pamper", "Oil Massage (Soft to Firm)"],
      languages: ["English", "Thai", "Isaan"],
      bio: "Val enjoys taking care of people and helping them feel better.  She simply says \"I love my job!\" and it shows. At the same time Val's top priority in life is taking care of her family, and being a partner at MV Massage is an important part of that priority. Val also grew up in \"Isaan\" where massage is a normal part of everyday culture, and has trained in many techniques that have made her the skilled therapist she is today.",
      qualifications: [],
      photo: valImg,
    },
    {
      name: "Sam",
      title: "",
      specialties: ["Deep Tissue Massage", "Pamper Packages", "Thai Massage with Herbal Compress"],
      languages: ["English", "Thai", "Isaan"],
      bio: "Sam, like many gifted therapists, is  from the northeastern region of Thailand. She like cooking and exercising. Her favourite hobbies are fruit carving and fishing. Sam says she loves to do massage because it helps relieve aches and pains of her clients. Her strengths are muscle relaxation massage, Thai massage, relaxation, and oil massage.",
      qualifications: [],
      photo: samImg,
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
              Meet Our Therapists
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of qualified, experienced professionals is dedicated to your healing and wellness. 
              Each therapist brings unique skills and specialties to provide the best care possible.
            </p>
          </div>
        </section>

        {/* Therapists Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8">
              {therapists.map((therapist) => (
                <Card
                  key={therapist.name}
                  className="overflow-hidden shadow-soft hover:shadow-hover transition-all w-full"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                      {/* Photo left */}
                      <div className="flex-shrink-0 mx-auto sm:mx-0">
                        <div className="size-28 sm:size-32 rounded-full overflow-hidden ring-1 ring-border bg-muted">
                          <img
                            src={therapist.photo}
                            alt={therapist.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Details right */}
                      <div className="flex-1 w-full">
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                          {therapist.name}
                        </h2>
                        {/* Title intentionally omitted per earlier request */}

                        {/* Bio */}
                        <p className="text-foreground leading-relaxed mb-6">
                          {therapist.bio}
                        </p>

                        {/* Specialties */}
                        <div className="mb-4">
                          <h3 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                            Specialties
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {therapist.specialties.map((specialty) => (
                              <span
                                key={specialty}
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Languages */}
                        <div className="mb-6">
                          <h3 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                            Languages
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {therapist.languages?.map((lang) => (
                              <span
                                key={lang}
                                className="px-2.5 py-1 bg-muted text-foreground text-sm rounded-full"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Booking */}
                        <BookingButton
                          therapist={therapist.name}
                          size="default"
                          className="w-full"
                          ctaPosition={`therapists_${therapist.name.toLowerCase().replace(/\s+/g, '_')}`}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Our Approach to Care
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              At MV Massage, we believe in personalized, compassionate care. Each therapist takes 
              the time to understand your unique needs, health history, and goals. We combine 
              evidence-based techniques with intuitive touch to provide treatments that are both 
              effective and deeply relaxing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Professional
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fully qualified and continuously trained in the latest techniques
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Personalized
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every treatment tailored to your specific needs and preferences
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Caring
                </h3>
                <p className="text-sm text-muted-foreground">
                  A warm, safe environment where your comfort is our priority
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Therapists;
