import React,{ useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const idRef = useRef();
    const pwRef = useRef();

    const navigate = useNavigate();

    const [ enteredId, setEnteredId ] = useState('');
    const [ enteredPw, setEnteredPw ] = useState('');
    const [ btnIsActive, setBtnIsActive ] = useState(false);


    useEffect( () => {
        idRef.current.focus();
    },[]);


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
            alert('아이디와 비밀번호를 다시 입력해주세요.');
            init();
        }
    }

    return (
        <>
            <div>
                <div>
                    ID: 
                    <input
                        type="text"
                        ref={idRef}
                        value={enteredId}
                        onKeyPress = {onKeyIdPress}
                        onChange = {(e) => setEnteredId(e.target.value)}
                    />
                </div>
                <div>PW: 
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
                        >로그인</button>
                    :
                        <button>로그인</button>
                }
            </div>
        </>
    )
}

export default Login;