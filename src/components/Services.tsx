export default function Services() {
  return (
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
  );
} 