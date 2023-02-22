import React from "react";

function Footer() {
  return (
    <div>
      <div className="footers">
        <div className="allcontent">
          <div className="formsearch">
            <div className="formrigh">
              <img
                src="https://medokaclient.vercel.app/assets/small_logo.png"
                alt=""
              />
              <div>
                <p>Engagez vos employés. Au quotidien.</p>
              </div>
            </div>
            <div className="formlefts">
              <p style={{ color: "rgb(3, 54, 61)" }}>
                S'abonner pour recevoir des actualités et des nouveautés de
                Medoka.
              </p>
              <div className="frominscription">
                <div className="formail">
                  <div className="forminput">
                    <input
                      type="text"
                      placeholder="Quelle est votre adresse email ?"
                    />
                  </div>
                  <div>
                    <button>je m'inscris</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="contentlinks">
            <div className="links">
              <h4>À propos</h4>
              <p>Nous rejoindre</p>
              <p>La RSE chez Medoka</p>
              <p>Presse</p>
            </div>
            <div className="links">
              <h4>Mon compte</h4>
              <p>Activer mon compte</p>
              <p>Me connecter</p>
              <p>Centre d'aide</p>
              <p>Nous contacter</p>
            </div>
            <div className="links">
              <h4>Ressources</h4>
              <p>Blog</p>
              <p>Boite à outils</p>
              <p>Témoignages</p>
            </div>
            <div className="links">
              <h4>Particulier</h4>
            </div>
          </div>

          <div className="under">
            <p>Medoka ©2022</p>
            <p>Mentions légales</p>
            <p>Confidentialité</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
