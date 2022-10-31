import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteTitle } from 'pages/_document';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

// getServersideProps 방식
// export async function getServerSideProps() {
//   return {};
// }

export default function Write() {
  const router = useRouter();

  useEffect(() => {
    console.log('== router.query == : ', router.query);
  }, [router.query]);

  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);

  const [showLink, setShowLink] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content
        })
      })
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error('Fetch Error');
        })
        .then((data) => {
          setShowLink(true);
          alert(data.message);
        })
        .catch((err) => alert(`request error : ${err}`));
    }
  };

  return (
    <>
      <Head>
        <title>{`${siteTitle}`}</title>
      </Head>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="id"
          required
          ref={idRef}
          style={{
            width: '100%',
            border: '1px solid black',
            padding: '12px'
          }}
        />
        <br />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
          style={{
            width: '100%',
            border: '1px solid black',
            padding: '12px'
          }}
        />
        <br />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
          style={{
            width: '100%',
            border: '1px solid black',
            padding: '12px',
            minHeight: 300
          }}
        />
        <br />
        <br />
        <input
          className="rounded bg-pink-500 px-2"
          type="submit"
          value="Create"
        />
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>
          <a>Create Post</a>
        </Link>
      )}
    </>
  );
}

// Write.getInitialProps = async () => {
//   return {};
// };
