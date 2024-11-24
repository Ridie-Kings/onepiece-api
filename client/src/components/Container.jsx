import PropTypes from 'prop-types';
import { Navbar } from './Navbar';

export const Container = ({ children, className }) => {
    return (
        <>
            <Navbar />
            <main className={`w-screen h-screen flex flex-col items-center bg-yellow-950 ${className}`}>
                {children}
            </main>

        </>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}