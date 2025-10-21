import { useEffect, useState } from "react";

export default function AnyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
