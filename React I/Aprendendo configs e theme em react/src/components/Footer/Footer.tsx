import FooterStyled from "./FooterStyled";
import React from "react";

interface FooterProps {
  data: React.ReactDOM[];
}

function Footer({ data }: FooterProps) {
  return <FooterStyled>{data.map((item) => item)}</FooterStyled>;
}

export default Footer;
