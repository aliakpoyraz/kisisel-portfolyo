import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <Layout>
      <section className="py-16 bg-white dark:bg-[#0d1117]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-4">İletişime Geçin</h1>
            <p className="text-xl text-slate-600 dark:text-[#8b949e] max-w-2xl mx-auto">
              Projeniz mi var? <br></br>Yoksa sadece konuşmak mı istiyorsunuz? <br></br> Aşağıdaki formu doldurarak benimle iletişime geçebilirsiniz.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="md:col-span-1 space-y-6">
                <div className="bg-white dark:bg-[#161b22] p-6 rounded-lg shadow-md border border-[#30363d]">
                  <div className="flex items-start">
                    <Mail className="text-[#58a6ff] mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-[#c9d1d9] mb-1">e-mail</h3>
                      <a 
                        href="mailto:contact@example.com" 
                        className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                      >
                        aliakpoyraz@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#161b22] p-6 rounded-lg shadow-md border border-[#30363d]">
                  <div className="flex items-start">
                    <MapPin className="text-[#58a6ff] mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-[#c9d1d9] mb-1">Adres</h3>
                      <p className="text-[#8b949e]">
                        Türkiye, Ankara
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-[#161b22] p-6 rounded-lg shadow-md border border-[#30363d]">
                  <div className="flex items-start">
                    <MessageSquare className="text-[#58a6ff] mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-[#c9d1d9] mb-1">Diğer</h3>
                      <div className="flex space-x-4 mt-2">
                        <a 
                          href="https://github.com/aliakpoyraz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                          aria-label="GitHub Profile"
                        >
                          GitHub
                        </a>
                        <a 
                          href="https://linkedin.com/in/aliakpoyraz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                          aria-label="LinkedIn Profile"
                        >
                          LinkedIn
                        </a>
                        <a 
                          href="https://instagram.com/aliakpoyraz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                          aria-label="Instagram Profile"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white dark:bg-[#161b22] p-8 rounded-lg shadow-md border border-[#30363d]">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-6">Mesaj Gönder</h2>
                  
                  {submitStatus === 'success' ? (
                    <div className="bg-[#161b22] border border-[#238636] text-[#c9d1d9] p-4 rounded-md mb-6">
                      <p className="font-medium">Mesaj başarıyla gönderildi!</p>
                      <p>Mesajınız için teşekkürler, sizlere en kısa sürede dönüş yapacağım.</p>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="bg-[#161b22] border border-[#da3633] text-[#c9d1d9] p-4 rounded-md mb-6">
                      <p className="font-medium">Mesaj gönderilirken bir hata oluştu.</p>
                      <p>Lütfen daha sonra tekrar deneyiniz veya diğer iletişim adreslerim üzerinden (mail,linkedin,instagram) iletişime geçiniz.</p>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-[#c9d1d9] mb-1">
                          Adınız
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-md border-[#30363d] bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-[#c9d1d9] mb-1">
                          Mail Adresiniz
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-md border-[#30363d] bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-[#c9d1d9] mb-1">
                        Konu
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md border-[#30363d] bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-[#c9d1d9] mb-1">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border rounded-md border-[#30363d] bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex items-center bg-[#238636] hover:bg-[#2ea043] text-white"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gönderiliyor...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={18} className="mr-2" />
                          Mesaj Gönder
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;