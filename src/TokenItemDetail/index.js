import React from 'react';
import './TokenItemDetail.css';

function TokenItemDetail(props) {
    const [ addedToFavs, setAddedToFavs ] = React.useState(false);

    React.useLayoutEffect(() => {
        setAddedToFavs(props.isTokenAlreadyAddedToFavs(props.token.symbol));
    }, [props.token]);

    const toggleFav = async (tokenDetail) => {
        if(!addedToFavs) {
            try {
                setAddedToFavs(true);
                const response = await props.addTokenToFavorites(tokenDetail);
                props.createToast(response, 'success');
            } catch(error) {
                console.error(error);
                setAddedToFavs(false);
                props.createToast(error, 'error');
            }
        } else {
            try {
                setAddedToFavs(false);
                const response = await props.removeTokenFromFavorites(tokenDetail);
                props.createToast(response, 'success');
            } catch(error) {
                console.error(error);
                setAddedToFavs(true);
                props.createToast(error, 'error');
            }
        }
    }

    return (
        <article className="token-item-detail">
            <h3 className="token-item-detail__symbol">{props.token.symbol}</h3>
            <p className="token-item-detail__name">{props.token.name}</p>
            <span className="token-item-detail__price">
                {props.token.error 
                    ? props.token.error.validationErrors[0].reason.toLowerCase().replaceAll('_', ' ')
                    : `$${props.token.details.price.slice(0, 10)}`
                }
                </span>
            <button className="token-item-detail__fav" type="button" disabled={props.token.error} onClick={() => toggleFav(props.token)}>
                <svg className="w-6 h-6" fill={addedToFavs ? "var(--secondary-color)" : "transparent"} stroke="var(--secondary-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
        </article>
    );
}

export { TokenItemDetail };
