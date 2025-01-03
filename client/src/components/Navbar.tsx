import { Ship, User, Flag, Earth, Grape, Zap, Map, Book } from 'lucide-react';
import { NavLink } from './NavLink';

export const Navbar = () => {

    return (
        <nav className=" sticky w-full bg-gradient-to-r from-red-800 to-red-900 shadow-lg z-50 flex items-center justify-center h-16">
 
                    {/* logo de la api */}
                    <ul className="hidden md:flex space-x-8">
                        <NavLink href="/" icon={<Ship className="w-5 h-5" />} text="Home" />
                        <NavLink href="/characters" icon={<User className="w-5 h-5" />} text="Characters" />
                        <NavLink href="/crews" icon={<Flag className="w-5 h-5" />} text="Crews" />
                        <NavLink href="/races" icon={<Earth className="w-5 h-5" />} text="Races" />
                        <NavLink href="/devil-fruits" icon={<Grape className="w-5 h-5" />} text="Devil's Fruits" />
                        <NavLink href="/hakis" icon={<Zap className="w-5 h-5" />} text="Hakis" />
                        <NavLink href="/origins" icon={<Map className="w-5 h-5" />} text="Origins" />
                        <NavLink href="/documentation" icon={<Book className="w-5 h-5" />} text="Docs" />
                    </ul>

        </nav>
    );
};