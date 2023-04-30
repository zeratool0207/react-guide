import React,{ useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../src/service/login/login.service';
import message from '../util/message';

const Login = () => {

    const idRef = useRef();
    const pwRef = useRef();

    const navigate = useNavigate();

    const [ enteredId, setEnteredId ] = useState('');
    const [ enteredPw, setEnteredPw ] = useState('');
    const [ btnIsActive, setBtnIsActive ] = useState(false);


    useEffect( () => {
        idRef.current.focus();
        login1();
    },[]);

    const login1 = () => {
        console.log('login service test proceeding...');
        // let param = {
        //     id: enteredId,
        //     pw: enteredPw
        // }
    
        // loginService.login1(
        //   'login1',
        //   param,
        //   res => {
        //     setData(res.data)
        //   },
        //   err => console.log(err)
        // )
      }



    useEffect( () => {
        if (enteredId !== '' && enteredPw !== '' ) {
          setBtnIsActive(true);
        } else {
          setBtnIsActive(false);
        }
    },[enteredId, enteredPw]);


    const onKeyIdPress = (e) => {
        if(enteredId !== '' && e.key === 'Enter'){
            pwRef.current.focus();
        }
    }

    const onKeyPassPress = (e) => {
        if(btnIsActive && e.key === 'Enter'){
            btnLogin();
        }
      }


    const init = () => {
        setEnteredId('');
        setEnteredPw('');
        setBtnIsActive(false);
        idRef.current.focus();
    }


    const btnLogin = () => {
        if ( enteredId === 'developer' && enteredPw === '1111' ) {
            navigate('/main');
        } else {
            alert(message.LOGIN_VALIDATION);
            init();
        }
    }

    return (
        <>
            <div>
                <div>
                    { message.LOGIN_ID }
                    <input
                        type="text"
                        ref={idRef}
                        value={enteredId}
                        onKeyPress = {onKeyIdPress}
                        onChange = {(e) => setEnteredId(e.target.value)}
                    />
                </div>
                <div>
                    { message.LOGIN_PW } 
                    <input
                        type="password"
                        ref={pwRef}
                        value={enteredPw}
                        onKeyPress = {onKeyPassPress}
                        onChange = {(e) => setEnteredPw(e.target.value)}
                    />
                </div>
            </div>
            <div>
                {btnIsActive
                    ?
                        <button
                            onClick={btnLogin}
                        >{ message.LOGIN_BUTTON }</button>
                    :
                        <button>{ message.LOGIN_BUTTON }</button>
                }
            </div>
        </>
    )
}

export default Login;