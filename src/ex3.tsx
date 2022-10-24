import * as React from "react";

interface Book {
  id: string;
  name: string;
  author: Author;
}
interface Author {
  name: string;
  address: string;
}

const AddressComp = ({ address }) => {
  return <div style={{ fontStyle: "italic" }}>@: {address}</div>;
};

const AuthorComp = ({ author }) => {
  return (
    <div>
      By: {author.name}
      <AddressComp address={author.address} />
    </div>
  );
};

export const Library: React.FunctionComponent<{ books: Array<Book> }> = ({
  books
}) => {
  return (
    <div>
      <h2>Improve my library</h2>
      <p>Welcome to my simple library.</p>
      <p>
        1. The current design use props drilling, can you avoid it and suggest
        alternative implementation?
      </p>
      <p>2. Can you improve the UI?</p>
      {books.map((b, i) => {
        return (
          <li key={i}>
            <div style={{ fontWeight: "bold" }}>{b.name}</div>
            <AuthorComp author={b.author} />
          </li>
        );
      })}
    </div>
  );
};
