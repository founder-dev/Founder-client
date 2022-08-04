import { useState, useRef, useEffect, useCallback } from 'react';
import Surveydata from '../../assets/json/Survey.json';
import answerSet from '../../assets/json/answerSet.json';
import answerValue from '../../assets/json/answerValue.json';
import SurveyPart from './SurveyPart';
import styled from 'styled-components';
import { color } from '../../styles/theme';
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

  function SubmitSurvey() {
    if (answerSet[0].answer_num == 1) {
      setGender(true);
    } else {
      setGender(false);
    }

    axios
      .put(
        'https://found-er.co.kr/api/survey',
        {
          answerSet,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5NTU1MTE1LCJqdGkiOiJjMWJlMjM4Yzk1MjU0MzJmYWU3YTgzYzE5YTQyOWM3MyIsInVzZXJfaWQiOjQzfQ.3dsBX8NehGp9bqj8Baoe8sCR74FoTDR71_nxRqHjBb4`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
      });

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

  return (
    <SurveyWrapper ref={surveyRef}>
      <StartText width="385px">
        안녕하세요 파운더 설문조사에 오신 걸 환영해요!
      </StartText>

      <StartText top="8px">
        주어진 질문에 버튼을 눌러 설문조사에 참여해주세요.
      </StartText>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
        <SurveyPart
          selected={selected}
          selectAnswer={selectAnswer}
          Question={num}
        />
      ))}
      {selected[8] && (
        <>
          <StartText top="16px" width="245px">
            설문조사가 완료되었습니다
          </StartText>
          <StartText top="8px" width="553px">
            하린님의 취향에 꼭 맞는 구독 서비스들을 홈 화면에 추천해드립니다.
          </StartText>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            다시 할래요
          </Button>
          <Button
            onClick={SubmitSurvey}
            top="0px"
            background="#383838"
            color="#FFFFFF"
          >
            설문조사 제출하기
          </Button>
        </>
      )}
    </SurveyWrapper>
  );
};

export default Survey;

const StartText = styled.div`
  width: ${(props) => props.width || '418px'};
  margin-top: ${(props) => props.top || '162px'};
  align-items: center;
  gap: 8px;
  display: flex;
  justify-content: center;

  padding: 12px 16px;
  background: ${color.main[2]};
  border-radius: 4px 20px 20px 20px;

  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  letter-spacing: -0.354132px;

  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SurveyWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Button = styled.div`
  width: 204px;
  height: 28px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  margin-top: ${(props) => props.top || '107px'};
  margin-left: 256px;
  padding: 12px 82px;
  font-size: 14px;
  line-height: 28px;
  background-color: ${(props) => props.background || 'none'};
  color: ${(props) => props.color || 'none'};
`;
