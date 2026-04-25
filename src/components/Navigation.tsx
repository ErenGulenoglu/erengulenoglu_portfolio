import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── Insert your links here ───────────────────────────────────────────────────
const RESUME_URL = "https://drive.google.com/file/d/1b1SVU7JCI4fGP-TsXM5dQp2mVj5tJwu4/view";
const LINKEDIN_URL = "https://www.linkedin.com/in/eren-gulenoglu-95690627b/";
const GITHUB_URL = "https://github.com/ErenGulenoglu";
// ─────────────────────────────────────────────────────────────────────────────

const scrollTo = (id: string) => {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: "smooth" });
};

const LinkedInIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
	</svg>
);

const GitHubIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
		<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
	</svg>
);

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<motion.nav
			initial={{ opacity: 0, y: -12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
		>
			<div className="flex items-center justify-between px-6 md:px-12 py-5">
				<a href="#/" className="font-display text-xl tracking-tight text-foreground">
					Eren Gulenoglu
				</a>

				{/* Desktop links */}
				<div className="hidden md:flex items-center gap-8">
					<button onClick={() => scrollTo("work")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
						Work
					</button>
					<button onClick={() => scrollTo("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
						About
					</button>
					<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="LinkedIn">
						<LinkedInIcon />
					</a>
					<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="GitHub">
						<GitHubIcon />
					</a>
					<a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
						Resume
					</a>
					<button
						onClick={() => scrollTo("contact")}
						className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200 active:scale-[0.97]"
					>
						Get in touch
					</button>
				</div>

				{/* Mobile hamburger */}
				<button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 -mr-2" aria-label="Toggle menu">
					<motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-[2px] bg-foreground origin-center" />
					<motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-[2px] bg-foreground" />
					<motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-[2px] bg-foreground origin-center" />
				</button>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
						className="md:hidden overflow-hidden border-t border-border"
					>
						<div className="flex flex-col gap-4 px-6 py-6">
							<button
								onClick={() => {
									scrollTo("work");
									setMenuOpen(false);
								}}
								className="text-base font-medium text-foreground text-left"
							>
								Work
							</button>
							<button
								onClick={() => {
									scrollTo("about");
									setMenuOpen(false);
								}}
								className="text-base font-medium text-foreground text-left"
							>
								About
							</button>
							<a href={RESUME_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-base font-medium text-foreground">
								Resume
							</a>
							<div className="flex items-center gap-4">
								<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
									<LinkedInIcon />
								</a>
								<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
									<GitHubIcon />
								</a>
							</div>
							<button
								onClick={() => {
									scrollTo("contact");
									setMenuOpen(false);
								}}
								className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm active:scale-[0.97]"
							>
								Get in touch
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navigation;
