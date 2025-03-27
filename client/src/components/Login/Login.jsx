import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <form>
        <input placeholder="password" type="password"></input>
        <button>login</button>
        <Link to="/admin_login">admin login</Link>
      </form>
    </div>
  );
};

export default Login;
