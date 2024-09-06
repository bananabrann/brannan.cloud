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
	const loremContent: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, in dignissimos? Saepe voluptas eaque magnam neque sunt doloremque iste, at in. Exercitationem nam ab deleniti, tempore error aut ipsam magni!";

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

	const tagPowerPlatform = await prisma.tag.upsert({
		where: { name: "power-platform" },
		update: {
			name: "power-platform",
		},
		create: {
			name: "power-platform",
		},
	});

	const tagJavaScript = await prisma.tag.upsert({
		where: { name: "javascript" },
		update: {
			name: "javascript",
		},
		create: {
			name: "javascript",
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
	console.log("Creating posts ...");

	const blog1 = await prisma.post.upsert({
		where: {
			slug: "dataverse-api-calls-in-power-pages",
		},
		update: {
			title: "How to make an API call to DataVerse in Power Pages",
			content: loremContent,
			postedOn: new Date("2024-08-16T16:30:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			dislikes: randomInt(0, 2),
			tutorial: true,
			tags: {
				connect: [{ id: tagPowerPlatform.id }, { id: tagJavaScript.id }],
			},
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
			tutorial: true,
			authorId: user1.id,
			tags: {
				connect: [{ id: tagPowerPlatform.id }, { id: tagJavaScript.id }],
			},
		},
	});

	const blog2 = await prisma.post.upsert({
		where: {
			slug: "good-bad-ugly",
		},
		update: {
			title: "The Good, the Bad, and the Ugly of the Microsoft Power Platform",
			slug: "good-bad-ugly",
			content: loremContent,
			postedOn: new Date("2024-08-16T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			tags: { connect: [{ id: tagPowerPlatform.id }] },
		},
		create: {
			title: "The Good, the Bad, and the Ugly of the Microsoft Power Platform",
			slug: "good-bad-ugly",
			content: loremContent,
			published: true,
			postedOn: new Date("2024-08-16T20:22:00Z"),
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagPowerPlatform.id }] },
		},
	});

	const blog3 = await prisma.post.upsert({
		where: {
			slug: "usmc",
		},
		update: {
			title: "I wasn't a fan of the Marines, but I'd do it again",
			slug: "usmc",
			content: loremContent,
			postedOn: new Date("2024-08-16T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagCareer.id }] },
		},
		create: {
			title: "I wasn't a fan of the Marines, but I'd do it again",
			slug: "usmc",
			content: loremContent,
			postedOn: new Date("2024-08-16T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagCareer.id }] },
		},
	});

	const blog4 = await prisma.post.upsert({
		where: {
			slug: "fetchxml-joins",
		},
		update: {
			title: "SQL 'JOIN's for FetchXML, a guide",
			slug: "fetchxml-joins",
			content: loremContent,
			postedOn: new Date("2024-08-16T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: true,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagPowerPlatform.id }] },
		},
		create: {
			title: "SQL 'JOIN's for FetchXML, a guide",
			slug: "fetchxml-joins",
			content: loremContent,
			postedOn: new Date("2024-08-16T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: true,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagPowerPlatform.id }] },
		},
	});

	const blog5 = await prisma.post.upsert({
		where: {
			slug: "code-quality",
		},
		update: {
			title: "Code quality: a concern for businesses, bottoms lines, and empathetic programmers",
			slug: "code-quality",
			content: loremContent,
			postedOn: new Date("2024-06-02T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagCareer.id }] },
		},
		create: {
			title: "Code quality: a concern for businesses, bottoms lines, and empathetic programmers",
			slug: "code-quality",
			content: loremContent,
			postedOn: new Date("2024-06-02T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagCareer.id }] },
		},
	});
}
