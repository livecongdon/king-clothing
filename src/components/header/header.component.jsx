import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom'; 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo-container' to='/' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut}>SIGN OUT</div>
                :
                <link className='option' to='/signin'>SIGN IN</link>
            }
        </div>
    </div>
)

export default Header;