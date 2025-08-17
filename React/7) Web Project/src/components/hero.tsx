import { ArrowRight, ShoppingBag, Star, Truck, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center relative z-10">
        <div className="max-w-[1200px] w-full px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium animate-fade-in">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 10,000+ customers
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Discover Amazing
                </span>
                <br />
                <span className="text-foreground">Products Today</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Experience the ultimate shopping destination with premium
                quality products, lightning-fast delivery, and exceptional
                customer service.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center group">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/80 transition-colors">
                    <Truck className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    Fast Delivery
                  </h3>
                  <p className="text-xs text-muted-foreground">Free shipping</p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/80 transition-colors">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    Secure Payment
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    100% protected
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/80 transition-colors">
                    <Star className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    Premium Quality
                  </h3>
                  <p className="text-xs text-muted-foreground">Best products</p>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Image/Illustration */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-80 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-muted rounded-full opacity-80 animate-bounce animation-delay-2000"></div>

                {/* Main Hero Image */}
                <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-card rounded-xl p-6 shadow-lg">
                    <div className="space-y-4">
                      {/* Product Cards */}
                      <div className="flex space-x-3">
                        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-card-foreground">
                            Premium Products
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Best quality guaranteed
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                          <Truck className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-card-foreground">
                            Fast Delivery
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Next day shipping
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                          <Shield className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-card-foreground">
                            Secure Shopping
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            100% safe & secure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="absolute -bottom-8 -left-8 bg-card rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
