import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchUsersLast30Days = async () => {
    const response = await axios.get(`${API_URL}/users-last-30-days`);
    return response.data;
};

export const fetchTopProducts = async () => {
    const response = await axios.get(`${API_URL}/top-products`);
    return response.data;
};

export const fetchRevenuePerCategory = async () => {
    const response = await axios.get(`${API_URL}/revenue-per-category`);
    return response.data;
};

export const fetchRemainingStock = async (productId) => {
    const response = await axios.get(`${API_URL}/remaining-stock/${productId}`);
    return response.data;
};
