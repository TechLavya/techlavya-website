'use client';

import React, { useState } from 'react';
import Title from './Title';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using FormSubmit.co for email handling (free service)
      const formBody = new FormData();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('subject', formData.subject);
      formBody.append('message', formData.message);

      const response = await fetch('https://formsubmit.co/ajax/techlavya@rkmgec.edu.in', {
        method: 'POST',
        body: formBody,
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Title 
          title="Get in Touch" 
          className="from-amber-500 to-amber-400 mb-4"
        />
        <p className="text-center text-amber-200/70 text-sm sm:text-base mb-12">
          Have questions about TECHLAVYA? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-50 mb-6">Contact Information</h3>

            {/* Email */}
            <div className="group p-6 rounded-lg border border-amber-700/30 bg-black/30 backdrop-blur-sm hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-lg bg-amber-900/30 text-amber-500 group-hover:bg-amber-900/50">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-amber-50 font-semibold mb-1">Email</h4>
                  <a href="mailto:techlavya@rkmgec.edu.in" className="text-amber-200/70 hover:text-amber-200 transition-colors text-sm sm:text-base">
                    techlavya@rkmgec.edu.in
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group p-6 rounded-lg border border-amber-700/30 bg-black/30 backdrop-blur-sm hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-lg bg-amber-900/30 text-amber-500 group-hover:bg-amber-900/50">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-amber-50 font-semibold mb-1">Phone</h4>
                  <a href="tel:+919876543210" className="text-amber-200/70 hover:text-amber-200 transition-colors text-sm sm:text-base">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group p-6 rounded-lg border border-amber-700/30 bg-black/30 backdrop-blur-sm hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-lg bg-amber-900/30 text-amber-500 group-hover:bg-amber-900/50">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-amber-50 font-semibold mb-1">Location</h4>
                  <p className="text-amber-200/70 text-sm sm:text-base">
                    Ramkrishna Mahato Government Engineering College<br />
                    Purulia, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="group p-6 rounded-lg border border-amber-700/30 bg-black/30 backdrop-blur-sm hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-lg bg-amber-900/30 text-amber-500 group-hover:bg-amber-900/50">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-amber-50 font-semibold mb-1">Response Time</h4>
                  <p className="text-amber-200/70 text-sm sm:text-base">
                    We'll respond within 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-lg border border-amber-700/30 bg-black/30 backdrop-blur-sm">
              {success && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200 text-sm text-center">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Name */}
              <div className="mb-6">
                <label className="block text-amber-50 font-semibold text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg bg-amber-950/20 border border-amber-700/50 text-amber-50 placeholder-amber-200/40 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-amber-50 font-semibold text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-amber-950/20 border border-amber-700/50 text-amber-50 placeholder-amber-200/40 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-amber-50 font-semibold text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-2.5 rounded-lg bg-amber-950/20 border border-amber-700/50 text-amber-50 placeholder-amber-200/40 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-amber-50 font-semibold text-sm mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-amber-950/20 border border-amber-700/50 text-amber-50 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
                >
                  <option value="">Select a subject...</option>
                  <option value="Registration">Event Registration</option>
                  <option value="Sponsorship">Sponsorship Inquiry</option>
                  <option value="Technical">Technical Support</option>
                  <option value="General">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-amber-50 font-semibold text-sm mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-amber-950/20 border border-amber-700/50 text-amber-50 placeholder-amber-200/40 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-500 hover:to-amber-400 disabled:from-amber-700 disabled:to-amber-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-amber-600/50 hover:shadow-amber-600/70 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-amber-200/50 text-xs mt-4 text-center">
                * Required fields
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Links */}
        <div className="text-center p-8 rounded-lg border border-amber-700/40 bg-gradient-to-r from-amber-950/30 to-black/30">
          <p className="text-amber-50 mb-4">
            Before reaching out, check our{' '}
            <a href="/#faq" className="text-amber-400 hover:text-amber-300 font-semibold underline">
              FAQ Section
            </a>
            {' '}for quick answers.
          </p>
          <p className="text-amber-200/60 text-sm">
            We appreciate your interest in TECHLAVYA and look forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
