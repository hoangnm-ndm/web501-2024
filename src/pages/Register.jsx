import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import api from "../axios";
import { useNavigate } from "react-router-dom";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

const Register = () => {
	const nav = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});
	const onSubmit = async (data) => {
		try {
			await api.post(`/register`, data);
			if (confirm("Successfully, redirect to login page?")) {
				nav("/login");
			}
		} catch (error) {
			alert(error.response.data);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Register</h1>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						email
					</label>
					<input className="form-control" type="email" {...register("email")} />
					{errors.email && <p className="text-danger">{errors.email.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						password
					</label>
					<input className="form-control" type="password" {...register("password")} />
					{errors.password && <p className="text-danger">{errors.password.message}</p>}
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary w-100">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
