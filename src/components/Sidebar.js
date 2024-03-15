import { Container, Image, Stack, Form } from 'react-bootstrap';
import SidebarMenu from './SidebarMenu';
import SidebarMenuLink from './SidebarMenuLink';
import kliq from '../images/Kliq.png';
import sidebarIcon from '../images/sidebar.png';
import threeDots from '../images/dots.png';
import userCircle from '../images/user-circle.png';
import settingIcon from '../images/settings.png';
import searchIcon from '../images/search-lg.png';

const Sidebar = () => {
    return (
        <Container className='d-flex flex-column min-vh-100 p-0' style={{backgroundColor: '#e3e3e3' }}>
            <Stack className='px-4 py-3' direction='horizontal'>
                <Image src={ kliq } alt='KLIQ' style={{ width: 'auto' }} />
                <Image className='ms-auto' src={ sidebarIcon } style={{ width: '20px', height: '20px' }} />
            </Stack>
            <Stack className='px-4'>
                <Form>
                    <Form.Group>
                        <Form.Control className='p-3 px-5' placeholder='Search' style={{ background: `url(${searchIcon}) #fff no-repeat 5% center`, borderRadius: '30px' }} type='search' />
                    </Form.Group>
                </Form>
                <SidebarMenu />
            </Stack>
            <Stack>
                <hr style={{ color: '#4d586c', height: '2px', opacity: '100%'  }} />
                <div className='m-4' style={{ backgroundColor: '#fff', borderRadius: '20px', display: 'block', height: '210px' }}></div>
                <div className='mx-5 mb-2'>
                    <SidebarMenuLink title='Settings' imageSrc={settingIcon} />
                </div>
                <Stack className='py-1 px-5' direction='horizontal' style={{ backgroundColor: '#d7d7d7' }}>
                    <SidebarMenuLink title='User Name' imageSrc={ userCircle } style={{ fontWeight: 'bold' }} />
                    <Image className='ms-auto' src={ threeDots } style={{ width: '20px', height: '4px' }} /> 
                </Stack>
            </Stack>
        </Container>
    )
}

export default Sidebar;