import React from "react";
import { BookCover } from "../bookCover";
import "./styles.scss";
import { IBook } from "../../interfaces";

export const BookDetails: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <div className="jumbotron book-info">
      <h1 className="capitalize">{book.title}.</h1>
      <p>Author: {book.author}.</p>
      <div className="row">
        <div className="col-sm-4">
          <BookCover image={book.picture} />
        </div>
        <div className=" col-sm-8 d-flex">
          <p className="text-indent">{book.about}</p>
        </div>
      </div>
      <p>Price: ${book.price}</p>
    </div>
  );
};
