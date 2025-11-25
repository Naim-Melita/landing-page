import Slider from "react-slick";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website Design",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_bfIuv7-CiP-SjQEoTOxsdHSbjDmnY52IUPPZJ0SyPf65wUAx5VX-euF4-AHvdNo4pvzG8yWsmB8FVsnkkmZmFEWuwXQiLz8FgnNih6FDjZQDxYPSeWZQBGpCw7nqULTzILLsYT0K-zKyNJxpwlgyMFzfQhbxxijtnBiVQGJW3JZnxA5yDy8NdODQQ4IpdtpYR_JwSP8r2sub2vQcPqhzuRuCKtdrL-KlxZT44EgUWDWuyUVLxamjjszI2guowdg5DTWHuTnV420",
    },
    {
      title: "Portfolio Website Design",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfijNd79JCI-rP9wh_hqXtVbqh-1KoyiyuvqaQ92oHOqFi_47ols-g4WmJQklqlUJSmuHheL0P7v6MatjSu1rilhr3tDWx3S1fDsU7BD0WlSG2SajU4U-xBZLQRdyMEDPPhoFOp09bHyw99Aj-ZzFp-RBYby71rI1a1GG8wRs7UU_liCtA_duz9LxtONnqF-4xwztSSK7agTI73b_p5k9QfSTsSal7RAtIPFRNp_DXXyVnPpF4G6WB1m5dohyjkq1crisNRuZijFk",
    },
    {
      title: "Corporate Website Design",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_VT9rxTiR39f9ilEDCo_sT0n9Q6kNtaggnRIUtGaWXKaH6iAOY0leT5kkykinFGg0eG-xILjhuPHH1d1fWNfTmJQgmwE-lcU5KOa6n8IPKA4ueRHGcaS3uLh4V6YmhtgGcyQlJPt4P0IzRpU82DA76oXwmgrjXR9iaQCCYyn5Ee6iKn7N6qumM-_LhE3Dvq5Y14l8INdbRQWBgqhWiQid0MhTLmcfitwI7dWymukQ-QnRWPw7hGJDyoy3LKWb9SIfgZyZg-0B9QA",
    },
    {
      title: "Landing Page Design",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRJFlgnySNyCIPjHsgjrXZB34mM8wQi4oNqlE67E1pFVgMcylVG0bHO4YWwQvSgoBa34nv-WugJrQlFeSuJp6lnoPILNTjTNdNhn0yIn-a5gEr9gAip_WBbDgQucYGGb-E4qMtJkNhJLGAUPH6QLgG_LDAa1H3iHdbHOerWLv3njEL1dz1ri-nw0RnZ6T98F6jP5SCrjlFQ3WAV9VdAytY6xJjxd_vkFpsM7Zs3KaGX3pMDi3gWJZQ6uscRDzrg-o1dU9KlgSTGVY",
    },
    {
      title: "Mobile App Design",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkkmhkdg2trftOzjWdYHUyiQGvAtUc9oZ1vQC5hdkjHjDuWxcsT12gwA1e4hK7KjT_WYaL12kfVFOWMKDVz9HuXP1kTTWkeJntWOLcjMArfvH9_dSz8V5gelpiLfUStKJiD7x6ZKpVr_nKIr_bjdzyfVi2vGxxRxbF_LrvWdar4EqRW6QMParKzf_rxSB5Z0QUsxfY9NwbXet2DiCWKhYWWva3xzldtuDxiTpwa0QaEk6lLbxFPoRhSsJKkN0tV0aChpdm5d3b39w",
    },
    {
      title: "Web Application Design",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLp29j20fmF8JoQyN8PCLdNZunag0NJPXWlivcW-a28FJ3X4-PrsGZeO-RQNEW7SPMvJ7ha-wQWRlq-Grwbl-dZvVi_tdL2_EwVL1aYY2ljijybHytUnMoMoZPuZwT-vjjkNSGMHGkIvcZdwbLm5JtWDTBU9OQFGIVJzgIoQFSzt08FCuJCqrFvE_fkPWa-UZ8L064-JPxsVYsm_bIVtrvkaFjikVYZYS4MgRjrLnRfux_vnpfpGTC1qV8KEV1oCAlmiL-f1EVquA",
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
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "24px" },
      },
    ],
  };

  return (
    <section className="px-0 md:px-4 py-10 md:py-20" id="portfolio">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-purpleText text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 text-center">
          Nuestros Servicios
        </h2>
        <Slider {...settings} className="px-4 md:px-6">
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div className="overflow-hidden rounded-xl shadow-lg bg-white/80 backdrop-blur">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
