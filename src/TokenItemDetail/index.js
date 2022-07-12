import React from 'react';
import './TokenItemDetail.css';

function TokenItemDetail(props) {
    return (
        <article className="token-item-detail">
            <h3 className="token-item-detail__symbol">ETH</h3>
            <p className="token-item-detail__name">Ethereum</p>
            <span className="token-item-detail__price">Price</span>
            <button className="token-item-detail__fav" type="button">
                <svg className="w-6 h-6" fill="" stroke="var(--red-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
        </article>
    );
}

export { TokenItemDetail };