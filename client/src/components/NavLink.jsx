export const NavLink = ({ href, icon, text, mobile = false }) => (
    <li>
        <a
            href={href}
            className={`text-yellow-500 hover:text-yellow-400 transition-colors font-semibold flex items-center gap-2
          ${mobile ? 'py-2' : ''}`}
        >
            {icon}
            {text}
        </a>
    </li>
);

import PropTypes from 'prop-types';

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    mobile: PropTypes.bool,
};