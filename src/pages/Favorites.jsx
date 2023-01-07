import { Link } from 'react-router-dom';
import Card from "../components/Card/index";


function Favorites({ items, onAddToFavorites, onAddToCard, favorite }) {

    function CreateCard(items) {
        // создание списка компонентов с помощью массива
        return (items.map((item) =>
            <Card
                key={item.imgeUrl}
                id={item.id}
                titel={item.name}
                price={item.price}
                imgeUrl={item.imgeUrl}
                // addFavorites = { onAddToFavorites }
                // onPlus = { onAddToCard }
                favorite={favorite}
            />
            )
        )};

    return (
        <div className="content p-40">
            <div className="d-flex justify-between align-center mb-40">
                <Link to='/'><h1>Мои закладки</h1></Link>
            </div>
            <div className="snekers d-flex">
                { CreateCard(items) }
            </div>
        </div>
    )
}

export default Favorites