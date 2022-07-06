import { useState } from "react";
import Surveydata from '../../assets/Survey.json';
import answerSet from '../../assets/answerSet.json';
import answerValue from '../../assets/answerValue.json';

const Survey = () =>{

    const[value, setValue] = useState(["",""]);  //답한 answer value
    const[answer, setAnswer] = useState(""); //답한 answer 번호
    const[id, setId] = useState(1); //현재 진행되고 있는 질문 번호
    const [selected, setSelected] =useState([false,false,false,false,false,false,false,false,false]);

    /*const answerValue =[
        " "," "," ",
    ];

    //백엔드에게 전할 데이터
    /*var answerSet =[
        {
            question_num : "", //질문
            answer_num:"" //답변
        },
        {
            question_num : "", //질문
            answer_num:"" //답변
        },
        {
            question_num : "", //질문
            answer_num:"" //답변
        },
    ];
    */
    function selectAnswer(e){

        setId(id);
        const answer = String(e.target.id);
        const value = e.target.value;
        setValue(e.target.value);
        answerSet[id-1].question_num = String(id);
        answerSet[id-1].answer_num = String(e.target.id);
        answerValue[id-1] = e.target.value;
        console.log(answerSet);
        console.log(answerValue);
        selected[id] = true;
        setId(id+1);
    };


    return(
        <>
        <div id ="1">{Surveydata[0].question}</div>
        <button onClick={selectAnswer} id = "1" value ="저는여성이에요">{Surveydata[0].answer1}</button>
        <button onClick={selectAnswer} id ="2" value ="저는남성이에요">{Surveydata[0].answer2}</button>
        <div>{answerValue[0]}</div>
        {
            selected[1] && 
            <>
            <div id ="2">{Surveydata[1].question}</div>
            <button onClick={selectAnswer} id = "1" value ={Surveydata[1].answer1}>{Surveydata[1].answer1}</button>
            <button onClick={selectAnswer} id ="2" value ={Surveydata[1].answer2}>{Surveydata[1].answer2}</button>
            <div>{answerValue[1]}</div>
            </>
        }
        {
            selected[2] && 
            <>
            <div id ="3">{Surveydata[2].question}</div>
            <button onClick={selectAnswer} id = "1" value ={Surveydata[2].answer1}>{Surveydata[2].answer1}</button>
            <button onClick={selectAnswer} id ="2" value ={Surveydata[2].answer2}>{Surveydata[2].answer2}</button>
            <button onClick={selectAnswer} id ="3" value ={Surveydata[2].answer3}>{Surveydata[2].answer3}</button>
            <button onClick={selectAnswer} id ="4" value ={Surveydata[2].answer4}>{Surveydata[2].answer4}</button>
            <div>{answerValue[2]}</div>
            </>
        }

        </>
    );


}

export default Survey;