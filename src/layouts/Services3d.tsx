import { BodyWrapper, SectionTitle } from "../components";
import { SectionTitleProps } from "../components/SectionTitle";

export interface ServiceProps {
  icon: string;
  title: string;
  detail: string;
  url: string;
}

function Service({
  icon,
  title,
  detail,
  url,
}: ServiceProps) {
  return (
    <div className="w-1/4 p-8 border-slate-300 hover:bg-white cursor-pointer">
      <div className="w-full flex justify-center">
        <img src={icon} alt="icon" width="60" height="50" />
      </div>
      <br />
      <h4 className="text-2xl text-center py-1">{title}</h4>
      <p className="text-sm tracking-wide leading-loose">
        {detail}
      </p>
      <br />
      Saber más
    </div>
  );
}

function Services3d() {
  const titleProps: SectionTitleProps = {
    title: "Servicios Renders 3D",
    detail: "Descubre todo lo que podemos hacer por ti",
  };
  const servicios: Array<ServiceProps> = [
    {
      icon: "https://globalcgi.eu/wp-content/uploads/2021/12/icon01-1-1.svg",
      title: "Imágenes 3D",
      detail:
        "Imágenes fotorealistas para la visualización realista de futuros proyectos arquitectónicos.",
      url: "",
    },
    {
      icon: "https://globalcgi.eu/wp-content/uploads/2021/12/icon02.svg",
      title: "Tour virtual 360°",
      detail:
        "Visualiza de forma completa y detallada el interior y exterior de un inmueble.",
      url: "",
    },
    {
      icon: "https://globalcgi.eu/wp-content/uploads/2021/12/icon03.svg",
      title: "Animaciones 3D",
      detail:
        "Añade un efecto mucho más visual y dinámico en la presentación del inmueble.",
      url: "",
    },
    {
      icon: "https://globalcgi.eu/wp-content/uploads/2021/12/icon04.svg",
      title: "Planos 3D",
      detail:
        "Permiten contemplar características internas y externas de los proyectos.",
      url: "",
    },
  ];
  return (
    <div id="servicios-3d" className="bg-gray-100">
      <SectionTitle {...titleProps}></SectionTitle>
      <BodyWrapper
        children={
          <>
            {servicios.map((serv) => (
              <Service {...serv}></Service>
            ))}
          </>
        }
      ></BodyWrapper>
    </div>
  );
}

export default Services3d;
