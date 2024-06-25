interface ListCategoriesProps{
    categories: string[]
}

function ListCategories({ categories }: ListCategoriesProps){
    return(
        <>
         {categories.map(item => (
            <h2>Nome: {item}</h2>
         ))}
        </>
    )
}

export default ListCategories