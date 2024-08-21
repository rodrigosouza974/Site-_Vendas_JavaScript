import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import Home from './pages/Home/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
