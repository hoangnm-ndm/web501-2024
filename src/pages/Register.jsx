import React from "react";
import authValid from "../schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import instance from "../axios";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(authValid),
	});

	const submit = (d) => {
		(async () => {
			try {
				const { data } = await instance.post(`/register`, d);
				console.log(data);
				alert(`Dang ky thanh cong!, ${data.user.email}`);
			} catch (error) {
				alert(error.response.data);
			}
		})();
	};
	return (
		<div>
			<form onSubmit={handleSubmit((d) => submit(d))}>
				<h1>Register</h1>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input className="form-control" type="email" {...register("email")} />
					{errors.email && <strong className="text-red">{errors.email?.message}</strong>}
				</div>{" "}
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input className="form-control" type="password" {...register("password")} />
					{errors.password && <strong className="text-red">{errors.password?.message}</strong>}
				</div>
				<div className="form-group">
					<button className="btn btn-primary">Register</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
