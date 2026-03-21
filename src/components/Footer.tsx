import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer id="contact" className="py-24 md:py-32">
			<div className="container mx-auto px-6 md:px-12">
				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-2xl"
				>
					<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Let's connect</p>
					<h2 className="text-balance mb-6">Have a project in mind?</h2>
					<p className="text-muted-foreground leading-relaxed mb-8 text-pretty">I'm always open to new opportunities, interesting projects, and good conversations about design and research.</p>
					<a
						href="mailto:erengulenoglu@yahoo.com"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
					>
						Say hello
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
							<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</a>
				</motion.div>

				<div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<p className="text-sm text-muted-foreground">© 2026 Eren Gulenoglu · All rights reserved</p>
					{/* <div className="flex gap-6">
            {["LinkedIn", "Dribbble", "Behance"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
