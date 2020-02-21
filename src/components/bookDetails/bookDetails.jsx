import React from "react";
import "./styles.scss";
export const BookDetails = ({ book }) => {
  return (
    <div className="jumbotron book-info">
      <h1 className="capitalize">{book.title}.</h1>
      <p>Author: {book.author}.</p>
      <div className="row">
        <div className="col-sm-4">
          <img className="img-thumbnail" alt="" src={book.picture} />
        </div>
        <div className=" col-sm-8 d-flex">
          <p>{book.about}</p>
        </div>
      </div>
      <p>Price: ${book.price}</p>
    </div>
  );
};
