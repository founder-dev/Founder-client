
import Surveydata from '../../assets/Survey.json';
import answerValue from '../../assets/answerValue.json';

const SurveyPart = ({selected, selectAnswer, Question}) =>{
    
    /*
    <button onClick={selectAnswer} id = "1" value ={Surveydata[Question].answer1}>{Surveydata[Question].answer1}</button>
    <button onClick={selectAnswer} id ="2" value ={Surveydata[Question].answer2}>{Surveydata[Question].answer2}</button>
    <button onClick={selectAnswer} id ="3" value ={Surveydata[Question].answer3}>{Surveydata[Question].answer3}</button>
    <button onClick={selectAnswer} id ="4" value ={Surveydata[Question].answer4}>{Surveydata[Question].answer4}</button>
    */
    const answer = Surveydata[Question].answer;
    const answerNum = Surveydata[Question].answerNum;
    return(
    <>
    {selected[Question] && 
    <>
    <div>{Surveydata[Question].question}</div>
    {
        answer.map((item,i)=>(
        <button onClick={selectAnswer} id = {answerNum[i]} value ={item}>{item}</button>
        ))
    }
    <div>{answerValue[Question]}</div>
    </>
    }
    </>
    );
}

export default SurveyPart;