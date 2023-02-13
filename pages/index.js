import { useContext } from "react";
import { UserContext } from "@/lib/UserContext";

export default function Home() {
  const [user] = useContext(UserContext);

  return <div>{user?.loading && <p>Loading...</p>}</div>;
}
