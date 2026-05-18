import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import myPhoto from "../assets/myPhoto.jpg";

// ─── Marquee data ─────────────────────────────────────────────────────────────
const ROW_1 = ["Figma", "Contextual Inquiry", "Miro", "Affinity Mapping", "Adobe XD", "Journey Mapping", "Canva", "Heuristic Evaluation", "Card Sorting", "Cognitive Walkthrough"];

const ROW_2 = [
	"Usability Testing",
	"Prototyping",
	"Think-Aloud Protocol",
	"Participatory Design",
	"UX Research",
	"Information Architecture",
	"Wireframing",
	"Emotion Mapping",
	"User Interviews",
	"Interaction Design",
	"A/B Testing",
];

const r1 = [...ROW_1, ...ROW_1]; // doubled so -50% always lands on the seam
const r2 = [...ROW_2, ...ROW_2];

// ─── Marquee Row ──────────────────────────────────────────────────────────────
function MarqueeRow({ items, reverse = false, duration = 40 }: { items: string[]; reverse?: boolean; duration?: number }) {
	// Render two identical sets side by side; animate exactly one set's width so the loop is seamless
	const half = items.slice(0, items.length / 2);

	return (
		<div className="overflow-hidden w-full">
			<motion.div className="flex gap-2 w-max" animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }} transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}>
				{/* Two identical copies — animating exactly one copy's worth keeps it gapless */}
				{[...half, ...half].map((item, i) => (
					<span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-xs text-foreground bg-secondary whitespace-nowrap">
						{item}
					</span>
				))}
			</motion.div>
		</div>
	);
}

// ─── Repelling dots background ────────────────────────────────────────────────
function RepelDots() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let width = canvas.offsetWidth;
		let height = canvas.offsetHeight;
		canvas.width = width;
		canvas.height = height;

		const DOT_COUNT = 3600;
		const RADIUS = 1.5;
		const REPEL_DIST = 100;
		const REPEL_STRENGTH = 0.6;
		const RETURN_STRENGTH = 0;

		const dots = Array.from({ length: DOT_COUNT }, () => {
			const ox = Math.random() * width;
			const oy = Math.random() * height;
			return { ox, oy, x: ox, y: oy, vx: 0, vy: 0 };
		});

		let mouse = { x: -999, y: -999 };

		const onMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		};
		const onMouseLeave = () => {
			mouse.x = -999;
			mouse.y = -999;
		};

		window.addEventListener("mousemove", onMouseMove);
		canvas.addEventListener("mouseleave", onMouseLeave);

		let raf: number;
		const animate = () => {
			ctx.clearRect(0, 0, width, height);
			dots.forEach((d) => {
				const dx = d.x - mouse.x;
				const dy = d.y - mouse.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < REPEL_DIST && dist > 0) {
					const force = (REPEL_DIST - dist) / REPEL_DIST;
					d.vx += (dx / dist) * force * REPEL_STRENGTH;
					d.vy += (dy / dist) * force * REPEL_STRENGTH;
				}

				d.vx *= 0.96;
				d.vy *= 0.96;
				d.x += d.vx;
				d.y += d.vy;
				ctx.beginPath();
				ctx.arc(d.x, d.y, RADIUS, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(251,126,20, 1)";
				ctx.fill();
			});
			raf = requestAnimationFrame(animate);
		};
		animate();

		const onResize = () => {
			width = canvas.offsetWidth;
			height = canvas.offsetHeight;
			canvas.width = width;
			canvas.height = height;
			dots.forEach((d) => {
				d.ox = Math.random() * width;
				d.oy = Math.random() * height;
				d.x = d.ox;
				d.y = d.oy;
			});
		};
		window.addEventListener("resize", onResize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMouseMove);
			canvas.removeEventListener("mouseleave", onMouseLeave);
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden pt-20">
			<RepelDots />
			<div className="container mx-auto px-6 md:px-12 py-24 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
					{/* ── Left: text ── */}
					<div className="md:col-span-7">
						<motion.p
							initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
							className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-6"
						>
							UX Designer & Researcher
						</motion.p>

						<motion.h1
							initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
							className="text-balance mb-4"
						>
							Eren Gulenoglu
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
							className="font-display text-2xl md:text-3xl text-muted-foreground mb-8 leading-[1.2]"
						>
							Research-driven design. From <span className="italic text-foreground">insight</span> to interaction.
						</motion.p>

						<motion.p
							initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
							className="text-base md:text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed mb-10"
						>
							I research how people think, feel, and struggle, then turn those insights into products that arise from a reason.
						</motion.p>

						<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }} className="flex gap-4">
							<button
								onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
								className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
							>
								View selected work
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
									<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
							<button
								onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
								className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium text-sm text-foreground hover:bg-secondary transition-colors active:scale-[0.97]"
							>
								Get in touch
							</button>
						</motion.div>
					</div>

					{/* ── Right: photo + marquee ── */}
					<motion.div
						initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
						animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
						className="md:col-span-5 flex flex-col items-center gap-6"
					>
						{/* Photo placeholder — replace with: <img src={yourPhoto} alt="Eren Gulenoglu" className="w-full h-full object-cover" /> */}
						{/* <div className="w-48 h-64 md:w-56 md:h-72 rounded-2xl border border-border overflow-hidden flex-shrink-0">
							<img src={myPhoto} alt="Eren Gulenoglu" className="w-full h-full object-cover object-top" />
						</div> */}
						<div className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-border overflow-hidden flex-shrink-0">
							<img src={myPhoto} alt="Eren Gulenoglu" className="w-full h-full object-cover object-top" />
						</div>

						{/* Scrolling marquee */}
						<div className="w-full flex flex-col gap-2 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
							<MarqueeRow items={r1} duration={38} />
							<MarqueeRow items={r2} reverse duration={44} />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
