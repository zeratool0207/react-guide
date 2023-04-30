import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';

import React from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    const logoutHander = () => {
        dispatch(authActions.logout());
    }

    return (
        <header>
            <h1>Redux Auth</h1>
            { isAuth &&
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={logoutHander}>Logout</button>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header;