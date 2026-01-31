import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartItem from "./CartItem.jsx";

function Cart({
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  totalAmount,
  checkout,
  onClose,
}) {
  const isEmpty = cart.length === 0;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-6 border-b border-sage-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag size={22} className="text-sage-700" />
          <h2 className="text-xl font-bold text-sage-800">Your Basket</h2>
          <span className="bg-sage-100 text-sm px-2 py-0.5 rounded-full text-sage-600 font-medium">
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-sage-50 rounded-full transition-colors text-sage-400 hover:text-sage-600"
        >
          <X size={24} />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow overflow-y-auto p-6">
        {isEmpty ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-24 h-24 bg-sage-50 rounded-full flex items-center justify-center text-sage-200">
              <ShoppingBag size={48} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-sage-800">
                Your cart is empty
              </h3>
              <p className="text-sage-500 text-sm">
                Sounds like a good time to start shopping.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-sage-800 text-white rounded-xl text-sm font-bold active:scale-95 transition-all"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <CartItem
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Footer */}
      {!isEmpty && (
        <div className="p-6 bg-sage-50 border-t border-sage-100 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sage-500 text-sm">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sage-500 text-sm">
              <span>Shipping</span>
              <span className="text-emerald-custom font-medium text-xs uppercase tracking-wider">
                Free
              </span>
            </div>
            <div className="flex justify-between text-sage-900 font-extrabold text-xl pt-2 border-t border-sage-200">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={checkout}
            className="w-full bg-emerald-custom hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-custom/20 active:scale-98 group"
          >
            Checkout Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
