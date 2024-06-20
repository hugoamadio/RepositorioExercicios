import ButtonDefault from '../components/ButtonDefault';

function Home() {
  function handleClick() {
    alert('Apertou no botao da home.');
  }

  return (
    <>
      <h1>Home</h1>
      <div style={{ textAlign: 'center' }}>
        <ButtonDefault label="Botão Home" action={handleClick} />
      </div>
    </>
  );
}

export default Home;
