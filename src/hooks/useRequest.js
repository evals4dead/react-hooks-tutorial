import { useState, useEffect } from "react";
import axios from "axios";

async function fetchResponse(url, setLoading, setResponse, setError) {
  setError(null);
  try {
    setLoading(true);
    const res = await axios.get(url); // 실제 요청
    setResponse(res);
  } catch (e) {
    setError(e);
  }
  setLoading(false);
}

function useRequest(url) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      fetchResponse(url, setLoading, setResponse, setError);
    },
    [url] // url 이 바뀔때만 실행됨
  );

  return [response, loading, error];
}

export default useRequest;
