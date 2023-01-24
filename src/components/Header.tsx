import BodyWrapper from "./BodyWrapper";
import NavButton from "./NavButton";

export interface Section {
  path: string;
  label: string;
}

function Header() {
  const sections: Array<Section> = [
    {
      path: "#servicios-3d",
      label: "Servicios 3D",
    },
    {
      path: "#portfolio",
      label: "Portfolio",
    },
    {
      path: "#metodo-trabajo",
      label: "Metodología",
    },
  ];

  return (
    <BodyWrapper
      classWrapper="mt-0"
      children={
        <>
          <header className="text-slate-300 flex justify-center w-full mt-2">
            <ul className="flex flex-row border-b-2 w-full">
              <li className="w-3/6">
                <h1 className="font-bold text-3xl text-white font-sans">
                  MR STUDIO
                </h1>
              </li>
              {sections.map((section, index) => (
                <NavButton
                  key={"header-section-" + index}
                  section={section}
                ></NavButton>
              ))}
            </ul>
          </header>
        </>
      }
    ></BodyWrapper>
  );
}
export default Header;
