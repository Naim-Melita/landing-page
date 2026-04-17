import Slider from "react-slick";
import { motion } from "framer-motion";
import carousel1 from "../assets/carousel/carousel1.png";
import carousel2 from "../assets/carousel/carousel2.png";
import carousel3 from "../assets/carousel/carousel3.png";
import carousel4 from "../assets/carousel/carousel4.png";
import carousel5 from "../assets/carousel/carousel5.png";
import carousel6 from "../assets/carousel/carousel6.png";
import { fadeUp, staggerContainer, viewport } from "./motion";
import SectionCTA from "./SectionCTA";

type Project = {
  title: string;
  img: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="rounded-xl border border-armelix-border bg-armelix-surface shadow-lg backdrop-blur mt-3"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className="overflow-hidden rounded-t-xl">
        <motion.img
          src={project.img}
          alt={project.title}
          className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-armelix-text">{project.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "Páginas web para captar consultas",
      img: carousel1,
    },
    {
      title: "Landing pages para vender servicios",
      img: carousel2,
    },
    {
      title: "Presencia online para tu negocio",
      img: carousel3,
    },
    {
      title: "Campañas para generar mensajes",
      img: carousel4,
    },
    {
      title: "Seguimiento por WhatsApp",
      img: carousel5,
    },
    {
      title: "Seguimiento para no perder consultas",
      img: carousel6,
    },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false },
      },
    ],
  };

  return (
    <motion.section
      className="bg-armelix-background px-0 py-10 md:px-4 md:py-20"
      id="portfolio"
      variants={staggerContainer(0.16)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          variants={fadeUp()}
          className="text-armelix-primary px-4 pb-8 text-center text-3xl font-bold leading-tight tracking-[-0.015em] md:text-4xl"
        >
          Soluciones para que puedas vender en internet
        </motion.h2>

        <motion.div
          className="mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden"
          variants={staggerContainer(0.12, 0.1)}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="min-w-[86vw] max-w-[86vw] snap-center"
              variants={fadeUp()}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp(0.12)} className="mt-4 hidden pb-3 md:block">
          <Slider {...settings} className="hidden px-2 sm:px-4 md:block md:px-6">
          {projects.map((project, index) => (
            <div key={index} className="px-2 sm:px-3">
              <ProjectCard project={project} />
            </div>
          ))}
          </Slider>
        </motion.div>

        <motion.div variants={fadeUp(0.16)}>
          <SectionCTA />
        </motion.div>
      </div>
    </motion.section>
  );
}
