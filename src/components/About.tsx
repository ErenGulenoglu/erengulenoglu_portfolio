import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="about" className="py-24 md:py-32 bg-card">
			<div className="container mx-auto px-6 md:px-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
					<motion.div
						initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
						whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">About me</p>
						<h2 className="text-balance mb-8">
							Designs comes from user,
							<br />
							designs returns to user.
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
						whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						className="space-y-5"
					>
						<p className="text-muted-foreground leading-relaxed text-pretty">
							I'm a UX designer and researcher who believes good design starts with understanding people. I combine qualitative research methods with hands-on Figma work to build experiences grounded
							in how people actually think and behave.
						</p>
						<p className="text-muted-foreground leading-relaxed text-pretty">
							I base my designs on collaboration and real user input, shaping features around what people actually need rather than assumptions.
						</p>
						<div className="flex flex-col gap-0 pt-6 border-t border-border">
							{[
								{
									role: "UX Designer & Researcher",
									place: "Anonymous Company",
									date: "2024 - Present",
									detail:
										"Market research, preparing research documents, conducting user surveys and interviews, analyzing collected data, designing low-fidelity campus mental health app prototype, conducting usability tests, and presenting findings to stakeholders",
								},
								{
									role: "Research Assistant",
									place: "Stigma and Motivation Lab, Dept. of Psychology, UofT",
									date: "Jun 2024 – Present",
									detail: "Conducted literature reviews, programmed and administered experimental studies, managed data collection and analysis in R, and coded qualitative data for thematic analysis",
								},
								{
									role: "Marketing Coordinator",
									place: "UTM Turkish Students' Association",
									date: "Sep 2024 – Apr 2025",
									detail: "Designed promotional assets using Canva and Photoshop for campus events, increasing digital reach and physical attendance across the academic year",
								},
							].map((item, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
									className="flex flex-col gap-1 py-4 border-b border-border"
								>
									{/* Role + date on one line */}
									<div className="flex items-baseline justify-between gap-4">
										<p className="text-sm font-medium text-foreground">{item.role}</p>
										<p className="text-xs text-muted-foreground shrink-0">{item.date}</p>
									</div>
									{/* Place on its own line on mobile */}
									<p className="text-xs text-muted-foreground">{item.place}</p>
									{/* Detail below */}
									<p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
