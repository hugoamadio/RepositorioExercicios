import { useState } from 'react';
import ButtonDefault from '../components/ButtonDefault';
import PageDefault from '../components/PageDefault';

function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Usuario logado ${username}, ${password}`);
    setUsername('');
    setPassword('');
  }

  return (
    <>
      <PageDefault>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleClick} style={{ display: 'flex', flexDirection: 'column', color: '#ffff' }}>
            <label htmlFor="username">
              Username:
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label htmlFor="password">
              Password:
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <ButtonDefault label="Login" />
          </form>
        </div>
      </PageDefault>
    </>
  );
}

export default Home;
