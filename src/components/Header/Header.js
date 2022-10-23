import '../Link/Link.css';
import './Header.css';

import { Switch, Route, Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function Header() {
    return (
        <section className='header'>
            <Link className='link' to='/'>
                <img className="header__logo" src={headerLogo} alt='логотип' />
            </Link>
            <div className='header__elements'>
                <Switch>
                    {/* <Route exact path='/login'>
                        <Link className='header__link link' to='/register'>Регистрация</Link>
                    </Route>
                    <Route exact path='/register'>
                        <Link className='header__link link' to='/login'>Вход</Link>
                    </Route> */}
                    <Route exact path='/'>
                        <Link className='header__signup link' to='/login'>Регистрация</Link>
                        <Link className='header__signin link' to='/login'>Войти</Link>
                    </Route>

                </Switch>
            </div>
        </section>
    )
}

export default Header;