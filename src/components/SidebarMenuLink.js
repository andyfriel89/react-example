import { Image, Stack } from 'react-bootstrap';

const SidebarMenuLink = (props) => {
  return (
    <Stack className='p-2' direction='horizontal' gap={3}>
        <Image src={props.imageSrc} style={{ width: '20px', height: '20px' }} />
        <div style={props.style}>{props.title}</div>
    </Stack>
  ); 
};

export default SidebarMenuLink;
