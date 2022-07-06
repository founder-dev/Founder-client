import { useState } from "react";

const SurveyPage = () =>{

    const[value, setValue] = useState("");  //답한 answer value
    const[answer, setAnswer] = useState(""); //답한 answer 번호
    const[id, setId] = useState(1); //현재 진행되고 있는 질문 번호
    const [selected, setSelected] =useState([false,false,false,false,false,false,false,false,false]);

    const answerValue =[
        " "," ",
    ];
    //백엔드에게 전할 데이터
    var answerSet =[
        {
            question_num : "", //질문
            answer_num:"" //답변
        },
        {
            question_num : "", //질문
            answer_num:"" //답변
        },
    ];

    function selectAnswer(e){

        setId(id);
        const answer = String(e.target.id);
        const value = e.target.value;
        setValue(e.target.value);
        console.log(e.target.value);
        answerSet[id-1].question_num = String(id);
        answerSet[id-1].answer_num = answer;
        answerValue[id-1] = value;
        console.log(answerValue);
        selected[id] = true;
        setId(id+1);
    };


    return(
        <>
        <div id ="1">당신의 성별을 무엇인가요?</div>
        <button onClick={selectAnswer} id = "1" value ="저는여성이에요">저는여성이에요</button>
        <button onClick={selectAnswer} id ="2" value ="저는남성이에요">저는남성이에요</button>
        <div>{answerValue[id-1]}</div>
        {
            selected[id-1] && 
            <>
            <div id ="2">물건을살때어떤어려움을겪나요?</div>
            <button onClick={selectAnswer} id = "1" value ="물건을 사지 않아서 고민이에요">물건을 사지 않아서 고민이에요</button>
            <button onClick={selectAnswer} id ="2" value ="사고싶은 물건이 확실해서 고민 안해요">사고싶은 물건이 확실해서 고민 안해요</button>
            <div>{answerValue[id-1]}</div>
            </>
        }

        </>
    );


}

export default SurveyPage;