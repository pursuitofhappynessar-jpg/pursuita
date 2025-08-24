import { ArrowLeft } from 'lucide-react';

interface StripSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  className?: string;
}

const StripSection = ({ title, subtitle, buttonText, className = '' }: StripSectionProps) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201025736993', '_blank');
  };

  return (
    <section className={`section-padding strip-cheerful ${className}`}>
      <div className="container-max">
        <div className="text-center space-y-6 scroll-animate">
          <h2 className="text-2xl md:text-4xl font-bold text-background max-w-4xl mx-auto">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-background/90 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <div className="pt-4">
            <button
              onClick={handleWhatsAppClick}
              className="bg-background text-foreground font-bold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto border border-background/20"
            >
              <span>{buttonText}</span>
              <ArrowLeft size={20} className="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StripSection;