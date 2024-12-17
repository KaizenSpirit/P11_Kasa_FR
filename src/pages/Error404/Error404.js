import React from "react";
import { Link} from "react-router-dom";
const Error404= () => {
  return (
  <div className="container-error-404">
      <h1 className="error-404">404</h1>
      <h2 className="error-message-404">Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="link-error-404" to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default Error404;