import ContactForm from "@/components/contact-page/contact-form";
import ContactMap from "@/components/contact-page/contact-map";
import ContactInfo from "@/components/contact-page/contact-info";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8f8f8]">

      <div className=" flex-grow">
        <div className="relative bg-black text-white py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/80 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                EASY NAUKRI4U <span className="block md:inline"></span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                Stay informed with real-time government job notifications, exam results, and more. Get in touch with us for any queries!
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-12">

            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
