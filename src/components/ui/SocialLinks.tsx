import styles from '@/styles/card.module.css';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

type Props = {
  settings: {
    social: {
      _key: string;
      media: string;
      url: string;
    }[];
  };
};

const socials = [
  {
    media: 'twitter',
    title: 'Twitter',
    description: 'Follow me on Twitter',
  },
  {
    media: 'github',
    title: 'GitHub',
    description: 'Explore my projects on GitHub',
  },
  {
    media: 'linkedin',
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
  },
  {
    media: 'mastodon',
    title: 'Mastodon',
    description: 'Follow me on Mastodon',
  },
  {
    media: 'youtube',
    title: 'YouTube',
    description: 'Subscribe to my YouTube channel',
  },
  {
    media: 'facebook',
    title: 'Facebook',
    description: 'Follow me on Facebook',
  },
  {
    media: 'instagram',
    title: 'Instagram',
    description: 'Follow me on Instagram',
  },
];

export default function SocialLinks({ settings }: Props) {
  return (
    <>
      {settings.social.map((social) => {
        const socialData = socials.find((s) => s.media === social.media);
        if (!socialData) return <></>;
        return (
          <a
            href={social.url}
            key={social._key}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer me"
          >
            <h2 className={inter.className}>
              {socialData.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>{socialData.description}</p>
          </a>
        );
      })}
    </>
  );
}
