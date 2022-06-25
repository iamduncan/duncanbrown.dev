import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug,
        'max-w-screen': !slug,
      })}
    />
  );
  return (
    <div className='sm:mx-0 flex justify-center'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
        // <Image
        //   src={src}
        //   alt={`Cover Image for ${title}`}
        //   // layout='responsive'
        //   height='100%'
        //   width='100%'
        // />
      )}
    </div>
  );
};

export default CoverImage;
