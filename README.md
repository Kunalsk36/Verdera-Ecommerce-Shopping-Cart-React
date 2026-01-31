# Verdera - Modern Eco-Conscious Ecommerce

Verdera is a premium, high-performance ecommerce shopping cart application built with React 19 and Tailwind CSS 4. It features a modern "Sage & Emerald" aesthetic, smooth spring-based animations, and a seamless user experience designed for the eco-conscious shopper.

## try out - [https://verdera-ecommerce-shopping-cart-rea.vercel.app/](https://verdera-ecommerce-shopping-cart-rea.vercel.app/)
## ✨ Features

- **🛍️ Dynamic Product Gallery**: A responsive grid of premium curated essentials.
- **🛒 Fly-out Sidebar Cart**: A sleek, animated drawer providing instant access to your basket without leaving the page.
- **⚡ Persistent Shopping**: Cart state is automatically synced with LocalStorage, ensuring items remain even after a page refresh.
- **🔄 Smart Quantity Controls**: Effortlessly update item quantities or remove products with intuitive UX.
- **🎉 Celebration Checkout**: A delightful checkout experience featuring a custom success modal and a confetti celebration.
- **🎨 Premium UI/UX**:
  - Custom Sage & Emerald color palette.
  - Inter typography for high-end readability.
  - Smooth micro-interactions powered by Framer Motion.
  - Modern icon set using Lucide-React.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd ecommerce-cart-react
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:

    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Navigate to `http://localhost:5173` in your browser.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Cart.jsx            # Animated sidebar drawer
│   ├── CartItem.jsx        # Individual cart item UI
│   ├── ProductCard.jsx     # Product display with hover effects
│   └── CheckoutSuccess.jsx # Success modal & celebration
├── hooks/
│   └── useCart.js          # Custom hook for cart logic & persistence
├── data/
│   └── products.js         # Product records & initial state
├── App.jsx                 # Main layout & state orchestration
├── index.css               # Design system & Tailwind configurations
└── main.jsx                # Application entry point
```

---

Built with ❤️ by Kunal
