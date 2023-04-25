import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const handleShow = () => {
    document.querySelector(".nav").classList.add("block");
    document.querySelector(".menu").style.opacity = 0;
    document.querySelector(".closeMenu").classList.add("block");
  };
  const handleClose = () => {
    document.querySelector(".nav").classList.remove("block");
    document.querySelector(".menu").style.opacity = 1;
    document.querySelector(".closeMenu").classList.remove("block");
  };

  const [showConn, setShowConn] = useState(false);
  const handleShowConn = () => {
    setShowConn(true);
  };
  const handleCloseConn = () => {
    setShowConn(false);
  };

  const [showIns, setShowIns] = useState(false);
  const handleShowIns = () => {
    setShowIns(true);
  };
  const handleCloseIns = () => {
    setShowIns(false);
  };

  return (
    <div className="navigation">
      <div className="navigationContainer">
        <div className="logo">
          <NavLink to="/">
            Akn <span>Mode</span>
          </NavLink>
        </div>
        <img
          onClick={() => handleShow()}
          className="none menu"
          src="/dist/icons8-menu-rounded-50.png"
          alt="Menu"
        />
        <div className="nav">
          <ul>
            <img
              onClick={() => handleClose()}
              src="/dist/icons8-close-30.png"
              alt=""
              className="closeMenu none"
            />
            <li>
              <NavLink className="navActive" to="/videos">
                Vidéos
              </NavLink>
            </li>
            <li>
              <NavLink className="navActive" to="/articles">
                Des articles
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleShowConn}
                className="conn navActive"
                to="#"
              >
                Connexion
              </NavLink>
              {showConn && (
                <div className="connexion">
                  <form className="flex" action="">
                    <div className="formTitle">
                      <h1>Connexion</h1>
                      <img
                        src="/dist/icons8-close-30.png"
                        alt=""
                        className="close"
                        onClick={handleCloseConn}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      name="mail"
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="Mot de passe"
                      name="text"
                      id=""
                    />
                    <input type="submit" id="btn" value="Envoyer" />
                    <NavLink className="oublie" to="#">
                      Mot de passe oublié
                    </NavLink>
                  </form>
                </div>
              )}
            </li>
            <li>
              <NavLink className="ins navActive" onClick={handleShowIns} to="#">
                Inscription
              </NavLink>
              {showIns && (
                <div className="inscription">
                  <form className="flex" action="">
                    <div className="formTitle">
                      <h1>Inscription</h1>
                      <img
                        src="/dist/icons8-close-30.png"
                        alt=""
                        className="close"
                        onClick={handleCloseIns}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      name="mail"
                      id=""
                    />

                    <input
                      type="text"
                      placeholder="Nom d'utilisateur"
                      name="text"
                      id=""
                    />

                    <input
                      type="text"
                      placeholder="Mot de passe"
                      name="text"
                      id=""
                    />

                    <input
                      type="text"
                      placeholder="Confirmer mot de passe"
                      name="text"
                      id=""
                    />

                    <input id="btn" type="submit" value="Envoyer" />
                  </form>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
