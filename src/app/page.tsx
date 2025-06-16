import Image from "next/image";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software Development",
                description: "Tailored solutions designed to meet your specific business needs",
                icon: "💻"
              },
              {
                title: "Web Development",
                description: "Modern, responsive websites and web applications",
                icon: "🌐"
              },
              {
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications",
                icon: "📱"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                We are a team of passionate developers, designers, and problem-solvers dedicated to creating exceptional software solutions. With years of experience and a commitment to excellence, we help businesses thrive in the digital age.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/about-image.svg"
                  alt="About Us"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <Contact />
    </main>
  );
}
