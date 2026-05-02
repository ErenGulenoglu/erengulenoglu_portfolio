import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

import Home from "../assets/ChampionMeta/championHome.png";
import colorCode from "../assets/ChampionMeta/championColor.png";
import News from "../assets/ChampionMeta/championNews.png";
import Rune from "../assets/ChampionMeta/championRune.png";

const ease = [0.16, 1, 0.3, 1] as const;

const FIGMA_EMBED =
	"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/iVoE2uZR0igRwGb3esZnxw/League-of-Legends---Champion-Meta?page-id=0%3A1&node-id=76-683&p=f&viewport=275%2C144%2C0.57&t=UJr2WuROKKfzfmVn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=76%3A683";
const FIGMA_LINK =
	"https://www.figma.com/proto/iVoE2uZR0igRwGb3esZnxw/League-of-Legends---Champion-Meta?page-id=0%3A1&node-id=76-683&p=f&viewport=275%2C144%2C0.57&t=UJr2WuROKKfzfmVn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=76%3A683";

const ChampionMeta = () => {
	useEffect(() => {
		document.title = "Eren Gulenoglu — Champion Meta App";
	});

	const currentIndex = projects.findIndex((p) => p.slug === "champion-meta");
	const next = projects[(currentIndex + 1) % projects.length];

	return (
		<main className="overflow-x-hidden">
			<Navigation />

			{/* ── Hero ── */}
			<section className="pt-32 pb-16 md:pt-40 md:pb-24">
				<div className="container mx-auto px-6 md:px-12">
					<motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.1, ease }}>
						<Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
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
						Champion Meta App
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.4, ease }}
						className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty mb-8"
					>
						A mid-fidelity UI practice project inspired by U.GG's League of Legends meta display. Built entirely in Figma to deepen hands-on knowledge of advanced interface design techniques.
					</motion.p>

					<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }}>
						<a
							href={FIGMA_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
						>
							View Prototype
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
								<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
					</motion.div>
				</div>
			</section>

			{/* ── Prototype Embed ── */}
			<motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
				{/* Desktop */}
				<div className="hidden md:block w-full aspect-[16/9] rounded-lg overflow-hidden border border-border bg-secondary">
					<iframe src={FIGMA_EMBED} className="w-full h-full" allowFullScreen title="Champion Meta App Prototype" />
				</div>
				<p className="hidden md:block text-xs text-muted-foreground mt-3 text-center">
					Interactive prototype — or{" "}
					<a href={FIGMA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
						open in Figma
					</a>
				</p>

				{/* Mobile */}
				<div className="md:hidden flex flex-col items-center gap-4 py-12 rounded-lg border border-border bg-secondary">
					<p className="text-sm text-muted-foreground">Best experienced on desktop</p>
					<a
						href={FIGMA_LINK}
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
			<motion.section
				initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true, amount: 0.15 }}
				transition={{ duration: 0.7, ease }}
				className="container mx-auto px-6 md:px-12 mb-16 md:mb-24"
			>
				<div className="flex flex-col md:flex-row gap-8 md:gap-16">
					<div className="flex flex-col w-full md:w-1/2">
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Project Info</p>
						<ul className="flex flex-col w-full">
							{[
								{ label: "Type", value: "UI Practice" },
								{ label: "Tools", value: "Figma" },
								{ label: "Inspired by", value: "U.GG" },
							].map(({ label, value }) => (
								<li key={label} className="flex flex-row justify-between border-b border-border py-3">
									<span className="text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
									<span className="text-sm font-medium text-foreground">{value}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col w-full md:w-1/2">
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Skills Practiced</p>
						<div className="flex flex-wrap gap-2 pt-1">
							{[
								"Pen Tool",
								"Auto Layout",
								"Components & Variants",
								"Blending Modes",
								"Effects",
								"Smart Animations",
								"Scrollable Interfaces",
								"Color Systems",
								"Frames & Groups",
								"Custom Frame Borders",
							].map((skill) => (
								<span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</motion.section>

			{/* ── Screens ── */}
			<motion.section
				initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true, amount: 0.15 }}
				transition={{ duration: 0.7, ease }}
				className="container mx-auto px-6 md:px-12 mb-16 md:mb-24"
			>
				<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-8">Screens</p>
				{/* All four screens in a row — constrained to natural mobile width */}
				<div className="flex flex-col md:flex-row gap-4 justify-center items-start">
					{[
						{ src: Rune, alt: "Champion Rune Screen" },
						{ src: Home, alt: "Champion Home Screen" },
						{ src: News, alt: "Champion News Screen" },
						{ src: colorCode, alt: "Champion Color System" },
					].map(({ src, alt }) => (
						<div key={alt} className="w-full md:w-[calc(25%-12px)] rounded-lg overflow-hidden flex-shrink-0">
							<img src={src} alt={alt} className="w-full h-auto object-contain" />
						</div>
					))}
				</div>
			</motion.section>

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

export default ChampionMeta;
