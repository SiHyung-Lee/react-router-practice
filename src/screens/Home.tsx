import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db.ts";

function Home() {
  const [readSearchParms, setReadSearchParms] = useSearchParams();
  setTimeout(() => {
    setReadSearchParms({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
