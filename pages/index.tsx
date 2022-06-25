import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { GetStaticProps } from 'next'

type typeAllPostsData = {
  category: string
  title: string
  id: string
}

export default function Home({ allPostsData }: { allPostsData: typeAllPostsData[] }) {
  const categories = [
    "principle", "philosophy", "architecture", "database", "test", "writing",
  ]
  const listPostData = (allPostsData: typeAllPostsData[], selectedCategory: string) => {
    return (
      <>
        <h2 className={utilStyles.headingMd}>{selectedCategory}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, category, title }) => (
            <div key={id}>
              {category == selectedCategory &&
                <li className={utilStyles.listItem}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </li>
              }
            </div>
          ))}
        </ul>
      </>
    )
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          技術メモ。 書いてる人：<a href="https://twitter.com/n1sym">n1sym</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <>
          {categories.map((category: string) => {
            return <div key={category}>
              {listPostData(allPostsData, category)}
            </div>
          })}
        </>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}