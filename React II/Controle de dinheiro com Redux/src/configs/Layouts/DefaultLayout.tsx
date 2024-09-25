import { ReactNode } from 'react';
import Header from '../../components/Header/Index';

interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    navigation: boolean;
  };
}

function DefaultLayout({ children, config }: DefaultLayoutProps) {

  return (
    <>
        {config?.navigation && <Header/>}
        {children}
    </>
  );
}

export default DefaultLayout;