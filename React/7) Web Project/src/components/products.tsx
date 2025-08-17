import { useState, useEffect } from "react";
import { ShoppingCart, Heart, Star, Filter, Search } from "lucide-react";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("products-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "electronics", name: "Electronics" },
    { id: "clothing", name: "Clothing" },
    { id: "home", name: "Home & Garden" },
    { id: "sports", name: "Sports" },
    { id: "books", name: "Books" },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "electronics",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      category: "clothing",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      isNew: false,
      isSale: true,
    },
    {
      id: 3,
      name: "Smart LED Desk Lamp",
      category: "home",
      price: 45.99,
      originalPrice: 45.99,
      rating: 4.9,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Running Shoes Pro",
      category: "sports",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.7,
      reviews: 2341,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      category: "electronics",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      isNew: false,
      isSale: true,
    },
    {
      id: 6,
      name: "Organic Cotton Hoodie",
      category: "clothing",
      price: 59.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 678,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      isNew: true,
      isSale: false,
    },
    {
      id: 7,
      name: "Garden Tool Set",
      category: "home",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
      isNew: false,
      isSale: true,
    },
    {
      id: 8,
      name: "Yoga Mat Premium",
      category: "sports",
      price: 34.99,
      originalPrice: 34.99,
      rating: 4.9,
      reviews: 1234,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      isNew: true,
      isSale: false,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="products-section" className="py-16 lg:py-24 bg-background">
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Our Products
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our curated collection of premium products designed to enhance 
                your lifestyle with quality, style, and innovation.
              </p>
            </div>
          </div>

          {/* Filters and Search */}
          <div
            className={`mb-8 lg:mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-accent text-accent-foreground hover:bg-accent/80"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-accent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        New
                      </span>
                    )}
                    {product.isSale && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                      <ShoppingCart className="w-5 h-5 text-primary-foreground" />
                    </button>
                  </div>

                  {/* Discount Badge */}
                  {product.isSale && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.isSale && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProducts.length > 0 && (
            <div
              className={`text-center mt-8 lg:mt-12 transition-all duration-1000 delay-600 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Load More Products
                <Filter className="w-5 h-5 ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div
              className={`text-center py-16 transition-all duration-1000 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
