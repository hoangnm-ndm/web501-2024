import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 3000,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getProducts = async () => {
	try {
		const { data } = await api.get("/products");
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default api;
