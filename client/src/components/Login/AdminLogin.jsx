import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div>
      <form>
        <input placeholder="adminName"></input>
        <input placeholder="adminPassword"></input>
        <button>Login as Admin</button>
        <Link to="/data_upload">admin login</Link>
      </form>
    </div>
  );
};

export default AdminLogin;
