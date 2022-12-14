import styled from 'styled-components';

export const ProfileCard = styled.div`
  border-radius: 10px;
  width: 350px;
  margin: 30px auto;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const UserImg = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
`;
export const Tag = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  color: grey;
  font-size: 18px;
`;
export const Location = styled.p`
  margin-top: 0px;
  margin-bottom: 40px;
  color: grey;
  font-size: 18px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 30px 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 50px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(33.3333% - 3px);
    :not(:first-child) {
      border-left: 1px solid #c0c0c0;
    }
  }
`;

export const TextSpan = styled.span`
  margin-bottom: 5px;
  color: grey;
  font-size: 18px;
`;

export const NumberSpan = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
