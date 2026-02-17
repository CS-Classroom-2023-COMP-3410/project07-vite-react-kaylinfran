import { useState } from 'react';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const [cart, setCart] = useState([]);

  // Add to cart 
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    setCart((prev) => prev.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  // remove from cart
  const removeFromCart = (id) => {
    setCart((prev) =>
    prev
      .map(item => 
        item.id === id
          ? { ...item, quantity: item.quantity - 1 } // subtract just 1
          : item
      )
      .filter(item => item.quantity > 0) // remove completely from cartif 0
  );
};

  const renderPage = () => {
    switch (currentPage) {
    case 'cart':
        return (
        <CartPage
        cartItems={cart}
        removeFromCart={removeFromCart}
        updateCartItem={updateCartItem}
        />);

    case 'products':
        return (
            <ProductsPage
            onNavigate={setCurrentPage}
            cart={cart}
            setCart={setCart}
            addToCart={addToCart}
        />); 
        
    case 'profile':
        return (
        <ProfilePage 
        onNavigate={setCurrentPage}
        cart={cart}
        addToCart={addToCart}
        setCart={setCart}
        />);

    case 'home':
        return (
        <HomePage 
        onNavigate={setCurrentPage}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        />);

      default:
        return <ProductsPage addToCart={addToCart} cart={cartItems} />;
    }
  };

  return (

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Header 
      currentPage={currentPage} 
      onNavigate={setCurrentPage}
      />

      {/* Render current page */}
      {renderPage()}

      {/* Show cart summary on every page */}
      {cart.length > 0 && (
        <ShoppingCart
            items={cart}
            removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
