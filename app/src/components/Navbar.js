import Link from "next/link";
import Image from "next/image";
import './Navbar.css'

import logo from '@/components/img/logo-agendaai.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link className="logo" href='/'>
                    <Image src={logo} alt="logo_agendaai"/>
                </Link>
            </div>
        </nav>
    )
}