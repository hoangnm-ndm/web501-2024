import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import instance from "../axios";
import { useNavigate } from "react-router-dom";

const authSchema = z.object({
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
		resolver: zodResolver(authSchema),
	});
	const onSubmit = (data) => {
		(async () => {
			try {
				await instance.post(`/register`, data);
				if (confirm("Successfully, redirect to login?")) {
					nav("/login");
				}
			} catch (error) {
				console.log(error);
				alert(error.response.data);
			}
		})();
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Register</h1>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						email
					</label>
					<input type="email" className="form-control" id="email" {...register("email", { required: true })} />
					{errors.email && <p className="text-danger">{errors.email.message}</p>}
				</div>

				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						password
					</label>
					<input type="password" className="form-control" id="password" {...register("password", { required: true })} />
					{errors.password && <p className="text-danger">{errors.password.message}</p>}
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
