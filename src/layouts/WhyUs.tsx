import { BodyWrapper, SectionTitle } from "../components";
import { SectionTitleProps } from "../components/SectionTitle";
import WhyUsItem, {
  WhyUsItemProps,
} from "../components/WhyUsItem";

function WhyUs() {
  const titleProps: SectionTitleProps = {
    title: "¿Por qué elegirnos?",
    detail: "Renders Profesionales",
    extra: (
      <p className="px-16 mb-4">
        MR STUDIO es un{" "}
        <span className="font-bold">
          estudio de arquitectura y render 3D
        </span>
        , compuesto por un amplio equipo de profesionales de
        la arquitectura y apasionados por la tecnología con
        una amplia experiencia en el sector, cuyo principal
        objetivo es{" "}
        <span className="font-bold">
          potenciar la venta inmobiliaria
        </span>{" "}
        gracias a nuestro contenido digital CGI,{" "}
        <span className="text-green-300 font-bold">
          la forma en que lo hacemos es lo que nos hace
          diferentes
        </span>
        .
      </p>
    ),
  };
  const listDetails: Array<WhyUsItemProps> = [
    {
      title: "Crea mayor impacto visual en el espectador",
      detail:
        "Servicios de render: nuestro rendering studio cuenta con certificados oficiales de los softwares 3D más competentes del mercado actualmente, lo que nos avala en mejor resultado hiperrealista.",
    },
    {
      title: "Agiliza un 80% tus ventas",
      detail:
        "Gracias a nuestra plataforma Global Station, el cliente podrá ver la evolución del proyecto, comentar y visualizar en todo momento todos sus proyectos.",
    },
    {
      title: "Visualiza tus proyectos",
      detail:
        "Tenemos personal docente en nuestro equipo, por lo que esto garantiza estar actualizados tecnológicamente de manera directa.",
    },
    {
      title: "Reduce tiempos de entrega",
      detail:
        "Para lograr trabajar con nosotros nuestros trabajadores han sido evaluados estrictamente para ofrecer la mejor calidad del mercado.",
    },
  ];
  return (
    <BodyWrapper
      children={
        <>
          <div id="metodo-trabajo" className="">
            <SectionTitle {...titleProps}></SectionTitle>

            <div className="flex flex-row px-16">
              <img
                className="w-3/6"
                src="https://globalcgi.eu/wp-content/uploads/Cabrils_INT_EDIFICIO-2_C07-Salon-P1_HQcomp-scaled.jpg"
                alt="img"
              />
              <div className="w-3/6 px-6">
                <h3 className="uppercase ">
                  Servicio de renderizado
                </h3>
                {listDetails.map((detail) => (
                  <WhyUsItem {...detail} />
                ))}
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}

export default WhyUs;
