import { createConnection } from 'mysql2/promise';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  // return {
  //   props: {
  //     allPostsData,
  //   },
  // };
  const allPostsData = getSortedPostsData();
  const data = await executeQuery();
  return {
    props: { data, allPostsData },
  };
}

const db = {
  host: 'tpe1.clusters.zeabur.com',
  user: 'root',
  password: 'tCkHSE0G926ry54eVI7U1bRlji38XvPn',
  database: 'blog_post',
  port: 30277,
};
function isJSON(data) {
  try {
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
}

const executeQuery = async (res) => {
  try {
    const connection = await createConnection(db);
    const [rows, fields] = await connection.execute('SELECT * FROM posts');
    connection.end();
    console.log(isJSON(rows), 'jijiejwafijei');
    return rows;
  } catch (error) {
    console.error('Error executing query: ', error);
  }
};
export default function Home({ data, allPostsData }) {
  console.log(allPostsData);
  console.log(data);
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <Link href="/posts/post1">this post</Link>
        <p>
          Hi! This is Luis from Taiwan. I'm a newbie in programming but willing
          to explore more about front-end development. Feel free to chat or
          discuss more{' '}
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {data.map(({ id, title, content }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {content}
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Markdown List</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
                <br />
                {id}
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* <main>
        <h1 className={styles.title}>
          Learn <Link href="/posts/post1">this post</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}

      {/* <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style> */}

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </Layout>
  );
}
