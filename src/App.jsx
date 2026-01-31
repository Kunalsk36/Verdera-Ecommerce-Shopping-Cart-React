import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { useCart } from "./hooks/useCart";
import { products } from "./data/products";
import { ShoppingBag, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CheckoutSuccess from "./components/CheckoutSuccess";
import confetti from "canvas-confetti";

function App() {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalAmount,
    checkout,
  } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastTotal, setLastTotal] = useState(0);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-sage-50 text-sage-900 font-sans selection:bg-sage-200">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-sage-600 p-2 rounded-xl text-white">
              <Leaf size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-sage-800">
              Verdera
            </h1>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="group relative p-3 bg-sage-100 hover:bg-sage-200 rounded-full transition-all duration-300"
          >
            <ShoppingBag
              size={24}
              className="text-sage-700 group-hover:scale-110 transition-transform"
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-custom text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in fade-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8">
          <section>
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-extrabold text-sage-900 mb-4">
                Sustainable Style
              </h2>
              <p className="text-sage-600 max-w-2xl mx-auto text-lg">
                Curated collection of essentials designed for the modern,
                eco-conscious lifestyle.
              </p>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </div>
      </main>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-sage-900/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              <Cart
                cart={cart}
                onRemoveFromCart={removeFromCart}
                onUpdateQuantity={updateQuantity}
                totalAmount={totalAmount}
                checkout={() => {
                  setLastTotal(totalAmount);
                  checkout(() => {
                    setIsCartOpen(false);
                    setShowSuccess(true);
                    confetti({
                      particleCount: 150,
                      spread: 70,
                      origin: { y: 0.6 },
                      colors: ["#10b981", "#668266", "#ffffff"],
                    });
                  });
                }}
                onClose={() => setIsCartOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CheckoutSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        totalAmount={lastTotal}
      />

      <footer className="bg-sage-100 border-t border-sage-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sage-500 text-sm">
            © 2026 Verdera Essentials. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
