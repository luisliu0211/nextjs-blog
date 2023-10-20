import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
export default function Contact() {
  return (
    <>
      <Layout>
        <form action="post" className={utilStyles.form}>
          <label htmlFor="name" className={utilStyles.headingMd}>
            姓名：
            <input
              className={utilStyles.headingMd}
              type="text"
              placeholder="請輸入姓名"
            />
          </label>
          <label htmlFor="name" className={utilStyles.headingMd}>
            電話：
            <input
              type="telephone"
              placeholder="請輸入有效電話"
              className={utilStyles.headingMd}
            />
          </label>
          <label htmlFor="address" className={utilStyles.headingMd}>
            地址：
            <input
              type="text"
              placeholder="請輸入地址"
              className={utilStyles.headingMd}
            />
          </label>
        </form>
      </Layout>
    </>
  );
}
