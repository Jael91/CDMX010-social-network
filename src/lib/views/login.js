import { onNavigate } from '../../router.js'
import {signIn} from "../firebase.js"

export const loginTemplate = (target) => {
    const html = `
        <div class="cabecera">
        <div class="top">
          <div class="layer">
            <img src="img/encounter-logo.png" alt="Encounter, the feminist sound space">
          </div>
        </div>
        <div class="bottom">
          <div class="login">
            <input id= "emailSignIn" class="input" type="text" placeholder="Email"style="text-align: center">
            <input id= "passwordSignIn" class="input" type="password" placeholder="Contraseña" maxlength="16" style="text-align: center">
            <button id="access">LOGIN</button> 
          </div>
          <div class="not-password-yet">
            <div id="newAccount" style="text-align:center"><a href="#" id="newAccountLink">+</a></div>
            <p>Not password yet?</p>
          </div>
        </div>
        `;

        target.innerHTML = html


        document.getElementById('access').addEventListener('click', (e) => {
          e.preventDefault();
          onNavigate('/home')
        });

        document.getElementById('newAccountLink').addEventListener('click', (e) => {
          e.preventDefault();
          onNavigate('/register')
        });
        
        const access = document.getElementById("access");
        access.addEventListener("click", () => { 
            let emailSignIn = document.getElementById("emailSignIn").value;
            let passwordSignIn = document.getElementById("passwordSignIn").value;
            signIn (emailSignIn, passwordSignIn);
                console.log("este usuario si pudo ingresar");
});
};



    




