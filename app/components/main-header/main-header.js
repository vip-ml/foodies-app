import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/"><Image src={logoImg} alt="A plate full of food" priority />Next Level Food</Link>
                <nav className={styles.nav}>
                    <ul>
                        <NavLink href="/meals">Browse Meals</NavLink>
                        <NavLink href="/community">Browse Community</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
}