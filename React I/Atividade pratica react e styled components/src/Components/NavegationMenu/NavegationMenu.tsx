import LinkStyled from "./LinkStyled";

function NavegationMenu() {
  return (
    <div>
      <LinkStyled to={"/about"}>About</LinkStyled> | <LinkStyled to={"/contact"}>Contact</LinkStyled> |{" "}
      <LinkStyled to={"/termsofuse"}>Terms of Use</LinkStyled> |
      <LinkStyled to={"/privacy"}> Privacy Policy </LinkStyled>
    </div>
  );
}

export default NavegationMenu;
