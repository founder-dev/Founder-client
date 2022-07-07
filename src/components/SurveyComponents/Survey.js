import { useState } from "react";
import Surveydata from '../../assets/Survey.json';
import answerSet from '../../assets/answerSet.json';
import answerValue from '../../assets/answerValue.json';
import SurveyPart from "./SurveyPart";

const Survey = () =>{

    const[value, setValue] = useState(["",""]);  //답한 answer value
    const[answer, setAnswer] = useState(""); //답한 answer 번호
    const[id, setId] = useState(1); //현재 진행되고 있는 질문 번호
    const [selected, setSelected] =useState([true,false,false,false,false,false,false,false,false,false]);

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
    const selectAnswer = num => e =>{

        setId(id);
        setValue(e.target.value);
        
        answerSet[num].question_num = String(num);
        answerSet[num].answer_num = String(e.target.id);
        answerValue[num] = e.target.value;

        console.log(answerSet);
        console.log(answerValue);
        selected[num+1] = true;
        setId(id+1);
    };

    function beforeQuestion (num){
       selected[num] = false;
    };
    
    return(
        <>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={0}/>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={1}/>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={2}/>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={3}/>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={4}/>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={5}/>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={6}/>
        <SurveyPart selected ={selected} selectAnswer={selectAnswer} Question={7}/>
        {
            selected[8] && 
            <><button>제출완료</button></>
        }
        </>
    );


}

export default Survey;