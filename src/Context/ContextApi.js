import MyPortfolio from "../Pages/MyPortfolio";
// import TheOne from "../Pages/TheOne";
import Template from "../Pages/Template";
import WrappingLetter from "../Pages/WrappigLetter";

export const blogPost = [
  {
    name: "template",
    type_project: "template",
    titulo: "template",
    img_tumbnail: "https://i.ibb.co/fnxvswS/kda-2x.jpg",
    img_header: "https://ttager.netlify.app/img/oaAhri.jpg",
    img_header_MB: "https://ttager.netlify.app/img/oaAhri.jpg",
    img_next: "https://i.ibb.co/fnxvswS/kda-2x.jpg",
    link: "template",
    content: <Template />,
    show: false,
  },
  {
    name: "wrapping-letters",
    type_project: "Personal",
    titulo: "Wrapping Letters",
    img_tumbnail: "https://i.ibb.co/nmbfyz7/provisional-header.png",
    img_header: "https://i.ibb.co/nmbfyz7/provisional-header.png",
    img_header_MB: "https://i.ibb.co/nmbfyz7/provisional-header.png",
    img_next: "https://i.ibb.co/nmbfyz7/provisional-header.png",
    link: "wrapping-letters",
    content: <WrappingLetter />,
    show: true,
  },
  {
    name: "the-one",
    type_project: "Client",
    titulo: "The One",
    img_tumbnail: "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg",
    img_header: "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg",
    img_header_MB: "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg",
    img_next: "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg",
    link: "the-one",
    content: <Template />,
    show: false,
  },
  {
    name: "portfolio-project",
    type_project: "Personal",
    titulo: "Portfolio",
    img_tumbnail: "https://i.ibb.co/kyjcmpH/project-portfolio-tumbnail.jpg",
    img_header: "https://i.ibb.co/xMNnRZS/projects-portfolio-header.jpg",
    img_header_MB: "https://i.ibb.co/VVW3r1G/projects-portfolio-header-mobile.jpg",
    img_next: "https://i.ibb.co/tCVxqdT/project-portfolio-next-Post.jpg",
    link: "portfolio-project",
    content: <MyPortfolio />,
    show: true,
  },
];
