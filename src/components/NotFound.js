import styled from "styled-components";
import NotFoundPng from "../assests/dark2x.png";
const NotFound = () => {
  return (
    <ErrorWrap>
      <img src={NotFoundPng} height={"100%"} width={300} />
      <h3>Your Requested gist is not Found</h3>
    </ErrorWrap>
  );
};

const ErrorWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;

export default NotFound;
