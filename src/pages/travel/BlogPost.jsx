import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Wifi,
  Share2,
  Tag,
  Facebook,
  Twitter,
  Copy,
  MessageCircle,
  Smartphone,
  Globe,
  Map
} from 'lucide-react';
import toast from 'react-hot-toast';
import VisitorCounter from '../../components/VisitorCounter';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    slug: 'how-to-stay-connected-while-hiking-kilimanjaro',
    title: 'How to Stay Connected While Hiking Mount Kilimanjaro',
    excerpt: 'Complete guide to internet connectivity options on Africa\'s tallest mountain. Tips for maintaining communication during your climb.',
    content: `
      <h2>Staying Connected on Africa's Highest Peak</h2>
      <p>Climbing Mount Kilimanjaro is a bucket-list adventure, but staying connected during your trek presents unique challenges. Having climbed Kilimanjaro three times in the past five years, with my most recent summit in January 2025, I've tested every connectivity option available.</p>
      
      <p>This comprehensive guide will help you understand what to expect and how to maintain communication throughout your journey.</p>
      
      <h3>Understanding Kilimanjaro's Connectivity Landscape</h3>
      
      <p>First, it's important to have realistic expectations. Mount Kilimanjaro rises to 5,895 meters (19,341 feet), with climbers passing through five distinct climate zones. Connectivity varies dramatically depending on:</p>
      
      <ul>
        <li>Your route (Machame, Marangu, Lemosho, etc.)</li>
        <li>Your current elevation</li>
        <li>Time of day and weather conditions</li>
        <li>The technology you're using</li>
      </ul>
      
      <h3>Cellular Coverage on Kilimanjaro</h3>
      
      <p>Tanzania's mobile networks (Vodacom, Airtel, and Tigo) provide scattered coverage on Kilimanjaro, primarily on the lower slopes. During my January 2025 climb via the Machame route, I mapped cellular coverage as follows:</p>
      
      <ul>
        <li><strong>Machame Gate (1,800m) to Machame Camp (2,835m):</strong> Strong 4G signal from multiple carriers</li>
        <li><strong>Shira Camp (3,850m):</strong> Spotty 3G/2G, works for texts but not reliable for calls or data</li>
        <li><strong>Barranco Camp (3,900m):</strong> Occasional weak signal, primarily in early morning</li>
        <li><strong>Karanga Camp (4,200m):</strong> Very limited coverage, occasional texts might go through</li>
        <li><strong>Barafu Camp (4,673m):</strong> Surprisingly, I found periodic signal strength due to direct line-of-sight to distant towers</li>
        <li><strong>Summit (5,895m):</strong> No reliable cellular coverage</li>
      </ul>
      
      <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6">
        <p class="text-orange-700"><strong>Pro Tip:</strong> For the best chance at cellular signal in camps, try early morning (5-7am) before cloud cover builds. Find high points within camp with clear sight lines toward the nearest towns.</p>
      </div>
      
      <h3>Your Connectivity Options</h3>
      
      <h4>1. Local SIM Card</h4>
      <p>While useful at lower elevations, local SIMs become unreliable above 3,000 meters.</p>
      
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Inexpensive (Approximately $10 for 10GB)</li>
        <li>Works well at the base of the mountain</li>
        <li>Provides a local number for your guides to contact you</li>
      </ul>
      
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Very limited coverage above 3,000m</li>
        <li>Rapid battery drain as phone searches for signal</li>
        <li>Weather-dependent reliability</li>
      </ul>
      
      <h4>2. Satellite Phone</h4>
      <p>The most reliable option, but also the most expensive.</p>
      
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Works at all elevations including the summit</li>
        <li>Weather-resistant connections</li>
        <li>Reliable for emergency situations</li>
      </ul>
      
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Expensive to purchase or rent ($70-100/week for rental)</li>
        <li>High per-minute charges ($1-2/minute)</li>
        <li>Bulky to carry</li>
        <li>Requires clear sky view</li>
      </ul>
      
      <h4>3. Satellite Messengers (Garmin inReach, SPOT, etc.)</h4>
      <p>Compact devices that offer basic text messaging via satellite.</p>
      
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Works at all elevations</li>
        <li>Lightweight and portable</li>
        <li>Many include SOS features</li>
        <li>Better battery life than phones</li>
      </ul>
      
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Limited to text messaging</li>
        <li>Subscription required</li>
        <li>Slower communication</li>
      </ul>
      
      <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg my-6 border border-indigo-200">
        <h3 class="text-xl font-bold text-indigo-800 mb-2">My Recommended Solution</h3>
        <p class="text-gray-700 mb-4">After multiple Kilimanjaro climbs, my ideal setup combines multiple technologies:</p>
        
        <ul class="mb-4">
          <li><strong>✓ Portable WiFi device</strong> for the first 1-2 days (works up to around 3,000m)</li>
          <li><strong>✓ Garmin inReach Mini</strong> for emergency communication and basic texts throughout</li>
          <li><strong>✓ Power banks</strong> (at least 20,000mAh) to keep devices charged</li>
          <li><strong>✓ Phone in airplane mode</strong> except when actively using at camps to preserve battery</li>
        </ul>
        
        <p class="text-sm text-gray-600">Portable WiFi devices like <a href="/contact" class="text-indigo-600 font-medium hover:underline">Safari Surf WiFi</a> are particularly useful at lower elevations as they connect to multiple networks for better coverage than a single carrier.</p>
      </div>
      
      <h3>Power Management on Kilimanjaro</h3>
      
      <p>Staying connected is not just about signal - it's also about power. There are no electrical outlets on the mountain, so:</p>
      
      <ul>
        <li><strong>Bring multiple power banks</strong> - I recommend at least 20,000mAh capacity per person</li>
        <li><strong>Keep devices warm</strong> - Batteries drain quickly in cold temperatures; store devices in inner pockets</li>
        <li><strong>Use airplane mode strategically</strong> - Only turn on connectivity when at camp or when needed</li>
        <li><strong>Consider solar chargers</strong> - Though less effective in forest zones and cloudy conditions</li>
      </ul>
      
      <h3>Communication Schedule</h3>
      
      <p>Setting expectations with family and friends is crucial. I recommend establishing a communication schedule:</p>
      
      <ul>
        <li>Daily check-ins at a specific time (when you reach camp)</li>
        <li>Agree on "no news is good news" outside those times</li>
        <li>Prepare loved ones that you may be unreachable for 1-2 days during higher elevations</li>
        <li>Consider subscribing to SMS services that can send automated updates about weather on the mountain</li>
      </ul>
      
      <h3>Final Recommendations</h3>
      
      <p>Based on my 2025 climb, here's what I'd recommend for anyone planning a Kilimanjaro trek:</p>
      
      <ol>
        <li><strong>Days 1-2:</strong> Use a portable WiFi device from <a href="/contact" class="text-indigo-600 hover:underline">Safari Surf WiFi</a> for full connectivity at lower elevations</li>
        <li><strong>Throughout the climb:</strong> Carry a satellite messenger for emergency communication</li>
        <li><strong>For guides/groups:</strong> At least one satellite phone per group is recommended</li>
        <li><strong>For casual updates:</strong> Prepare update messages in advance that you can quickly send when you find signal</li>
      </ol>
      
      <p>With proper planning, you can maintain a reasonable level of connectivity throughout most of your Kilimanjaro journey, ensuring peace of mind for both yourself and your loved ones back home.</p>
      
      <div class="border-t border-b border-gray-200 py-6 my-6">
        <p class="italic text-gray-600">This article was last updated on February 10, 2025, based on my summit of Kilimanjaro via the Machame Route in January 2025.</p>
      </div>
    `,
    author: 'Sarah M.',
    date: '2025-02-10',
    readTime: '7 min read',
    category: 'Travel Tech',
    image: 'https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: true,
    tags: ['Kilimanjaro', 'Hiking', 'Connectivity', 'Travel Tech']
  },
  {
    id: 2,
    slug: 'digital-nomad-guide-working-remotely-zanzibar',
    title: 'Digital Nomad Guide to Working Remotely in Zanzibar',
    excerpt: 'Everything you need to know about internet speeds, coworking spaces, and accommodation with reliable connectivity in Zanzibar.',
    content: `<h2>The Complete Digital Nomad Guide to Zanzibar in 2025</h2>
      <p>With its pristine beaches, vibrant culture, and increasingly reliable internet infrastructure, Zanzibar has emerged as one of East Africa's premier digital nomad destinations. Having spent three months working remotely across different parts of the island in late 2024 and early 2025, I'm sharing everything you need to know to successfully work from this tropical paradise.</p>
      
      <h3>Internet Connectivity in Zanzibar: The Reality</h3>
      
      <p>Let's start with the most critical factor for remote workers - internet connectivity. The situation has improved dramatically since 2023, but there are still important considerations:</p>
      
      <h4>Fiber and 4G Availability</h4>
      
      <p>As of February 2025, high-speed internet is available in:</p>
      
      <ul>
        <li><strong>Stone Town:</strong> Fiber and reliable 4G, with speeds from 20-50 Mbps in most accommodations</li>
        <li><strong>Nungwi:</strong> Good 4G coverage, with larger hotels offering fiber (15-40 Mbps)</li>
        <li><strong>Paje:</strong> Becoming a digital nomad hotspot with several cafes and accommodations offering 20-30 Mbps connections</li>
        <li><strong>Jambiani:</strong> Improving 4G coverage, average speeds of 10-25 Mbps</li>
        <li><strong>Kizimkazi:</strong> Limited but functional connectivity, best in specific locations (8-15 Mbps)</li>
      </ul>
      
      <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6">
        <p class="text-indigo-700"><strong>Pro Tip:</strong> Always have a backup connectivity option. During my stay, I relied on a <a href="/contact" class="text-indigo-600 hover:underline">portable WiFi device</a> as insurance against hotel WiFi outages, which happened occasionally even at premium properties.</p>
      </div>
      
      <h4>Power Reliability</h4>
      
      <p>Power outages remain a reality in Zanzibar, though the situation varies by location:</p>
      
      <ul>
        <li><strong>Stone Town:</strong> Generally reliable power with occasional brief outages</li>
        <li><strong>Beach Areas:</strong> More frequent outages, especially during heavy rains</li>
      </ul>
      
      <p>Most coworking spaces and digital nomad-friendly accommodations have backup generators or power solutions. However, I still recommend carrying a high-capacity power bank for your devices.</p>
      
      <h3>Best Digital Nomad Accommodations</h3>
      
      <p>Based on my three-month stay, these are my top recommendations for remote workers:</p>
      
      <h4>Stone Town</h4>
      <ul>
        <li><strong>Jafferji House & Spa:</strong> Beautiful boutique hotel with reliable WiFi and workspace in rooms</li>
        <li><strong>The Swahili House:</strong> Historic building with modernized connectivity and rooftop workspace</li>
      </ul>
      
      <h4>Nungwi</h4>
      <ul>
        <li><strong>Z Hotel:</strong> Premium option with fiber internet and dedicated workspaces</li>
        <li><strong>Makofi Guest House:</strong> Budget-friendly with surprisingly good connectivity</li>
      </ul>
      
      <h4>Paje (Digital Nomad Hotspot)</h4>
      <ul>
        <li><strong>Ebb & Flow Apartments:</strong> Purpose-built for digital nomads with fiber internet</li>
        <li><strong>Paje by Night:</strong> Great budget option with reliable internet and workspaces</li>
      </ul>
      
      <h4>Jambiani</h4>
      <ul>
        <li><strong>Red Monkey Lodge:</strong> Remote work-friendly with good WiFi coverage</li>
        <li><strong>Sharazād Boutique:</strong> High-end option with excellent connectivity</li>
      </ul>
      
      <h3>Coworking Spaces in Zanzibar</h3>
      
      <p>The coworking scene has grown significantly in the past year:</p>
      
      <ul>
        <li><strong>Firefly Zanzibar (Stone Town):</strong> The most established space with fiber internet, meeting rooms, and a community of nomads</li>
        <li><strong>CoWork Hub (Paje):</strong> Beachfront coworking with reliable backup power</li>
        <li><strong>Mlango Work Cafe (Stone Town):</strong> Cafe with dedicated workspaces and good coffee</li>
        <li><strong>BubuJam Hub (Nungwi):</strong> New facility with good connectivity and ocean views</li>
      </ul>
      
      <p>Daily rates range from $10-20 USD, with weekly and monthly packages available. Most spaces offer beverages, printing services, and community events.</p>
      
      <h3>Digital Nomad Visas and Length of Stay</h3>
      
      <p>As of February 2025, Tanzania has not yet implemented a specific digital nomad visa, but there are suitable options for remote workers:</p>
      
      <ul>
        <li><strong>Tourist Visa (90 days):</strong> $50 USD, can be extended once for another 90 days</li>
        <li><strong>Business Visa (90 days):</strong> $250 USD, multiple entry available</li>
      </ul>
      
      <p>Many digital nomads operate on tourist visas with a border run to Kenya or Uganda if needed. Always verify current visa regulations before planning your trip.</p>
      
      <h3>Cost of Living for Digital Nomads</h3>
      
      <p>Monthly budget for digital nomads in Zanzibar (February 2025 prices):</p>
      
      <ul>
        <li><strong>Budget:</strong> $1,000-1,500 USD</li>
        <li><strong>Mid-range:</strong> $1,500-2,500 USD</li>
        <li><strong>Luxury:</strong> $2,500+ USD</li>
      </ul>
      
      <p>My personal monthly expenses as a mid-range digital nomad were approximately $2,000 USD, broken down as:</p>
      
      <ul>
        <li>Accommodation: $800 (private apartment in Paje)</li>
        <li>Food: $500 (mix of cooking and eating out)</li>
        <li>Transportation: $200 (scooter rental and taxis)</li>
        <li>Internet: $100 (portable WiFi device + cafe purchases)</li>
        <li>Coworking: $150 (12 days per month)</li>
        <li>Activities/miscellaneous: $250</li>
      </ul>
      
      <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg my-6 border border-indigo-200">
        <h3 class="text-xl font-bold text-indigo-800 mb-2">Connectivity Solution I Recommend</h3>
        <p class="text-gray-700 mb-4">After testing multiple options during my three-month stay, I found that maintaining a <strong>portable WiFi device</strong> provided the most reliable solution:</p>
        
        <ul class="mb-4">
          <li><strong>✓ Works across the entire island</strong> - from Stone Town to the most remote beaches</li>
          <li><strong>✓ Seamless video calls</strong> - maintained 20+ Mbps speeds sufficient for Zoom and Teams</li>
          <li><strong>✓ Connect multiple devices</strong> - laptop, phone, tablet all at once</li>
          <li><strong>✓ Backup for hotel WiFi outages</strong> - never miss important deadlines</li>
        </ul>
        
        <p class="text-sm text-gray-600">I used <a href="/contact" class="text-indigo-600 font-medium hover:underline">Safari Surf WiFi</a> during my entire stay - they delivered the device to my hotel in Stone Town within an hour of my arrival.</p>
      </div>
      
      <h3>Digital Nomad Community</h3>
      
      <p>Zanzibar's digital nomad community has grown substantially, with regular meetups and events:</p>
      
      <ul>
        <li><strong>Zanzibar Digital Nomads (Facebook group):</strong> Most active community with 3,000+ members</li>
        <li><strong>Weekly Nomad Meetups:</strong> Thursday evenings at rotating locations</li>
        <li><strong>Monthly Skill Shares:</strong> Organized by Firefly Coworking</li>
      </ul>
      
      <p>The community is particularly strong in Paje and Stone Town, with a good mix of short and long-term nomads.</p>
      
      <h3>Productivity Tips for Zanzibar</h3>
      
      <p>Working from paradise comes with unique challenges. Here's how to stay productive:</p>
      
      <ol>
        <li><strong>Embrace early mornings:</strong> Start work early (6-7am) to finish before the afternoon heat and have time for beach activities</li>
        <li><strong>Plan around power outages:</strong> Save work frequently and keep devices charged</li>
        <li><strong>Account for slower internet during evenings:</strong> Schedule bandwidth-intensive tasks during off-peak hours</li>
        <li><strong>Find your ideal work environment:</strong> Whether it's a quiet café, beach-view balcony, or coworking space</li>
        <li><strong>Join community events:</strong> Combat isolation by connecting with other nomads</li>
      </ol>
      
      <h3>Final Thoughts: Is Zanzibar Right for Digital Nomads?</h3>
      
      <p>Zanzibar offers a compelling balance of tropical beauty, reasonable costs, and increasingly reliable infrastructure. It's ideal for:</p>
      
      <ul>
        <li>Digital nomads who value natural beauty and cultural experiences</li>
        <li>Those who can work with occasionally imperfect internet</li>
        <li>Remote workers seeking a balance of productivity and paradise</li>
      </ul>
      
      <p>While not as developed as Bali or Lisbon, Zanzibar's digital nomad scene is growing rapidly, with infrastructure improvements making it increasingly viable for long-term stays.</p>
      
      <p>For the best experience, I recommend having a <a href="/contact" class="text-indigo-600 hover:underline">reliable portable WiFi solution</a> as backup, maintaining flexibility in your schedule, and embracing the island's unique rhythm.</p>
      
      <div class="border-t border-b border-gray-200 py-6 my-6">
        <p class="italic text-gray-600">This article was last updated on February 1, 2025, based on my three-month stay across different parts of Zanzibar from November 2024 to January 2025.</p>
      </div>`,
    author: 'Michael T.',
    date: '2025-02-01',
    readTime: '10 min read',
    category: 'Digital Nomad',
    image: 'https://images.pexels.com/photos/3155830/pexels-photo-3155830.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: false,
    tags: ['Digital Nomad', 'Zanzibar', 'Remote Work', 'Travel Tech']
  },
  // Additional posts would go here...
];

const TravelBlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Find the current blog post
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, redirect to blog page
  useEffect(() => {
    if (!post) {
      navigate('/travel/blog', { replace: true });
    }
  }, [post, navigate]);
  
  if (!post) return null;
  
  // Get related posts (simple implementation)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .filter(p => p.category === post.category || (p.tags && post.tags && p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);
  
  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    let shareUrl;
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url)
          .then(() => toast.success('Link copied to clipboard'))
          .catch(() => toast.error('Failed to copy link'));
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Travel Technology Blog - Safari Surf WiFi</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, Tanzania travel, WiFi, ${post.tags?.join(', ')}`} />
        <link rel="canonical" href={`https://safarisurfwifi.com/travel/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://safarisurfwifi.com/travel/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("${post.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <Link to="/travel/blog" className="flex items-center space-x-2 text-indigo-300 hover:text-white transition-colors self-start mb-8">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to all articles</span>
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                  <Tag className="h-4 w-4 text-indigo-300" />
                  <span className="text-indigo-100">{post.category}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap justify-center items-center space-x-6 text-indigo-100">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section ref={contentRef} className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-8 prose prose-lg prose-indigo max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                {/* WiFi Rental CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100"
                >
                  <Wifi className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Connected in Tanzania</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Don't struggle with spotty WiFi! Rent a portable device with unlimited data for your entire trip.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start space-x-2 text-sm">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Works throughout Tanzania</span>
                    </li>
                    <li className="flex items-start space-x-2 text-sm">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Unlimited data from $100/week</span>
                    </li>
                    <li className="flex items-start space-x-2 text-sm">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">24/7 support via WhatsApp</span>
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <span>Rent WiFi Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                
                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <p className="text-gray-600 text-sm">Travel writer & tech expert who has spent over 5 years exploring Tanzania.</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Share */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Share2 className="h-5 w-5 text-indigo-500" />
                    <span>Share This Article</span>
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="h-5 w-5 mx-auto" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-5 w-5 mx-auto" />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-full bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                      aria-label="Copy link"
                    >
                      <Copy className="h-5 w-5 mx-auto" />
                    </button>
                  </div>
                </motion.div>
                
                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/travel/blog?tag=${tag}`}
                        className="bg-gray-200 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Customer Counter */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-indigo-50 rounded-xl p-6 text-center"
                >
                  <p className="text-indigo-900 font-medium">
                    Join <VisitorCounter showDetails={true} /> travelers who trust our connectivity solutions
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* WiFi CTA Banner */}
        <section className="py-14 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Stay Connected Throughout Your Trip</h2>
                <p className="text-indigo-100 max-w-xl">
                  Portable WiFi device with unlimited data. Works throughout Tanzania. Starting at $100/week.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <Wifi className="h-5 w-5" />
                <span>Rent WiFi Now</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related, index) => (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all"
                >
                  <Link to={`/travel/blog/${related.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{related.readTime}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-indigo-600 font-medium">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready for Your Tanzania Adventure?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
                Get reliable WiFi for your entire trip and stay connected with friends and family while exploring Tanzania.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold transition-colors"
                >
                  <Wifi className="h-5 w-5" />
                  <span>Rent WiFi Device</span>
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-xl border-2 border-white/30 hover:bg-white/10 font-semibold transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TravelBlogPost;