import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Posts from '../components/Posts';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typing';

interface Props {
  posts: [Post];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Medium Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />
      <Posts posts={posts} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  description,
  slug,
  mainImage,
  author -> {
  name,
  image,
},
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
