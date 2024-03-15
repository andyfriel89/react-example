import { Button, Image, Stack} from 'react-bootstrap';
import globeIcon from '../images/globe.png';
import arrowDown from '../images/chevron-down.png';
import '../Buttons.css';

const TopNavigation = () => {
    return (
        <Stack direction='horizontal' gap={3}>
            <Button variant='green'>Web app <Image src={ globeIcon } /></Button>
            <Button variant='outline-dark'>Application Validation<Image src={ arrowDown } /></Button>
        </Stack>
    )
}

export default TopNavigation;