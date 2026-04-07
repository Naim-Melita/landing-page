import Slider from "react-slick";
import carousel1 from "../assets/carousel/carousel1.png";
import carousel2 from "../assets/carousel/carousel2.png";
import carousel3 from "../assets/carousel/carousel3.png";
import carousel4 from "../assets/carousel/carousel4.png";
import carousel5 from "../assets/carousel/carousel5.png";
import carousel6 from "../assets/carousel/carousel6.png";

type Project = {
  title: string;
  img: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-armelix-border shadow-lg bg-armelix-surface backdrop-blur">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-armelix-text">{project.title}</h3>
      </div>
    </div>
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
    <section className="bg-armelix-background px-0 md:px-4 py-10 md:py-20" id="portfolio">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-armelix-primary text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 text-center">
          Soluciones para que puedas vender en internet
        </h2>

        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:hidden">
          {projects.map((project) => (
            <div key={project.title} className="min-w-[86vw] max-w-[86vw] snap-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <Slider {...settings} className="hidden px-2 sm:px-4 md:block md:px-6">
          {projects.map((project, index) => (
            <div key={index} className="px-2 sm:px-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
