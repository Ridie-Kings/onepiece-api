import PropTypes from 'prop-types';
import { Navbar } from './Navbar';

export const Container = ({ children }) => {
    return (
        
        <body className="w-screen min-h-screen bg-yellow-950 flex flex-col">
            <Navbar />
            {children}
        </body>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired
}