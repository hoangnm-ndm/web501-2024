import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 3000,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getProductByID = async (id) => {
	try {
		const { data } = await instance.get(`/products/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getProducts = async () => {
	try {
		const { data } = await instance.get(`/products`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default instance;
