import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, Linkedin } from "lucide-react";

// Reusable glassmorphism card (same as About component)
const Card = ({ children, className = '' }) => (
  <div className={`relative rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-lg shadow-purple-500/5 ${className}`}>
    {/* Animated gradient border */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/40 transition-all duration-500"></div>
    {/* Subtle light streak */}
    <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
    {children}
  </div>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "hello@vehnicate.com",
      action: "mailto:hello@vehnicate.com",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+91 77081 61551",
      action: "tel:+917708161551",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "Connect via LinkedIn",
      details: "",
      action: "https://www.linkedin.com/company/vehnicate/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-purple-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/3 to-pink-600/8"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* Light blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-purple-600/25 to-pink-600/15 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-pink-600/20 to-purple-600/15 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-gradient-to-l from-purple-600/20 to-pink-600/15 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-8xl font-alumni font-bold mb-6 text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-ledger">
            Have questions about vehnicate? Want to partner with us? <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              We'd love to hear from you!
            </span>
          </p>
        </motion.div>

        <div className="font-ledger grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-ledger text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a href={info.action} className="block">
                    <Card className="group hover:scale-[1.03] transition-transform duration-500">
                      <div className="relative p-6">
                        {/* Floating icon - same style as About component */}
                        <div className="absolute -top-6 left-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                          <div className="text-white">{info.icon}</div>
                        </div>

                        {/* Content */}
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {info.title}
                          </h4>
                          {info.details && (
                            <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                              {info.details}
                            </p>
                          )}
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-500"></div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 group"
            >
              <Card className="group hover:scale-[1.02] transition-transform duration-500">
                <div className="relative p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    Business Hours
                  </h4>
                  <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-500"></div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="group hover:scale-[1.02] transition-transform duration-500">
              <div className="relative p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
                    >
                      <Send
                        className="mr-2 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                      Send Message
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </motion.div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-500"></div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;