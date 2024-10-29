import { Link } from "react-router-dom";
import { users } from "../db.ts";

function Home() {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
