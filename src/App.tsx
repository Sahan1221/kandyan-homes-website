import { useState, useEffect } from 'react';

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Reviews', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a2332]/95 backdrop-blur-sm shadow-lg' : 'bg-[#1a2332]'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>Kandyan Homes</span>
          <span className="text-xs text-amber-500 tracking-[0.2em] uppercase">PVT LTD</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors text-sm tracking-wide"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a2332] border-t border-gray-700">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white px-6 py-3 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// Hero Section
function Hero() {
  const features = ['Quality Construction', 'Modern Designs', 'Trusted Professionals'];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/90 via-[#1a2332]/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1a2332]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600/30 mb-8">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white text-sm tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Rated 5.0 on Google Reviews
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl mb-6"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Building Your Dream Home<br />
          <span className="text-amber-400">with Precision and Trust</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg max-w-xl mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          From architectural vision to construction excellence, we craft premium homes that reflect your lifestyle and stand the test of time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-[#1a2332] px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            View Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Get a Free Consultation
          </a>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-[#1a2332]/60 backdrop-blur-sm border border-gray-600/30 px-6 py-3 rounded-lg"
            >
              <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Team' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Modern luxury home"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-amber-500 text-[#1a2332] p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>25+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="text-amber-500 font-semibold mb-4 tracking-widest uppercase text-sm">About Us</div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Crafting Homes with Passion & Precision
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              At Kandyan Homes, we believe every home tells a story. With over two decades of experience in residential construction, we've helped hundreds of families turn their dream homes into reality.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our commitment to quality craftsmanship, innovative design, and sustainable building practices sets us apart. From concept to completion, we work closely with you to ensure every detail exceeds your expectations.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#1a2332]" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.number}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Custom Home Building',
      description: 'Design and build your dream home from the ground up with our expert team guiding you through every step.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Renovations & Remodeling',
      description: 'Transform your existing space with modern upgrades, extensions, and thoughtful renovations.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Architectural Design',
      description: 'Our in-house architects create stunning, functional designs tailored to your lifestyle and preferences.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      title: 'Interior Design',
      description: 'Create beautiful, cohesive interiors that reflect your personality with our expert interior design services.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Smart Home Integration',
      description: 'Future-proof your home with cutting-edge smart home technology and automation systems.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainable Building',
      description: 'Eco-friendly construction practices and materials for a greener, more sustainable future.'
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-amber-500 font-semibold mb-4 tracking-widest uppercase text-sm">Our Services</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            From concept to completion, we provide comprehensive home building services tailored to your unique vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold text-[#1a2332] mb-4"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      title: 'Modern Villa Retreat',
      location: 'Kandy, Sri Lanka',
      category: 'Luxury Home'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      title: 'Contemporary Family Home',
      location: 'Colombo, Sri Lanka',
      category: 'Family Residence'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      title: 'Hillside Mansion',
      location: 'Nuwara Eliya, Sri Lanka',
      category: 'Luxury Estate'
    },
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
      title: 'Minimalist Urban House',
      location: 'Galle, Sri Lanka',
      category: 'Modern Home'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      title: 'Tropical Paradise Villa',
      location: 'Bentota, Sri Lanka',
      category: 'Beach House'
    },
    {
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop',
      title: 'Executive Townhouse',
      location: 'Colombo 07, Sri Lanka',
      category: 'Townhouse'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-amber-500 font-semibold mb-4 tracking-widest uppercase text-sm">Our Portfolio</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Explore our collection of meticulously crafted homes that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-amber-400 text-sm font-medium">{project.category}</span>
                <h3
                  className="text-xl font-bold text-white mt-1"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm flex items-center gap-1 mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-6 h-6 text-[#1a2332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a2332] hover:bg-[#2a3342] text-white px-8 py-4 rounded-full font-semibold transition-all"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Reviews Section
function Reviews() {
  const reviews = [
    {
      name: 'Kumara Perera',
      role: 'Homeowner',
      initials: 'KP',
      text: 'Kandyan Homes transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. We now live in our dream home!',
      rating: 5
    },
    {
      name: 'Amali Fernando',
      role: 'Business Owner',
      initials: 'AF',
      text: 'Professional, transparent, and incredibly skilled. The team delivered our commercial-cum-residential project on time and within budget. Highly recommended!',
      rating: 5
    },
    {
      name: 'Ranjan De Silva',
      role: 'Property Developer',
      initials: 'RD',
      text: 'Working with Kandyan Homes has been a pleasure. Their innovative designs and sustainable building practices set them apart from other builders.',
      rating: 5
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-amber-500 font-semibold mb-4 tracking-widest uppercase text-sm">Testimonials</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Kandyan Homes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={`star-${review.name}-${i}`} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-[#1a2332] font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'Outfit, sans-serif' }}>{review.name}</div>
                  <div className="text-gray-400 text-sm">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#1a2332] bg-amber-500 flex items-center justify-center text-[#1a2332] font-bold text-xs">KP</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#1a2332] bg-amber-400 flex items-center justify-center text-[#1a2332] font-bold text-xs">AF</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#1a2332] bg-amber-500 flex items-center justify-center text-[#1a2332] font-bold text-xs">RD</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">5.0</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((starNum) => (
                    <svg key={`google-star-${starNum}`} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-gray-400 text-sm">Based on 100+ Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="text-amber-500 font-semibold mb-4 tracking-widest uppercase text-sm">Get In Touch</div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Let's Build Your Dream Home Together
            </h2>
            <p className="text-gray-600 mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to start your journey? Contact us today for a free consultation. Our team is here to answer your questions and bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2332]" style={{ fontFamily: 'Outfit, sans-serif' }}>Visit Us</h4>
                  <p className="text-gray-600">123 Peradeniya Road, Kandy, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2332]" style={{ fontFamily: 'Outfit, sans-serif' }}>Call Us</h4>
                  <p className="text-gray-600">+94 81 234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2332]" style={{ fontFamily: 'Outfit, sans-serif' }}>Email Us</h4>
                  <p className="text-gray-600">info@kandyanhomes.lk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2332]" style={{ fontFamily: 'Outfit, sans-serif' }}>Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
            <h3
              className="text-2xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Request a Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                    placeholder="+94 77 123 4567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-[#1a2332] py-4 rounded-lg font-semibold transition-all transform hover:scale-[1.02]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#1a2332] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Kandyan Homes</span>
              <span className="text-sm text-amber-500 tracking-[0.2em] uppercase">PVT LTD</span>
            </div>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Building dreams into reality with precision, quality, and trust since 1999.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <button
                  key={social}
                  type="button"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors group"
                >
                  {social === 'facebook' && (
                    <svg className="w-5 h-5 text-white group-hover:text-[#1a2332]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="w-5 h-5 text-white group-hover:text-[#1a2332]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg className="w-5 h-5 text-white group-hover:text-[#1a2332]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  )}
                  {social === 'youtube' && (
                    <svg className="w-5 h-5 text-white group-hover:text-[#1a2332]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Services</h4>
            <ul className="space-y-3">
              {['Custom Home Building', 'Renovations', 'Architectural Design', 'Interior Design', 'Smart Home', 'Sustainable Building'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on our latest projects and offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-[#1a2332]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            2024 Kandyan Homes Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-400 hover:text-amber-500 text-sm transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-gray-400 hover:text-amber-500 text-sm transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94812345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="font-medium">WhatsApp</span>
    </a>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
