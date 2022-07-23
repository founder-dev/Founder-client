import styled from 'styled-components';
import Surveydata from '../../assets/Survey.json';
import answerValue from '../../assets/answerValue.json';
import { color, fontWeight, fontsize } from '../../lib/theme';
import { useRef, useCallback } from 'react';

const SurveyPart = ({ selected, selectAnswer, Question, beforeQuestion }) => {
  /*
    <button onClick={selectAnswer} id = "1" value ={Surveydata[Question].answer1}>{Surveydata[Question].answer1}</button>
    <button onClick={selectAnswer} id ="2" value ={Surveydata[Question].answer2}>{Surveydata[Question].answer2}</button>
    <button onClick={selectAnswer} id ="3" value ={Surveydata[Question].answer3}>{Surveydata[Question].answer3}</button>
    <button onClick={selectAnswer} id ="4" value ={Surveydata[Question].answer4}>{Surveydata[Question].answer4}</button>
    */
  const answer = Surveydata[Question].answer;
  const answerNum = Surveydata[Question].answerNum;

  return (
    <SurveyItem>
      {selected[Question] && (
        <>
          <div>
            <QuestionItem width={Surveydata[Question].question.length}>
              {Surveydata[Question].question}
            </QuestionItem>
          </div>
          {answer.map((item, i) => (
            <SelectionWrapper key={item.id}>
              <button
                onClick={selectAnswer(Question)}
                id={answerNum[i]}
                value={item}
              >
                {item}
              </button>
            </SelectionWrapper>
          ))}
          <div>
            <AnswerItem
              selected={answerValue[Question]}
              width={answerValue[Question].length}
            >
              {answerValue[Question]}
            </AnswerItem>
          </div>
        </>
      )}
    </SurveyItem>
  );
};

export default SurveyPart;
const SurveyItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionItem = styled.div`
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
  float: left;
  display: flex;
  justify-content: center;
  background: ${color.main[1]};
  border-radius: 4px 20px 20px 20px;

  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.354132px;

  color: ${color.white};
`;

const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const AnwerWrapper = styled.div``;
const AnswerItem = styled.div`
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  text-align: center;
  float: right;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.selected != '' ? color.main[3] : 'white')};
  border-radius: 20px 20px 4px 20px;

  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.354132px;
`;
