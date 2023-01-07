import Card from "../components/Card/index";


function Home({
            searchValue,
            setSearchValue,
            onChangeSearchInput,
            items,
            onAddToFavorites,
            onAddToCard,
            favorite
            }) {
    
    function CreateCard(items) {
        // создание списка компонентов с помощью массива
        return (items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
            <Card
                key={item.imgeUrl}
                id={item.id}
                titel={item.name}
                price={item.price}
                imgeUrl={item.imgeUrl}
                addFavorites = { onAddToFavorites }
                onPlus = { onAddToCard }
                favorite={favorite}
            />
            )
        )};


    return (
        <div className="content p-40">
            <div className="d-flex justify-between align-center mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'} </h1>

                <div className="search--blcok d-flex align-center">
                    <img width={18} height={18} src="/img/search.svg" alt='search' />

                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src="/img/Card/btn-remove.jpg"
                            alt='Clear'
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
                </div>
            </div>
            <div className="snekers d-flex">

                {CreateCard(items)}

            </div>
        </div>
    )
}


export default Home