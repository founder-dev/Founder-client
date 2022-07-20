import { useState, useRef, useEffect, useCallback } from 'react';
import Surveydata from '../../assets/Survey.json';
import answerSet from '../../assets/answerSet.json';
import answerValue from '../../assets/answerValue.json';
import SurveyPart from './SurveyPart';
import styled from 'styled-components';
import { color } from '../../lib/theme';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { GenderState } from '../../recoil';

const Survey = () => {
  const [value, setValue] = useState(['', '']); //답한 answer value
  const [answer, setAnswer] = useState(''); //답한 answer 번호
  const [id, setId] = useState(1); //현재 진행되고 있는 질문 번호
  const [selected, setSelected] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [gender, setGender] = useRecoilState(GenderState);
  const answerSend = answerSet;
  const navigate = useNavigate();

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
  const selectAnswer = (num) => (e) => {
    setId(id);
    setValue(e.target.value);

    answerSet[num].question_num = String(num);
    answerSet[num].answer_num = String(e.target.id);
    answerValue[num] = e.target.value;

    console.log(answerSet);
    console.log(answerValue);
    selected[num + 1] = true;
    setId(id + 1);
  };

  function beforeQuestion(num) {
    selected[num] = false;
  }

  function SubmitSurvey() {
    if (answerSet[0].answer_num == 1) {
      setGender(true);
    } else {
      setGender(false);
    }

    /*axios
      .put(
        'http://127.0.0.1:8000/api/survey',
        { 
          data : answerSend
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
      }); */

    navigate(`/`);
  }
  const surveyRef = useRef();

  const ScrollEvent = useEffect(() => {
    if (surveyRef.current) {
      console.log(surveyRef.current);
      surveyRef.current.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }
  }, [id]);

  function Reload() {
    window.location.reload();
  }

  return (
    <SurveyWrapper ref={surveyRef}>
      <StartText>안녕하세요 파운더 설문조사에 오신 걸 환영해요!</StartText>
      <StartText top="8px" width="490px">
        주어진 질문에 버튼을 눌러 설문조사에 참여해주세요.
      </StartText>
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={0}
      />
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={1}
      />
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={2}
      />
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={3}
      />
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={4}
      />
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={5}
      />
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={6}
      />
      <SurveyPart
        selected={selected}
        selectAnswer={selectAnswer}
        Question={7}
      />
      {selected[8] && (
        <>
          <StartText top="16px">설문조사가 완료되었습니다</StartText>
          <StartText top="8px">
            취향에 맞는 홈 서비스를 추천해드립니다.
          </StartText>
          <button onClick={Reload}>다시 하기</button>
          <button onClick={SubmitSurvey}>제출완료</button>
        </>
      )}
    </SurveyWrapper>
  );
};

export default Survey;

const StartText = styled.div`
  margin-top: ${(props) => props.top || '160px'};
  align-items: center;
  gap: 10px;
  display: flex;
  justify-content: center;

  padding: 12px 16px 12px 16px;
  width: ${(props) => props.width || '450px'};
  height: 30px;
  background: ${color.main[2]};
  border-radius: 4px 24px 24px 24px;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: -0.408px;

  /* Label Color / Dark / Primary */

  color: #ffffff;
`;

const SurveyWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
