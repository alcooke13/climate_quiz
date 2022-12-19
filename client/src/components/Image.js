import React from 'react';
import styled from 'styled-components';


const Image = ({question, onAnswer}) => {

  return (
    <Container>
        <Question>{question.question}</Question>
        <p>Select one</p>
        <ImageContainer>
          <ImageItem onClick={onAnswer} src={question.correct_answer} />
          <ImageItem onClick={onAnswer} src={question.incorrect_answers[0]} />
        </ImageContainer>
    </Container>
  );
}

const Container = styled.span`
  text-align: center;

`
const ImageContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`

const ImageItem = styled.img`
  width: 18rem;
  height: 13rem;
`

const Question = styled.p`

`
export default Image;