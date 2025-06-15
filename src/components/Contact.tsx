'use client';

import { motion } from 'framer-motion';
import ContactInformation from './ContactInformation';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {/* <div className="w-full lg:w-[45%] min-w-[300px]">
            <ContactInformation />
          </div> */}
          <div className="w-full lg:w-[45%] min-w-[300px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
} 