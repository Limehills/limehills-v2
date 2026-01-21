
import React from 'react';

const reviews = [
  {
    quote: "Limehills didn't just rebuild our brand; they gave it a soul that commands attention.",
    author: "James Vance",
    role: "Founder, Peak Systems",
  },
  {
    quote: "The technical execution is unparalleled. They move fast and break expectations.",
    author: "Sarah Chen",
    role: "Director of UX, Horizon",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section>
      <div className="bg-blue-600 border-8 border-blue-900 p-12 md:p-20 brutalist-shadow relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 8.44772 10.4647 8 11.017 8H14.017C14.5693 8 15.017 7.55228 15.017 7V5C15.017 4.44772 14.5693 4 14.017 4H5.01701C4.46473 4 4.01701 4.44772 4.01701 5V15C4.01701 15.5523 4.46473 16 5.01701 16H8.01701C8.56929 16 9.01701 16.4477 9.01701 17V20C9.01701 20.5523 9.46473 21 10.017 21H14.017Z" />
          </svg>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {reviews.map((r, i) => (
            <div key={i} className="space-y-8">
              <div className="text-4xl md:text-5xl font-black text-white italic leading-tight uppercase tracking-tighter">
                "{r.quote}"
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white border-4 border-blue-900 brutalist-shadow-sm flex-shrink-0"></div>
                <div>
                  <div className="text-2xl font-black text-blue-900 uppercase leading-none">{r.author}</div>
                  <div className="text-lg font-bold text-blue-100 uppercase">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
