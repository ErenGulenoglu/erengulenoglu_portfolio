import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

import preview477 from "@/assets/CCT477/Utm477.jpg";
import flow477 from "@/assets/CCT477/FlowModel477.png";

const ease = [0.16, 1, 0.3, 1] as const;

const LINKEDIN_POST = "https://www.linkedin.com/feed/update/urn:li:activity:7402815181472354304/";
const FULL_DOCUMENT = "https://drive.google.com/file/d/13P-FCVxZcYx8O9kWPRN3CIFGq8XhfoG1/view?usp=sharing";

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

const HazelMccallion = () => {
	useEffect(() => {
		document.title = "Eren Gulenoglu — Hazel McCallion Library UX Research";
	});

	const currentIndex = projects.findIndex((p) => p.slug === "hazel-mccallion-ux");
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
						UX Research · Contextual Inquiry
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.8, delay: 0.3, ease }}
						className="text-balance max-w-3xl mb-6"
					>
						Improving Transparency in the Mississauga Library Makerspace
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.4, ease }}
						className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty mb-8"
					>
						A UX research project investigating how transparency, staff dependency, and unclear wait times shape user frustration in the Hazel McCallion Library's 3D printing makerspace.
					</motion.p>

					<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }}>
						<a
							href={LINKEDIN_POST}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
						>
							View LinkedIn Post
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
								<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
					</motion.div>
				</div>
			</section>

			{/* ── Cover image ── */}
			<motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
				<div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-border">
					<img src={preview477} alt="Hazel McCallion Library makerspace" className="w-full h-auto object-contain" />
				</div>
			</motion.section>

			{/* ── Meta ── */}
			<Section>
				<div className="flex flex-col md:flex-row gap-8 md:gap-16">
					<div className="flex flex-col w-full md:w-1/2">
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Project Info</p>
						<ul className="flex flex-col w-full">
							{[
								{ label: "Role", value: "UX Researcher" },
								{ label: "Timeframe", value: "8 Weeks" },
								{ label: "Team", value: "Team UX Research Project" },
								{ label: "Tools", value: "Miro, Canva" },
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
							{["Overview", "Contextual Inquiry", "Participatory Design Study", "Findings and Reflections", "Conclusion"].map((item, i) => (
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
						This project investigates the user experience of 3D printing services at the Hazel McCallion Central Library's makerspace, focusing on how transparency, staff dependency, and unclear wait
						times shape user frustration. Using Contextual Inquiry and Participatory Design, the research revealed key breakdowns in the workflow — including conflicting information, limited user
						control, and invisible print queues — and explored how increased transparency and user-centered planning could improve access to public makerspaces.
					</p>
				</div>
			</Section>

			{/* ── Contextual Inquiry ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Contextual Inquiry</SectionLabel>
					<Body>
						We chose TTRPG players who are executive members of the UTM Against Dragons campus club as our user group, naturally connecting them to the makerspace's 3D printing capabilities.
					</Body>
					<div className="mt-10 space-y-8">
						<div>
							<SubHeading>Target Group and Makerspace</SubHeading>
							<Body>
								During the preplanning phase, the selection of the makerspace and target user group evolved together. Both users are interested in tabletop role-playing games and serve as executives
								of the UTM Against Dragons D&D Club. The critical inquiries focused on how they 3D print models for their game sessions and create pin buttons for the club.
							</Body>
						</div>
						<div>
							<SubHeading>Context</SubHeading>
							<Body>
								Both contextual inquiries took place at the Hazel McCallion Library on October 21, 2025. The observation was conducted by visiting the site with users, taking notes on their actions
								and insights, and asking clarifying questions. Users were asked to think aloud while performing tasks.
							</Body>
						</div>
						<div>
							<SubHeading>Partnership</SubHeading>
							<Body>
								To build rapport, we first sought out people we knew who used makerspaces. We explained the purpose of the study, how we would observe them, and made clear they could withdraw at any
								time. During the inquiry, we followed the "Master/Apprentice" model, allowing participants to lead their workflow while we asked questions.
							</Body>
						</div>
						<div>
							<SubHeading>Interpretation</SubHeading>
							<Body>
								The first user was easygoing and provided valuable insights through offhand comments. With the second user, we took more initiative asking questions to understand their emotions — for
								example, asking how they felt about the library's 3D printing tutorial (described as "slow," watched at double speed). Most interpretations came from offhand remarks.
							</Body>
						</div>
						<div>
							<SubHeading>Key Findings</SubHeading>
							<Body>The library's systems for 3D printing and button making are often unsupportive and overly complicated. Key pain points:</Body>
							<ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
								<li>Inconsistent information between the tutorial video and the library website.</li>
								<li>Limited access and long print queues (at least one week wait); staff, not users, operate the printers.</li>
								<li>Button-making equipment of inconsistent quality, with an unsafe paper cutter lacking a protective handle.</li>
								<li>Users burdened with locating prices, tutorials, and waivers independently.</li>
								<li>Time constraints and automatic data deletion at session end, forcing users to save to personal USB drives.</li>
							</ul>
						</div>
						<div>
							<SubHeading>Sequence Model</SubHeading>
							<Body>
								The Sequence Model captures step-by-step how work is carried out — the user's intent, the triggers, and the breakdowns at each stage. Key steps include arriving at the library,
								locating the makerspace, navigating contradictory instructions, creating and submitting a 3D model, and exiting before closing. Breakdown steps are highlighted in red in the full
								document.
							</Body>
						</div>
						<div>
							<SubHeading>Flow Model</SubHeading>
							<img src={flow477} alt="Flow model diagram" className="mt-4 w-full rounded-lg border border-border object-cover" />
							<p className="text-xs text-muted-foreground mt-3">
								These models are applied to one user. To see the application on the second user, consult the{" "}
								<a href={FULL_DOCUMENT} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
									full research document
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Participatory Design ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Participatory Design Study</SectionLabel>
					<Body>
						After analyzing the findings from the Contextual Inquiry, we conducted a Participatory Design session with the same users, now engaged as stakeholders. Rather than emphasizing purely
						technical solutions, stakeholders highlighted that user-friendliness and ease of use should be the most important design priorities.
					</Body>
					<div className="mt-10 space-y-8">
						<div>
							<SubHeading>Design Focus</SubHeading>
							<Body>
								We focused on stressors related to 3D printing, since the common goal among users — without any influence from us — was 3D printing figures for TTRPG sessions. Considering inconsistent
								information, long wait times, limited library support, and strict time restrictions, we moved toward a design challenge aimed at modernizing the 3D printing process and increasing user
								control.
							</Body>
						</div>
						<div>
							<SubHeading>Probes and Participatory Activities</SubHeading>
							<Body>
								We centered our design solution around an app concept to give stakeholders a meaningful frame. Inspired by the Uber Participatory Design Study, the activity engaged users in designing
								low-fidelity interfaces — focused on features, not aesthetics — alongside a card-sorting exercise to allow participants to articulate features and relationships relevant to 3D printer
								usage in the makerspace.
							</Body>
						</div>
						<div>
							<SubHeading>Activity</SubHeading>
							<Body>
								The session was conducted digitally via Miro. We first presented a clear summary of contextual inquiry findings, then facilitated a card-sorting exercise (must-haves, nice-to-haves,
								dream-to-haves), a journey-mapping session to visualize stakeholder expectations, concept development with low-fi UI templates, and a final feedback and reflection session. We chose
								these low-fidelity methods to collect data on what stakeholders wanted the app to do rather than how it should look.
							</Body>
						</div>
						<div>
							<SubHeading>Study Setting and Participants</SubHeading>
							<Body>
								Sessions were conducted at the Maanjiwe Nendamowinan Building at UTM. Participant 1 is an executive of UTM Against Dragons, experienced in 3D modelling and a Computer Science
								Specialist with prior UI and web design experience. Participant 2 is also an executive of UTM Against Dragons, experienced in 3D printing, studying Drama and Cinema Studies, and has
								been hired to design a website.
							</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Findings and Reflections ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Findings and Reflections</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>Key Design Insights</SubHeading>
							<ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
								<li>The app should be web-based, eliminating the need to install additional software.</li>
								<li>Payments should be centralized within the app and completed before pickup to prevent unclaimed print costs.</li>
								<li>Built-in tutorials that are easy to find yet unobtrusive to experienced users.</li>
								<li>Detailed 3D printer specifications available for users to input into their own slicers.</li>
								<li>Users should be able to upload 3D models directly to the system for printing.</li>
								<li>A 3D-printed rubber duck mascot was suggested to provide tips and a friendly experience.</li>
								<li>Image-based tutorials recommended to help overcome language barriers.</li>
								<li>In-app print submissions, account features, and a print status screen.</li>
								<li>Notifications for when and where projects will be printed.</li>
								<li>Onboarding guidance and basic tutorials for first-time users.</li>
							</ul>
						</div>
						<div>
							<SubHeading>Reflections</SubHeading>
							<Body>
								Participants focused on aspects I hadn't prioritized — particularly accessibility. The rubber duck mascot suggestion was unexpected, as was the emphasis on tutorials; participants were
								thinking about how smooth the solution should feel rather than just solving the problem. One stakeholder was uncomfortable with Miro's interface design activities, suggesting future
								sessions might move interface exercises to pen and paper while keeping card sorting digital.
							</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Conclusion ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Conclusion</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>Main Takeaway</SubHeading>
							<Body>
								The design needs to be user-friendly and accessible, while incorporating the functionality stakeholders suggested. Not all participants are comfortable with digital UI tools, so future
								activities should be simpler or checked for platform familiarity beforehand. Engaging stakeholders early revealed insights I hadn't anticipated — the importance of tutorials, mascots,
								and smooth workflows.
							</Body>
						</div>
						<div>
							<SubHeading>Design Direction</SubHeading>
							<Body>
								We are now considering developing a web app rather than a downloadable app, prioritizing accessibility. There is a strong possibility of integrating a mascot to provide tips and
								guidance. Overall, this process showed how critical iterative, participatory design is for creating solutions that truly meet users' needs.
							</Body>
						</div>
					</div>

					<div className="mt-12">
						<p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Project Report</p>
						<a href={LINKEDIN_POST} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors">
							LinkedIn Post ↗
						</a>
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

export default HazelMccallion;
