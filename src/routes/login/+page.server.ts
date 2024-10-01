import { prisma } from "$lib/server/prisma";
import { lucia } from "$lib/server/auth";
import { error, fail, redirect, type Actions } from "@sveltejs/kit";
import { Argon2id } from "oslo/password";
import type { User } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import assert from "assert";

export const load:PageServerLoad = async({locals, params}) => {
	// assert(1 === 2, "One does not equal two")

	try {
		throw new Error()
	} catch(err) {
		error(501, {
			message: "Weeeee"
		})
	}

	return {
		metadata: {
			title: "Login"
		}
	}
}

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const { email, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;
		const user: User | null = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (!user) {
			console.error(`User with email "${email}" not found.`);

			return fail(400, {
				email,
				incorrectLogin: true,
				message: "Incorrect username and password.",
			});
		}

		const validPassword: boolean = await new Argon2id().verify(user.password, password);

		if (!validPassword) {
			console.error(`Invalid password for user with email "${email}".`);

			return fail(400, {
				email,
				incorrectLogin: true,
				message: "Incorrect username and password.",
			});
		}

		const session = await lucia.createSession(user.id, []);
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes,
		});

		redirect(302, "/");
	},
};
