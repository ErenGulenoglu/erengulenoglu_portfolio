import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

import preview305 from "@/assets/CCT305/preview_305.png";
import lowfid305 from "@/assets/CCT305/305_low-fidelity.jpg";
import lowmidfid305 from "@/assets/CCT305/305midfidelity.png";
import highfid305 from "@/assets/CCT305/305high-fid.png";
import persona305 from "@/assets/CCT305/305Persona.jpg";
import prioritizationgrid305 from "@/assets/CCT305/305Prioritization.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const FIGMA_EMBED =
	"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/teMuFPCoGhJtvikefERyNA/High-Fidelity-CCT305-Prototype---A4--Group-4?page-id=0%3A1&node-id=21-9217&starting-point-node-id=21%3A9217";

const REPORT_LINKS = [
	"https://drive.google.com/file/d/1xden8ZXNIk3xrNCfQmPKFG7v_KbJXeLg/view?usp=sharing",
	"https://drive.google.com/file/d/1rCpbNGodfEz_1iGhx_lXwnqfcwzYbjyj/view?usp=sharing",
	"https://drive.google.com/file/d/1hr4G1ixyn6JtlQdtiv-HCMLapTN8rsYF/view?usp=sharing",
];

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.7, delay, ease }}
			className="container mx-auto px-6 md:px-12 mb-16 md:mb-24"
		>
			{children}
		</motion.section>
	);
}

function SectionLabel({ children }: { children: string }) {
	return <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-6">{children}</p>;
}

function SubHeading({ children }: { children: string }) {
	return <h3 className="text-base font-semibold text-foreground mb-2">{children}</h3>;
}

function Body({ children }: { children: React.ReactNode }) {
	return <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{children}</p>;
}

const UTMConnect = () => {
	useEffect(() => {
		document.title = "Eren Gulenoglu — UTM Connect";
	});

	// Next project for bottom nav
	const currentIndex = projects.findIndex((p) => p.slug === "utm-connect-ux");
	const next = projects[(currentIndex + 1) % projects.length];

	return (
		<main className="overflow-x-hidden">
			<Navigation />

			{/* ── Hero ── */}
			<section className="pt-32 pb-16 md:pt-40 md:pb-24">
				<div className="container mx-auto px-6 md:px-12">
					<motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.1, ease }}>
						<Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Back to all work
						</Link>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.2, ease }}
						className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3"
					>
						UX Design · Mobile App
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.8, delay: 0.3, ease }}
						className="text-balance max-w-3xl mb-6"
					>
						UTM Connect
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.4, ease }}
						className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty"
					>
						A mobile app concept designed to help UTM students discover student clubs, stay informed about events, and connect with campus communities — built through user research and iterative
						prototyping.
					</motion.p>
				</div>
			</section>

			{/* ── Figma Prototype Embed ── */}
			<motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
				{/* Desktop: embedded iframe */}
				<div className="hidden md:block w-full aspect-[16/9] rounded-lg overflow-hidden border border-border bg-secondary">
					<iframe src={FIGMA_EMBED} className="w-full h-full" allowFullScreen title="UTM Connect Figma Prototype" />
				</div>
				<p className="hidden md:block text-xs text-muted-foreground mt-3 text-center">
					Interactive prototype — click through the screens, or{" "}
					<a
						href="https://www.figma.com/proto/teMuFPCoGhJtvikefERyNA/High-Fidelity-CCT305-Prototype---A4--Group-4?node-id=21-9217&starting-point-node-id=21%3A9217"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2 hover:text-foreground transition-colors"
					>
						open in Figma
					</a>
				</p>

				{/* Mobile: button only */}
				<div className="md:hidden flex flex-col items-center gap-4 py-12 rounded-lg border border-border bg-secondary">
					<p className="text-sm text-muted-foreground">Best experienced on desktop</p>
					<a
						href="https://www.figma.com/proto/teMuFPCoGhJtvikefERyNA/High-Fidelity-CCT305-Prototype---A4--Group-4?node-id=21-9217&starting-point-node-id=21%3A9217"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
					>
						Open Prototype
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</a>
				</div>
			</motion.section>

			{/* ── Meta ── */}
			<Section>
				<div className="flex flex-col md:flex-row gap-8 md:gap-16">
					<div className="flex flex-col w-full md:w-1/2">
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Project Info</p>
						<ul className="flex flex-col w-full">
							{[
								{ label: "Role", value: "UI/UX Designer" },
								{ label: "Timeframe", value: "8 Weeks" },
								{ label: "Team", value: "Team UX/UI Project" },
								{ label: "Tools", value: "Figma, Miro" },
							].map(({ label, value }) => (
								<li key={label} className="flex flex-row justify-between border-b border-border py-3">
									<span className="text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
									<span className="text-sm font-medium text-foreground">{value}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col w-full md:w-1/2">
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Contents</p>
						<ul className="flex flex-col w-full">
							{["Context", "Research Methods", "Low Fidelity", "Design Decisions", "Final Design", "Takeaways"].map((item, i) => (
								<li key={item} className="flex flex-row justify-between border-b border-border py-3">
									<span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
									<span className="text-sm text-foreground">{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Section>

			{/* ── Overview ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<h2 className="mb-6">Overview</h2>
					<p className="text-muted-foreground leading-relaxed text-pretty text-base md:text-lg">
						UTM Connect addresses a real problem on a primarily commuter campus — students struggle to discover clubs, stay updated on events, and build a sense of community outside the classroom. The
						project followed a full UX process: primary research, persona development, low-fidelity wireframing, usability testing, and iterative refinement through to a high-fidelity prototype.
					</p>
				</div>
			</Section>

			{/* ── Context ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Context</SectionLabel>
					<Body>
						Student clubs play a major role in establishing the balance between social and academic life in university. UTM, like many other schools, has a vast array of student clubs available — but
						with such a large number, they can be hard to keep track of.
					</Body>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								heading: "The Problem",
								body: "As a commuter campus with a large student body, many students find it difficult to discover clubs that interest them and stay informed about events. This often leads to low engagement and a lack of connection with the campus community.",
							},
							{
								heading: "The Challenge",
								body: "Design an app that helps students and campus organizations connect, while creating an environment that feels safe, welcoming, and inclusive for all users.",
							},
							{
								heading: "The Solution",
								body: "A mobile app for UTM students to see upcoming campus events, discover suggested clubs, RSVP to events, and connect with other students through chat features.",
							},
						].map(({ heading, body }) => (
							<div key={heading} className="p-5 rounded-lg bg-card border border-border">
								<SubHeading>{heading}</SubHeading>
								<Body>{body}</Body>
							</div>
						))}
					</div>
				</div>
			</Section>

			{/* ── Research ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Research Methods</SectionLabel>
					<div className="space-y-10">
						<div>
							<SubHeading>Problem Statement</SubHeading>
							<Body>
								UTM students need a safe and accessible way to discover campus clubs, events, and peers. As a primarily commuter campus, many students have limited in-person interaction and are
								unlikely to seek out campus events through personal social media.
							</Body>
						</div>
						<div>
							<SubHeading>Primary Research</SubHeading>
							<Body>
								Interview questions were designed to identify pain points among the target audience, tailored for both students who are involved in campus clubs and those who are not. Interviews were
								conducted with five participants.
							</Body>
						</div>
						<div>
							<SubHeading>Findings</SubHeading>
							<Body>
								Updates from club Instagram accounts often get lost in students' feeds. Meaningful socialisation usually only happens at in-person events. Many commuter students come to campus only
								for classes, contributing to a weak sense of community.
							</Body>
						</div>
						<div>
							<SubHeading>User Persona</SubHeading>
							<Body>Sandy Student — a 21 year old UTM undergraduate in the CCIT program. She wants to build her social network while balancing her class load by joining clubs.</Body>
							<img src={persona305} alt="User persona" className="mt-6 w-full rounded-lg border border-border object-cover" />
						</div>
						<div>
							<SubHeading>Prioritization Grid</SubHeading>
							<Body>
								Based on group voting results, we identified the core functionality of the application. The initial prototype assumes the user is already signed in and browsing campus groups.
							</Body>
							<img src={prioritizationgrid305} alt="Prioritization grid" className="mt-6 w-full rounded-lg border border-border object-cover" />
						</div>
					</div>
				</div>
			</Section>

			{/* ── Low Fidelity ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Low Fidelity</SectionLabel>
					<Body>The solution was first explored through a low-fidelity prototype, establishing the app's structure and core user flows before any visual design decisions were made.</Body>
				</div>
				<div className="mt-10 max-w-4xl mx-auto">
					<img src={lowfid305} alt="Low fidelity prototype" className="w-full rounded-lg border border-border object-cover" />
				</div>
			</Section>

			{/* ── Design Decisions ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Design Decisions</SectionLabel>
					<Body>Before usability testing we created a low-mid fidelity prototype to visualise the app's structure and user flow.</Body>
					<img src={lowmidfid305} alt="Low-mid fidelity prototype" className="mt-8 w-full rounded-lg border border-border object-cover" />
					<div className="mt-10 space-y-8">
						<div>
							<SubHeading>Usability Testing</SubHeading>
							<Body>
								Conducted think-aloud usability testing with five participants using the task "Enroll in a scheduled event, then leave it." Feedback revealed confusion around "RSVP" and issues with
								unclear typography and indistinct visual grouping.
							</Body>
						</div>
						<div>
							<SubHeading>UI Design</SubHeading>
							<Body>In the mid-fidelity prototype we retained the layout from the low-fidelity design while adding meaningful context and visual assets to eliminate ambiguities.</Body>
						</div>
						<div>
							<SubHeading>Page Distinction</SubHeading>
							<Body>The group page was too similar to the event page. We redesigned it and renamed it "club page" — a term university students are more familiar with.</Body>
						</div>
						<div>
							<SubHeading>Improving User Flow</SubHeading>
							<Body>The register/withdraw button was turned into a single component with multiple variants, allowing states to persist across navigation.</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Final Design ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Final Design</SectionLabel>
					<Body>Final prototype after refining features and UI based on user feedback.</Body>
				</div>
				<div className="mt-8 max-w-4xl mx-auto">
					<img src={highfid305} alt="High fidelity final design" className="w-full rounded-lg border border-border object-cover" />
				</div>
				<div className="mt-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
					{[
						{ heading: "Discover", body: "Suggested clubs are promoted to students based on their interests." },
						{ heading: "Events", body: "Events are displayed on the homepage with a clear UI, allowing users to easily register and withdraw using popup components with variants." },
						{ heading: "Profiles & Chatting", body: "Both students and clubs have their own profiles, along with chat features that allow users to connect with each other safely." },
						{ heading: "Posts", body: "Students can share posts with connected students and clubs to express their thoughts and promote their own on-campus events." },
					].map(({ heading, body }) => (
						<div key={heading} className="p-5 rounded-lg bg-card border border-border">
							<SubHeading>{heading}</SubHeading>
							<Body>{body}</Body>
						</div>
					))}
				</div>
			</Section>

			{/* ── Takeaways ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Takeaways</SectionLabel>
					<div className="space-y-8">
						{[
							{
								heading: "Usability Testing",
								body: "Observing usability testing firsthand — assessing users' reactions, struggles, and positive experiences — taught me a new way to evaluate the success of a design project I am involved in.",
							},
							{
								heading: "Developing A Design Concept",
								body: "Design should not start with a concept and then search for users, but rather begin with a user base to develop the concept accordingly.",
							},
							{
								heading: "Component Approach in UI",
								body: "Instead of creating multiple pages to handle registration logic, using components with variants simplifies the design process and makes the app easier for users to test and understand.",
							},
						].map(({ heading, body }) => (
							<div key={heading}>
								<SubHeading>{heading}</SubHeading>
								<Body>{body}</Body>
							</div>
						))}
					</div>

					<div className="mt-12">
						<p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Project Reports</p>
						<div className="flex flex-col gap-2">
							{REPORT_LINKS.map((href, i) => (
								<a
									key={i}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors break-all"
								>
									Report {i + 1} ↗
								</a>
							))}
						</div>
					</div>
				</div>
			</Section>

			{/* ── Next Project ── */}
			<section className="py-16 md:py-24 bg-card">
				<div className="container mx-auto px-6 md:px-12">
					<motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }}>
						<p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Next project</p>
						<Link to={`/work/${next.slug}`} className="group inline-flex items-center gap-3">
							<h2 className="group-hover:text-muted-foreground transition-colors duration-300">{next.title}</h2>
							<svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="mt-1 group-hover:translate-x-1 transition-transform duration-300">
								<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
					</motion.div>
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default UTMConnect;
