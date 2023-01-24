import { Section } from "./Header";

export interface NavButtonProps {
  section: Section;
}

function NavButton({ section }: NavButtonProps) {
  return (
    <a
      href={section.path}
      className="hover:border hover:border-white hover:rounded-sm  cursor-pointer p-4 flex bottom-4"
    >
      <span className="uppercase text-xs">
        {section.label}
      </span>
    </a>
  );
}
export default NavButton;
