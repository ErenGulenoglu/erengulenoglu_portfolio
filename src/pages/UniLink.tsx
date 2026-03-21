import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

import persona1 from "@/assets/CCT434/persona1.jpeg";
import persona2 from "@/assets/CCT434/persona2.jpeg";
import userjourney from "@/assets/CCT434/user_journey.jpg";
// import finaldesign from "@/assets/CCT434/finaldesign.png";

const ease = [0.16, 1, 0.3, 1] as const;

const ADOBE_XD_EMBED = "https://xd.adobe.com/embed/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off";
const ADOBE_XD_LINK = "https://xd.adobe.com/view/39ef1ea5-a52b-49cf-8a4b-35befa622f20-6cbc/?fullscreen&hints=off";
const LOWFI_FIGMA_EMBED =
	"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/mtbAqls17ryDUckdq63V9r/CCT434---Week-8---Studio-Lab?node-id=5-1143&starting-point-node-id=5%3A1143";

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

const UniLink = () => {
	useEffect(() => {
		document.title = "Eren Gulenoglu — UniLink";
	});

	const currentIndex = projects.findIndex((p) => p.slug === "unilink-ux");
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
						UniLink
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.4, ease }}
						className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty"
					>
						A mobile app that helps University of Toronto Mississauga students form meaningful friendships and romantic connections in a safe, verified environment — using UofT credentials to ensure
						all users are real students.
					</motion.p>
				</div>
			</section>

			{/* ── Adobe XD Prototype Embed ── */}
			<motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
				{/* Desktop: embedded prototype */}
				<div className="hidden md:block w-full aspect-[16/9] rounded-lg overflow-hidden border border-border bg-secondary">
					<iframe src={ADOBE_XD_EMBED} className="w-full h-full" allowFullScreen title="UniLink Adobe XD Prototype" />
				</div>
				<p className="hidden md:block text-xs text-muted-foreground mt-3 text-center">
					Interactive prototype — click through the screens, or{" "}
					<a href={ADOBE_XD_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
						open in Adobe XD
					</a>
				</p>

				{/* Mobile: button only */}
				<div className="md:hidden flex flex-col items-center gap-4 py-12 rounded-lg border border-border bg-secondary">
					<p className="text-sm text-muted-foreground">Best experienced on desktop</p>
					<a
						href={ADOBE_XD_LINK}
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
								{ label: "Tools", value: "Adobe XD" },
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
							{["Overview", "Project Brief", "Research Methods", "Design Decisions", "Prototyping & Usability Testing", "Final Design", "Takeaways"].map((item, i) => (
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
						UniLink is a mobile app that helps University of Toronto Mississauga students form meaningful friendships and romantic connections in a safe, verified environment. By using UofT
						credentials, the app ensures all users are real students while focusing on interest-based and academic matching rather than superficial swiping. Designed with an intuitive interface and
						low-pressure interactions, UniLink encourages authentic connections, in-person meetups, and cross-cultural communication.
					</p>
				</div>
			</Section>

			{/* ── Project Brief ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Project Brief</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>The Problem</SubHeading>
							<Body>
								Students at UTM constantly look for secure methods to make friends or form intimate relationships on campus. While the university prioritises academic excellence, it largely neglects
								students' need for safe ways to build deep, meaningful relationships.
							</Body>
						</div>
						<div>
							<SubHeading>The High-Level User / Community Activities</SubHeading>
							<Body>
								Our proposed solution aims to bring students together within the community. Several challenges discourage UTM students from socialising — the campus's disconnection from an urban
								environment unlike St. George, and its commuter nature mean many students leave campus as early as possible after class. UniLink encourages students to connect even when not physically
								on campus.
							</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Research Methods ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Research Methods</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>Primary Research</SubHeading>
							<Body>
								To better understand the dating and social culture at UTM, we randomly selected 10 students across different majors, years of study, and cultural backgrounds for qualitative
								interviews. Questions focused on current experiences and attitudes toward dating, perception of UTM's dating culture, challenges forming relationships on campus, existing use of dating
								apps, and interest in a campus-exclusive platform.
							</Body>
						</div>
						<div>
							<SubHeading>Findings: Overview</SubHeading>
							<Body>
								Most interviewees are not currently in a relationship. Many described UTM's dating culture as "rare" and cited commuter culture, lack of social events, and the unapproachability of
								peers as recurring challenges. Despite this, many were excited about a campus-exclusive app, though some raised concerns about a small dating pool and faculty access. All participants
								agreed that UofT credentials would enhance security.
							</Body>
						</div>
						<div>
							<SubHeading>Findings: User Needs</SubHeading>
							<Body>
								Students need more social opportunities on campus, ways to overcome commuter-related barriers, and assurance of privacy and safety. There is demand for a structured yet natural way to
								connect without feeling pressured or institutionalised.
							</Body>
						</div>
						<div>
							<SubHeading>Findings: Current Practices</SubHeading>
							<Body>
								Students currently expand their social circles through extracurriculars, volunteering, and group projects. Others turn to mainstream dating apps like Hinge, Bumble, and Tinder, though
								concerns about fraud and security risks are common. Many rely on mutual connections or pre-university friends instead.
							</Body>
						</div>
						<div>
							<SubHeading>User Personas</SubHeading>
							<div className="mt-4 flex flex-col gap-4">
								<img src={persona1} alt="User persona 1" className="w-full rounded-lg border border-border object-cover" />
								<img src={persona2} alt="User persona 2" className="w-full rounded-lg border border-border object-cover" />
							</div>
						</div>
						<div>
							<SubHeading>Low-Fidelity Prototype</SubHeading>
							{/* Desktop: iframe */}
							<div className="hidden md:block mt-4 w-full aspect-[4/3] rounded-lg overflow-hidden border border-border bg-secondary">
								<iframe src={LOWFI_FIGMA_EMBED} className="w-full h-full" allowFullScreen title="UniLink Low-Fidelity Prototype" />
							</div>
							{/* Mobile: button */}
							<div className="md:hidden mt-4 flex flex-col items-center gap-4 py-12 rounded-lg border border-border bg-secondary">
								<p className="text-sm text-muted-foreground">Best experienced on desktop</p>
								<a
									href="https://www.figma.com/proto/mtbAqls17ryDUckdq63V9r/CCT434---Week-8---Studio-Lab?node-id=5-1143&starting-point-node-id=5%3A1143"
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
						</div>
					</div>
				</div>
			</Section>

			{/* ── Design Decisions ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Design Decisions</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>Privacy and Security</SubHeading>
							<Body>
								The app includes a login system, profile privacy settings, and controlled access to message data. Two-factor authentication via UTORid will serve as the primary access method. Certain
								details such as enrolled courses and club memberships will be optional, with a possible anonymous user pool for students who prefer not to share identifiable information. End-to-end
								encryption may be added for text messaging, though this must be balanced against the app's reporting and banning system.
							</Body>
						</div>
						<div>
							<SubHeading>Algorithmic Recommendations</SubHeading>
							<Body>
								The matching system draws inspiration from Tinder and Bumble while incorporating university-specific attributes such as department and major. Optional criteria may include faith,
								culture, and relationship preferences. Separate matching pools for friendship versus romantic matching will be supported through a simple settings adjustment. GIFs and stickers may be
								added to chats to help students bond over shared interests.
							</Body>
						</div>
						<div>
							<SubHeading>Design Constraints</SubHeading>
							<Body>
								The design must not sell user data to third parties, limit basic functions to push premium memberships, display irrelevant private information during matchmaking, allow fake user
								accounts, or restrict access to the dating pool for users who skip optional fields.
							</Body>
						</div>
						<div>
							<SubHeading>User Journey</SubHeading>
							<img src={userjourney} alt="User journey map" className="mt-4 w-full rounded-lg border border-border object-cover" />
						</div>
					</div>
				</div>
			</Section>

			{/* ── Prototyping / Usability Testing ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Prototyping & Usability Testing</SectionLabel>
					<Body>
						We converted our low-fidelity prototype into a mid-fidelity prototype using Adobe XD, enabling user interactions including sign-up, login, romantic and friendship matching, and chat
						initiation. High-level test goals were to assess how well the UI communicates app functionality, evaluate prototype performance, and identify any design flaws.
					</Body>
					<div className="mt-8 space-y-8">
						<div>
							<SubHeading>Methods</SubHeading>
							<Body>
								Usability testing was conducted with 10 undergraduate UofT students aged 18–24, using both in-person and Zoom sessions. Post-test questionnaires and interview questions collected
								feedback on the overall interface and design experience.
							</Body>
						</div>
						<div>
							<SubHeading>Testing Process</SubHeading>
							<Body>
								Participants were given three structured tasks: signing up with UofT credentials and completing onboarding questions; finding a romantic match and sending a matching request; and
								selecting a friendship match and initiating a chat through the bottom navigation.
							</Body>
						</div>
						<div>
							<SubHeading>Test Results</SubHeading>
							<Body>
								Users praised the clear navigation and the familiarity of the chat and match features. Flexible sign-up and the dual matching modes were well-received. Areas for improvement included
								clarifying next steps after proposing a match, addressing privacy concerns around date of birth data, and requests for additional chat features such as read receipts and typing
								indicators. Button responsiveness was also flagged due to hover and click interaction conflicts in Adobe XD.
							</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Final Design ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Final Design</SectionLabel>
					<Body>Final prototype after refining features and UI based on usability testing feedback.</Body>
				</div>
				{/* <div className="mt-8 max-w-4xl mx-auto">
					<img src={finaldesign} alt="UniLink final design" className="w-full rounded-lg border border-border object-cover" />
				</div> */}
				<div className="mt-10 max-w-3xl mx-auto space-y-8">
					<div>
						<SubHeading>Final Usability Test: Participants</SubHeading>
						<Body>
							Ten UTM students selected through random sampling, varying in academic year, major, and gender — spanning Biology, Psychology, Computer Science, Physics, Professional Writing, and CCIT.
							Some were highly engaged in campus life; others found UTM's commuter nature a challenge for meeting new people.
						</Body>
					</div>
					<div>
						<SubHeading>Process</SubHeading>
						<Body>
							Testing was conducted in person and over Zoom. Users were given access to the Adobe XD prototype and asked to complete sign-up, matching, and chat tasks. Detailed notes were taken and
							later analyzed alongside post-test questionnaire responses.
						</Body>
					</div>
					<div>
						<SubHeading>Results</SubHeading>
						<Body>
							No failed test cases. All participants successfully completed every task. Users were familiar with the matching page, chat page, and account creation concepts. However, they expressed
							that the prototype still has room for improvement — particularly around navigation button effectiveness and social feature functionality. Future iterations may use Swift for iOS
							development and a Django backend to implement a working version of the matching algorithm.
						</Body>
					</div>
					<div className="pt-2">
						<a href={ADOBE_XD_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors">
							View Adobe XD Prototype ↗
						</a>
					</div>
				</div>
			</Section>

			{/* ── Takeaways ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Takeaways</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>Data Security and Privacy</SubHeading>
							<Body>
								Even after considering privacy during ideation, users still showed hesitancy when building profiles — particularly around sharing hobbies and personal data used for algorithmic
								recommendations. A future approach may either reduce reliance on personal data for matching or target a user group more comfortable with sharing such information.
							</Body>
						</div>
						<div>
							<SubHeading>Matching</SubHeading>
							<Body>
								The matching page failed to communicate that it was scrollable, leaving users with limited information about a potential match. Relying on internal scrollability to reveal details is
								not effective UX. Future prototypes will surface more information directly on the matching card, such as hobbies and shared majors highlighted with colour accents over the match's
								photo.
							</Body>
						</div>
						<div>
							<SubHeading>UI</SubHeading>
							<Body>
								Most users expressed discomfort with navigation buttons that didn't respond immediately — a result of click and hover interactions conflicting in Adobe XD. A short-term fix is removing
								hover states; the long-term solution is transitioning the front-end to Swift or React Native for full control over interactive functionality.
							</Body>
						</div>
						<div>
							<SubHeading>Next Steps</SubHeading>
							<Body>
								Technical enhancements are needed — a more sophisticated matching algorithm, improved communication features including a "scheduled campus meetup" option, and broader usability testing
								across age groups and cultural backgrounds. Collaboration with UofT IT for authentication and email verification, plus official UTM administration approval, will be essential for
								real-world deployment. Comprehensive design specifications and brand guidelines are also needed to maintain consistency.
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

export default UniLink;
