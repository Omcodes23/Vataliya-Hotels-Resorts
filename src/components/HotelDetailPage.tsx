import React, { useState } from 'react';
import {
  ArrowLeft, ArrowRight, Award, Bed, Check, CheckCircle2, ChevronRight,
  Clock, Coffee, Compass, Flame, Heart, Image as ImageIcon, Info, Mail,
  MapPin, MessageSquare, Mountain, Phone, ShieldCheck, Sparkles, Star,
  TreePine, Users, UtensilsCrossed, Wifi,
} from 'lucide-react';
import { HotelData, RoomType, VATALIYA_CORPORATE_INFO } from '../data/hotelsData';
import { GalleryModal } from './GalleryModal';

interface HotelDetailPageProps {
  hotel: HotelData;
  onBack: () => void;
}

export const HotelDetailPage: React.FC<HotelDetailPageProps> = ({
  hotel,
  onBack,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredGallery = activeCategory === 'All'
    ? hotel.galleryImages
    : hotel.galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Vataliya Sales, I would like to inquire about stay and details for *${hotel.name} by Vataliya* (${hotel.city}). Please connect with me.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${VATALIYA_CORPORATE_INFO.whatsappNumber}&text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#050b18] text-[#f6f4ef] min-h-screen pt-[68px] sm:pt-[76px]">

      {/* Navigation Route & Breadcrumb Path Bar */}
      <div className="bg-[#071329] border-b border-[#d8b45c]/25 py-2.5 sm:py-3 px-4 sm:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-[#d8b45c] hover:underline font-semibold uppercase tracking-wider cursor-pointer"
            >
              <ArrowLeft size={14} /> Back to Destinations
            </button>
            <ChevronRight size={12} className="text-gray-600" />
            <span>{hotel.state}</span>
            <ChevronRight size={12} className="text-gray-600" />
            <span>{hotel.city}</span>
            <ChevronRight size={12} className="text-gray-600" />
            <span className="text-white font-medium">{hotel.name} by Vataliya</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={13} className="text-[#d8b45c]" />
              <a
                href={`tel:${VATALIYA_CORPORATE_INFO.phone}`}
                className="hover:text-[#d8b45c] transition"
              >
                {VATALIYA_CORPORATE_INFO.phoneDisplay}
              </a>
              <span className="text-gray-600">|</span>
              <a
                href={`tel:${VATALIYA_CORPORATE_INFO.phone2}`}
                className="hover:text-[#d8b45c] transition"
              >
                {VATALIYA_CORPORATE_INFO.phone2Display}
              </a>
            </div>
            <a
              href={`mailto:${hotel.hotelInquiryEmail}?subject=Inquiry for ${encodeURIComponent(hotel.name + ' by Vataliya')}`}
              className="flex items-center gap-1.5 text-[#d8b45c] hover:underline font-medium"
            >
              <Mail size={13} />
              <span>{hotel.hotelInquiryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[640px] sm:min-h-[680px] flex items-end pt-12 pb-16 sm:pb-20 px-4 sm:px-8 overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${hotel.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/70 to-[#050b18]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,11,24,0.75)_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-4">
            {/* Star Rating & Location Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#d8b45c]/20 border border-[#d8b45c]/40 text-[#f0d795] text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <div className="flex text-[#d8b45c]">
                  {Array.from({ length: hotel.starRating }).map((_, i) => (
                    <Star key={i} size={12} fill="#d8b45c" />
                  ))}
                </div>
                <span className="ml-1">{hotel.starRating}-Star Luxury Property</span>
              </div>
              <span className="flex items-center gap-1 text-xs text-gray-300 tracking-wider">
                <MapPin size={13} className="text-[#d8b45c]" /> {hotel.locationName}
              </span>
            </div>

            {/* Hotel Name with by Vataliya & Tagline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              {hotel.name} <span className="text-[#d8b45c] text-3xl sm:text-4xl block sm:inline font-normal">by Vataliya</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-200 font-light max-w-2xl leading-relaxed">
              {hotel.tagline}
            </p>

            {/* Action Buttons & Direct Inquire Mail */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href={`mailto:${hotel.hotelInquiryEmail}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#d8b45c] to-[#f0d795] text-[#101827] font-semibold text-xs tracking-widest uppercase rounded-lg shadow-xl shadow-[#d8b45c]/20 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
              >
                <Mail size={15} /> Inquire: {hotel.hotelInquiryEmail}
              </a>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366]/90 hover:bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase rounded-lg transition"
              >
                <MessageSquare size={15} /> WhatsApp Concierge
              </button>

              <button
                onClick={() => {
                  const galleryEl = document.getElementById('hotel-gallery');
                  galleryEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/30 text-white font-medium text-xs tracking-wider uppercase rounded-lg hover:border-[#d8b45c] hover:text-[#f0d795] backdrop-blur-sm transition"
              >
                <ImageIcon size={15} /> View Photos ({hotel.galleryImages.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About The Hotel Section */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
              <Sparkles size={14} /> The Hotel Experience
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              {hotel.about.heading}
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              {hotel.about.description1}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {hotel.about.description2}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {hotel.about.keyStats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10">
                  <span className="block text-[10px] uppercase tracking-wider text-[#d8b45c] font-semibold">
                    {stat.label}
                  </span>
                  <span className="block font-serif text-base sm:text-lg text-white font-medium mt-1">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Side Image Collage */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div
              className="h-64 rounded-xl bg-cover bg-center border border-[#d8b45c]/20 shadow-xl"
              style={{ backgroundImage: `url(${hotel.bannerImages[1] || hotel.heroImage})` }}
            />
            <div
              className="h-64 rounded-xl bg-cover bg-center border border-[#d8b45c]/20 shadow-xl translate-y-6"
              style={{ backgroundImage: `url(${hotel.bannerImages[2] || hotel.heroImage})` }}
            />
          </div>
        </div>
      </section>

      {/* Key Highlights & USPs */}
      <section className="py-16 bg-[#071329] border-y border-[#d8b45c]/15 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
              Property Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Curated for Elevated Mountain Stays
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotel.highlights.map((highlight, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gradient-to-br from-[#081a38] to-[#050b18] border border-white/10 hover:border-[#d8b45c]/40 hover:shadow-xl hover:shadow-[#d8b45c]/5 transition duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-lg bg-[#d8b45c]/10 border border-[#d8b45c]/30 flex items-center justify-center text-[#d8b45c]">
                  <Sparkles size={22} />
                </div>
                <h3 className="font-serif text-xl text-white font-medium">
                  {highlight.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations (Rooms & Suites) */}
      <section id="rooms" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
              Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
              Rooms & Mountain Suites
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Every room is a haven of tranquility featuring exquisite wooden craftsmanship, heated climate comfort, and breathtaking valley vistas.
            </p>
          </div>
          <a
            href={`mailto:${hotel.hotelInquiryEmail}?subject=Room%20Inquiry%20for%20${encodeURIComponent(hotel.name + ' by Vataliya')}`}
            className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs text-[#d8b45c] font-semibold tracking-wider uppercase hover:underline"
          >
            Inquire via Email: {hotel.hotelInquiryEmail} <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hotel.rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-[#071329] border border-white/10 hover:border-[#d8b45c]/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Room Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#050b18]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-[#d8b45c]/30 text-[10px] text-[#f0d795] font-semibold tracking-wider uppercase">
                  {room.view}
                </div>
              </div>

              {/* Room Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-white font-medium">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#d8b45c] tracking-wider uppercase font-medium">
                    {room.tagline}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Specs Pills */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center text-xs">
                    <div className="p-2 rounded bg-white/[0.03]">
                      <span className="block text-[9px] text-gray-400 uppercase">Room Size</span>
                      <span className="font-medium text-white">{room.size}</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03]">
                      <span className="block text-[9px] text-gray-400 uppercase">Bed Type</span>
                      <span className="font-medium text-white">{room.bed}</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.03]">
                      <span className="block text-[9px] text-gray-400 uppercase">Occupancy</span>
                      <span className="font-medium text-white">{room.occupancy}</span>
                    </div>
                  </div>

                  {/* Amenities List */}
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      In-Room Amenities
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                          <Check size={12} className="text-[#d8b45c] flex-shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email & WhatsApp Inquire Actions */}
                <div className="pt-4 flex items-center gap-3">
                  <a
                    href={`mailto:${hotel.hotelInquiryEmail}?subject=Inquiry%20for%20${encodeURIComponent(room.name)}%20at%20${encodeURIComponent(hotel.name + ' by Vataliya')}&body=Hello%20Vataliya%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20the%20${encodeURIComponent(room.name)}%20at%20${encodeURIComponent(hotel.name + ' by Vataliya')}.%0D%0A%0D%0APlease%20share%20details%20and%20tariffs.`}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d8b45c] to-[#f0d795] text-[#101827] font-semibold text-xs tracking-widest uppercase rounded-lg hover:shadow-lg hover:shadow-[#d8b45c]/20 transition text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail size={14} /> Send Email Inquiry
                  </a>
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(
                        `Hello Vataliya Concierge, I'm interested in *${room.name}* at *${hotel.name} by Vataliya*. Please share details and availability.`
                      );
                      window.open(`https://api.whatsapp.com/send?phone=${VATALIYA_CORPORATE_INFO.whatsappNumber}&text=${msg}`, '_blank');
                    }}
                    className="p-3 bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] hover:text-black text-[#25D366] rounded-lg transition"
                    title="Inquire via WhatsApp"
                  >
                    <MessageSquare size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dining & Culinary Experience */}
      <section className="py-20 bg-gradient-to-b from-[#071329] via-[#081a38] to-[#071329] border-y border-[#d8b45c]/15 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase flex items-center gap-2">
              <UtensilsCrossed size={14} /> Culinary Splendor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
              {hotel.dining.title}
            </h2>
            <p className="text-xs text-[#d8b45c] tracking-widest uppercase font-medium">
              {hotel.dining.tagline}
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {hotel.dining.description}
            </p>

            <div className="space-y-2.5 pt-2">
              {hotel.dining.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#d8b45c]/20 flex items-center justify-center text-[#d8b45c] flex-shrink-0">
                    <Check size={12} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#d8b45c]" /> Timings: {hotel.dining.timing}
              </span>
              <span>·</span>
              <span>Room Service Available 24/7</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d8b45c]/30 shadow-2xl">
              <img
                src={hotel.dining.image}
                alt={hotel.dining.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-[#f0d795] font-semibold uppercase tracking-wider">
                  Farm-to-Table & Himalayan Delicacies
                </span>
                <p className="font-serif text-xl text-white font-normal mt-1">
                  Enjoy dining with 360° views of pine forests and snowy summits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
            Signature Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            Experiences at {hotel.name} by Vataliya
          </h2>
          <p className="text-sm text-gray-400">
            Unforgettable activities crafted to immerse you in Himalayan serenity and outdoor adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotel.experiences.map((exp, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden bg-[#071329] border border-white/10 hover:border-[#d8b45c]/40 transition flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-[10px] text-[#f0d795] font-semibold tracking-wider uppercase">
                  {exp.tag}
                </span>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-white font-medium">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Amenities Grid */}
      <section className="py-16 bg-[#071329] border-y border-[#d8b45c]/15 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
              Comforts & Services
            </span>
            <h2 className="font-serif text-3xl text-white font-medium mt-1">
              Resort Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {hotel.amenitiesList.map((amenity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#d8b45c]/40 transition"
              >
                <div className="w-8 h-8 rounded-full bg-[#d8b45c]/10 flex items-center justify-center text-[#d8b45c] flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-xs sm:text-sm text-gray-200 font-medium">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery (Filterable + Lightbox) */}
      <section id="hotel-gallery" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
              Visual Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
              Photo Gallery
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Rooms', 'Views', 'Dining', 'Property'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition ${
                  activeCategory === cat
                    ? 'bg-[#d8b45c] text-[#101827] font-semibold'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-48 sm:h-56 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#d8b45c] transition"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                style={{ display: 'block' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-white font-medium">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Visiting Places */}
      <section className="py-20 bg-[#071329] border-t border-[#d8b45c]/15 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left: Address & Central Desk */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
                Location & Direct Inquiry
              </span>
              <h2 className="font-serif text-3xl text-white font-medium">
                Direct Inquiries
              </h2>
              <div className="space-y-3.5 text-sm text-gray-300">
                <p className="flex items-start gap-2.5">
                  <MapPin size={18} className="text-[#d8b45c] flex-shrink-0 mt-0.5" />
                  <span><strong>Property:</strong> {hotel.propertyAddress}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone size={18} className="text-[#d8b45c] flex-shrink-0" />
                  <span>
                    <strong>Direct Phones:</strong>{' '}
                    <a href={`tel:${VATALIYA_CORPORATE_INFO.phone}`} className="hover:text-white underline">
                      {VATALIYA_CORPORATE_INFO.phoneDisplay}
                    </a>{' '}
                    |{' '}
                    <a href={`tel:${VATALIYA_CORPORATE_INFO.phone2}`} className="hover:text-white underline">
                      {VATALIYA_CORPORATE_INFO.phone2Display}
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <Mail size={18} className="text-[#d8b45c] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Property Inquiry:</strong>{' '}
                    <a href={`mailto:${hotel.hotelInquiryEmail}?subject=Inquiry%20for%20${encodeURIComponent(hotel.name + ' by Vataliya')}`} className="text-[#f0d795] hover:underline">
                      {hotel.hotelInquiryEmail}
                    </a>
                    {hotel.hotelSecondaryEmail && (
                      <>
                        {' '}|{' '}
                        <a href={`mailto:${hotel.hotelSecondaryEmail}?subject=Inquiry%20for%20${encodeURIComponent(hotel.name + ' by Vataliya')}`} className="text-[#f0d795] hover:underline">
                          {hotel.hotelSecondaryEmail}
                        </a>
                      </>
                    )}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail size={18} className="text-[#d8b45c] flex-shrink-0" />
                  <span><strong>Central Booking:</strong> <a href={`mailto:${VATALIYA_CORPORATE_INFO.bookingEmail}?subject=Inquiry%20for%20${encodeURIComponent(hotel.name + ' by Vataliya')}`} className="text-[#f0d795] hover:underline">{VATALIYA_CORPORATE_INFO.bookingEmail}</a></span>
                </p>
              </div>

              <div className="pt-4 flex gap-3">
                <a
                  href={`mailto:${hotel.hotelInquiryEmail}?subject=Inquiry%20for%20${encodeURIComponent(hotel.name + ' by Vataliya')}&body=Hello%20Vataliya%20Team,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20${encodeURIComponent(hotel.name + ' by Vataliya')}.`}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d8b45c] to-[#f0d795] text-[#101827] font-semibold text-xs tracking-widest uppercase rounded-lg text-center flex items-center justify-center gap-1.5"
                >
                  <Mail size={14} /> Send Email
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 py-3 px-4 bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase rounded-lg text-center flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={14} /> WhatsApp
                </button>
              </div>
            </div>

            {/* Right: Nearby Attractions */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-xl text-white font-medium border-b border-white/10 pb-3">
                Top Attractions & Sightseeing in {hotel.city}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hotel.attractions.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white/[0.03] border border-white/10 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white text-sm">{place.name}</h4>
                      <span className="text-[11px] text-[#d8b45c] font-semibold">{place.distance}</span>
                    </div>
                    <p className="text-xs text-gray-400">{place.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Callout Banner */}
      <section className="py-16 bg-gradient-to-r from-[#081a38] via-[#102d53] to-[#081a38] px-4 sm:px-8 text-center border-t border-[#d8b45c]/30">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#d8b45c] uppercase">
            Vataliya Hotels & Resorts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
            Inquire for {hotel.name} by Vataliya
          </h2>
          <p className="text-sm text-gray-200">
            Connect directly via email at <strong className="text-[#f0d795]">{hotel.hotelInquiryEmail}</strong>{hotel.hotelSecondaryEmail && <> | <strong className="text-[#f0d795]">{hotel.hotelSecondaryEmail}</strong></>} or call our desk on <strong className="text-white">{VATALIYA_CORPORATE_INFO.phoneDisplay}</strong> | <strong className="text-white">{VATALIYA_CORPORATE_INFO.phone2Display}</strong>.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${hotel.hotelInquiryEmail}?subject=Stay%20Inquiry%20for%20${encodeURIComponent(hotel.name + ' by Vataliya')}&body=Hello%20Vataliya%20Team,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20staying%20at%20${encodeURIComponent(hotel.name + ' by Vataliya')}.`}
              className="px-8 py-3.5 bg-gradient-to-r from-[#d8b45c] to-[#f0d795] text-[#101827] font-semibold text-xs tracking-widest uppercase rounded-lg shadow-xl shadow-[#d8b45c]/30 hover:scale-105 transition inline-flex items-center gap-2 cursor-pointer"
            >
              <Mail size={16} /> Email: {hotel.hotelInquiryEmail}
            </a>
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3.5 bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#20bd5a] transition flex items-center gap-2"
            >
              <MessageSquare size={16} /> WhatsApp ({VATALIYA_CORPORATE_INFO.phoneDisplay})
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox Modal */}
      <GalleryModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredGallery}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />

    </div>
  );
};
