import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  color: #0277f9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default LinkStyled