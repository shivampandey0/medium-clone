import Link from 'next/link';
import React from 'react';
import { Post } from '../typing';
import { urlFor } from '../sanity';

const Posts = ({ posts }: { posts: [Post] }) => {
  return (
    <section className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
      {posts.map((post: Post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className='group cursor-pointer border overflow-hidden rounded-lg'>
            <img
              className='h-50 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
              src={urlFor(post.mainImage).url()!}
              alt={post.title}
            />
            <div className='flex justify-between items-center p-5 bg-white'>
              <div>
                <p className='text-lg font-bold'>{post.title}</p>
                <p className='text-xs'>
                  {post.description} by {post.author.name}
                </p>
              </div>
              <img
                className='h-12 rounded-full'
                src={urlFor(post.author.image).url()!}
                alt=''
              />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Posts;
