import * as z from "zod";

const authValid = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export default authValid;
