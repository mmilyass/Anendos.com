// import React, { useState, useEffect } from 'react';
// // import { ShoppingCart, Search, Menu, X, ChevronRight } from 'lucide-react';

// const LuxuryPerfumeWebsite = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [setActiveProduct] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const products = [
//     { name: 'Noble Allure', price: '$189', notes: 'Amber, Oud, Vanilla', image: '🌟' },
//     { name: 'Midnight Essence', price: '$219', notes: 'Jasmine, Musk, Sandalwood', image: '🌙' },
//     { name: 'Golden Dawn', price: '$199', notes: 'Citrus, Cedar, Rose', image: '☀️' }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white font-serif">
//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//           <div className="text-2xl font-bold tracking-widest text-amber-400">ANENDOO</div>
          
//           <div className="hidden md:flex space-x-12 text-sm tracking-wider">
//             <a href="#home" className="hover:text-amber-400 transition-colors duration-300">HOME</a>
//             <a href="#collection" className="hover:text-amber-400 transition-colors duration-300">COLLECTION</a>
//             <a href="#about" className="hover:text-amber-400 transition-colors duration-300">ABOUT</a>
//             <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">CONTACT</a>
//           </div>

//           <div className="flex items-center space-x-6">
//             <Search className="w-5 h-5 cursor-pointer hover:text-amber-400 transition-colors" />
//             <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-amber-400 transition-colors" />
//             <Menu className="w-6 h-6 md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black z-10"></div>
        
//         {/* Animated Background */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//         </div>

//         <div className="relative z-20 text-center px-6 max-w-5xl">
//           <div className="mb-6 inline-block">
//             <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">Luxury Redefined</span>
//           </div>
//           <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
//             Where Luxury<br />
//             Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Confidence</span>
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
//             Experience the art of fine fragrance. Each note tells a story of elegance and sophistication.
//           </p>
//           <button className="group relative px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold tracking-wider overflow-hidden transition-all duration-300 hover:scale-105">
//             <span className="relative z-10">DISCOVER COLLECTION</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
//           <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex items-start justify-center p-2">
//             <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Product */}
//       <section className="py-32 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl"></div>
//               <div className="relative bg-gradient-to-br from-gray-900 to-black p-12 rounded-lg border border-amber-500/30">
//                 <div className="text-9xl text-center">🧴</div>
//                 <div className="mt-8 text-center">
//                   <div className="text-3xl font-bold text-amber-400 mb-2">NOBLE ALLURE</div>
//                   <div className="text-gray-400 tracking-widest">SIGNATURE COLLECTION</div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">Featured Fragrance</span>
//               <h2 className="text-5xl font-bold mt-4 mb-6">The Essence of<br />Timeless Elegance</h2>
//               <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//                 Noble Allure captivates with its harmonious blend of rich amber, exotic oud, and smooth vanilla. 
//                 A fragrance crafted for those who command attention without saying a word.
//               </p>
              
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
//                     <span className="text-2xl">🎨</span>
//                   </div>
//                   <div>
//                     <div className="font-semibold">Top Notes</div>
//                     <div className="text-gray-400 text-sm">Bergamot, Saffron, Pink Pepper</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
//                     <span className="text-2xl">💎</span>
//                   </div>
//                   <div>
//                     <div className="font-semibold">Heart Notes</div>
//                     <div className="text-gray-400 text-sm">Oud, Amber, Jasmine</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
//                     <span className="text-2xl">🌿</span>
//                   </div>
//                   <div>
//                     <div className="font-semibold">Base Notes</div>
//                     <div className="text-gray-400 text-sm">Vanilla, Musk, Sandalwood</div>
//                   </div>
//                 </div>
//               </div>

//               <button className="group px-10 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold tracking-wider hover:bg-amber-400 hover:text-black transition-all duration-300 flex items-center space-x-2">
//                 <span>EXPLORE NOW</span>
//                 <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Collection Grid */}
//       <section className="py-32 px-6 bg-gradient-to-b from-black via-amber-950/5 to-black">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <span className="text-amber-400 text-sm tracking-[0.3em] uppercase">Exclusive Range</span>
//             <h2 className="text-5xl font-bold mt-4 mb-6">Our Signature Collection</h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Each fragrance is a masterpiece, carefully crafted to evoke emotion and create lasting memories.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <div 
//                 key={index}
//                 className="group relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
//                 onMouseEnter={() => setActiveProduct(index)}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 <div className="relative p-8">
//                   <div className="text-8xl text-center mb-6 group-hover:scale-110 transition-transform duration-500">
//                     {product.image}
//                   </div>
                  
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors duration-300">
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-400 text-sm mb-4">{product.notes}</p>
//                     <div className="text-3xl font-bold text-amber-400 mb-6">{product.price}</div>
                    
//                     <button className="w-full py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold tracking-wider hover:bg-amber-500 hover:text-black transition-all duration-300">
//                       ADD TO CART
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 px-6 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
//           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
//         </div>

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             Indulge in the Art<br />of Fine Fragrance
//           </h2>
//           <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
//             Join our exclusive community and receive 15% off your first order, plus early access to new releases.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
//             <input 
//               type="email" 
//               placeholder="Enter your email"
//               className="flex-1 px-6 py-4 bg-white/10 border border-amber-500/30 focus:border-amber-500 outline-none text-white placeholder-gray-400 backdrop-blur-sm"
//             />
//             <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold tracking-wider hover:scale-105 transition-transform duration-300">
//               SUBSCRIBE
//             </button>
//           </div>
//           <p className="text-gray-500 text-sm">We respect your privacy. Unsubscribe anytime.</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black border-t border-gray-900 py-16 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div>
//               <div className="text-2xl font-bold tracking-widest text-amber-400 mb-4">ANENDOO</div>
//               <p className="text-gray-400 text-sm">
//                 Crafting luxury fragrances that define elegance and sophistication since 2010.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4 text-amber-400">SHOP</h4>
//               <ul className="space-y-2 text-gray-400 text-sm">
//                 <li className="hover:text-white cursor-pointer transition-colors">New Arrivals</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Best Sellers</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Gift Sets</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Limited Edition</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4 text-amber-400">COMPANY</h4>
//               <ul className="space-y-2 text-gray-400 text-sm">
//                 <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Press</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4 text-amber-400">SUPPORT</h4>
//               <ul className="space-y-2 text-gray-400 text-sm">
//                 <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
//                 <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
//             <p>© 2024 ANENDOO. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
//               <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
//               <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LuxuryPerfumeWebsite;