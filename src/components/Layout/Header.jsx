import Image from 'next/image';
import classes from './Header.module.css';

const Header = () =>
{
    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <Image src='/logo.png' width='60' height='60' alt='todo-logo' />
                <h1>TODO LIST</h1>
            </nav>
        </header>
    )
}

export default Header