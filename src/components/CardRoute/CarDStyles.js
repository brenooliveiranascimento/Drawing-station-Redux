import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100% ;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity`
  width: 45%;
  height: 150px;
  background-color: rgba(0,0,0,0.4);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;

export const NameOfRoute = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
  height: 60px;
`;

export const Details = styled.Text`
  font-size: 13px;
  color: #aaa;
  margin-top: 10px;
`;

export const ProgressArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-items: center;
  width: auto;
  height: auto;
`;

export const ProgressInNumber = styled.View`
  width: auto;
  height: auto;
  margin-top: 10px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ProgressBar = styled.View`
  width: 100%;
  height: 10px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 30px;
  align-self: center;
  margin-top: 10px;
  position: absolute;
  bottom: 7px;
`;

export const PorcentText = styled.Text`
  color: #aaa;
  font-size:11px;
  font-weight: 800;
`;

export const ProgressBarColored = styled.View`
  width: 60%;
  height: 10px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 30px;
  align-self: center;
  position: absolute;
  bottom: 7px;
`;
