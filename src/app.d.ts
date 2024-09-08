import type { PrismaClient } from "@prisma/client";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		interface Error {
			code: string;
			message: string;
		}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	var prisma: PrismaClient;
}

export {};
