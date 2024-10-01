import { PrismaClient } from "@prisma/client";
import { randomInt } from "crypto";
import exampleBlog from "./seed.exampleBlog";
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
	const loremContent: string = exampleBlog

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

	const tagMe = await prisma.tag.upsert({
		where: { name: "me" },
		update: {
			name: "me",
		},
		create: {
			name: "me",
		},
	});

	const tagMethodology = await prisma.tag.upsert({
		where: { name: "methodology" },
		update: {
			name: "methodology",
		},
		create: {
			name: "methodology",
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

	const tagTypeScript = await prisma.tag.upsert({
		where: { name: "typescript" },
		update: {
			name: "typescript",
		},
		create: {
			name: "typescript",
		},
	});

	const tagOpinion = await prisma.tag.upsert({
		where: { name: "opinion" },
		update: {
			name: "opinion",
		},
		create: {
			name: "opinion",
		},
	});

	const tagPowerPages = await prisma.tag.upsert({
		where: { name: "power-pages" },
		update: {
			name: "power-pages",
		},
		create: {
			name: "power-pages",
		},
	});

	const tagPowerApps = await prisma.tag.upsert({
		where: { name: "power-apps" },
		update: {
			name: "power-apps",
		},
		create: {
			name: "power-apps",
		},
	});

	const tagPowerFx = await prisma.tag.upsert({
		where: { name: "power-fx" },
		update: {
			name: "power-fx",
		},
		create: {
			name: "power-fx",
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
			id: "seed-id",
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
				connect: [{ id: tagPowerPlatform.id }, { id: tagJavaScript.id }, { id: tagPowerPages.id }],
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
				connect: [{ id: tagPowerPlatform.id }, { id: tagJavaScript.id }, { id: tagPowerPages.id }],
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
			tags: {
				connect: [{ id: tagPowerPlatform.id }, { id: tagOpinion.id }, { id: tagMethodology.id }],
			},
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
			tags: {
				connect: [{ id: tagPowerPlatform.id }, { id: tagOpinion.id }, { id: tagMethodology.id }],
			},
		},
	});

	const blog3 = await prisma.post.upsert({
		where: {
			slug: "usmc",
		},
		update: {
			title: "From tuba player to software developer: my upbringing into software",
			slug: "usmc",
			content: loremContent,
			postedOn: new Date("2024-03-12T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagMe.id }, { id: tagOpinion.id }] },
		},
		create: {
			title: "From tuba player to software developer: my upbringing into software",
			slug: "usmc",
			content: loremContent,
			postedOn: new Date("2024-03-12T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagMe.id }, { id: tagOpinion.id }] },
		},
	});

	const blog4 = await prisma.post.upsert({
		where: {
			slug: "fetchxml-joins",
		},
		update: {
			title: "A guide to SQL JOINs for FetchXML",
			slug: "fetchxml-joins",
			content: loremContent,
			postedOn: new Date("2024-08-16T20:22:00Z"),
			published: true,
			claps: randomInt(5, 40),
			likes: randomInt(0, 10),
			tutorial: true,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: { connect: [{ id: tagPowerPlatform.id }, { id: tagPowerPages.id }] },
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
			tags: { connect: [{ id: tagPowerPlatform.id }, { id: tagPowerPages.id }] },
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
			tags: { connect: [{ id: tagMethodology.id }] },
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
			tags: { connect: [{ id: tagMethodology.id }] },
		},
	});

	const blog6 = await prisma.post.upsert({
		where: {
			slug: "typescript-on-svelte",
		},
		update: {
			title: "My changing opinion of TypeScript and SvelteKit",
			slug: "changing-opinion-on-ts-and-sveltekit",
			content: loremContent,
			postedOn: new Date("2024-06-02T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: {
				connect: [
					{ id: tagMethodology.id },
					{ id: tagOpinion.id },
					{ id: tagTypeScript.id },
					{ id: tagSvelte.id },
				],
			},
		},
		create: {
			title: "My changing opinion of TypeScript and SvelteKit",
			slug: "changing-opinion-on-ts-and-sveltekit",
			content: loremContent,
			postedOn: new Date("2024-06-02T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: false,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: {
				connect: [
					{ id: tagMethodology.id },
					{ id: tagOpinion.id },
					{ id: tagTypeScript.id },
					{ id: tagSvelte.id },
				],
			},
		},
	});

	const blog7 = await prisma.post.upsert({
		where: {
			slug: "io-with-power-apps-component-libraries",
		},
		update: {
			title: "I/O with Power Apps component libraries and external data sources",
			slug: "io-with-power-apps-component-libraries",
			content: loremContent,
			postedOn: new Date("2024-04-03T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: true,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: {
				connect: [{ id: tagPowerFx.id }, { id: tagPowerApps.id }, { id: tagPowerFx.id }],
			},
		},
		create: {
			title: "I/O flows with Power Apps component libraries",
			slug: "io-with-power-apps-component-libraries",
			content: loremContent,
			postedOn: new Date("2024-04-03T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: true,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: {
				connect: [{ id: tagPowerFx.id }, { id: tagPowerApps.id }, { id: tagPowerFx.id }],
			},
		},
	});

	const blog8 = await prisma.post.upsert({
		where: {
			slug: "svelte5-runes",
		},
		update: {
			title: `I don't agree with people that are against Svelte 5's new "runes" feature`,
			slug: "svelte5-runes",
			content: loremContent,
			postedOn: new Date("2024-04-03T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: true,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: {
				connect: [{ id: tagSvelte.id }, { id: tagOpinion.id }, { id: tagJavaScript.id }],
			},
		},
		create: {
			title: `I don't agree with people that are against Svelte 5's new "runes" feature`,
			slug: "svelte5-runes",
			content: loremContent,
			postedOn: new Date("2024-04-03T22:10:00Z"),
			published: true,
			claps: randomInt(50, 60),
			likes: randomInt(0, 10),
			tutorial: true,
			dislikes: randomInt(0, 2),
			authorId: user1.id,
			tags: {
				connect: [{ id: tagSvelte.id }, { id: tagOpinion.id }, { id: tagJavaScript.id }],
			},
		},
	});
}
