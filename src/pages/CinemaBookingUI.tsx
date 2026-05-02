import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

import cinemabooking from "../assets/CinemeBookingUI/CinemaBookingUI.png";

const ease = [0.16, 1, 0.3, 1] as const;

const FIGMA_LINK = "https://www.figma.com/design/CRpyDi99kyQcW7WqSDmKXy/Cinema-Booking-App?node-id=0-1&t=6kpPb9y8G3bODYsZ-1";

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

const CinemaBookingUI = () => {
	useEffect(() => {
		document.title = "Eren Gulenoglu, Cinema Booking UI";
	});

	const currentIndex = projects.findIndex((p) => p.slug === "cinema-booking-ui");
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
						UI Design · Figma Exercise
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.8, delay: 0.3, ease }}
						className="text-balance max-w-3xl mb-6"
					>
						Cinema Booking UI
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.4, ease }}
						className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty mb-8"
					>
						A Figma UI design exercise built by following tutorials to strengthen core design skills, covering gradients, layout tools, original shape creation, and plugin workflows.
					</motion.p>

					<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }}>
						<a
							href={FIGMA_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
						>
							View in Figma
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
								<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
					</motion.div>
				</div>
			</section>

			{/* ── Cover image ── */}
			<motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
				<div className="w-full rounded-lg overflow-hidden">
					<img src={cinemabooking} alt="Cinema Booking UI" className="w-full h-auto object-contain" />
				</div>
			</motion.section>

			{/* ── Meta ── */}
			<Section>
				<div className="flex flex-col md:flex-row gap-8 md:gap-16">
					<div className="flex flex-col w-full md:w-1/2">
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Project Info</p>
						<ul className="flex flex-col w-full">
							{[
								{ label: "Type", value: "UI Practice" },
								{ label: "Tools", value: "Figma" },
							].map(({ label, value }) => (
								<li key={label} className="flex flex-row justify-between border-b border-border py-3">
									<span className="text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
									<span className="text-sm font-medium text-foreground">{value}</span>
								</li>
							))}
						</ul>
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4 mt-8">Skills Practiced</p>
						<div className="flex flex-wrap gap-2">
							{["Linear Gradients", "Frames & Groups", "Bend Tool", "Auto Layout", "Plugins & Design Kits"].map((skill) => (
								<span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
									{skill}
								</span>
							))}
						</div>
					</div>
					<div className="flex flex-col w-full md:w-1/2">
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Contents</p>
						<ul className="flex flex-col w-full">
							{["Overview", "Skills Practiced", "Workflow"].map((item, i) => (
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
						A Figma UI design exercise built by following tutorials to strengthen core visual design skills. Rather than a research-led project, this was about deepening fluency with Figma's toolset,
						learning how to produce polished, professional-looking interfaces through intentional practice.
					</p>
				</div>
			</Section>

			{/* ── Skills Practiced ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Skills Practiced</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>Linear Gradients</SubHeading>
							<Body>Created and applied linear gradients across UI elements to add depth and visual polish, learning how gradient direction, color stops, and opacity work together in Figma.</Body>
						</div>
						<div>
							<SubHeading>Frames and Groups</SubHeading>
							<Body>
								Used frames and groups to structure layout and manage spacing consistently across screens, understanding how Figma's auto-layout and constraint systems keep designs responsive and
								organised.
							</Body>
						</div>
						<div>
							<SubHeading>Shape Creation with the Bend Tool</SubHeading>
							<Body>Designed original shapes using the Bend tool, going beyond standard rectangles and circles to create custom UI elements that give the design a distinctive visual character.</Body>
						</div>
					</div>
				</div>
			</Section>

			{/* ── Workflow ── */}
			<Section>
				<div className="max-w-3xl mx-auto">
					<SectionLabel>Workflow</SectionLabel>
					<div className="space-y-8">
						<div>
							<SubHeading>Plugins and Design Kits</SubHeading>
							<Body>
								Integrated Figma plugins and community design kits into the workflow, learning how to work efficiently with pre-built components while maintaining visual consistency across screens.
							</Body>
						</div>
						<div>
							<SubHeading>Takeaway</SubHeading>
							<Body>
								This exercise reinforced that strong UI isn't just about creativity, it's about knowing your tools well enough to execute ideas quickly and cleanly. The skills practiced here directly
								informed how I approach visual design in more complex, research-led projects.
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

export default CinemaBookingUI;
