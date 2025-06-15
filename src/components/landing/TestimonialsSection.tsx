
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TestimonialsSectionProps {
  showTestimonials: boolean;
}

export const TestimonialsSection = ({
  showTestimonials
}: TestimonialsSectionProps) => {
  const [api, setApi] = useState<any>();

  const testimonials = [
    {
      quote: "A game-changer in how I manage my projects!",
      name: "Sarah P.",
      role: "Product Manager",
      rating: 5
    },
    {
      quote: "The AI integrations have saved me countless hours.",
      name: "James L.",
      role: "Software Developer",
      rating: 5
    },
    {
      quote: "I finally have a way to organize my ideas and execute them seamlessly.",
      name: "Amanda T.",
      role: "Content Creator",
      rating: 4
    },
    {
      quote: "The template library is a lifesaver for my research and presentations.",
      name: "Dr. Michael R.",
      role: "Researcher",
      rating: 5
    },
    {
      quote: "I can collaborate with my team like never before. It's so intuitive!",
      name: "Emma A.",
      role: "Marketing Lead",
      rating: 4
    },
    {
      quote: "The search function is incredible. I can find anything in seconds.",
      name: "Laura M.",
      role: "Data Analyst",
      rating: 5
    },
    {
      quote: "It's like having an AI-powered assistant that works exactly the way I want.",
      name: "Rafael O.",
      role: "Startup Founder",
      rating: 5
    },
    {
      quote: "The visualization tools have transformed how I present complex data.",
      name: "David K.",
      role: "Data Scientist",
      rating: 4
    },
    {
      quote: "I've never been more organized. Everything is just a click away.",
      name: "Nicole F.",
      role: "Executive Assistant",
      rating: 5
    },
    {
      quote: "The AI recommendations are surprisingly accurate and helpful.",
      name: "Thomas J.",
      role: "Researcher",
      rating: 4
    },
    {
      quote: "My productivity has doubled since I started using this platform.",
      name: "Sophia R.",
      role: "Project Manager",
      rating: 5
    },
    {
      quote: "The integration with other tools makes my workflow seamless.",
      name: "Alex C.",
      role: "Product Designer",
      rating: 5
    }
  ];

  // Auto-scroll functionality for mobile
  useEffect(() => {
    if (!api) return;

    const autoScroll = () => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [api]);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
    <Card key={index} className="bg-card border border-border/50 p-6 rounded-lg shadow-sm h-full">
      <StarRating rating={testimonial.rating} />
      <p className="text-lg font-medium mb-4">{testimonial.quote}</p>
      <div className="mt-4">
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </Card>
  );

  return (
    <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">
            Trusted by thinkers<br />
            & doers everywhere.
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden px-4">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
