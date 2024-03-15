import Stack from 'react-bootstrap/Stack';
import SidebarMenuLink from './SidebarMenuLink';

const menuLinks = [
    {
      title: 'Dashboard',
      getImageSrc: () => require('../images/grid-01.png'),
    },
    {
      title: 'Sessions',
      getImageSrc: () => require('../images/book-open-01.png'),
    },
    {
      title: 'Programs',
      getImageSrc: () => require('../images/announcement-01.png'),
    },
    {
      title: 'Content Library',
      getImageSrc: () => require('../images/server-03.png'),
    },
    {
      title: 'Collections',
      getImageSrc: () => require('../images/folder-plus.png'),
    },
    {
      title: 'Community',
      getImageSrc: () => require('../images/announcement-02.png'),
    },
    {
      title: 'Nutrition',
      getImageSrc: () => require('../images/heart-hand.png'),
    },
    {
      title: 'Blog',
      getImageSrc: () => require('../images/file-02.png'),
    },
    {
      title: 'Help Center',
      getImageSrc: () => require('../images/medical-cross.png'),
    },
  ];

const SidebarMenu = () => {
    return (
        <Stack className='mt-3 px-3' gap={3}>
            {menuLinks.map((menuLink) => (
              <SidebarMenuLink 
                  key={menuLink.title}
                  title={menuLink.title}
                  imageSrc={menuLink.getImageSrc()}
                />
            ))}
        </Stack>
    )
}

export default SidebarMenu;