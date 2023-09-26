// @ts-nocheck
'use client';

import { getAPI } from './FetchUtil';

export default function Home() {
  const data = getAPI();
  console.log(data);
  return (
    <>
      <div>well hello</div>
      {data && <div>{data.data}</div>}
    </>
  );
}
