// @ts-nocheck
'use client';
import { useEffect } from 'react';

import { getAPI } from './FetchUtil';

export default function Home() {
  const fetchAPI = async () => {
    const data = await getAPI();
    console.log(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <div>well hello</div>
    </>
  );
}
