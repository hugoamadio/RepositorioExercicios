import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../config/layouts/DefaultLayout';

function Home() {
  const config = {
    navigation: true,
    footer: true,
  };

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext?.data.user === '') {
      navigate('/');
    }
  }, []);

  return (
    <DefaultLayout config={config}>
      <h1>Home</h1>
    </DefaultLayout>
  );
}

export default Home;
