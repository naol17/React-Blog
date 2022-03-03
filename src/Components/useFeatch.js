import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [Data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCount = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCount.signal })
        .then((res) => {
          if (!res.ok) {
            throw error("Could not lad the file..");
          }
          return res.json();
        })
        .then((Data) => {
          setData(Data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 5);
    return () => abortCount.abort();
  }, [null]);
  return { Data, isPending, error };
};

export default useFetch;
