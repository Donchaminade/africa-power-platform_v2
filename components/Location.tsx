import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { MapPin, Car } from 'lucide-react';

const Location: React.FC = () => {
    const { t, settings } = useTranslation();
    
    const venueName = settings?.event_venue_name || "Palais des Congrès";
    const address = settings?.event_address || "Cotonou, Bénin";
    // const mapUrl = settings?.google_maps_embed_url || ""; // Commented out to hardcode for now

    // Temporary: Hardcoded Bing Maps embed URL.
    const hardcodedMapUrl = "https://www.bing.com/maps/embed?h=400&w=500&cp=6.349306~2.404463&lvl=18&typ=d&sty=r&src=SHELL&FORM=MBEDV";


    return (
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black section-animate">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-brand-green font-black text-[10px] tracking-[0.4em] uppercase mb-4 px-4 py-1.5 rounded-full bg-brand-green/10 inline-block">{t('location.pre_title')}</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-tighter leading-tight mb-6">
                            {t('location.title_part1')} <span className="text-brand-green">{venueName}</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                            {t('location.description')}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-green/10 dark:bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-brand-green" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{t('location.address_title')}</h4>
                                    <p className="text-gray-500 dark:text-gray-400">{address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                 <div className="w-12 h-12 bg-brand-green/10 dark:bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Car className="text-brand-green" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{t('location.access_title')}</h4>
                                    <p className="text-gray-500 dark:text-gray-400">{t('location.access_value')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl h-96">
                        {/* Using hardcoded Bing Maps URL as requested */}
                        <iframe
                            src={hardcodedMapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;