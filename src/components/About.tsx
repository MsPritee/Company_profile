import Image from "next/image";

export default function About() {
  return (
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
  );
} 