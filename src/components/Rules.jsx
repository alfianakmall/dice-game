import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How To Play Dice Game</h2>
      <div className="text">
        <p>Select Any Number</p>
        <p>Click On Dice Image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice ("")
        </p>
        <p>If you got wrong guess then 2 point will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #fbf1f1;
  padding: 20px;
  border-radius: 10px;
  h2 {
    font-size: 20px;
  }
  .text {
    margin-top: 24px;
  }
`;
