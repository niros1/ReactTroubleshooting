import { useEffect, useState } from "react";
import * as React from "react";
const login = (pass: string) => {
  return pass === "secret";
};
export function CountSecrets() {
  const [secret, setSecret] = useState({ value: "", countSecrets: 0 });

  useEffect(() => {
    /* eslint-disable */
    login(secret.value) &&
      setSecret({ ...secret, countSecrets: secret.countSecrets + 1 });
  }, [secret]);

  const onChange = ({ target }) => {
    setSecret((s) => ({ ...s, value: target.value }));
  };

  return (
    <div>
      <h2>Endless...</h2>
      <p>This simple login form check count each valid user login.</p>
      <p>But when a user type a valid password somthing wrong happen.</p>
      <p>Example of a valid password is "secret", try it out.</p>
      <p>
        Try to fix the form so it will count each time that a user type a valid
        password
      </p>
      <br />
      <p>Password:</p>
      <input type="text" value={secret.value} onChange={onChange} />

      <div>
        <p>Number of valid login: {secret.countSecrets}</p>
      </div>
    </div>
  );
}
