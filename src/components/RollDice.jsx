import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click On The Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 3rem;
  flex-direction: column;
  display: flex;
  align-items: center;

  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
