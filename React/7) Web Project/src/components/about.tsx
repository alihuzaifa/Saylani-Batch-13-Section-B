import {
  Users,
  Award,
  Globe,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "100+", label: "Countries Served" },
    { icon: Heart, value: "99%", label: "Customer Satisfaction" },
  ];

  const features = [
    "Premium quality products",
    "Fast worldwide shipping",
    "24/7 customer support",
    "Secure payment methods",
    "Easy returns & exchanges",
    "Loyalty rewards program",
  ];

  return (
    <section id="about-section" className="py-16 lg:py-24 bg-background">
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  About Shop Mart
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're passionate about bringing you the best shopping experience
                with quality products, exceptional service, and innovative
                solutions that make your life easier and more enjoyable.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
            {/* Left Content - Story */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Our Story
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2009, Shop Mart began with a simple mission: to
                  make quality products accessible to everyone. What started as
                  a small local store has grown into a trusted global brand,
                  serving millions of customers worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue to innovate and expand our offerings,
                  always staying true to our core values of quality, integrity,
                  and customer satisfaction. Our team of dedicated professionals
                  works tirelessly to ensure every interaction with Shop Mart
                  exceeds your expectations.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  Why Choose Us
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="group inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Image/Visual */}
            <div
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-40 animate-pulse animation-delay-2000"></div>

                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border">
                  <div className="bg-card rounded-xl p-8 shadow-lg">
                    <div className="space-y-6">
                      {/* Mission Statement */}
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-card-foreground mb-3">
                          Our Mission
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          To provide exceptional products and service that
                          enhance the lives of our customers while maintaining
                          the highest standards of quality and integrity.
                        </p>
                      </div>

                      {/* Values */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <h5 className="font-semibold text-card-foreground mb-2">
                            Quality
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            We never compromise on quality
                          </p>
                        </div>
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <h5 className="font-semibold text-card-foreground mb-2">
                            Innovation
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Always pushing boundaries
                          </p>
                        </div>
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <h5 className="font-semibold text-card-foreground mb-2">
                            Integrity
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Honest and transparent
                          </p>
                        </div>
                        <div className="text-center p-4 bg-accent/50 rounded-lg">
                          <h5 className="font-semibold text-card-foreground mb-2">
                            Service
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Customer-first approach
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/80 transition-colors">
                  <stat.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
