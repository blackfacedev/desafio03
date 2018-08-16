import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin: 20px;
  border-radius: 3px;
  padding: 20px;
  padding-top: 0;
  height: 90vh;
  z-index: 99999999999;
  position: absolute;
  top: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  padding: 15px 0;

  img {
    height: 43px;
    width: 43px;
    border-radius: 50%;
    background: #f50;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Action = styled.div`
  cursor: pointer;
  display: flex;
`;
