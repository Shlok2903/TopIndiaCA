import { useEffect, useState } from "react";

export default function AnyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
    fetch(`${apiBaseUrl}/health`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
