import Head from 'next/head';
// import { useEffect, useState } from 'react';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/Date';
import { siteTitle } from '../pages/_document';

/*
  getStaticProps
*/
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

/*
  getServerSideProps
*/
// export async function getServerSideProps() {
//   // const allPostsData = getSortedPostsData();

//   const res = await fetch('http://localhost:3000/api/posts');
//   const json = await res.json();

//   return {
//     props: {
//       allPostsData: json.allPostsData
//     }
//   };
// }

export default function Home({ allPostsData }) {
  // const [allPostsData, setAllPostsData] = useState([]);

  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('==== data ==== : ', data);
  //       setAllPostsData(data.allPostsData);
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Kdong</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
