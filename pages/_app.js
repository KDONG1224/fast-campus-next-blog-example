import Layout from '@/components/Layout';
import { format, formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/router';
import { useState } from 'react';
import '../styles/global.css';

// web vitals
export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  const [visitedTime] = useState(new Date());

  const router = useRouter();

  return (
    <Layout home={router.pathname === '/'}>
      {/* <div>방문시간: {format(visitedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}</div> */}
      <div>
        방문시간:{' '}
        {formatDistanceToNow(new Date(visitedTime), {
          addSuffix: true,
          includeSeconds: true
        })}
      </div>
      <Component {...pageProps} pathname={router.pathname} />
    </Layout>
  );
}
