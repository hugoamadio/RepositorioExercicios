import NavegationMenu from "../NavegationMenu/NavegationMenu";
import FooterInfoStyled from "./FooterInfoStyled";
import FooterStyled from "./FooterStyled";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterDivIconsStyled from "./FooterDivIconsStyled";

function FooterComponent() {
  return (
    <>
      <FooterStyled>
        <FooterInfoStyled>
          <NavegationMenu></NavegationMenu>
          <small>Your Website 2024. All Rights Reserved</small>
        </FooterInfoStyled>
        <FooterDivIconsStyled>
          <FacebookOutlinedIcon style={{fontSize: 35, color: '#0277F9'}}/>
          <TwitterIcon style={{fontSize: 30, color: '#ffffff', backgroundColor: '#0277F9', borderRadius: '5px'}}/>
          <InstagramIcon style={{fontSize: 34, color: '#0277F9'}}/>
        </FooterDivIconsStyled>

      </FooterStyled>
    </>
  );
}      

export default FooterComponent;
