import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 10px 0;
  /* background-color:#fafafa; */
  /* display:grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 20px; */
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width:768px) {
    justify-content:center;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  padding: 2rem 0;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;

  border-bottom: 1px solid #d2d2d2;

  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  font-size: 40px;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
