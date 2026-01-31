import { useEffect, useMemo, useState } from "react";

export function useCart() {
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error("Error parsing cart from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error("Error saving cart to localStorage:", error);
        }
    }, [cart])

    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key === 'cart') {
                try {
                    const newCart = JSON.parse(e.newValue);
                    setCart(newCart);
                }
                catch (error) {
                    console.error("Error parsing cart from localStorage:", error);
                }
            }
        }
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [])

    const addToCart = (product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id);
            if (existingItem) {
                return currentCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                return [...currentCart, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (productId) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, newQuantity) => {
        setCart(currentCart => {
            if (newQuantity <= 0) {
                return currentCart.filter(item => item.id !== productId)
            }
            return currentCart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item)
        })
    }

    const totalAmount = useMemo(() => {
        return Number(
            cart.reduce((sum, item) => {
                const itemTotal = item.price * (item.quantity || 0)
                return sum + itemTotal
            }, 0)
                .toFixed(2)
        );
    }, [cart])

    const checkout = (onComplete) => {
        if (onComplete) onComplete();
        setCart([]);
    }

    return { cart, addToCart, removeFromCart, updateQuantity, totalAmount, checkout }
}