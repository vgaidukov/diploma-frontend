import '../Link/Link.css';
import './NavTab.css';

import { Link } from 'react-router-dom';

function NavTab() {
    return (
        <section className='nav-tab'>
            <Link className='nav-tab__link link' to='/login'>О проекте</Link>
            <Link className='nav-tab__link link' to='/login'>Технологии</Link>
            <Link className='nav-tab__link link' to='/login'>Студент</Link>
        </section>
    )
}

export default NavTab;