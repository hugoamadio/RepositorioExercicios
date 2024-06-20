import ButtonDefault from '../components/ButtonDefault';

function Products() {
  function handleClick() {
    alert('Apertou no botao do products.');
  }

  return (
    <>
      <h1>Produtos</h1>
      <div style={{ textAlign: 'center' }}>
        <ButtonDefault label="Botão produto" action={handleClick} />
      </div>
    </>
  );
}

export default Products;
