"use client";

import React, { useState, useRef, useEffect } from "react";
import { Star, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { Heading } from "@/components/ui/heading";

// SVG Brand Icons
const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const EbayIcon = ({ className = "w-5 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 20" fill="currentColor">
    <path d="M7.7 13.5c-2.3 0-3.6-1.5-3.6-3.8 0-2.3 1.3-3.8 3.6-3.8 2.2 0 3.5 1.5 3.5 3.8 0 2.3-1.3 3.8-3.5 3.8zm0-9.8C3.5 3.7.8 6.4.8 10.3c0 3.8 2.7 6.6 6.9 6.6 3.1 0 5.4-1.5 6.4-3.8H11c-.7 1.3-1.9 2-3.3 2-2.3 0-3.6-1.5-3.6-3.6h10.4c.1-.5.1-.9.1-1.2 0-3.8-2.6-6.6-6.9-6.6z" fill="#E53238" />
    <path d="M19.1 16.6h3.1V3.9h-3.1v2c-.8-1.4-2.2-2.2-3.8-2.2-2.8 0-5.1 2.3-5.1 6.5s2.3 6.6 5.1 6.6c1.6 0 3-.8 3.8-2.2v2zm-3.8-2.2c-1.8 0-3.2-1.6-3.2-4.1 0-2.6 1.4-4.1 3.2-4.1 1.9 0 3.3 1.6 3.3 4.1 0 2.6-1.4 4.1-3.3 4.1z" fill="#0064D2" />
    <path d="M30.4 13.5c-2.3 0-3.6-1.5-3.6-3.8 0-2.3 1.3-3.8 3.6-3.8 2.2 0 3.5 1.5 3.5 3.8 0 2.3-1.3 3.8-3.5 3.8zm0-9.8c-4.2 0-6.9 2.7-6.9 6.6 0 3.8 2.7 6.6 6.9 6.6 3.1 0 5.4-1.5 6.4-3.8h-3.1c-.7 1.3-1.9 2-3.3 2-2.3 0-3.6-1.5-3.6-3.6h10.4c.1-.5.1-.9.1-1.2 0-3.8-2.6-6.6-6.9-6.6z" fill="#F5AF02" />
    <path d="M42.2 4.1l-3.3 8.3-3.3-8.3h-3.4l5.1 11.6-2.5 5.5h3.3l7.9-17.1z" fill="#86B817" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface TestimonialItem {
  name: string;
  badge: string;
  isLocalGuide?: boolean;
  service: string;
  date: string;
  rating: number;
  platform: "google" | "ebay" | "facebook";
  platformUrl: string;
  quote: string;
  savingsOrSpeed?: string;
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=kg+auto+Electronics&rlz=1C1GCEA_enPK1188PK1188&oq=kg+auto+Electronics#lrd=0x4870bd003aefa28b:0xa3aa99b985d9c3b5,1";
const EBAY_PROFILE_URL =
  "https://www.ebay.co.uk/fdbk/feedback_profile/kgautoelectronics?user_context=BUYER";
const FACEBOOK_PROFILE_URL =
  "https://www.facebook.com/p/KG-Auto-Electronics-Ltd-100083765344316/";

const realTestimonials: TestimonialItem[] = [
  {
    name: "Kevin Fryer",
    badge: "8 reviews • 4 photos",
    isLocalGuide: false,
    service: "VW Tiguan Clock Spring",
    date: "7 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Fantastic service, really friendly chap, replaced the clock spring on my Daughter's 2015 VW Tiguan in about 20 mins. Can't recommend highly enough! Fast, friendly and a great price!",
    savingsOrSpeed: "Fixed in 20 mins",
  },
  {
    name: "Lewis Baker",
    badge: "8 reviews • Verified Repair",
    isLocalGuide: false,
    service: "Clock Spring Repair",
    date: "1 month ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Brilliant friendly fast and amazing value for money! I had been quoted up to £750 to replace the clock spring in my car by 2 garages, but KG Auto repaired it for a fraction of the price.",
    savingsOrSpeed: "Saved vs £750 quote",
  },
  {
    name: "Veeral Vadgama",
    badge: "4 reviews • Postal Service",
    isLocalGuide: false,
    service: "Mercedes 722.9 Conductor Plate",
    date: "1 month ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Sent my Mercedes 722.9 conductor plate to them from London. Needed 2 new sensors. Excellent communication and price. Turn around 1 day. Car works perfectly now. Saved me a lot of money.",
    savingsOrSpeed: "1-Day Postal Turnaround",
  },
  {
    name: "George Parkinson",
    badge: "Local Guide • 40 reviews",
    isLocalGuide: true,
    service: "BMW Clock Spring",
    date: "6 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "KG in Oldham were an excellent company to use. Within the hour they replaced my clock spring on my BMW and didn't charge the earth. Very impressed and will certainly spread the word.",
    savingsOrSpeed: "Completed Within 1 Hour",
  },
  {
    name: "AK Khan",
    badge: "3 reviews • Dealership Alternative",
    isLocalGuide: false,
    service: "Mercedes Steering Wheel",
    date: "1 month ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Amazing service, Mercedes dealership told me I had to replace the whole steering wheel. Found KG Auto online, went same day, took him 10 seconds to find the issue and made repairs within 20 minutes!",
    savingsOrSpeed: "Bypassed Dealership Quote",
  },
  {
    name: "Jackie Hopwood",
    badge: "Travelled 2.5 hrs • Verified",
    isLocalGuide: false,
    service: "BMW Electrical Repair",
    date: "7 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "The service was excellent - I travelled 2hr 1/2. BMW said I needed to buy a new part costing £650 and KG Auto fixed the issue while I waited and kindly charged me only £60! Exceptional.",
    savingsOrSpeed: "Charged £60 vs £650 BMW",
  },
  {
    name: "Jon Reynolds",
    badge: "Local Guide • 35 reviews",
    isLocalGuide: true,
    service: "Clock Spring While-You-Wait",
    date: "4 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Top service, very efficient. Fixed my broken clock spring while I waited. Clearly know what they are doing very well. Pleasing to see a business repairing parts rather than replacing at significant cost.",
    savingsOrSpeed: "Component Level Repair",
  },
  {
    name: "Frederick Dodson",
    badge: "3 reviews • Škoda Specialist",
    isLocalGuide: false,
    service: "Škoda Kodiaq Clock Spring",
    date: "5 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Friendly and speedy from enquiry through to repair. Fixed the clockspring fault on my wife's Škoda Kodiaq, brilliant price vs trying to get a new one and then paying dealer labour on top.",
    savingsOrSpeed: "Quick Turnaround",
  },
  {
    name: "Mark Stoneman",
    badge: "Local Guide • 17 reviews",
    isLocalGuide: true,
    service: "Passat Clock Spring",
    date: "2 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "KG fixed my Passat Clock Spring in minutes and saved me time and money in replacement costs. An amazing professional service all round. Thank you.",
    savingsOrSpeed: "Repaired in Minutes",
  },
  {
    name: "Lee Butler",
    badge: "Local Guide • 22 reviews",
    isLocalGuide: true,
    service: "Travelled From Bicester",
    date: "9 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Top man. Took him 20 mins start to finish. Highly recommend. Came all the way from Bicester. Worth the journey.",
    savingsOrSpeed: "20 Mins Start to Finish",
  },
  {
    name: "Sam Goss",
    badge: "Local Guide • 22 reviews",
    isLocalGuide: true,
    service: "Clock Spring Postal / In-Person",
    date: "9 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Another one who came from Bicester! Repaired my clock spring in no time at all, saved 100s vs a replacement so worth the journey. You can also post it. Top man, definitely recommend!",
    savingsOrSpeed: "Saved £100s on Replacement",
  },
  {
    name: "Manveer Dulai",
    badge: "2 reviews • 3 photos",
    isLocalGuide: false,
    service: "Steering Angle Sensor",
    date: "1 month ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Very quick and efficient service, I had an issue with my steering angle sensor. After previously going to someone else I found KG Auto and they managed to sort my issue out straight away for a reasonable price.",
    savingsOrSpeed: "First-Time Resolution",
  },
  {
    name: "Dai Va",
    badge: "1 review • Half-Hour Fix",
    isLocalGuide: false,
    service: "Clock Spring Specialist",
    date: "8 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Very fast and polite service! Fixed my car clock spring issue within half an hour, what other places couldn't fix within 2 hours of having my car and some didn't know how to fix at all.",
    savingsOrSpeed: "Fixed in Under 30 Mins",
  },
  {
    name: "Todd Ridout",
    badge: "2 reviews • Travelled 4 Hours",
    isLocalGuide: false,
    service: "Clock Spring & Diagnostics",
    date: "3 months ago",
    rating: 5,
    platform: "google",
    platformUrl: GOOGLE_REVIEWS_URL,
    quote:
      "Fixed my clock spring very fast, same day. Traveled about 4 hours to get to the Oldham workshop. They spent time diagnosing the problem thoroughly. Very good service 10/10 would recommend.",
    savingsOrSpeed: "10/10 Highly Recommended",
  },
  {
    name: "UK Postal Buyer",
    badge: "Verified eBay Buyer • Top Rated",
    isLocalGuide: false,
    service: "Mercedes Conductor Plate Mail-in",
    date: "2 weeks ago",
    rating: 5,
    platform: "ebay",
    platformUrl: EBAY_PROFILE_URL,
    quote:
      "Fantastic service on eBay. Sent off on Monday, received back fully tested on Wednesday with sensor replaced. 100% genuine specialist and 5-star communication.",
    savingsOrSpeed: "100% eBay Positive",
  },
  {
    name: "Facebook Community Member",
    badge: "Recommended on Facebook",
    isLocalGuide: false,
    service: "SZL & Steering Angle Coding",
    date: "3 weeks ago",
    rating: 5,
    platform: "facebook",
    platformUrl: FACEBOOK_PROFILE_URL,
    quote:
      "KG Auto is hands down the best auto electrical repair service in the UK. Quick turnaround, honest pricing and saved me over £500 compared to garage replacement quotes.",
    savingsOrSpeed: "5/5 Facebook Recommendation",
  },
];

// Duplicate 3x for a smooth, wide infinite loop track
const loopTestimonials = [...realTestimonials, ...realTestimonials, ...realTestimonials];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const reqAnimRef = useRef<number | null>(null);

  // Auto-scroll loop with infinite seamless wrapping
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start centered in the middle loop section so user can scroll left or right immediately
    const initialTimer = setTimeout(() => {
      if (el && el.scrollLeft === 0) {
        el.scrollLeft = el.scrollWidth / 3;
      }
    }, 50);

    const speed = 0.55; // Pixels per frame (~33px/sec at 60fps)

    const tick = () => {
      if (!isPaused && !isDragging && el) {
        el.scrollLeft += speed;

        const oneThird = el.scrollWidth / 3;
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        } else if (el.scrollLeft <= 10) {
          el.scrollLeft += oneThird;
        }
      }
      reqAnimRef.current = requestAnimationFrame(tick);
    };

    reqAnimRef.current = requestAnimationFrame(tick);

    return () => {
      clearTimeout(initialTimer);
      if (reqAnimRef.current) cancelAnimationFrame(reqAnimRef.current);
    };
  }, [isPaused, isDragging]);

  const pauseAutoScroll = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const scheduleResume = (delay = 2500) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, delay);
  };

  // Drag interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    pauseAutoScroll();
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStartRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;

    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }

    scrollRef.current.scrollLeft = scrollLeftStartRef.current - walk;

    // Seamless wrap during manual drag
    const oneThird = scrollRef.current.scrollWidth / 3;
    if (scrollRef.current.scrollLeft >= oneThird * 2) {
      scrollRef.current.scrollLeft -= oneThird;
      scrollLeftStartRef.current -= oneThird;
    } else if (scrollRef.current.scrollLeft <= 10) {
      scrollRef.current.scrollLeft += oneThird;
      scrollLeftStartRef.current += oneThird;
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      scheduleResume(2000);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
    scheduleResume(1500);
  };

  const handleTouchStart = () => {
    pauseAutoScroll();
  };

  const handleTouchEnd = () => {
    scheduleResume(3000);
  };

  const handleWheel = () => {
    pauseAutoScroll();
    scheduleResume(2000);
  };


  // Prevent link click when user was dragging
  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,45,45,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(217,4,41,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-8">
        <Heading
          badge="Verified Client Reviews"
          title="Customer Feedback"
          subtitle="Real, unedited feedback from vehicle owners, local guides, and mail-in postal clients across the UK who trust KG Auto Electronics."
          align="center"
        />

        {/* Compact, Sleek Social Proof Trust Bar (replaces the crowded 3-box grid) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 -mt-6 mb-8 text-xs sm:text-sm">
          {/* Google Live Badge */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 hover:border-primary-red/50 hover:bg-[#1a1a1a] transition-all group text-neutral-300 hover:text-white shadow-sm"
          >
            <GoogleIcon className="w-4 h-4" />
            <span className="font-heading font-black text-white text-xs sm:text-sm">5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-neutral-400 text-[11px] sm:text-xs">155+ Google Reviews</span>
            <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-primary-red transition-colors ml-0.5" />
          </a>

          {/* eBay Live Badge */}
          <a
            href={EBAY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 hover:border-primary-red/50 hover:bg-[#1a1a1a] transition-all group text-neutral-300 hover:text-white shadow-sm"
          >
            <EbayIcon className="w-4 h-3.5" />
            <span className="font-heading font-bold text-white text-xs sm:text-sm">100% Positive</span>
            <span className="text-neutral-400 text-[11px] sm:text-xs">513+ eBay Ratings</span>
            <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-primary-red transition-colors ml-0.5" />
          </a>

          {/* Facebook Live Badge */}
          <a
            href={FACEBOOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 hover:border-primary-red/50 hover:bg-[#1a1a1a] transition-all group text-neutral-300 hover:text-white shadow-sm"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
            <span className="font-heading font-bold text-white text-xs sm:text-sm">Top Recommended</span>
            <span className="text-neutral-400 text-[11px] sm:text-xs">Facebook Page</span>
            <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-primary-red transition-colors ml-0.5" />
          </a>
        </div>
      </div>

      {/* Single-Row Interactive Track with Drag, Touch, & Auto-Scroll */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={pauseAutoScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          className={`flex gap-5 px-4 sm:px-8 py-3 overflow-x-auto select-none no-scrollbar touch-pan-x ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {loopTestimonials.map((item, idx) => (
            <ReviewCard
              key={`rev-${idx}`}
              item={item}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>
      </div>

      {/* Streamlined, Low-Profile Bottom Action Bar */}
      <div className="max-w-4xl mx-auto mt-10 px-4 text-center relative z-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#121212]/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg backdrop-blur-sm">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                100% Genuine Customer Experiences
              </span>
            </div>
            <p className="font-body text-xs text-neutral-400">
              Had your clock spring, conductor plate or cluster repaired by KG Auto?
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-primary-red hover:bg-accent-red text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-primary-red/20 active:scale-98"
            >
              <GoogleIcon className="w-3.5 h-3.5 bg-white rounded-full p-0.5" />
              Leave a Google Review
            </a>
            <a
              href={EBAY_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 font-heading text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <EbayIcon className="w-4 h-3" />
              eBay Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Subcomponent: Individual Review Card
function ReviewCard({
  item,
  onLinkClick,
}: {
  item: TestimonialItem;
  onLinkClick: (e: React.MouseEvent) => void;
}) {
  return (
    <div className="w-[320px] sm:w-[380px] md:w-[410px] shrink-0">
      <div className="glass-card h-full p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-white/10 relative bg-[#111111]/90 hover:border-primary-red/40 hover:bg-[#151515] transition-all duration-300 shadow-lg group">
        <div>
          {/* Top Platform & Date Header */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
            {/* Platform Tag with Link */}
            <a
              href={item.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onLinkClick}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-medium text-neutral-300 transition-colors"
            >
              {item.platform === "google" && <GoogleIcon className="w-3.5 h-3.5" />}
              {item.platform === "ebay" && <EbayIcon className="w-4 h-3" />}
              {item.platform === "facebook" && <FacebookIcon className="w-3.5 h-3.5" />}
              <span className="capitalize">{item.platform} Review</span>
            </a>

            {/* Time stamp */}
            <span className="text-[11px] font-body text-neutral-500">{item.date}</span>
          </div>

          {/* Rating Stars & Savings Tag */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(item.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-sm"
                />
              ))}
            </div>

            {item.savingsOrSpeed && (
              <span className="text-[10px] font-heading font-bold uppercase tracking-tight text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {item.savingsOrSpeed}
              </span>
            )}
          </div>

          {/* Service Tag */}
          <div className="mb-3">
            <span className="inline-block text-[11px] font-semibold text-primary-red bg-primary-red/10 px-2.5 py-0.5 rounded-md border border-primary-red/20">
              {item.service}
            </span>
          </div>

          {/* Real Customer Quote */}
          <p className="font-body text-xs sm:text-[13px] text-neutral-200 leading-relaxed italic mb-4 line-clamp-4">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>

        {/* Reviewer Meta & Identity */}
        <div className="flex items-center justify-between border-t border-white/5 pt-3.5 mt-auto">
          <div className="flex items-center gap-2.5">
            {/* Avatar Circle with Initial */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-red/30 to-accent-red/20 border border-primary-red/40 flex items-center justify-center font-heading text-xs font-black text-white shrink-0 group-hover:scale-105 transition-transform">
              {item.name.charAt(0)}
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xs sm:text-sm font-bold text-white tracking-tight">
                  {item.name}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="font-body text-[10px] text-neutral-400 font-medium">
                {item.badge}
              </span>
            </div>
          </div>

          {/* Direct link icon */}
          <a
            href={item.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            title="View original review"
            className="text-neutral-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
