import Head from 'next/head'
import IntroHeader from "../components/IntroHeader";
import RecentPosts from '../components/RecentPosts';
import FeaturedWorks from '../components/FeaturedWorks';
import { getAllPosts, getAllWork } from '../../lib/api';
import Skils from '@/components/Skills';

export async function getStaticProps() {
  const posts = getAllPosts();
  const work = getAllWork();

  return {
    props: {
      posts,
      work,
    }
  }
}

export default function Home({ posts, work }) {
  return (
    <div>
      <Head>
        <title>Ricardo Portfolio</title>
        <meta name="description" content="My portfolio create with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <IntroHeader />
        <RecentPosts posts={posts}/>
        <FeaturedWorks work={work}/>
        <Skils />
    </div>
  )
}