import './Card.css';

function Card(props) {
    console.log(props.name);
    return (
        <div className="card">
            <h1 className="card__title">{props.name}</h1>
            <img className="card__image" src={props.url} alt={props.name} />
            <div className="card__info">Вселенная: {props.universe}</div>
            <div className="card__info">Альтерэго: {props.alterego}</div>
            <div className="card__info">
                Род деятельности: {props.occupation}
            </div>
            <div className="card__info">Союзники: {props.friends}</div>
            <div className="card__info">Способности: {props.superpowers}</div>
            <div className="card__info">{props.info}</div>
        </div>
    );
}
export default Card;
