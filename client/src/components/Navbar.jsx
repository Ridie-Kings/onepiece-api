import { Ship, Compass } from 'lucide-react';
import { NavLink } from './NavLink';

export const Navbar = () => {

    return (
        <nav className="bg-gradient-to-r from-red-800 to-red-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <Ship className="text-yellow-500 w-8 h-8 animate-[bounce_2s_ease-in-out_infinite]" />
                        <h1 className="text-2xl font-bold text-yellow-500 font-serif">One Piece Characters</h1>
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        <NavLink href="/" icon={<Ship className="w-5 h-5" />} text="Home" />
                        <NavLink href="/characters" icon={<Compass className="w-5 h-5" />} text="Characters" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};