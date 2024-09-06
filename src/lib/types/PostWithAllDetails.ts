import { Prisma } from "@prisma/client";

/*
	This isn't ideal to bring in posts but unfortunately, in order for TypeScript to not
	scream with Prisma, types must declared explicity because Prisma "include"s do not 
	include types with ./$types.

	This is a very common complaint. See
	https://github.com/prisma/prisma/discussions/10928 for more information.
*/

export type PostWithAllDetails = Prisma.PostGetPayload<{
	include: { tags: true; author: true };
}>;
