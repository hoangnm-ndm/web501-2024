import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
	username: z.string().min(1, { message: "Required" }),
	password: z.string().min(6),
});

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const submit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit((d) => submit(d))}>
			<h1>Login</h1>
			<div className="form-group">
				<label htmlFor="name">Username</label>
				<input type="text" className="form-control" {...register("username")} />
				{errors.username?.message && <p>{errors.username?.message}</p>}
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input type="password" className="form-control" {...register("password")} />
				{errors.password?.message && <p>{errors.password?.message}</p>}
			</div>

			<div className="form-group">
				<input className="btn btn-primary w-100" type="submit" value={"Login"} />
			</div>
		</form>
	);
};

export default Login;
