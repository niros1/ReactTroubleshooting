import * as React from "react";

interface Book {
  name: string;
  author: Author;
}
interface Author {
  name: string;
  address: string;
}

const Address = ({ address }) => {
  return <div>{address}</div>;
};

const Author = ({ author }) => {
  return (
    <div>
      {author.name} is the writer, living at
      <Address address={author.address} />
    </div>
  );
};

export const Library: React.FunctionComponent<{ books: Array<Book> }> = ({
  books
}) => {
  return (
    <div>
      <h2>Failure 3</h2>
      <p>Welcome to my simple library.</p>
      <p>It is working fine but has a bit complex implementation.</p>
      {books.map((b, i) => {
        return (
          <li key={i}>
            {b.name}
            <Author author={b.author} />
          </li>
        );
      })}
    </div>
  );
};
