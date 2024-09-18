import { ReactNode } from 'react';
import AppStyled from '../../Components/AppStyled';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


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
      {config?.header == true && <Header />}

      {children}

      {config?.footer == true && <Footer />}
    </AppStyled>
  );
}

export default DefaultLayout;