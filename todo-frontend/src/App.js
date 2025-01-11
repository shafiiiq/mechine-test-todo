import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchUsersLast30Days, fetchTopProducts, fetchRevenuePerCategory } from './api';

function App() {
    const [users, setUsers] = useState([]);
    const [topProducts, setTopProducts] = useState([]);
    const [revenue, setRevenue] = useState([]);

    useEffect(() => {
        fetchUsersLast30Days().then(data => setUsers(data));
        fetchTopProducts().then(data => setTopProducts(data));
        fetchRevenuePerCategory().then(data => setRevenue(data));
    }, []);

    return (
        <div className="App">
            <h1>Database Insights</h1>

            <div className="section">
                <h2>Users with Purchases in Last 30 Days</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.user_id}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2>Top 3 Products by Purchase Frequency</h2>
                <ul>
                    {topProducts.map((product, index) => (
                        <li key={index}>
                            {product.name}: {product.purchase_count} purchases
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2>Revenue Per Product Category</h2>
                <ul>
                    {revenue.map((cat, index) => (
                        <li key={index}>
                            {cat.category}: ${cat.total_revenue}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
