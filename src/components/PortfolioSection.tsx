import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('websites');

  const websites = [
    {
      title: 'متجر إليكتروني للأزياء',
      description: 'متجر إليكتروني شامل بنظام دفع آمن وإدارة المخزون',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com'
    },
    {
      title: 'موقع شركة استشارات',
      description: 'موقع احترافي لشركة استشارات مالية مع نظام حجز المواعيد',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com'
    },
    {
      title: 'تطبيق ويب للتعلم',
      description: 'منصة تعليمية تفاعلية مع نظام إدارة الطلاب والمحتوى',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com'
    },
    {
      title: 'موقع مطعم',
      description: 'موقع أنيق لمطعم مع قائمة طعام تفاعلية ونظام طلبات أونلاين',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com'
    },
    {
      title: 'موقع عقاري',
      description: 'منصة عقارية شاملة مع خرائط تفاعلية ونظام بحث متقدم',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com'
    },
    {
      title: 'بورتفوليو شخصي',
      description: 'موقع بورتفوليو احترافي لمصور فوتوغرافي مع معرض أعمال متطور',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com'
    }
  ];

  const designs = [
    {
      title: 'هوية بصرية لمطعم',
      description: 'تصميم شعار وهوية بصرية كاملة',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80',
      category: 'هوية بصرية'
    },
    {
      title: 'تصميم بروشور طبي',
      description: 'مطبوعات طبية احترافية',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=80',
      category: 'مطبوعات'
    },
    {
      title: 'شعار شركة تقنية',
      description: 'شعار حديث ومبتكر',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=500&q=80',
      category: 'شعارات'
    },
    {
      title: 'تصميم كتالوج منتجات',
      description: 'كتالوج منتجات أنيق ومنظم',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=500&q=80',
      category: 'كتالوجات'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/10">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            استكشف مجموعة من أفضل أعمالنا في تصميم المواقع والهوية البصرية
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 scroll-animate">
          <div className="bg-card rounded-xl p-2 border border-border/20">
            <button
              onClick={() => setActiveTab('websites')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'websites'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              مواقع
            </button>
            <button
              onClick={() => setActiveTab('designs')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'designs'
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              تصميم & هوية بصرية
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'websites' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((website, index) => (
                <div 
                  key={website.title} 
                  className="group relative bg-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(website.link, '_blank')}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={website.image} 
                      alt={website.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform duration-200">
                        <Eye size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{website.title}</h3>
                    <p className="text-muted-foreground">{website.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designs.map((design, index) => (
                <div key={design.title} className="group relative bg-card rounded-xl overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={design.image} 
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Modal functionality can be added here
                          alert(`عرض ${design.title} - يمكن إضافة مودال هنا`);
                        }}
                        className="bg-accent text-accent-foreground p-2 rounded-full hover:scale-110 transition-transform duration-200"
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{design.title}</h3>
                    <p className="text-sm text-muted-foreground">{design.description}</p>
                    <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {design.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;