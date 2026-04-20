import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import DataConcerns from "../assets/GoThriveGo/DataConcerns.png";
import MHSupport from "../assets/GoThriveGo/MHSupport.png";
import LowFidelity from "../assets/GoThriveGo/LowFidelity.png";

// ── Placeholder image imports ──────────────────────────────────────────────
// Replace these with your actual asset imports once images are ready
// e.g. import loFiHome from "@/assets/GoThriveGo/lofi_home.png";
const PLACEHOLDER = "https://placehold.co/1200x700/1a1a2e/6b7280?text=Image+Coming+Soon";
const PLACEHOLDER_TALL = "https://placehold.co/800x1000/1a1a2e/6b7280?text=Image+Coming+Soon";

// ── Figma embed URL ────────────────────────────────────────────────────────
const FIGMA_EMBED =
	"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/jgGDsosGZbeoItQcPVL3Px/Go-Thrive-Go---Student-Mental-Health-App?page-id=0%3A1&node-id=218-1719&viewport=1001%2C129%2C0.1&t=8ZdGmvTDGQlmyEP2-1&scaling=scale-down&content-scaling=fixed";
const FIGMA_PROTO =
	"https://www.figma.com/proto/jgGDsosGZbeoItQcPVL3Px/Go-Thrive-Go---Student-Mental-Health-App?page-id=0%3A1&node-id=218-1719&viewport=1001%2C129%2C0.1&t=8ZdGmvTDGQlmyEP2-1&scaling=scale-down&content-scaling=fixed";

const ease = [0.16, 1, 0.3, 1] as const;

// ── Reusable layout components ─────────────────────────────────────────────
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

// ── Page component ─────────────────────────────────────────────────────────
const GoThriveGo = () => {
	useEffect(() => {
		document.title = "Eren Gulenoglu — Go Thrive Go";
	});

	const currentIndex = projects.findIndex((p) => p.slug === "go-thrive-go");
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
						UX Research · UX/UI Design · Mobile App
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.8, delay: 0.3, ease }}
						className="text-balance max-w-3xl mb-6"
					>
						Go Thrive Go - Student Mental Health App
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.4, ease }}
						className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty"
					>
						A low-fidelity prototype for a campus mental health and safety app. Designed through mixed-methods user research, structured interviews, and iterative usability testing with university
						students.
					</motion.p>
				</div>
			</section>

			{/* ── Figma Prototype Embed ── */}
			<motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
				{/* Desktop: embedded iframe */}
				<div className="hidden md:block w-full aspect-[16/9] rounded-lg overflow-hidden border border-border bg-secondary">
					<iframe src={FIGMA_EMBED} className="w-full h-full" allowFullScreen title="Go Thrive Go Figma Prototype" />
				</div>
				<p className="hidden md:block text-xs text-muted-foreground mt-3 text-center">
					Interactive prototype. Click through the screens, or{" "}
					<a href={FIGMA_PROTO} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
						open in Figma
					</a>
				</p>

				{/* Mobile: button only */}
				<div className="md:hidden flex flex-col items-center gap-4 py-12 rounded-lg border border-border bg-secondary">
					<p className="text-sm text-muted-foreground">Best experienced on desktop</p>
					<a
						href={FIGMA_PROTO}
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
								{ label: "Client", value: "Anonymous" },
								{ label: "Role", value: "UX/UI Designer & UX Researcher" },
								{ label: "Timeframe", value: "8 Weeks" },
								{ label: "Team", value: "Eren Gulenoglu, Sean Fei, Arhama Jawwad, Khalid Mlaekah, Adil Rana" },
								{ label: "Tools", value: "Figma, Google Forms" },
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
							{["Context & Problem", "Research Methods", "Key Findings", "App Structure", "Usability Testing", "Takeaways & Next Steps"].map((item, i) => (
								<li key={item} className="flex flex-row justify-between border-b border-border py-3">
									<span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
									<span className="text-sm text-foreground">{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Section>

			{/* ── Context & Problem ── */}
			<Section>
				<div className="max-w-3xl mx-auto space-y-8">
					<SectionLabel>Context & Problem</SectionLabel>
					<div>
						<SubHeading>The Project</SubHeading>
						<Body>
							An anonymous client engaged our team as IT consultants to design a campus safety version of the Go Thrive Go app, titled the "Stronger Together, Campus Safety Project." The goal was to
							understand students' safety-related needs and mental health barriers, then translate those findings into UX requirements and a low-fidelity clickable prototype.
						</Body>
					</div>
					<div>
						<SubHeading>Problem Statement</SubHeading>
						<Body>
							University students, especially at commuter campuses, struggle to find, trust, and use existing campus mental health and safety resources. Resources are scattered, hard to discover, and
							often feel institutional or stigmatizing. Students with urgent emotional or safety needs have no fast, private, and accessible digital touchpoint designed specifically for them.
						</Body>
					</div>
					<div>
						<SubHeading>Research Questions</SubHeading>
						<Body>
							We centered the research around four questions: What campus situations trigger safety or mental health concerns? What prevents students from using existing resources? What features do
							students value most in an app like this? And how can those features be integrated into a cohesive campus support experience?
						</Body>
					</div>
				</div>
			</Section>

			{/* ── Research Methods ── */}
			<Section>
				<div className="max-w-3xl mx-auto space-y-8">
					<SectionLabel>Research Methods</SectionLabel>
					<Body>
						We adopted a mixed-methods approach, combining qualitative depth with quantitative validation. The research ran across a 7-week structured timeline, from recruitment and data collection
						through synthesis and prototype delivery.
					</Body>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								heading: "Structured Interviews",
								body: "6 participants across multiple years and backgrounds were interviewed for at least 30 minutes each, in person or via video call. Sessions followed a structured guide covering app habits, trust and privacy expectations, mental health experiences, and feature priorities.",
							},
							{
								heading: "Quantitative Survey",
								body: "A Google Forms survey was distributed to UTM students, collecting 25 responses. Questions covered app usage patterns, campus safety concerns, support-seeking behavior, and feature preferences using Likert scales and multiple-choice ranking.",
							},
							{
								heading: "Think-Aloud Usability Testing",
								body: "3 participants were observed completing 6 pre-defined tasks on the low-fidelity Figma prototype while narrating their thoughts. Sessions captured successes, failures, confusion points, and emotional reactions.",
							},
							{
								heading: "Post-Testing Interviews",
								body: "After each usability session, an unstructured interview captured broader suggestions, feature ideas, and qualitative feedback that think-aloud observation alone couldn't surface.",
							},
						].map(({ heading, body }) => (
							<div key={heading} className="p-5 rounded-lg bg-card border border-border">
								<SubHeading>{heading}</SubHeading>
								<Body>{body}</Body>
							</div>
						))}
					</div>
					<div className="mt-8">
						<img src={DataConcerns} alt="Research setup placeholder" className="w-full rounded-lg border border-border object-cover" />
						<p className="text-xs text-muted-foreground mt-2 text-center italic">Google Survey Response</p>
					</div>
					<div className="mt-8">
						<img src={MHSupport} alt="Research setup placeholder" className="w-full rounded-lg border border-border object-cover" />
						<p className="text-xs text-muted-foreground mt-2 text-center italic">Google Survey Response</p>
					</div>
				</div>
			</Section>

			{/* ── Key Findings ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Key Findings</SectionLabel>
					<Body>Synthesizing interviews and survey data revealed five major insight areas that shaped every UX decision in the prototype.</Body>

					<div className="mt-10 space-y-10">
						<div>
							<SubHeading>1. Privacy is Both a Technical and Emotional Barrier</SubHeading>
							<Body>
								76% of surveyed students had never used existing campus support services. Among those who hadn't, privacy concerns (31.6%) and distrust of the system (21.1%) were top barriers, even
								more than not knowing services existed. Participants wanted anonymous-first entry, minimal data collection, and the ability to fully delete their information. One participant described
								wanting an app that "doesn't look like a mental health app," a request for discretion in branding itself.
							</Body>
						</div>
						<div>
							<SubHeading>2. Students Need a Centralized, Localized Resource Hub</SubHeading>
							<Body>
								36.8% of survey respondents said they didn't know support services existed, and another 36.8% didn't know where to go. Interview participants emphasized they wanted localized, specific
								resources rather than generic phone lines or national numbers. The app needed to act as a single entry point that directs students clearly, rather than adding to the noise.
							</Body>
						</div>
						<div>
							<SubHeading>3. Immediacy and Human Connection Are Core Needs</SubHeading>
							<Body>
								Multiple interview participants raised the need for immediate responses, especially in moments of crisis. Several described preferring human interaction over reading articles. The most
								desired features were a chatbot available outside of office hours, virtual access to counsellors, and a companion for safety situations like walking alone at night.
							</Body>
						</div>
						<div>
							<SubHeading>4. Design Must Feel Familiar, Not Institutional</SubHeading>
							<Body>
								Students are heavy users of Instagram, TikTok, YouTube, and WeChat: fast, visual, familiar platforms. An app that felt like a "hospital portal" or bureaucratic tool would be ignored.
								Participants asked for neutral tone (no "baby talking"), multiple color themes, bottom navigation, and familiar swipe/tap interaction patterns. One participant said the current lo-fi
								felt like a "cold health app" and asked for personality, color, and warmth.
							</Body>
						</div>
						<div>
							<SubHeading>5. Gamification Should Be Light, Not Demanding</SubHeading>
							<Body>
								While students responded positively to mood tracking and progress indicators, they pushed back on heavier gamification like mini-games. University students are time-poor and want to
								get in, find what they need, and leave. A mood check-in slider and progress charts were well received; a game mechanic was not.
							</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── App Structure ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>App Structure</SectionLabel>
					<Body>Based on research synthesis and UX requirements, the prototype was organized into four core sections accessible via a bottom navigation bar.</Body>
				</div>
				<div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
					{[
						{
							heading: "Home",
							body: "Displays upcoming appointments and a daily mood check-in. Designed as the student's personal dashboard: familiar, quick to scan, and action-oriented on first open.",
						},
						{
							heading: "Mood",
							body: "Suggests actions based on mood check-in responses (e.g. breathing exercises for stress, grounding for anxiety). Visualizes mood history through charts and progress meters to lightly gamify mental health tracking.",
						},
						{
							heading: "Urgent",
							body: "Houses time-sensitive actions: reporting an unsafe area on campus, requesting emergency medical help, sharing live location with a trusted contact, and calling emergency services. Designed for clarity under stress.",
						},
						{
							heading: "Support",
							body: "Non-urgent support hub: booking counsellor appointments, accessing mental health exercises, browsing campus resources, requesting a walk buddy, and accessing the AI chatbot.",
						},
					].map(({ heading, body }) => (
						<div key={heading} className="p-5 rounded-lg bg-card border border-border">
							<SubHeading>{heading}</SubHeading>
							<Body>{body}</Body>
						</div>
					))}
				</div>
				{/* Placeholder: lo-fi wireframe/app overview image */}
				<div className="mt-10 max-w-4xl mx-auto">
					<img src={LowFidelity} alt="Low-fidelity wireframe overview placeholder" className="w-full rounded-lg border border-border object-cover" />
					<p className="text-xs text-muted-foreground mt-2 text-center italic">Low-fidelity Prototype Overview</p>
				</div>
			</Section>

			{/* ── Usability Testing ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Usability Testing</SectionLabel>
					<Body>
						Three participants completed six pre-defined tasks on the prototype using the think-aloud method. Tasks covered login, mood check-in, suggested actions, reporting an unsafe area,
						requesting a walk buddy, and exploring the chatbot.
					</Body>

					<div className="mt-10 space-y-8">
						<div>
							<SubHeading>What Worked</SubHeading>
							<Body>
								Login and basic navigation were smooth for all participants. The bottom navigation bar felt familiar and easy to use. The mood check-in generated positive reactions: the slider
								interaction was engaging, and multiple participants spent extra time on it. Reporting an unsafe area was completed without issues by all testers.
							</Body>
						</div>
						<div>
							<SubHeading>Major Issues Discovered</SubHeading>
							<Body>
								The placement of the mood check-in under the Home page, rather than the Mood page, caused significant confusion. Most participants expected to find it under "Mood" and took extra time
								or missed it entirely. The walk buddy feature and chatbot were also difficult to locate, with some participants unable to find them without prompting. Overall, participants said the
								app felt "overwhelming" with too many simultaneous functions visible.
							</Body>
						</div>
						<div>
							<SubHeading>Tone and Personality Feedback</SubHeading>
							<Body>
								A recurring piece of feedback was that the prototype felt clinical and cold, like a "hospital app." Students wanted color, personality, and warmth. One participant compared suggested
								exercises to "things a parent would tell you to do," highlighting the need for a tone shift. Another suggested a mascot, similar to Duolingo's owl, to introduce gamification without
								demanding time investment.
							</Body>
						</div>
						<div>
							<SubHeading>Innovative Suggestions</SubHeading>
							<Body>
								Students proposed relating suggested exercises to familiar pop-culture media to make them feel less prescriptive. Examples included breathing exercises framed around characters like
								Paul Atreides from Dune or Avatar Aang, using familiar aesthetics to create emotional connection. Others suggested a floating, always-visible chatbot button, and the ability to
								recommend music or media based on mood inputs.
							</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Takeaways & Next Steps ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Takeaways & Next Steps</SectionLabel>
					<div className="space-y-8">
						{[
							{
								heading: "Privacy as a Design Principle",
								body: "This project reinforced that privacy in a sensitive app is not a settings page. It is a first-class design requirement visible in the main user flow. Anonymous entry, data deletion controls, and clear communication of data use must be woven into the core experience from the first screen.",
							},
							{
								heading: "Tone Shapes Trust",
								body: "The difference between a student opening an app and closing it immediately can come down to a single sentence. Neutral, respectful language that treats students as capable adults, rather than baby-talking or being overly clinical, has a direct impact on whether users feel safe engaging with mental health content.",
							},
							{
								heading: "Information Architecture Before Aesthetics",
								body: "The most actionable lesson from usability testing was that the biggest problems were structural, not visual. Moving the mood check-in, reordering navigation, and simplifying access to key features are higher-priority fixes than color or illustration. Getting the architecture right first is fundamental.",
							},
						].map(({ heading, body }) => (
							<div key={heading}>
								<SubHeading>{heading}</SubHeading>
								<Body>{body}</Body>
							</div>
						))}
					</div>

					<div className="mt-12 space-y-8">
						<div>
							<SubHeading>Short-Term Next Steps</SubHeading>
							<Body>
								Redefine the information architecture based on usability findings: swap the placement of mood check-in and suggested actions, reorder the Urgent and Support nav items, and make the
								chatbot permanently visible. Begin color palette exploration and offer users theme options (dark, light, and custom) in the transition to mid-fidelity.
							</Body>
						</div>
						<div>
							<SubHeading>Long-Term Vision</SubHeading>
							<Body>
								Introduce university-specific visual branding (e.g. campus imagery for UTM, UWaterloo, UofT) to create a sense of belonging. Explore pop-culture media integration for suggested
								exercises to increase emotional resonance. Develop a mascot concept to carry the app's personality and aid navigation without demanding significant user time.
							</Body>
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

export default GoThriveGo;
