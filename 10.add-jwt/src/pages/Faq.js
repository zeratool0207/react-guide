import React, { useState, useEffect } from 'react';


const Faq = () => {

    const [ internetFaqs, setInternetFaqs ] = useState([]);
    const [ paperFaqs, setPaperFaqs ] = useState([]);
    

    useEffect( () => {
        setInternetFaqs( data1 );
        setPaperFaqs( data2 );
    },[]);

    const data1 = [
        {
            "num": "1", 
            "question": "아이디나 비밀번호는 어떻게 변경하나요?", 
            "answer": "아이디를 변경할 수 없습니다. 비밀번호를 변경하실 떄에는 사이트상단 마이페이지 나의정보에서 변경하실 수 있습니다."
        },
        {
            "num": "2", 
            "question": "아이디나 비밀번호를 잊어버렸습니다. ",
            "answer": "아이디나 비밀번호를 분실하셨을 때에는 로그인 화면의 ID/PW 찾기를 클릭 하시면 아이디찾기 및 비밀번호 재발급 메뉴를 통하여 아이디를 찾거나 비밀번호를 재발급 받으실 수 있습니다.",
        },
        {
            "num": "3", 
            "question": "회원탈퇴는 어떻게 하나요?",
            "answer": `회원탈퇴를 하시려면 로그인을 하신 후 사이트 상단 고객라운지안의 마이페이지 회원탈퇴를 이용하시면 됩니다.
                       ※ 탈퇴하신 회원은 재가입시 같은 아이디를 사용하실 수 없습니다.`,
        },
        {
            "num": "4", 
            "question": "내가 이용중인 법원과 사용기간, 결제내역, 사이버머니 내역을 알고 싶습니다.",
            "answer": "사이트 상단 고객라운지안의 마이페이지 결제관리 사이버머니내역에서 확인을 하실 수 있습니다",
        },
        {
            "num": "5", 
            "question": "서비스 만료 후 연장이나 현재 서비스 받고있는 지역 외다른 지역의 물건을 알아보고 싶을 때 어떻게 하나요?",
            "answer": `
                1. 기간연장은 사이트 상단 "고객라운지"안의 요금/결제 결제하기에서 연장하시면 됩니다.
                2. 현재 이용 중인 지역 외 다른 지역을 이용 하실 때, 건당결제를 이용하시거나 ARS를 이용하여 상세정보를 팩스로 받아보실 수 있습니다.
            `,
        },
        
        {
            "num": "6", 
            "question": "계산서를 받고 싶습니다.",
            "answer": "사이트 상단의 고객라운지안의 요금/결제 계산서신청을 클릭하여 신청하세요.",
        },
        {
            "num": "7", 
            "question": "경매에 대한 각종 서식, 관련업체 전화번호 등이 궁금합니다.",
            "answer": "사이트 메뉴 커뮤니티 에 자료실이 마련되어 있습니다. 법원안내와 입찰전체크사항, 경매에 필요한 각종 서식, 관련업체에 대한 자료를 확인할 수 있습니다.",
        },
        {
            "num": "8", 
            "question": "등기부등본, 감정평가서가 안열립니다.",
            "answer": "Acrobat Reader를 설치(재설치)하세요.",
        },
        {
            "num": "9", 
            "question": "상세페이지가 뜨지않아요.",
            "answer": "익스플로어 메뉴에서 [도구]-> [팝업 차단]-> 팝업 차단 끄기 를 선택하신 후 사용하세",
        },
        {
            "num": "10", 
            "question": "사이트내용이 동일한 내용만 반복되거나, 변화가 없습니다.",
            "answer": `
                1. 도구에서 인터넷옵션을 클릭합니다.
                2. 검색기록에서 설정 버튼을 클릭합니다.
                3. 페이지를 열 때마다 를 선택하고 확인을 누릅니다.
            `,
        },
        {
            "num": "11", 
            "question": "전자지번도나 디지털지도가 보이지 않습니다.",
            "answer": `
                1. 인터넷 주소창 오른쪽 끝에 있는 호환성 보기 버튼(종이 찢어진 모양)을 클릭합니다.
                2. 인터넷 주소창에서 호환성 보기 버튼이 보이지 않으시면 인터넷 주소창 밑에 [도구] -> [호환성 보기]를 클릭합니다.
                3. 호환성 보기 버튼클릭 혹은 체크를 하여도 잘 보이지 않는다면 인터넷 주소창 밑에 [도구] -> [호환성 보기 설정]을 클릭합니다.
                4. [호환성 보기 설정] 창이 뜨면 [추가]버튼을 클릭합니다.
                5. 추가 확인 후 [닫기]를 눌러 창을 닫습니다.
            `,  
        },
        {
            "num": "12",
            "question": "가맹점 홈페이지가 보이지 않을 경우 ",
            "answer": "1. 도구에서 인터넷옵션을 클릭합니다.",
        },
        {
            "num": "13", 
            "question": "프린트 할 때 오른쪽 부분이 짤려 보이지 않습니다.",
            "answer": "1. 인터넷 창에서 [파일]> [페이지 설정] 으로 들어가신 후 여백을 5로 맞춰 주세요.",
        },
        {
            "num": "14", 
            "question": "상세페이지가 작게 인쇄 되요.",
            "answer": "인터넷 익스플로러 7 사용자일 경우 익스플로러 8 로 업그레이드 후에, 페이지 설정에 크기에 맞게 축소를 체크 해제 후 인쇄하세요.",
        },
        {
            "num": "15", 
            "question": "자동결제 카드변경 방법",
            "answer": "2. 변경을 원하는 카드를 선택하여 변경하기 클릭",
        },
        {
            "num": "16", 
            "question": "원격지원 접속방법 [ActiveX 설치가 가능한 경우]",
            "answer": "상단의 노란바를 선택하고 '추가기능설치' 클릭",
        },
        {
            "num": "17", 
            "question": "원격지원 접속방법 [ActiveX 설치가 불가능한 경우]",
            "answer": "상단의 노란바를 선택하고 '추가기능설치' 클릭",
        },
        {
            "num": "18", 
            "question": "입찰표 인쇄안될때",
            "answer": "18번 answer",
        },
        {
            "num": "19", 
            "question": "무료쿠폰 사용 시 휴대폰 인증창이 뜨지 않을 경우.",
            "answer": "19번 answer",
        },
        {
            "num": "20", 
            "question": "쿠키 및 임시파일 제거방법",
            "answer": "20번 answer",
        },
        {
            "num": "21", 
            "question": "Adobe Acrobat Reader DC 관련 처리방법",
            "answer": "21번 answer",
        },
        {
            "num": "22", 
            "question": "로그인이 되지 않은 경우(인증서오류).",
            "answer": "22번 answer",
        },
        {
            "num": "23", 
            "question": "은행 송금을 했는데 이용이 되지 않을 때",
            "answer": "23번 answer",
        },
    ];

    const data2 = [
        {
            "num": "1", 
            "question": "자동응답 서비스 (ARS) 번호 좀 알려주세요.",
            "answer": "1번 answer",
        },
        {
            "num": "2", 
            "question": "구독신청하고 입금했는데 언제쯤 정보지가 오나요? ",
            "answer": "2번 answer",
        },
        {
            "num": "3", 
            "question": "구독하고 싶은데 구독료 체계와 요금은 얼마입니까?",
            "answer": "3번 answer",
        },
        {
            "num": "4", 
            "question": "ARS에서 FAX 신청을 했는데 안됩니다.",
            "answer": "4번 answer",
        },
        {
            "num": "5", 
            "question": "매각결과를 알고 싶습니다.",
            "answer": "5번 answer",
        },
        {
            "num": "6", 
            "question": "지역에 따른 관할 법원이 궁금합니다.",
            "answer": "6번 answer",
        },
        {
            "num": "7", 
            "question": "정보지가 연착, 불착됐습니다",
            "answer": "7번 answer",
        },
    ]

    return (
        <>
            <div>
                <div>전자신문(인터넷)</div>
                {internetFaqs.map((item) => (
                    <div
                        onClick={() => alert(item.answer)}
                    >{item.num} : {item.question}</div>
                ))}
            </div>
            <br/>
            <div>
                <div>인쇄신문(정보지)</div>
                {paperFaqs.map((item) => (
                    <div
                        onClick={() => alert(item.answer)}
                    >{item.num} : {item.question}</div>
                ))}
            </div>
        </>
    )
}

export default Faq;