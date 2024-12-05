import PropTypes from 'prop-types';
import { Navbar } from './Navbar';

export const Container = ({ children, className }) => {
    return (
        <>
            <Navbar />
            <main className={`w-full h-full flex-1 overflow-x-hidden relative flex flex-col justify-center items-center bg-yellow-950 px-4  ${className}`}>
                {children}
            </main>

        </>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}