import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';
import { Grid } from './grid';
import { H2, H6 } from './typography';
import Image from 'next/image';

type Props = {
  title: string;
  subTitle?: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  caption: string;
  slug: string;
};

const HeroPost = ({
  title,
  subTitle,
  coverImage,
  date,
  excerpt,
  author,
  caption,
  slug,
}: Props) => {
  return (
    <section>
      <div className='rounded-lg bg-gray-100 lg:bg-transparent lg:dark:bg-transparent'>
        <div className='-mx-8 lg:mx-0'>
          <Grid className='group rounded-lg pb-6 pt-14 md:pb-12 lg:bg-gray-100'>
            <div className='col-span-full lg:col-span-5 lg:col-start-2 lg:flex lg:flex-col lg:justify-between'>
              <div>
                <H6 as='h2'>{caption}</H6>
                <H2 as='h3' className='mt-12'>
                  {title}
                </H2>

                <div className='mt-6 text-xl font-medium text-blueGray-500'>
                  {subTitle}
                </div>
              </div>

              <div className='mt-12 flex items-center justify-between'>
                <Link href={`/posts/${slug}`}>
                  <a className='text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition'>
                    Read more
                    <div className='focus-ring hover:ring hover:ring-sky-400 absolute inset-0 left-0 right-0 z-10 rounded-lg md:-left-12 md:-right-12 lg:left-0 lg:right-0' />
                  </a>
                </Link>
              </div>
            </div>

            <div className='relative col-span-full mt-12 lg:col-span-4 lg:col-start-8'>
              {/* <Image src={coverImage} width={400} height={500} /> */}
              <CoverImage src={coverImage} slug={slug} title='' />
            </div>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
