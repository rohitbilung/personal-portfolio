import React,{useState} from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('https://api.redbilung.in/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log(response,"ressss")
      if (response.ok) {
        setStatus('Message Sent!! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message. Try again.');
      }
    } catch (err) {
      console.log(err)
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden" data-aos="flip-up">
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Let's <span className="text-gradient">Connect</span></h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300">I'm currently available for freelance projects or full-time opportunities. If you need a scalable MERN/PERN application, let's talk.</p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-white">hireme@redbilung.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-semibold text-white">+91 90194-54631</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-semibold text-white">Birmitrapur, Odisha, India</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} method='POST' className="space-y-4">
              <div>
                <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder="Your Name" className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white placeholder-gray-500 transition" />
              </div>
              <div>
                <input required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Your Email" className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white placeholder-gray-500 transition" />
              </div>
              <div>
                <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="4" placeholder="Message" className="w-full bg-dark/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary focus:outline-none text-white placeholder-gray-500 transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-600 text-dark font-bold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,242,234,0.4)] transition">Send Message</button>
              {status && <p className="text-sm mt-2 text-primary">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;