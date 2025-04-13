import SocialLogins from "./SocialLogins"
function Form(){
    return(<div className="Login-form">
        <SocialLogins/>
    <form>
      <label for="mail">Email id</label><br/>
      <input type="email" id="mail" placeholder="Enter your email address"></input><br/>
      <label for="pwd">Password</label><br/>
      <input type="password" id="pwd" placeholder="Enter your password"></input><br/>
      <a href="#">Forget Password</a><br />
      <button>Login</button>
      </form>
      </div>
    )
}