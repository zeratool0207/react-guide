/* 추후 수정 */
export const getLocalStorage =()=>{
    let check = false;
    /* localStorage에 담은 이름으로!! */
    if( localStorage.getItem('email') != null ) {
        check = true;
    } 

    return check;
}
