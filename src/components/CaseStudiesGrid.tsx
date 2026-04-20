// import { motion } from "framer-motion";
// import CaseStudyCard from "./CaseStudyCard";
// import { projects } from "@/data/projects";

// const CaseStudiesGrid = () => {
//   return (
//     <section id="work" className="py-24 md:py-32">
//       <div className="container mx-auto px-6 md:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-16"
//         >
//           <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">
//             Selected work
//           </p>
//           <h2 className="text-balance">
//             Case studies & projects
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
//           {projects.map((project, i) => (
//             <CaseStudyCard key={project.slug} {...project} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudiesGrid;

import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";
import { projects } from "@/data/projects";

const CaseStudiesGrid = () => {
	return (
		<section id="work" className="py-24 md:py-32">
			<div className="container mx-auto px-6 md:px-12">
				<motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-16">
					<p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Selected work</p>
					<h2 className="text-balance">Case studies & Projects</h2>
				</motion.div>

				<div className="flex flex-col gap-10 md:gap-14">
					{projects.map((project, i) => (
						<CaseStudyCard key={project.slug} {...project} index={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudiesGrid;
