import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Bot, 
  Zap, 
  MessageSquare, 
  Mail, 
  Phone, 
  Users, 
  Star,
  ChevronRight,
  Menu,
  X,
  Repeat,
  HeadphonesIcon,
  Code,
  Database,
  Cpu,
  Network,
  Globe,
  Palette,
  Smartphone,
  Play,
  Eye,
  Quote,
  ChevronLeft,
  Send
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentReview, setCurrentReview] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Your Calendly URL - Replace this with your actual Calendly link
  const calendlyUrl = "https://calendly.com/jakebulzai/initial-strategy-meeting";

  // Reviews data
  const reviews = [
    {
      name: "Sarah Chen",
      company: "TechStart Solutions",
      role: "CEO",
      rating: 5,
      text: "Bulz-AI completely transformed our lead generation process. What used to take our team 20 hours a week now happens automatically. We've seen a 300% increase in qualified leads!",
      color: "yellow",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      rating: 5,
      text: "The email automation system they built for us is incredible. Our response rates doubled, and we're saving 15+ hours per week on manual outreach. ROI was immediate.",
      color: "green",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Growth Ventures",
      role: "Operations Manager",
      rating: 5,
      text: "Their AI chat assistant handles 80% of our customer inquiries automatically. Customer satisfaction is up, and our team can focus on high-value tasks. Game changer!",
      color: "blue",
      avatar: "EW"
    },
    {
      name: "David Kim",
      company: "E-commerce Plus",
      role: "Founder",
      rating: 5,
      text: "The appointment setting bot they created books 40+ qualified calls per week without any manual intervention. It's like having a full-time sales assistant that never sleeps.",
      color: "purple",
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Consulting Experts",
      role: "Partner",
      rating: 5,
      text: "We went from spending hours on social media management to having it completely automated. Engagement is up 250% and we're reaching prospects we never could before.",
      color: "pink",
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "SaaS Innovators",
      role: "CTO",
      rating: 5,
      text: "The custom website they built with integrated AI features is phenomenal. Our conversion rate increased by 180% and the site practically runs itself. Exceptional work!",
      color: "orange",
      avatar: "JW"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Navigation functions
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  // Email form functions
  const handleEmailFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Contact from ${emailForm.name} - ${emailForm.company}`);
      const body = encodeURIComponent(
        `Name: ${emailForm.name}\n` +
        `Email: ${emailForm.email}\n` +
        `Company: ${emailForm.company}\n\n` +
        `Message:\n${emailForm.message}`
      );
      
      const mailtoLink = `mailto:jakebulzai@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setEmailForm({ name: '', email: '', company: '', message: '' });
      
      // Hide form after successful submission
      setTimeout(() => {
        setShowEmailForm(false);
        setSubmitStatus('');
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'automation', 'demos', 'support', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/public/8be5afa8-649d-47b6-8947-36ad6b44a5bd.png" 
                alt="Bulz-AI Logo" 
                className="w-10 h-10 filter drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(0 0 10px #00bfff)'
                }}
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Bulz-AI
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'automation', label: 'Services' },
                { id: 'demos', label: 'Demos' },
                { id: 'support', label: 'Process' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 relative ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/20">
              <div className="flex flex-col space-y-4 mt-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'automation', label: 'Services' },
                  { id: 'demos', label: 'Demos' },
                  { id: 'support', label: 'Process' },
                  { id: 'reviews', label: 'Reviews' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                      activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 191, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 191, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Circuit-like animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Tech Elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Animated dots */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
          
          {/* Circuit lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00bfff" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#ff0040" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#0080ff" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M 100 200 L 300 200 L 300 400 L 500 400" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
            <path d="M 600 300 L 800 300 L 800 500 L 900 500" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500"/>
            <path d="M 200 600 L 400 600 L 400 800" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-1000"/>
            
            {/* Circuit nodes */}
            <circle cx="300" cy="200" r="4" fill="#00bfff" className="animate-pulse"/>
            <circle cx="500" cy="400" r="4" fill="#ff0040" className="animate-pulse delay-300"/>
            <circle cx="800" cy="300" r="4" fill="#0080ff" className="animate-pulse delay-600"/>
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Large Logo Above Header */}
          <div className="mb-12">
            <img 
              src="/public/8be5afa8-649d-47b6-8947-36ad6b44a5bd.png" 
              alt="Bulz-AI Logo" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 filter drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px #00bfff) drop-shadow(0 0 60px #00bfff) drop-shadow(0 0 90px rgba(0, 191, 255, 0.3))'
              }}
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              BULZ-AI
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl font-light">
              INTELLIGENT AUTOMATION
            </span>
            <br />
            <span className="text-gray-300 text-3xl md:text-4xl font-light">
              FOR MODERN BUSINESSES
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build everything from AI assistants to full-blown websites — all powered by intelligent automation. 
            <span className="text-cyan-400 font-semibold"> Less manual work. More focus.</span>
          </p>

          {/* Motto/Slogan */}
          <div className="mb-12">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              DON'T WAIT, AUTOMATE
            </p>
          </div>
          
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 border border-cyan-400/50 no-underline"
          >
            <span className="relative z-10">BOOK AN INITIAL WORKFLOW CALL</span>
            <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
          </a>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="automation" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Background tech pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #00bfff 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #ff0040 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                WHAT WE OFFER
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with intelligent automation solutions designed to streamline your most time-consuming tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Automation Block */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 mr-6">
                    <Repeat className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">AUTOMATION</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, text: 'Email Outreach Agents', color: 'cyan' },
                    { icon: Phone, text: 'Phone Call Assistants', color: 'blue' },
                    { icon: Users, text: 'Social Media Engagement Bots', color: 'cyan' },
                    { icon: Star, text: 'Automated Lead Research', color: 'blue' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className={`bg-gray-800 rounded-lg p-3 mr-6 group-hover/item:bg-${item.color}-500/20 transition-all duration-300 border border-${item.color}-500/30`}>
                        <item.icon className={`text-${item.color}-400`} size={24} />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors text-lg font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customer Support Block */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-4 mr-6">
                    <HeadphonesIcon className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">CUSTOMER SUPPORT</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: MessageSquare, text: 'AI Chat Assistants', color: 'red' },
                    { icon: Mail, text: 'Smart Email Sorters', color: 'pink' },
                    { icon: Bot, text: 'Appointment Setting Bots', color: 'red' },
                    { icon: Zap, text: '24/7 Response Automation', color: 'pink' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className={`bg-gray-800 rounded-lg p-3 mr-6 group-hover/item:bg-${item.color}-500/20 transition-all duration-300 border border-${item.color}-500/30`}>
                        <item.icon className={`text-${item.color}-400`} size={24} />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors text-lg font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Website Building Block */}
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-4 mr-6">
                    <Globe className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">WEBSITE BUILDING</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Code, text: 'AI-Powered Web Development', color: 'purple' },
                    { icon: Palette, text: 'Smart Design Generation', color: 'indigo' },
                    { icon: Smartphone, text: 'Responsive Mobile-First Sites', color: 'purple' },
                    { icon: Bot, text: 'Integrated AI Chat Features', color: 'indigo' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className={`bg-gray-800 rounded-lg p-3 mr-6 group-hover/item:bg-${item.color}-500/20 transition-all duration-300 border border-${item.color}-500/30`}>
                        <item.icon className={`text-${item.color}-400`} size={24} />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors text-lg font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                SEE IT IN ACTION
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of our AI automation solutions through short, real-world video demos.
            </p>
          </div>

          {/* Demo Button */}
          <div className="relative group inline-block">
            {/* Animated background rings */}
            <div className="absolute inset-0 -m-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <button className="relative group/btn bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-purple-500/50 border-2 border-purple-400/50 hover:border-pink-400/70 overflow-hidden">
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex items-center justify-center">
                <Eye className="mr-4 group-hover/btn:animate-bounce" size={28} />
                <span>CLICK TO SEE DEMOS</span>
                <Play className="ml-4 group-hover/btn:animate-bounce" size={28} />
              </div>
            </button>
          </div>

          <p className="text-gray-400 mt-8 text-lg">
            <span className="text-purple-400">Live examples</span> • 
            <span className="text-pink-400"> Real results</span> • 
            <span className="text-red-400"> Ready to deploy</span>
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="support" className="py-24 bg-black relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
                HOW IT WORKS
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Simple steps to transform your workflow with intelligent automation
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                number: '01',
                title: 'You share your workflow goals',
                description: 'Tell us about your current processes and what you want to automate. We listen and understand your unique needs.',
                icon: Code,
                color: 'cyan'
              },
              {
                number: '02',
                title: 'We build and deploy your AI agents',
                description: 'Our team creates custom automation solutions tailored to your business, integrating seamlessly with your existing tools.',
                icon: Cpu,
                color: 'blue'
              },
              {
                number: '03',
                title: 'You sit back and let automation handle the rest',
                description: 'Watch as your AI agents work around the clock, handling tasks while you focus on what matters most to your business.',
                icon: Network,
                color: 'red'
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-8 group">
                <div className="flex-shrink-0 relative">
                  <div className={`absolute inset-0 bg-${step.color}-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative w-20 h-20 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform border-2 border-${step.color}-400/50`}>
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <div className="flex items-center mb-4">
                    <step.icon className={`text-${step.color}-400 mr-4`} size={32} />
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Carousel */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                CLIENT SUCCESS STORIES
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses like yours have transformed their operations with our AI automation solutions
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 z-20 bg-gray-800/80 hover:bg-gray-700/80 rounded-full p-4 transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-cyan-400/50"
            >
              <ChevronLeft className="text-cyan-400" size={24} />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 z-20 bg-gray-800/80 hover:bg-gray-700/80 rounded-full p-4 transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-cyan-400/50"
            >
              <ChevronRight className="text-cyan-400" size={24} />
            </button>

            {/* Review Card */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative group">
                      {/* Glowing background */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${review.color}-500/10 to-${review.color}-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                      
                      <div className={`relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-${review.color}-500/20 hover:border-${review.color}-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-${review.color}-500/10 text-center`}>
                        {/* Quote icon */}
                        <div className="flex justify-center mb-8">
                          <Quote className={`text-${review.color}-400 opacity-50`} size={48} />
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center space-x-1 mb-8">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className={`text-${review.color}-400 fill-current`} size={24} />
                          ))}
                        </div>

                        {/* Review text */}
                        <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                          "{review.text}"
                        </p>

                        {/* Author info */}
                        <div className="flex items-center justify-center">
                          <div className={`w-16 h-16 bg-gradient-to-br from-${review.color}-500 to-${review.color}-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6`}>
                            {review.avatar}
                          </div>
                          <div className="text-left">
                            <div className="text-white font-semibold text-xl">{review.name}</div>
                            <div className={`text-${review.color}-400 font-medium text-lg`}>{review.role}</div>
                            <div className="text-gray-400">{review.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-12">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? `bg-${reviews[currentReview].color}-400 scale-125` 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="text-2xl text-gray-300 mb-8">
              <span className="text-yellow-400 font-bold">Join many</span> businesses already automating with 
              <span className="text-orange-400 font-bold"> Bulz-AI</span>
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-10 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-yellow-500/30 border border-yellow-400/50"
            >
              <span className="relative z-10">START YOUR SUCCESS STORY</span>
              <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 via-transparent to-red-500/5 animate-pulse"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
              LET'S AUTOMATE
            </span>
            <br />
            <span className="text-white">
              YOUR BUSINESS
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            <span className="text-cyan-400 font-bold">Fast setup.</span> 
            <span className="text-blue-400 font-bold"> No code.</span> 
            <span className="text-red-400 font-bold"> Full support.</span>
          </p>
          
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-gradient-to-r from-cyan-500 via-blue-600 to-red-500 text-white px-12 py-6 rounded-xl text-2xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 border border-cyan-400/50 mb-8 no-underline"
          >
            <span className="relative z-10">BOOK AN INITIAL WORKFLOW CALL</span>
            <ChevronRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" size={28} />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-red-400 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity"></div>
          </a>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <span className="px-6 text-gray-400 text-lg font-medium">OR</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Email Contact Button */}
          <button
            onClick={() => setShowEmailForm(!showEmailForm)}
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-10 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/30 border border-purple-400/50 mb-8"
          >
            <span className="relative z-10 flex items-center justify-center">
              <Mail className="mr-3" size={24} />
              SEND US AN EMAIL
              <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity"></div>
          </button>

          {/* Email Form */}
          {showEmailForm && (
            <div className="max-w-2xl mx-auto mt-12 mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Get In Touch
                    </span>
                  </h3>
                  
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={emailForm.name}
                          onChange={handleEmailFormChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={emailForm.email}
                          onChange={handleEmailFormChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={emailForm.company}
                        onChange={handleEmailFormChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your automation needs *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={emailForm.message}
                        onChange={handleEmailFormChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Describe what processes you'd like to automate, your current challenges, or any specific questions you have..."
                      />
                    </div>

                    {/* Submit Status */}
                    {submitStatus === 'success' && (
                      <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 font-medium">
                          ✓ Email client opened! Your message is ready to send.
                        </p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 font-medium">
                          ✗ Something went wrong. Please try again or email us directly at jakebulzai@gmail.com
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/30 border border-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                              SENDING...
                            </>
                          ) : (
                            <>
                              <Send className="mr-3" size={20} />
                              SEND MESSAGE
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity"></div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setShowEmailForm(false)}
                        className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-xl text-lg font-medium transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-gray-400 text-xl font-light">
            <span className="text-cyan-400">Your workflow.</span> 
            <span className="text-blue-400"> Your tools.</span> 
            <span className="text-red-400"> Our AI.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="/public/8be5afa8-649d-47b6-8947-36ad6b44a5bd.png" 
                alt="Bulz-AI Logo" 
                className="w-10 h-10 filter drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(0 0 10px #00bfff)'
                }}
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Bulz-AI
              </div>
            </div>
            
            <div className="flex items-center">
              <a href="mailto:jakebulzai@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">
                jakebulzai@gmail.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Bulz-AI. All rights reserved. | Powered by Advanced AI Technology</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default App;