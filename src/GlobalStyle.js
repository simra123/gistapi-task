import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  *{
    box-sizing: border-box;
  }
  .single-user{
    border-bottom: solid 1px gray;
  padding : 20px;
    width: 60%;
margin : auto
}
.single-user .header{
  display: flex !important;
  justify-content : space-between;
  align-items : center
}
.single-user .icons p {
  margin-right: 20px ;
  margin-bottm : 5px;
  color : gray;
  font-weight: 600;
  font-size : 13px

}
.single-user .header .name {
  margin: auto 10px ;
  font-size : 16px;
  font-weight : 700;
 color: #2f81f7;


}
.single-user .all-files svg{
  color : #2f81f7;
  margin-top : 10px
}
.single-user h4{
word-break : break-word;
}
.single-user .header .icons svg{
 color: #2f81f7;
 margin-top: 10px;
 padding-top: 5px ;
}
.single-user img{
height : 100%;
width : 60px;
border-radius : 50%;
}
.date  {
  display  : flex
}
.date p {
  margin : 5px;

}
.all-files {
  display: flex;
}
`;

export default GlobalStyles;
