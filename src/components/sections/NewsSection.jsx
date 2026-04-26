import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Calendar, Tag, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';

const NewsSection = () => {
  const { t } = useTranslation();
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) throw error;

        if (data && data.length > 0) {
          const formattedData = data.map(item => ({
            id: item.id,
            tag: item.tag || t('news.tags.institutional'),
            tagColor: item.tag_color || "bg-blue-100 text-blue-700",
            title: item.title,
            date: new Date(item.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
            excerpt: item.excerpt,
            image: item.image_url || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
          }));
          setNewsItems(formattedData);
        } else {
          setNewsItems([]);
        }
      } catch (error) {
        console.error("Error fetching news from Supabase:", error);
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [t]);

  return (
    <section className="py-24 bg-white relative z-10 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span>{t('news.badge_current')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              {t('news.title')}
            </h2>
            <p className="text-lg text-slate-500">
              {t('news.subtitle')}
            </p>
          </div>
          <button className="mt-8 md:mt-0 flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group px-6 py-3 border border-slate-200 rounded-full hover:bg-slate-50">
            {t('news.btn_all')}
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20 w-full">
            <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
          </div>
        ) : newsItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-300 border border-slate-100 group flex flex-col cursor-pointer hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-5 left-5 z-20">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${item.tagColor} shadow-sm backdrop-blur-md bg-white/95`}>
                    <Tag className="w-3.5 h-3.5 mr-1.5" />
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 right-8 -mt-6 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-primary-600 z-20 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                
                <div className="flex items-center text-sm font-medium text-slate-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </article>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20 w-full bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-slate-500 text-lg font-medium">No hay publicaciones disponibles por el momento.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
