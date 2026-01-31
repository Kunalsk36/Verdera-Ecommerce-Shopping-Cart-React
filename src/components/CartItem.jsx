import { Trash2, Minus, Plus } from "lucide-react";

function CartItem({ item, onUpdateQuantity, onRemoveFromCart }) {
  return (
    <div className="flex gap-4 group">
      {/* Product Image */}
      <div className="w-20 h-24 bg-sage-50 rounded-2xl overflow-hidden flex-shrink-0 border border-sage-100">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow flex flex-col justify-between py-1">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-bold text-sage-800 leading-none">
              {item.name}
            </h3>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="text-sage-300 hover:text-red-500 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
          <p className="text-sm text-sage-500 mt-1">${item.price}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center bg-sage-50 rounded-xl p-1 border border-sage-100">
            <button
              className="p-1 hover:bg-white hover:shadow-sm rounded-lg transition-all text-sage-600 disabled:opacity-30"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-xs font-bold text-sage-800 pointer-events-none">
              {item.quantity}
            </span>
            <button
              className="p-1 hover:bg-white hover:shadow-sm rounded-lg transition-all text-sage-600"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus size={14} />
            </button>
          </div>
          <p className="text-sm font-extrabold text-sage-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
