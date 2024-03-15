import { Button, Nav, Stack } from 'react-bootstrap';
import PromotionsTable from './PromotionsTable';
import '../Buttons.css';

const Promotions = () => {
    return (
        <div className='text-start mt-5'>
            <style>
                {`
                    .nav-item a {
                        color: #17191b;
                        padding-top: 0;
                    }

                    .nav-item:first-of-type a {
                        padding-left: 0;
                    }
                `}
            </style>
            <Stack>
                <h1>Promotions</h1>
                <Nav as='ul'>
                    <Nav.Item as='li'>
                        <Nav.Link>Home</Nav.Link>
                    </Nav.Item>-
                    <Nav.Item as='li'>
                        <Nav.Link>App Settings</Nav.Link>
                    </Nav.Item>-
                    <Nav.Item as='li'>
                        <Nav.Link>Promotions</Nav.Link>
                    </Nav.Item>
                </Nav>
                <PromotionsTable />
                <Button className='mt-3' variant='green'>Add a subscription</Button>
            </Stack>
        </div>
    )
}

export default Promotions;