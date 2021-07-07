import React from "react";

const Card = props => {
  const { id, name, age, height } = props;
  return (
    <article className="c-card c-card--wide">
      <header className="c-card__header">
        <img
          src="http://placehold.it/300x250"
          class="c-card__image"
          alt="Card Image"
        />
      </header>

      <div className="c-card__body">
        <h2 className="c-card__name">Name: {name}</h2>
        <p className="c-card__age">Age:{age}</p>
        <p className="c-card__height">Height: {height}</p>
      </div>
    </article>
  );
};

export default Card;
