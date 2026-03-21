// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { projects } from "@/data/projects";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// const ease = [0.16, 1, 0.3, 1] as const;

// const CaseStudy = () => {
//   const { slug } = useParams();
//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return (
//       <main className="min-h-screen flex items-center justify-center">
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl">Project not found</h1>
//           <Link to="/" className="text-primary underline underline-offset-4">
//             Back to home
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="overflow-x-hidden">
//       <Navigation />

//       {/* Hero */}
//       <section className="pt-32 pb-16 md:pt-40 md:pb-24">
//         <div className="container mx-auto px-6 md:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ duration: 0.7, delay: 0.1, ease }}
//           >
//             <Link
//               to="/#work"
//               className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               Back to all work
//             </Link>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ duration: 0.7, delay: 0.2, ease }}
//             className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3"
//           >
//             {project.category}
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ duration: 0.8, delay: 0.3, ease }}
//             className="text-balance max-w-3xl"
//           >
//             {project.title}
//           </motion.h1>
//         </div>
//       </section>

//       {/* Cover image */}
//       <motion.section
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4, ease }}
//         className="container mx-auto px-6 md:px-12 mb-16 md:mb-24"
//       >
//         <div className="aspect-[16/9] rounded-lg overflow-hidden">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </motion.section>

//       {/* Meta + Overview */}
//       <section className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
//           <motion.div
//             initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
//             whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, ease }}
//             className="md:col-span-4 space-y-6"
//           >
//             <div>
//               <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Role</p>
//               <p className="text-sm font-medium text-foreground">{project.role}</p>
//             </div>
//             <div>
//               <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Timeline</p>
//               <p className="text-sm font-medium text-foreground">{project.timeline}</p>
//             </div>
//             <div>
//               <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Tools</p>
//               <div className="flex flex-wrap gap-2 mt-1">
//                 {project.tools.map((tool) => (
//                   <span
//                     key={tool}
//                     className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
//             whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, delay: 0.1, ease }}
//             className="md:col-span-8"
//           >
//             <h2 className="mb-6">Overview</h2>
//             <p className="text-muted-foreground leading-relaxed text-pretty text-base md:text-lg">
//               {project.overview}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content sections */}
//       {project.sections.map((section, i) => (
//         <section key={i} className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
//           <motion.div
//             initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
//             whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.7, delay: 0.05, ease }}
//             className="max-w-3xl mx-auto"
//           >
//             <h3 className="mb-4">{section.heading}</h3>
//             <p className="text-muted-foreground leading-relaxed text-pretty">
//               {section.body}
//             </p>
//           </motion.div>

//           {section.image && (
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.7, delay: 0.15, ease }}
//               className="mt-10 max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden"
//             >
//               <img
//                 src={section.image}
//                 alt={section.heading}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           )}
//         </section>
//       ))}

//       {/* Next project */}
//       {(() => {
//         const currentIndex = projects.findIndex((p) => p.slug === slug);
//         const next = projects[(currentIndex + 1) % projects.length];
//         return (
//           <section className="py-16 md:py-24 bg-card">
//             <div className="container mx-auto px-6 md:px-12">
//               <motion.div
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, ease }}
//               >
//                 <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
//                   Next project
//                 </p>
//                 <Link
//                   to={`/work/${next.slug}`}
//                   className="group inline-flex items-center gap-3"
//                 >
//                   <h2 className="group-hover:text-muted-foreground transition-colors duration-300">
//                     {next.title}
//                   </h2>
//                   <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="mt-1 group-hover:translate-x-1 transition-transform duration-300">
//                     <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </Link>
//               </motion.div>
//             </div>
//           </section>
//         );
//       })()}

//       <Footer />
//     </main>
//   );
// };

// export default CaseStudy;
