import { useEffect, useState } from 'react';
import React = require('react');

export function CountSecrets() {
  const [secret, setSecret] = useState({ value: '', countSecrets: 0 });

  useEffect(() => {
    if (secret.value === 'secret') {
      setSecret({ ...secret, countSecrets: secret.countSecrets + 1 });
    }
  }, [secret]);

  const onChange = ({ target }) => {
    setSecret((s) => ({ ...s, value: target.value }));
  };

  return (
    <div>
      <p>
        This simple login form check for the right password and increase the
        counter.
      </p>
      <p>
        When you type "secret" (as the right password) somthing wrong happen,
        try it out
      </p>
      <br />
      <br />
      <p>Password:</p>
      <input type="text" value={secret.value} onChange={onChange} />
      <div>Number of secrets: {secret.countSecrets}</div>
    </div>
  );
}
