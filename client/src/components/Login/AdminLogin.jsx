import { Link } from "react-router-dom";
//sztem ez torolheto lesz. egy feluletrol lesz a login kezelve.
const AdminLogin = () => {
  return (
    <div>
      <form>
        <input placeholder="adminName"></input>
        <input placeholder="adminPassword"></input>
        <button>Login as Admin</button>
        <Link to="/data_upload">adatok szerkesztese</Link>
      </form>
    </div>
  );
};

export default AdminLogin;
