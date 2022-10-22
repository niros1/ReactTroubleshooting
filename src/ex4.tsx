import { useEffect, useState } from 'react';
import React = require('react');

export const BVForm: React.FunctionComponent<{}> = () => {
  const [name, setName] = useState('Clear me');

  if (name !== '') {
    useEffect(() => {
      console.log('formData', name);
    });
  }

  const [surname, setSurname] = useState('Vivo');

  useEffect(() => {
    console.log(name + ' ' + surname);
  });

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>As soon as u will clear the text box you will get an error.</p>
      <p>What is the root cause and how can you fix it? </p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};
