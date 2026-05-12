import axios from 'axios';

const api = axios.create({
    // Points to your own Laravel API route
    baseURL: '/api', 
});

/**
 * Fetches movies currently playing in theaters
 * @param {number} page - The page number to fetch
 */
export const getNowPlaying = async () => {
    try {
        // This hits your Laravel route: http://localhost:8000/api/movies/now-playing
        const response = await api.get('/movies/now-playing');
        return response.data;
    } catch (error) {
        console.error("Internal API Error:", error.message);
        throw error;
    }
};

export const getMovieDetails = async (id) => {
    try {
        // This hits your Laravel route: http://localhost:8000/api/movies/{id}
        const response = await api.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error("Internal API Error:", error.message);
        throw error;
    }
};