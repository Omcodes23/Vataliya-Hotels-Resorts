export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  size: string;
  occupancy: string;
  bed: string;
  view: string;
  amenities: string[];
}

export interface Experience {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
}

export interface HotelData {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  starRating: number;
  locationName: string;
  city: string;
  state: string;
  propertyAddress: string;
  vataliyaCentralPhone: string;
  vataliyaCentralPhone2?: string;
  hotelInquiryEmail: string;
  hotelSecondaryEmail?: string;
  centralBookingEmail: string;
  whatsappNumber: string;
  logoUrl: string;
  heroImage: string;
  bannerImages: string[];
  about: {
    heading: string;
    description1: string;
    description2: string;
    keyStats: { label: string; value: string }[];
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  rooms: RoomType[];
  dining: {
    title: string;
    tagline: string;
    description: string;
    image: string;
    features: string[];
    timing: string;
  };
  experiences: Experience[];
  amenitiesList: string[];
  galleryImages: { url: string; title: string; category: 'Rooms' | 'Views' | 'Dining' | 'Property' }[];
  attractions: Attraction[];
}

export interface DestinationLocation {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  tagline: string;
  description: string;
  heroImage: string;
  elevation: string;
  bestTime: string;
  hotels: HotelData[];
}

export const HOTELS_DATA: Record<string, HotelData> = {
  'manaw-valley-resort': {
    id: 'manaw-valley-resort',
    slug: 'manaw-valley-resort',
    name: 'Manaw Valley Resort',
    tagline: '3-Star Luxury Mountain Resort in Shimla · Operated by Vataliya',
    starRating: 3,
    locationName: 'Near Kamyana, Shimla',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    propertyAddress: 'Manaw, Near Kamyana, Hotel Radisson Road, Shimla, Himachal Pradesh - 171003',
    vataliyaCentralPhone: '+91 91066 62535',
    hotelInquiryEmail: 'manawvalley@vataliyas.com',
    centralBookingEmail: 'booking@vataliyas.com',
    whatsappNumber: '919106662535',
    logoUrl: 'https://manawvalleyresort.com/img/logo/logo.png',
    heroImage: 'https://manawvalleyresort.com/gallery/1.jpg',
    bannerImages: [
      'https://manawvalleyresort.com/gallery/1.jpg',
      'https://manawvalleyresort.com/gallery/2.jpg',
      'https://manawvalleyresort.com/gallery/6.jpg',
      'https://manawvalleyresort.com/gallery/12.jpg',
    ],
    about: {
      heading: 'Where Himalayan Elegance Meets Serene Luxury',
      description1:
        'Nestled peacefully along the scenic Radisson Road near Kamyana in Shimla, Manaw Valley Resort is operated in partnership with Vataliya Hotels & Resorts. Surrounded by lush cedar forests and pristine mountain valleys, our 3-star resort offers discerning guests a harmonious blend of refined Himachali warmth, modern architecture, and thoughtful hospitality.',
      description2:
        'Featuring centralized climate heating throughout all guest rooms, dedicated wellness amenities including a steam sauna and scenic swimming pool, as well as gourmet multicuisine dining, Manaw Valley Resort is an idyllic haven for family vacations, romantic getaways, and corporate retreats.',
      keyStats: [
        { label: 'Category', value: '3-Star Luxury Resort' },
        { label: 'Accommodations', value: 'Deluxe, Luxury & Suites' },
        { label: 'Special Feature', value: 'Centralized Heating' },
        { label: 'Setting', value: 'Pine Valley, Kamyana' },
      ],
    },
    highlights: [
      {
        title: 'Centralized Heating in All Rooms',
        description: 'Enjoy cozy, temperature-controlled comfort regardless of the chilly Himalayan weather.',
        icon: 'Flame',
      },
      {
        title: 'Private Valley-Facing Balconies',
        description: 'Wake up to panoramic views of misty pine valleys, deodar forests, and captivating sunrises.',
        icon: 'Mountain',
      },
      {
        title: 'Steam Sauna & Wellness Pool',
        description: 'Rejuvenate body and mind with premium wellness facilities after exploring Shimla ridge.',
        icon: 'Sparkles',
      },
      {
        title: 'Multicuisine Gourmet Restaurant',
        description: 'Savor traditional Himachali delicacies, royal North Indian specialties, and continental dishes.',
        icon: 'UtensilsCrossed',
      },
      {
        title: 'Lush Lawns & Evening Bonfire',
        description: 'Gather under star-studded mountain skies for acoustic music, fresh barbecue, and cozy bonfires.',
        icon: 'TreePine',
      },
      {
        title: 'Dedicated Parking & Concierge',
        description: 'Spacious secure parking, high-speed Wi-Fi, 24/7 power backup, and round-the-clock service.',
        icon: 'ShieldCheck',
      },
    ],
    rooms: [
      {
        id: 'manaw-deluxe',
        name: 'Deluxe Room',
        tagline: 'Refined Wooden Comfort for Peaceful Retreats',
        description:
          'Elegantly crafted room featuring warm wooden finishes, premium bedding, centralized climate heating, large picture windows, and modern bath amenities designed for tranquil relaxation.',
        image: 'https://manawvalleyresort.com/img/gallery/deluxe.jpg',
        size: '280 sq.ft',
        occupancy: '2 Adults + 1 Child',
        bed: 'King Size Bed',
        view: 'Hill & Pine Forest View',
        amenities: [
          'Centralized Heating',
          'High-Speed Wi-Fi',
          '43" Smart LED TV',
          'Tea & Coffee Maker',
          '24/7 Hot & Cold Water',
          'Complimentary Toiletries',
          'Daily Housekeeping',
          'In-Room Dining Service',
        ],
      },
      {
        id: 'manaw-luxury',
        name: 'Luxury Room with Balcony',
        tagline: 'Panoramic Mountain Views from Your Private Step-Out Balcony',
        description:
          'Spacious luxury accommodations featuring a private step-out balcony overlooking the Shimla valley. Enjoy morning mountain breezes and evening tea with sweeping valley panoramas.',
        image: 'https://manawvalleyresort.com/img/gallery/luxury.jpg',
        size: '350 sq.ft',
        occupancy: '2 Adults + 2 Children',
        bed: 'Luxury King Bed',
        view: 'Panoramic Valley & Mountain View',
        amenities: [
          'Private Valley Balcony',
          'Centralized Heating',
          'Lounge Seating Chairs',
          'High-Speed Wi-Fi',
          '50" Smart LED TV',
          'Tea & Coffee Station',
          'Luxury Bath Amenities',
          'Express Room Service',
        ],
      },
      {
        id: 'manaw-family-suite',
        name: 'Executive Family Suite',
        tagline: 'Expansive Luxury for Families & Group Getaways',
        description:
          'Generously proportioned multi-bed suites offering interconnected living spaces, private panoramic sit-outs, centralized heating, and dedicated concierge assistance.',
        image: 'https://manawvalleyresort.com/gallery/3.jpg',
        size: '520 sq.ft',
        occupancy: '4 Adults',
        bed: '2 King Beds',
        view: '360° Valley & Snow Peak View',
        amenities: [
          'Dual Balconies',
          'Living Room Lounge',
          'Centralized Climate Heating',
          'Mini Refrigerator',
          'Work Desk',
          'Premium Bath Suite',
          'Express In-Room Dining',
        ],
      },
    ],
    dining: {
      title: 'Cedar & Clove — Grand Dining Hall',
      tagline: 'Gourmet Flavors with Himalayan Panoramas',
      description:
        'Indulge in a culinary journey curated by master chefs. From traditional Himachali Madra and Dhaam specials to Continental, Oriental, and North Indian feasts, every meal is prepared with farm-fresh hill produce and served amidst panoramic mountain vistas.',
      image: 'https://manawvalleyresort.com/gallery/13.jpg',
      features: [
        'Himalayan Buffet Breakfast & Dinner',
        'Chef Signature Himachali Delicacies',
        'Outdoor Terrace Dining under the Pines',
        'In-Room Private Dining Service',
      ],
      timing: '7:30 AM – 11:00 PM',
    },
    experiences: [
      {
        title: 'Starry Bonfire & Barbecue Evenings',
        description: 'Soak in the warmth of a crackling bonfire with acoustic music and chef-crafted kebabs.',
        image: 'https://manawvalleyresort.com/gallery/7.jpg',
        tag: 'Evening Special',
      },
      {
        title: 'Pine Forest & Nature Trails',
        description: 'Guided morning walks through fragrant deodar forests and ancient ridge pathways in Kamyana.',
        image: 'https://manawvalleyresort.com/gallery/15.jpg',
        tag: 'Outdoor Adventure',
      },
      {
        title: 'Steam Sauna & Wellness Therapy',
        description: 'Detoxify and relax with our restorative steam sauna sessions in the serene mountain climate.',
        image: 'https://manawvalleyresort.com/gallery/11.jpg',
        tag: 'Relaxation',
      },
    ],
    amenitiesList: [
      'Centralized Room Heating',
      'High-Speed Wi-Fi',
      'Steam Sauna & Wellness Center',
      'Swimming Pool',
      'Multicuisine Restaurant & Cafe',
      '24-Hour Front Desk & Concierge',
      'Free On-Site Valet Parking',
      'Travel Desk & Sightseeing Support',
      'Conference & Banquet Facilities',
      'Doctor on Call',
      'Power Backup 24/7',
      'Daily Housekeeping',
    ],
    galleryImages: [
      { url: 'https://manawvalleyresort.com/gallery/1.jpg', title: 'Resort Exterior at Twilight', category: 'Property' },
      { url: 'https://manawvalleyresort.com/gallery/2.jpg', title: 'Grand Valley Panoramas', category: 'Views' },
      { url: 'https://manawvalleyresort.com/gallery/3.jpg', title: 'Luxury Suite Interiors', category: 'Rooms' },
      { url: 'https://manawvalleyresort.com/gallery/4.jpg', title: 'Private Balcony Sitout', category: 'Rooms' },
      { url: 'https://manawvalleyresort.com/gallery/5.jpg', title: 'Resort Architecture', category: 'Property' },
      { url: 'https://manawvalleyresort.com/gallery/6.jpg', title: 'Lobby & Reception', category: 'Property' },
      { url: 'https://manawvalleyresort.com/gallery/7.jpg', title: 'Outdoor Bonfire Lounge', category: 'Property' },
      { url: 'https://manawvalleyresort.com/gallery/8.jpg', title: 'Fine Dining Restaurant', category: 'Dining' },
      { url: 'https://manawvalleyresort.com/gallery/9.jpg', title: 'Deluxe Room View', category: 'Rooms' },
      { url: 'https://manawvalleyresort.com/gallery/10.jpg', title: 'Valley Morning Sunshine', category: 'Views' },
      { url: 'https://manawvalleyresort.com/gallery/11.jpg', title: 'Steam Sauna Suite', category: 'Property' },
      { url: 'https://manawvalleyresort.com/gallery/12.jpg', title: 'Lush Lawns & Gardens', category: 'Property' },
      { url: 'https://manawvalleyresort.com/gallery/13.jpg', title: 'Gourmet Culinary Dishes', category: 'Dining' },
      { url: 'https://manawvalleyresort.com/gallery/14.jpg', title: 'Evening Illumination', category: 'Property' },
      { url: 'https://manawvalleyresort.com/gallery/15.jpg', title: 'Pine Forest Trails', category: 'Views' },
      { url: 'https://manawvalleyresort.com/gallery/16.jpg', title: 'Modern Bath Amenities', category: 'Rooms' },
    ],
    attractions: [
      { name: 'The Ridge & Mall Road Shimla', distance: '6.5 km', description: 'The cultural and shopping epicenter of Shimla.' },
      { name: 'Jakhoo Temple & Ropeway', distance: '8.2 km', description: 'Highest point in Shimla with panoramic views of snow peaks.' },
      { name: 'Kamyana Pine Trails', distance: '0.8 km', description: 'Serene untouched forest pathways right adjacent to the resort.' },
      { name: 'Kufri Snow Point', distance: '19 km', description: 'Famous winter sports and adventure park hub.' },
      { name: 'Viceregal Lodge (IIAS)', distance: '7 km', description: 'Iconic British colonial architectural heritage landmark.' },
    ],
  },

  'hotel-indrasan-manali': {
    id: 'hotel-indrasan-manali',
    slug: 'hotel-indrasan-manali',
    name: 'Hotel Indrasan Manali',
    tagline: '3-Star Luxury Mountain Haven in Prini, Manali · Operated by Vataliya',
    starRating: 3,
    locationName: 'Naggar Road, Prini, Manali',
    city: 'Manali',
    state: 'Himachal Pradesh',
    propertyAddress: 'Hotel Indrasan, Naggar Road, Prini, Manali, Himachal Pradesh - 175143',
    vataliyaCentralPhone: '+91 91066 62535',
    hotelInquiryEmail: 'hotelindrasan@vataliyas.com',
    centralBookingEmail: 'booking@vataliyas.com',
    whatsappNumber: '919106662535',
    logoUrl: 'https://www.hotelindrasanmanali.com/images/logo.jpg',
    heroImage: 'https://www.hotelindrasanmanali.com/images/indrasan.jpg',
    bannerImages: [
      'https://www.hotelindrasanmanali.com/images/indrasan.jpg',
      'https://www.hotelindrasanmanali.com/images/2.jpg',
      'https://www.hotelindrasanmanali.com/images/rooms-4.jpg',
      'https://www.hotelindrasanmanali.com/images/button-img-1.jpg',
    ],
    about: {
      heading: 'Tranquil Himalayan Hospitality in the Foothills of Manali',
      description1:
        'Hotel Indrasan is a boutique 3-star luxury mountain hotel situated along picturesque Naggar Road in Prini, Manali, operated in partnership with Vataliya Hotels & Resorts. Set against the magnificent backdrop of snow-capped Pir Panjal mountain ranges and surrounded by whispering apple orchards, the hotel offers a peaceful retreat away from city bustle while remaining conveniently close to town.',
      description2:
        'Featuring 23 tastefully appointed Deluxe & Luxury rooms with private viewing balconies, an expansive garden cafe, authentic mountain hospitality, and bespoke bonfire musical evenings, Hotel Indrasan is the preferred destination for couples, families, and mountain lovers.',
      keyStats: [
        { label: 'Property Type', value: '3-Star Luxury Boutique Hotel' },
        { label: 'Room Count', value: '23 Mountain View Rooms' },
        { label: 'Special Feature', value: 'Private Snow Peak Balconies' },
        { label: 'Setting', value: 'Apple Orchards, Prini' },
      ],
    },
    highlights: [
      {
        title: 'Spectacular Snow Peak & Valley Views',
        description: 'Unobstructed vistas of the snow-clad Himalayan peaks from room balconies and the garden cafe.',
        icon: 'Mountain',
      },
      {
        title: 'Manicured Garden Dining & Outdoor Cafe',
        description: 'Savor morning coffee and evening snacks surrounded by blooming flowers and apple trees.',
        icon: 'Coffee',
      },
      {
        title: 'Cozy Bonfire & Musical Evenings',
        description: 'Experience magical mountain nights with crackling campfires, acoustic tunes, and fresh barbecues.',
        icon: 'Flame',
      },
      {
        title: 'Authentic Multicuisine Restaurant',
        description: 'Freshly prepared Indian, Continental, and local Himachali flavors crafted by expert chefs.',
        icon: 'UtensilsCrossed',
      },
      {
        title: 'Adventure & Sightseeing Desk',
        description: 'Customized excursions for Solang Valley, Rohtang Pass, Atal Tunnel, and paragliding tours.',
        icon: 'Compass',
      },
      {
        title: 'Spacious Parking & Warm Hospitality',
        description: 'Convenient on-site parking, high-speed Wi-Fi, power backup, and attentive concierge service.',
        icon: 'ShieldCheck',
      },
    ],
    rooms: [
      {
        id: 'indrasan-deluxe',
        name: 'Deluxe Room',
        tagline: 'Warm & Cozy Comfort with Mountain Essence',
        description:
          'Thoughtfully designed with elegant wooden furnishings, plush king bedding, large picture windows, ambient lighting, and modern attached bathrooms with 24/7 hot water.',
        image: 'https://www.hotelindrasanmanali.com/images/2.jpg',
        size: '260 sq.ft',
        occupancy: '2 Adults + 1 Child',
        bed: 'King Bed',
        view: 'Garden & Mountain View',
        amenities: [
          'Room Heating',
          'High-Speed Wi-Fi',
          'HD Flat Screen TV',
          'Tea & Coffee Maker',
          '24/7 Running Hot Water',
          'Custom Toiletries',
          'In-Room Dining',
        ],
      },
      {
        id: 'indrasan-luxury-balcony',
        name: 'Luxury Room with Balcony',
        tagline: 'Private Step-Out Balcony Overlooking Himalayan Ranges',
        description:
          'Spacious luxury accommodation featuring a private step-out balcony. Bask in the golden sunrise over Pir Panjal peaks, enjoy evening tea with valley breezes, and experience true mountain tranquility.',
        image: 'https://www.hotelindrasanmanali.com/images/rooms-4.jpg',
        size: '320 sq.ft',
        occupancy: '2 Adults + 2 Children',
        bed: 'Premium King Bed',
        view: 'Direct Snow Peak & Valley View',
        amenities: [
          'Private Mountain Balcony',
          'Panoramic Picture Windows',
          'Room Heater on Demand',
          'High-Speed Wi-Fi',
          'Smart LED TV',
          'Tea & Coffee Kettle',
          'Seating Area with Table',
          '24/7 Hot Water Shower',
        ],
      },
    ],
    dining: {
      title: 'Himalayan Garden & Indoor Restaurant',
      tagline: 'Fresh Mountain Flavors & Scenic Garden Dining',
      description:
        'Enjoy a dining experience where every meal is accompanied by serene mountain breezes. Choose between our cozy indoor restaurant or the landscaped open-air garden cafe with tables set against pine forests and snowy summits.',
      image: 'https://www.hotelindrasanmanali.com/images/button-img-2.jpg',
      features: [
        'Garden Dining with Valley Panoramas',
        'Traditional Himachali Trout & Local Specials',
        'Buffet & A-La-Carte North Indian Selections',
        'Custom Barbecue for Evening Bonfires',
      ],
      timing: '7:00 AM – 10:30 PM',
    },
    experiences: [
      {
        title: 'Bonfire & Stargazing Under Himalayan Skies',
        description: 'Immerse in the magic of mountain evenings with warmth, laughter, and curated music by the fire.',
        image: 'https://www.hotelindrasanmanali.com/images/button-img-3.jpg',
        tag: 'Night Experience',
      },
      {
        title: 'Apple Orchard Walks in Prini',
        description: 'Stroll through picturesque apple orchards and village pathways right around the hotel premises.',
        image: 'https://www.hotelindrasanmanali.com/images/button-img-4.jpg',
        tag: 'Nature Walk',
      },
      {
        title: 'Solang Valley & Atal Tunnel Excursions',
        description: 'Full-day thrill tours for skiing, paragliding, snowmobiling, and exploring Lahaul Valley.',
        image: 'https://www.hotelindrasanmanali.com/images/button-img-1.jpg',
        tag: 'Adventure Day',
      },
    ],
    amenitiesList: [
      'Private Mountain Balconies',
      'Free High-Speed Wi-Fi',
      'Garden Restaurant & Outdoor Cafe',
      'Bonfire & Musical Evenings',
      '24/7 Front Desk Assistance',
      'Dedicated Travel & Sightseeing Desk',
      'Spacious On-Site Parking',
      '24/7 Power Backup',
      'Doctor on Call',
      'Same-Day Laundry Service',
      'Car Rental & Taxi Arrangements',
    ],
    galleryImages: [
      { url: 'https://www.hotelindrasanmanali.com/images/indrasan.jpg', title: 'Hotel Indrasan Facade', category: 'Property' },
      { url: 'https://www.hotelindrasanmanali.com/images/2.jpg', title: 'Deluxe Room Ambiance', category: 'Rooms' },
      { url: 'https://www.hotelindrasanmanali.com/images/rooms-4.jpg', title: 'Luxury Balcony Room', category: 'Rooms' },
      { url: 'https://www.hotelindrasanmanali.com/images/button-img-1.jpg', title: 'Mountain Exploration Tour', category: 'Views' },
      { url: 'https://www.hotelindrasanmanali.com/images/button-img-2.jpg', title: 'Garden Dining Experience', category: 'Dining' },
      { url: 'https://www.hotelindrasanmanali.com/images/button-img-3.jpg', title: 'Bonfire Atmosphere', category: 'Property' },
      { url: 'https://www.hotelindrasanmanali.com/images/button-img-4.jpg', title: 'Apple Orchard & Greenery', category: 'Views' },
    ],
    attractions: [
      { name: 'Mall Road Manali', distance: '3.5 km', description: 'Bustling town center with handicraft bazaars, cafes, and wooden souvenirs.' },
      { name: 'Hadimba Devi Temple', distance: '5.2 km', description: 'Ancient wooden pagoda temple in the middle of dense Dhungri deodar forest.' },
      { name: 'Solang Valley', distance: '16 km', description: 'Famous hub for paragliding, zorbing, skiing, and snow activities.' },
      { name: 'Atal Tunnel & Sissu', distance: '32 km', description: 'Iconic high-altitude engineering marvel connecting to breathtaking Lahaul valley.' },
      { name: 'Naggar Castle & Art Gallery', distance: '16 km', description: 'Historic medieval castle overlooking the Beas river and Nicholas Roerich gallery.' },
      { name: 'Jogini Waterfall', distance: '6.8 km', description: 'Scenic trek passing through orchards to a cascading Himalayan waterfall.' },
    ],
  },

  'the-fyra-ashapuri-snow-inn': {
    id: 'the-fyra-ashapuri-snow-inn',
    slug: 'the-fyra-ashapuri-snow-inn',
    name: 'Fyra Ashapuri Snow Inn',
    tagline: '3-Star Mountain Haven in the Heart of Prini, Manali · Operated by Vataliya',
    starRating: 3,
    locationName: 'Near Himachal Gramin Bank, Prini, Manali',
    city: 'Manali',
    state: 'Himachal Pradesh',
    propertyAddress: 'FYRA Ashapuri Snow Inn, Near Himachal Gramin Bank, Prini, Manali, Himachal Pradesh - 175131',
    vataliyaCentralPhone: '+91 91066 62535',
    vataliyaCentralPhone2: '+91 97117 54726',
    hotelInquiryEmail: 'fyraashapuri@vataliyas.com',
    hotelSecondaryEmail: 'info@fyrahotel.com',
    centralBookingEmail: 'booking@vataliyas.com',
    whatsappNumber: '919106662535',
    logoUrl: 'https://fyragroup.in/assets/fyra-logo.png',
    heroImage: '/hotelphotos/fyraashapurisnowinn/IMG_2825.PNG',
    bannerImages: [
      '/hotelphotos/fyraashapurisnowinn/IMG_2825.PNG',
      '/hotelphotos/fyraashapurisnowinn/IMG_2827.PNG',
      '/hotelphotos/fyraashapurisnowinn/IMG_2820.PNG',
      '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.55 PM (2).jpeg',
    ],
    about: {
      heading: 'Breathtaking Himalayan Beauty & Exceptional Warmth',
      description1:
        'Experience the perfect blend of comfort, elegance, and breathtaking mountain beauty at Fyra Ashapuri Snow Inn. Whether you are traveling with family, friends, or on a romantic retreat, our hotel offers a peaceful mountain sanctuary with modern amenities and warm Himachali hospitality in the heart of Prini, Manali.',
      description2:
        'Operated in partnership with Vataliya Hotels & Resorts, the property features 15 well-appointed rooms equipped with hot & cold air conditioning, private balconies with snow-capped mountain views, a multi-cuisine restaurant, grand reception lounge, landscaped lawn, and secure private parking for an unforgettable Himalayan stay.',
      keyStats: [
        { label: 'Room Count', value: '15 Well-Appointed Rooms' },
        { label: 'Accommodations', value: 'Super Deluxe, Deluxe & Family Suite' },
        { label: 'Special Feature', value: 'Hot & Cold AC & Private Balconies' },
        { label: 'Setting', value: 'Prini, Near Gramin Bank' },
      ],
    },
    highlights: [
      {
        title: 'Balcony Rooms with Breathtaking Snow Views',
        description: 'Unobstructed vistas of snow-capped Himalayan peaks and pine valleys from spacious private step-out balconies.',
        icon: 'Mountain',
      },
      {
        title: 'Hot & Cold Air Conditioned Rooms',
        description: 'Complete all-season temperature control with hot & cold air conditioning across all guest rooms and suites.',
        icon: 'Flame',
      },
      {
        title: 'Multi-Cuisine Fine Dining Restaurant',
        description: 'Indulge in Indian Specialties, Chinese Classics, Continental favorites, and authentic local Himachali delicacies.',
        icon: 'UtensilsCrossed',
      },
      {
        title: 'Grand Reception & Guest Lounge',
        description: 'Bespoke wooden architecture, warm ambiance, 24-hour front desk service, and dedicated mountain concierge.',
        icon: 'Sparkles',
      },
      {
        title: 'Spacious Family Suites (750 sq.ft)',
        description: 'Generously proportioned 750 sq. ft. suites and corner mountain-facing rooms designed for families and group relaxation.',
        icon: 'Coffee',
      },
      {
        title: 'Secure Private Parking & High-Speed Wi-Fi',
        description: 'Dedicated on-site private parking facility, 24/7 power backup, high-speed Wi-Fi, and 24-hour running hot & cold water.',
        icon: 'ShieldCheck',
      },
    ],
    rooms: [
      {
        id: 'super-deluxe-room',
        name: 'Super Deluxe Room with Balcony',
        tagline: 'Private Balcony with Direct Snow Peak Panoramas (10 Rooms Available)',
        description:
          'Our Super Deluxe Rooms feature panoramic picture windows and a private wooden balcony offering direct vistas of snow-capped mountains. Equipped with hot & cold air conditioning, plush king bedding, ambient headboard lighting, and modern attached washroom.',
        image: '/hotelphotos/fyraashapurisnowinn/IMG_2820.PNG',
        size: '450 sq.ft',
        occupancy: '2 Guests',
        bed: 'King Size Bed',
        view: 'Direct Snow Peak & Valley View',
        amenities: [
          'Private Mountain View Balcony',
          'Hot & Cold Air Conditioning',
          'Panoramic Picture Windows',
          'Modern Attached Washroom',
          'High-Speed Wi-Fi',
          'Smart LED TV',
          'Tea & Coffee Station',
          '24/7 Running Hot Water',
        ],
      },
      {
        id: 'deluxe-room',
        name: 'Deluxe Room',
        tagline: 'Cozy & Elegant Wooden Mountain Retreat (4 Rooms Available)',
        description:
          'Designed for supreme warmth and relaxation, our Deluxe Rooms offer stylish wooden interiors, under-bed ambient glow lighting, king bedding, and hot & cold air conditioning for a peaceful stay.',
        image: '/hotelphotos/fyraashapurisnowinn/IMG_2821.PNG',
        size: '400 sq.ft',
        occupancy: '2 Guests',
        bed: 'Comfortable King Bed',
        view: 'Valley & Hill Window View',
        amenities: [
          'Hot & Cold Air Conditioning',
          'Under-Bed Ambient Lighting',
          'Stylish Wooden Interiors',
          'Modern Washroom with Shower',
          'High-Speed Wi-Fi',
          'LED TV',
          'Tea & Coffee Maker',
          '24/7 Hot Water',
        ],
      },
      {
        id: 'family-suite',
        name: 'Executive Family Suite',
        tagline: 'Expansive 750 Sq. Ft. Corner Mountain View Suite (1 Suite Available)',
        description:
          'An expansive 750 sq. ft. suite ideal for families and discerning travelers seeking maximum luxury. Features dual corner panoramic windows framing the mountain peaks at dusk, separate lounge seating, and refined wooden finishes.',
        image: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.54 PM (2).jpeg',
        size: '750 sq.ft',
        occupancy: '4 Guests',
        bed: 'Master King Bed + Living Lounge',
        view: 'Dual Corner Panoramic Snow Mountain View',
        amenities: [
          'Spacious 750 sq.ft Floor Plan',
          'Dual Corner Mountain Windows',
          'Hot & Cold Air Conditioning',
          'Living & Seating Lounge Area',
          'Premium Washroom Suite',
          'High-Speed Wi-Fi',
          'Smart LED TV with Marble Console',
          'In-Room Tea & Coffee Bar',
        ],
      },
    ],
    dining: {
      title: 'Flavors of Himachal & Beyond — Multi-Cuisine Restaurant',
      tagline: 'Indian Specialties, Chinese Classics, Continental & Himachali Cuisine',
      description:
        'Indulge in a delightful culinary journey at our in-house Multi-Cuisine Restaurant. Savor freshly prepared royal North Indian curries, Continental favorites, authentic Himachali trout, and Chinese specialties while enjoying panoramic views of pine forests and snowy summits.',
      image: '/hotelphotos/fyraashapurisnowinn/IMG_2826.PNG',
      features: [
        'Multi-Cuisine Buffet Breakfast & Dinner',
        'Chef Signature Himachali Delicacies',
        'Panoramic Mountain Valley Glass Dining',
        'In-Room Private Dining Service',
      ],
      timing: '7:30 AM – 10:30 PM',
    },
    experiences: [
      {
        title: 'Valley Views from Private Cedar Balconies',
        description: 'Sip fresh morning mountain tea while soaking in the majestic views of pine valleys and snowy peaks.',
        image: '/hotelphotos/fyraashapurisnowinn/IMG_2819.PNG',
        tag: 'Scenic Moments',
      },
      {
        title: 'Grand Reception & Guest Lounge',
        description: 'Experience warm Himachali welcomes and personalized concierge service in our luxurious reception hall.',
        image: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.55 PM (2).jpeg',
        tag: 'Warm Hospitality',
      },
      {
        title: 'Panoramic Valley Dining Experience',
        description: 'Dine with sweeping glass views overlooking the deodar-covered Himalayan mountains in Prini.',
        image: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.54 PM (1).jpeg',
        tag: 'Fine Dining',
      },
    ],
    amenitiesList: [
      '15 Well-Appointed Rooms',
      'Hot & Cold Air Conditioning',
      'Balcony Rooms with Mountain Views',
      'Multi-Cuisine Restaurant & Buffet',
      'Grand Reception Lounge',
      'Secure Private Parking',
      'Family Suite (750 sq.ft)',
      '24-Hour Front Desk',
      'High-Speed Wi-Fi',
      '24/7 Hot & Cold Water',
      'Power Backup 24/7',
      'Daily Housekeeping',
      'Room Service Available',
    ],
    galleryImages: [
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2825.PNG', title: 'Resort Facade & Vataliya Entrance', category: 'Property' },
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2827.PNG', title: 'Illuminated Balconies at Dusk', category: 'Property' },
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2820.PNG', title: 'Super Deluxe Snow Peak View', category: 'Rooms' },
      { url: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.54 PM (2).jpeg', title: 'Master Corner Panoramic Suite', category: 'Rooms' },
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2821.PNG', title: 'Luxury King Bed & Ambient Lighting', category: 'Rooms' },
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2818.PNG', title: 'Deluxe Room Wooden Interior', category: 'Rooms' },
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2817.PNG', title: 'Premium Mountain View Bedroom', category: 'Rooms' },
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2819.PNG', title: 'Private Cedar Wood Balcony', category: 'Views' },
      { url: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.55 PM (2).jpeg', title: 'Grand Reception & Guest Lounge', category: 'Property' },
      { url: '/hotelphotos/fyraashapurisnowinn/IMG_2826.PNG', title: 'Fine Dining Restaurant & Buffet', category: 'Dining' },
      { url: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.54 PM (1).jpeg', title: 'Valley View Restaurant Seating', category: 'Dining' },
      { url: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.54 PM.jpeg', title: 'Full Mountain Resort Facade', category: 'Property' },
      { url: '/hotelphotos/fyraashapurisnowinn/WhatsApp Image 2026-09-09 at 6.07.55 PM.jpeg', title: 'Alpine Architecture & Mountain Backdrop', category: 'Property' },
    ],
    attractions: [
      { name: 'Mall Road Manali', distance: '3.8 km', description: 'Vibrant town center for shopping, cafes, and handicrafts.' },
      { name: 'Hadimba Devi Temple', distance: '5.5 km', description: 'Historic wooden temple nestled in towering cedar forests.' },
      { name: 'Solang Valley', distance: '16 km', description: 'Premier adventure hub for paragliding, skiing, and snow sports.' },
      { name: 'Atal Tunnel & Sissu', distance: '32 km', description: 'Marvel of engineering opening into magical snow landscapes of Lahaul.' },
      { name: 'Naggar Castle', distance: '15 km', description: 'Ancient heritage castle with breathtaking Beas valley panoramas.' },
      { name: 'Vashisht Hot Springs', distance: '6.5 km', description: 'Natural sulfur thermal baths and ancient stone shrines.' },
    ],
  },
};

export const DESTINATIONS_DATA: DestinationLocation[] = [
  {
    id: 'shimla',
    slug: 'shimla',
    name: 'Shimla',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    tagline: 'Queen of the Hills · Pine Forests & Regal Charm',
    description:
      'Perched amidst rolling pine hills and cedar-draped ridges, Shimla offers colonial architecture, crisp mountain air, and panoramic Himalayan vistas. Home to our 3-star sanctuary, Manaw Valley Resort.',
    heroImage: 'https://manawvalleyresort.com/gallery/1.jpg',
    elevation: '2,276m',
    bestTime: 'Year-Round (Snow in Dec–Feb, Summer in Mar–Jun)',
    hotels: [HOTELS_DATA['manaw-valley-resort']],
  },
  {
    id: 'manali',
    slug: 'manali',
    name: 'Manali',
    city: 'Manali',
    state: 'Himachal Pradesh',
    tagline: 'Valley of the Gods · Snow Peaks & Apple Orchards',
    description:
      'A breathtaking mountain paradise surrounded by snow-capped Pir Panjal peaks, meandering rivers, and lush apple orchards. Home to our partner sanctuaries Hotel Indrasan and Fyra Ashapuri Snow Inn in Prini.',
    heroImage: 'https://www.hotelindrasanmanali.com/images/indrasan.jpg',
    elevation: '2,050m',
    bestTime: 'Year-Round (Adventure & Snow in Winter, Lush Greenery in Spring)',
    hotels: [
      HOTELS_DATA['hotel-indrasan-manali'],
      HOTELS_DATA['the-fyra-ashapuri-snow-inn'],
    ],
  },
];

export const VATALIYA_CORPORATE_INFO = {
  name: 'Vataliya Hotels & Resorts',
  tagline: 'Where Luxury Meets Excellence',
  phone: '+91 9106662535',
  phoneDisplay: '+91 91066 62535',
  bookingEmail: 'booking@vataliyas.com',
  partnershipsEmail: 'jay@vataliyas.com',
  instagramUrl: 'https://www.instagram.com/vataliyahotels/',
  whatsappNumber: '919106662535',
  address: '402/03, Prince Cube Beside Gangotri exotica Laxmipura Char Rasta Nayaran Garden, 30, Gotri - Laxmipura Rd, Vadodara, Gujarat 390023',
  addressShort: 'Vadodara, Gujarat 390023',
};
