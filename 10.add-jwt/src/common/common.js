 /**
  *숫자 천단위 , 찍는 함수
  number 숫자
  */
 export const numFormat = ( number ) => {
     const toString =String(number)
     const regEx =/\B(?=(\d{3})+(?!\d))/g;
     return toString.replace(regEx,",");
 }

 /**
 *localstrage에 저장
 title:저장명
 data:데이터
 */
 export const setLocalStorage =( title, data ) => {
    localStorage.setItem( title, data );
}

/**
 *localstrage에서 데이터 지우기
 title:저장명
 */
 export const removeLocalStorage =( title ) => {
    localStorage.removeItem( title );
}

/**
 *localstrage에서 데이터 지우기
 title:저장명
 */
 export const getLocalStorage =( title ) => {
    localStorage.getItem( title );
}



/**
 *localstrage에서 데이터 꺼내기
 title:저장명
 */
 export const getLocal =( ...obj )=>{
    let result = "";

    if ( obj.length === 1 ) {
        result = localStorage.getItem( obj[0] );
    } else if (obj.length === 2 ) {
        result = localStorage.getItem( obj[0][obj[1]] );
    } else if (obj.length === 3 ) {
        result = localStorage.getItem( obj[0][obj[1]][obj[2]] );
    } else if (obj.length === 4 ) {
        result = localStorage.getItem( obj[0][obj[1]][obj[2]][obj[3]] );
    }

    return result;
}
