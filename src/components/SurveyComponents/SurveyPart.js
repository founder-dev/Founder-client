import styled from 'styled-components';
import Surveydata from '../../assets/json/Survey.json';
import answerValue from '../../assets/json/answerValue.json';
import { color } from '../../styles/theme';

const SurveyPart = ({ selected, selectAnswer, Question }) => {
  /*
    <button onClick={selectAnswer} id = "1" value ={Surveydata[Question].answer1}>{Surveydata[Question].answer1}</button>
    <button onClick={selectAnswer} id ="2" value ={Surveydata[Question].answer2}>{Surveydata[Question].answer2}</button>
    <button onClick={selectAnswer} id ="3" value ={Surveydata[Question].answer3}>{Surveydata[Question].answer3}</button>
    <button onClick={selectAnswer} id ="4" value ={Surveydata[Question].answer4}>{Surveydata[Question].answer4}</button>
    */
  const answer = Surveydata[Question].answer;
  const answerNum = Surveydata[Question].answerNum;
  const answerImage = Surveydata[Question].answerImage;

  return (
    <SurveyItem>
      {selected[Question] && (
        <>
          <div>
            <QuestionItem width={Surveydata[Question].question.length}>
              {Surveydata[Question].question}
            </QuestionItem>
          </div>
          <SelectionWrapper length={answerImage.length}>
            {answer.map((item, i) => (
              <Button
                type="button"
                onClick={selectAnswer(Question)}
                id={answerNum[i]}
                value={item}
                image={process.env.PUBLIC_URL + answerImage[i]}
                length={answerImage.length}
                key={item.id}
                loading="lazy"
              ></Button>
            ))}
          </SelectionWrapper>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: ${(props) => (props.length == 2 ? '723px' : '423px')};
  column-gap: ${(props) => (props.length == 2 ? '27px' : '23px')};
  row-gap: 27px;
  padding-left: ${(props) => (props.length == 2 ? '98px' : '200px')};
  margin-top: 30px;
  margin-bottom: 22px;
`;

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

const Button = styled.button`
  width: ${(props) => (props.length == 2 ? '349px' : '210px')};
  height: ${(props) => (props.length == 2 ? '349px' : '265px')};
  object-fit: contain;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: white;
  padding: 0px;
`;
