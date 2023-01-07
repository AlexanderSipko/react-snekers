import { Link } from 'react-router-dom';

function Favorites() {

    return (
        <div className="content p-40">
            <div className="d-flex justify-between align-center mb-40">
            </div>
            <div className="snekers d-flex">
                <Link to='/'>Вернуться на главную</Link>
            </div>
        </div>
    )
}

export default Favorites