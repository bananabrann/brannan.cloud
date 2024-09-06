import { PrismaClient } from "@prisma/client";
import { randomInt } from "crypto";
import "dotenv/config";

const prisma = new PrismaClient();

try {
	await main();
	await prisma.$disconnect();
} catch (error: unknown) {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
}

// main()
// 	.then(async () => {
// 		await prisma.$disconnect();
// 	})
// 	.catch(async (error: unknown) => {
// 		console.error(error);
// 		await prisma.$disconnect();
// 		process.exit(1);
// 	});

async function main() {
	console.log("Starting database seed ...");
	console.log(`The connection URL is ${process.env.DATABASE_URL}`);

	// prettier-ignore
	const loremContent: Buffer = Buffer.from("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, in dignissimos? Saepe voluptas eaque magnam neque sunt doloremque iste, at in. Exercitationem nam ab deleniti, tempore error aut ipsam magni!");

	// ---
	// Tags
	// ---
	console.log("Adding tags ...");

	const tagSvelte = await prisma.tag.upsert({
		where: { name: "svelte" },
		update: {
			name: "svelte",
		},
		create: {
			name: "svelte",
		},
	});

	const tagCareer = await prisma.tag.upsert({
		where: { name: "career" },
		update: {
			name: "career",
		},
		create: {
			name: "career",
		},
	});

	// ---
	// Users
	// ---
	console.log("Creating users ...");

	const user1 = await prisma.user.upsert({
		where: {
			email: "test@email.com",
		},
		update: {
			username: "bananabrann",
			password: "password",
		},
		create: {
			email: "test@email.com",
			username: "bananabrann",
			password: "password",
		},
	});

	// ---
	// Blogs
	// ---
	const blog1 = await prisma.post.upsert({
		where: {
			slug: "dataverse-api-calls-in-power-pages",
		},
		update: {
			title: "How to make an API call to DataVerse in Power Pages",
			content: loremContent,
			postedOn: new Date("2024-08-16:30:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			dislikes: randomInt(0, 2),
		},
		create: {
			title: "How to make an API call to DataVerse in Power Pages",
			slug: "dataverse-api-calls-in-power-pages",
			content: loremContent,
			published: true,
			postedOn: new Date("2024-08-16T16:30:00Z"),
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			dislikes: randomInt(0, 2),
			authorId: user1.id,
		},
	});

	const blog2 = await prisma.post.upsert({
		where: {
			slug: "dataverse-api-calls-in-power-pages",
		},
		update: {
			title: "How to make an API call to DataVerse in Power Pages",
			content: loremContent,
			postedOn: new Date("2024-08-16:30:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			dislikes: randomInt(0, 2),
		},
		create: {
			title: "How to make an API call to DataVerse in Power Pages",
			slug: "dataverse-api-calls-in-power-pages",
			content: loremContent,
			published: true,
			postedOn: new Date("2024-08-16T16:30:00Z"),
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			dislikes: randomInt(0, 2),
			authorId: user1.id,
		},
	});
}
