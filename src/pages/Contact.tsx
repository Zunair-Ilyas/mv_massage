import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";
import { sendContactMessage } from "@/lib/email";

// Helper type guard for EmailJS error shape
function isEmailJsStatus(e: unknown): e is { status: number; text: string } {
  return (
    typeof e === "object" &&
    e !== null &&
    "status" in e &&
    typeof (e as any).status === "number" &&
    "text" in e &&
    typeof (e as any).text === "string"
  );
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasEmailJsConfig = Boolean(
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
      import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !hasEmailJsConfig) return;
    setIsSubmitting(true);

    try {
      await sendContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — we'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      // Provide a clearer hint if the template recipient is not configured
      if (isEmailJsStatus(err) && err.status === 422 && err.text?.toLowerCase().includes("recipient")) {
        toast({
          title: "Email service needs setup",
          description:
            "The email recipient isn't set in your EmailJS template. In EmailJS, open your template and set 'To email' to your address or use {{to_email}}. Then try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "We couldn't send your message right now. Please try again later or call us.",
          variant: "destructive",
        });
      }
      console.error("Email send failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-16 sm:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to answer your questions and help you book the perfect treatment.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="p-6 sm:p-8 shadow-soft">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  {!hasEmailJsConfig && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertTitle>Email not configured</AlertTitle>
                      <AlertDescription>
                        Please set VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID in your .env, then restart the server. Messages can't be sent until configured.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="027 123 4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="coral"
                      size="lg"
                      disabled={isSubmitting || !hasEmailJsConfig}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-sm text-muted-foreground">
                      Prefer to book directly? Use the booking buttons on our site or call us!
                    </p>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6 sm:p-8 shadow-soft">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Quick Booking
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    The fastest way to secure your appointment is through our online booking partner:
                  </p>
                  <BookingButton size="lg" className="w-full" ctaPosition="contact_quick_booking" />
                </Card>

                <Card className="p-6 sm:p-8 shadow-soft">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                    Contact Details
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <a
                          href="tel:+6479297994"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          07 929 7994
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          Mon-Fri: 9am-7pm, Sat: 10am-4pm
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Location</h4>
                        <p className="text-muted-foreground">
                          1230 Cameron Road<br />
                          Greerton, Tauranga<br />
                          New Zealand
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                          <p className="text-xs mt-2">All sessions by appointment</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a
                          href="mailto:therapist@mvmassage.nz"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          therapist@mvmassage.nz
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted/50">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Getting Here
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    We're conveniently located in Greerton, with easy parking available.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Public transport options and detailed directions available on request.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-card rounded-lg shadow-soft overflow-hidden" style={{ height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6268.897978745838!2d176.15385397478806!3d-37.73042987197954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddc77e6cdce93%3A0x500ef6143a2f020!2sGreerton%2C%20Tauranga%203122%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MV Massage Location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
