// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// interface CaseStudyCardProps {
// 	slug: string;
// 	title: string;
// 	category: string;
// 	description: string;
// 	image: string;
// 	tools: string[];
// 	index: number;
// }

// const CaseStudyCard = ({ slug, title, category, description, image, tools, index }: CaseStudyCardProps) => {
// 	const isLarge = index % 3 === 0;

// 	return (
// 		<motion.article
// 			initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
// 			whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
// 			viewport={{ once: true, amount: 0.2 }}
// 			transition={{
// 				duration: 0.7,
// 				delay: (index % 3) * 0.1,
// 				ease: [0.16, 1, 0.3, 1],
// 			}}
// 			className={`group ${isLarge ? "md:col-span-2" : ""}`}
// 		>
// 			<Link to={`/work/${slug}`}>
// 				<div className="relative overflow-hidden rounded-lg mb-4">
// 					<div className={`relative ${isLarge ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
// 						<img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
// 						<div className="absolute inset-0 duration-500" />
// 					</div>
// 				</div>
// 				<div className="space-y-1.5">
// 					<p className="text-xs uppercase tracking-[0.15em] text-primary font-medium">{category}</p>
// 					<h3 className="font-display text-xl md:text-2xl leading-[1.2] group-hover:text-muted-foreground transition-colors duration-300">{title}</h3>
// 					<p className={`text-sm text-muted-foreground leading-relaxed ${isLarge ? "" : "max-w-md"}`}>{description}</p>
// 					<div className="flex flex-wrap gap-1.5 pt-1">
// 						{tools.map((tool) => (
// 							<span key={tool} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
// 								{tool}
// 							</span>
// 						))}
// 					</div>
// 				</div>
// 			</Link>
// 		</motion.article>
// 	);
// };

// export default CaseStudyCard;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
	slug: string;
	title: string;
	category: string;
	description: string;
	image: string;
	tools: string[];
	index: number;
}

const CaseStudyCard = ({ slug, title, category, description, image, tools, index }: CaseStudyCardProps) => {
	return (
		<motion.article
			initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{
				duration: 0.7,
				delay: index * 0.08,
				ease: [0.16, 1, 0.3, 1],
			}}
			className="group"
		>
			<Link to={`/work/${slug}`}>
				<div className="flex flex-col sm:flex-row gap-6 items-start">
					{/* Image — 40% */}
					<div className="w-full sm:w-[40%] flex-shrink-0 overflow-hidden rounded-lg aspect-[4/3]">
						<img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
					</div>

					{/* Text — 60% */}
					<div className="w-full sm:w-[60%] flex flex-col justify-center gap-2 py-1">
						<p className="text-xs uppercase tracking-[0.15em] text-primary font-medium">{category}</p>
						<h3 className="font-display text-xl md:text-2xl leading-[1.2] group-hover:text-muted-foreground transition-colors duration-300">{title}</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
						<div className="flex flex-wrap gap-1.5 pt-1">
							{tools.map((tool) => (
								<span key={tool} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
									{tool}
								</span>
							))}
						</div>
					</div>
				</div>
			</Link>
		</motion.article>
	);
};

export default CaseStudyCard;
