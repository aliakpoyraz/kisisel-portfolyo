import React from 'react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-[#161b22] text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#c9d1d9]">Yeni Projenize Başlamaya Hazır mısınız?</h2>
        <p className="text-xl text-[#8b949e] mb-8 max-w-2xl mx-auto">
          İş birlikleri, Web sitesi, mobil uygulama geliştirme, SEO optimizasyonu gibi Freelance projeler için iletişime geçebilirsiniz.
        </p>
        <Button
          as={Link}
          href="/contact"
          size="lg"
          className="inline-flex items-center bg-[#238636] hover:bg-[#2ea043] text-white"
        >
          <MessageSquare className="mr-2" />
          İletişime Geçin
        </Button>
      </div>
    </section>
  );
};

export default CTASection;