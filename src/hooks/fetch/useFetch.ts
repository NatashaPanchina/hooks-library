import { useEffect, useState } from 'react';

/**
 * Fetching data
 *
 * @param url the URL to fetch data from
 * @param options additional options for the fetch request. If options.manual = true is set, useFetch will not be executed by default, and the execution needs to be triggered by run
 * @returns state of the fetch request
 */
export const useFetch = (url: string, options?: { manual: boolean }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [manualRun, setManualRun] = useState<boolean>(
    options ? options.manual : false,
  );

  const run = () => {
    setLoading(false);
    setError(null);
    setData(null);
    setManualRun(false);
  };

  useEffect(() => {
    if (manualRun) return;
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(url);
      const json = await data.json();
      setData(json);
      setLoading(false);
    };

    fetchData().catch((error) => {
      setLoading(false);
      setData(null);
      setError(error.message);
    });
  }, [manualRun, url]);

  return { data, loading, error, run };
};
