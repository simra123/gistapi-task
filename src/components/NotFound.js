import styled from "styled-components"
import NotFoundPng from "../assests/dark2x.png"
//component to display not found msg
const NotFound = () => {
  return (
    <ErrorWrap>
      <img src={NotFoundPng} alt="notfound" height={"100%"} width={300} />
      <h3>Your Requested gist is not Found</h3>
    </ErrorWrap>
  )
}

//styling components
const ErrorWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`

export default NotFound
