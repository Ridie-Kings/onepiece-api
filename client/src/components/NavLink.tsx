export const NavLink = ({
  href,
  icon,
  text,
  mobile = false,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  mobile?: boolean;
}) => (
  <li>
    <a
      href={href}
      className={`text-yellow-500 hover:text-yellow-400 transition-colors font-semibold flex items-center gap-2
          ${mobile ? "py-2" : ""}`}
    >
      {icon}
      {text}
    </a>
  </li>
);
