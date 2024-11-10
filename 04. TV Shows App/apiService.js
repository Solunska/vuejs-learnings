import axios from "axios";
import localforage from "localforage";

const API_URL = 'https://rickandmortyapi.com/api/character/?page=';

export const fetchData = async (page) => {
    try {
        if (navigator.onLine) {
            const response = await axios.get(`${API_URL}${page}`);
            await localforage.setItem(`page-${page}`, response.data.results);
            return response.data.results;
        } else {
            const offlineData = await localforage.getItem(`page-${page}`);
            if (offlineData) {
                return offlineData;
            } else {
                throw new Error('No data available for offline use');
            }
        }
    } catch (error) {
        console.error('API fetch error:', error);
        const offlineData = await localforage.getItem(`page-${page}`);
        if (offlineData) {
            return offlineData;
        }
        throw new Error('No data available');
    }
};