import { ReactNode } from "react";
import AppStyled from "../../components/AppStyled";
import MyAppBar from "../../components/MyAppBar/MyAppBar";
import Footer from "../../components/Footer/Footer";
import MyDialog from "../../components/MyDialog";

interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    header: boolean;
    footer: boolean;
  };
}

function DefaultLayout({ children, config }: DefaultLayoutProps) {
  return (
    <AppStyled>
      <MyDialog/>
      {config?.header == true && <MyAppBar />}
      {children}
      {config?.footer == true && <Footer />}
    </AppStyled>
  );
}

export default DefaultLayout;
