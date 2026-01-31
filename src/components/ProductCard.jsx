import { ShoppingCart, Plus } from "lucide-react";
import { motion } from "framer-motion";

function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-sage-100 flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-sage-50">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-white/90 backdrop-blur-sm text-sage-900 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-custom hover:text-white transition-colors"
          >
            <Plus size={20} /> Quick Add
          </button>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-sage-800 leading-tight">
            {product.name}
          </h3>
          <span className="text-emerald-600 font-extrabold text-lg">
            ${product.price}
          </span>
        </div>
        <p className="text-sage-500 text-sm mb-6 line-clamp-2">
          Premium sustainable material crafted for durability and timeless
          appeal.
        </p>

        <div className="mt-auto">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-sage-800 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-sage-700 transition-all active:scale-95"
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
