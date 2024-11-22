import PropTypes from 'prop-types';
import { Navbar } from './Navbar';

export const Container = ({ children }) => {
    return (
        <main className="w-screen h-screen bg-yellow-950">
            <Navbar />
            {children}
        </main>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired
}