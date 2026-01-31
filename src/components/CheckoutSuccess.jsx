import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

function CheckoutSuccess({ isOpen, onClose, totalAmount }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-sage-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-[2.5rem] p-8 shadow-2xl z-[101] text-center overflow-hidden"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-custom"
            >
              <CheckCircle2 size={48} />
            </motion.div>

            <h2 className="text-3xl font-extrabold text-sage-900 mb-2">
              Success!
            </h2>
            <p className="text-sage-500 mb-8 px-4">
              Your eco-conscious order of{" "}
              <span className="font-bold text-sage-800">
                ${totalAmount.toFixed(2)}
              </span>{" "}
              has been placed.
            </p>

            <div className="space-y-3">
              <button
                onClick={onClose}
                className="w-full bg-sage-100 text-sage-600 py-4 rounded-2xl font-bold hover:bg-sage-200 transition-all active:scale-95 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-sage-300 hover:text-sage-500 transition-colors cursor-pointer z-1"
            >
              <X size={20} />
            </button>

            {/* Decorative background shape */}
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-sage-100 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CheckoutSuccess;
