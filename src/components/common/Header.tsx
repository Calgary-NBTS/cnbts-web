import { getAllNewsletterHeadings } from '@/sanity/queries';
import Menubar from './Menubar';
import { MenuComponentProps } from './Menubar';

const baseNewsUrl = '/newsletter/';

const Header = async () => {
  const newsletters = await getAllNewsletterHeadings();

  const newsItems: MenuComponentProps[] = newsletters.map((item) => {
    return {
      title: item.title,
      href: baseNewsUrl + item.slug,
    };
  });

  newsItems.unshift({ title: 'Latest Newsletter', href: baseNewsUrl });

  const navItems: MenuComponentProps[] = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Calendar',
      href: '/calendar',
    },
    /*     {
      title: "News",
      // href: '/newsletter',
      submenu: newsItems,
    }, */
    /*         {
            title: 'Resources',
            href: '/resources',
        }, */
    {
      title: 'About',
      href: '/about',
    },
    /*         {
            title: 'Admin',
            href: '/admin',
            target: '_blank',
        } */
  ];
  return <Menubar menu={navItems} />;
};

export default Header;
