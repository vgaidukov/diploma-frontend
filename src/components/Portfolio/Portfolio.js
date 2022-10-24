import { Link } from 'react-router-dom';
import '../Link/Link.css'
import '../List/List.css'
import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='list portfolio__links'>
                <li className='portfolio__item'>
                    <Link className='link portfolio__link' to=''>
                        <p className='portfolio__link-name'>Статичный сайт</p>
                        <p className='portfolio__arrow'>&#8599;</p>
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link className='link portfolio__link' to=''>
                        <p className='portfolio__link-name'>Адаптивный сайт</p>
                        <p className='portfolio__arrow'>&#8599;</p>
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link className='link portfolio__link' to=''>
                        <p className='portfolio__link-name'>Одностраничное приложение</p>
                        <p className='portfolio__arrow'>&#8599;</p>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;