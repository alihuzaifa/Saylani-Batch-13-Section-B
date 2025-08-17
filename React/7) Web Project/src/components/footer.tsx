import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1200px] w-full px-4 py-12 lg:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Shop Mart</h3>
            <p className="text-sm leading-relaxed">
              Your one-stop destination for quality products and exceptional
              service. We're committed to providing the best shopping
              experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="transition-colors text-sm">
                Home
              </a>
              <a href="/about" className="transition-colors text-sm">
                About Us
              </a>
              <a href="/services" className="transition-colors text-sm">
                Services
              </a>
              <a href="/contact" className="transition-colors text-sm">
                Contact Us
              </a>
              <a href="/products" className="transition-colors text-sm">
                Products
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/delivery" className="transition-colors text-sm">
                Fast Delivery
              </a>
              <a href="/warranty" className="transition-colors text-sm">
                Warranty
              </a>
              <a href="/support" className="transition-colors text-sm">
                Customer Support
              </a>
              <a href="/returns" className="transition-colors text-sm">
                Easy Returns
              </a>
              <a href="/loyalty" className="transition-colors text-sm">
                Loyalty Program
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">
                  123 Shopping Street, City, Country
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">info@shopmart.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-8 lg:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© 2024 Shop Mart. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="transition-colors text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
