import styled from 'styled-components';
import Surveydata from '../../assets/Survey.json';
import answerValue from '../../assets/answerValue.json';
import { color, fontWeight, fontsize } from '../../lib/theme';



const SurveyPart = ({selected, selectAnswer, Question ,beforeQuestion}) =>{
    
    /*
    <button onClick={selectAnswer} id = "1" value ={Surveydata[Question].answer1}>{Surveydata[Question].answer1}</button>
    <button onClick={selectAnswer} id ="2" value ={Surveydata[Question].answer2}>{Surveydata[Question].answer2}</button>
    <button onClick={selectAnswer} id ="3" value ={Surveydata[Question].answer3}>{Surveydata[Question].answer3}</button>
    <button onClick={selectAnswer} id ="4" value ={Surveydata[Question].answer4}>{Surveydata[Question].answer4}</button>
    */
    const answer = Surveydata[Question].answer;
    const answerNum = Surveydata[Question].answerNum;

    return(
    <SurveyItem>
    {selected[Question] && 
    <>
    <QuestionItem width = {(Surveydata[Question].question.length)}>{Surveydata[Question].question}</QuestionItem>
    {
        answer.map((item, i)=>(
        <SelectionWrapper>
        <button key ={item.id} onClick={selectAnswer(Question)} id = {answerNum[i]} value ={item}>{item}</button>
        </SelectionWrapper>
        ))
    }
    <div>
    <AnswerItem selected = {answerValue[Question]} width = {(answerValue[Question].length)}>{answerValue[Question]}</AnswerItem>
    </div>
    </>
    }
    </SurveyItem>
    );
}

export default SurveyPart;
const SurveyItem = styled.div`
  display : flex;
  flex-direction : column;
`;
const QuestionItem = styled.div`
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  text-align:center;
  display : flex;
  justify-content : center;

  margin-top : 8px;
  width: ${(props)=>(props.width)*20}px;
  height: 30px;
  background: ${color.main[1]};
  border-radius: 4px 24px 24px 24px;

  color : ${color.white};
  font-weight: ${fontWeight[4]};
  font-size: ${fontsize[4]};
  line-height: 36px;
`;

const SelectionWrapper = styled.div`

  display : flex;
  flex-direction : column;
  width : 300px;
`;

const AnwerWrapper = styled.div`

`;
const AnswerItem = styled.div`
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  margin-top : 28px;
  margin-right : 10px;
  inline-block;
  float: right;
  display : flex;
  justify-content : center;

  width: ${(props)=>(props.width)*21}px;
  height: 30px;

  background: ${(props)=>props.selected != "" ? color.main[3] : "white"};
  border-radius: 24px;

  flex: none;
  order: 1;
  flex-grow: 0;

  font-weight: ${fontWeight[4]};
  font-size: ${fontsize[4]}
  line-height: 36px;

`;