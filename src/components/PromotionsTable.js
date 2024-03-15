import { useState, useEffect } from 'react';
import { Badge, Button, Image, Table, Stack } from 'react-bootstrap';
import searchIcon from '../images/search-lg.png';
import arrowsIcon from '../images/arrows.png';
import filterIcon from '../images/filter.png';
import moveIcon from '../images/chevron-selector-vertical.png';
import orderIcon from '../images/arrow-narrow-down.png';
import dotsIcon from '../images/dots.png';
import circleIcon from '../images/Ellipse.png';
import '../Buttons.css';

const PromotionsTable = () => {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        fetch('promotions.json')
        .then((response) => response.json())
        .then((data) => setPromotions(data))
        .catch((error) => console.log(error));
    },[]);

    const planColors = {
        'Meal plan': '#f7907a',
        'Course':  '#93eefe'
    };

    return (
        <>
            <style>
                {`
                    table thead th:first-child {
                        border-radius:10px 0 0 0;
                    }
                    
                    table thead th:last-child {
                        border-radius:0 10px 0 0;
                    }

                    table thead tr th {
                        background-color: #5c5d5f !important;
                        color: #fff !important;
                    }

                    .badge {
                        color: #000;
                    }

                    .badge.bg-success {
                        background-color: #dafc99 !important;
                    }
                `}
            </style>
            <Stack className='mt-2 p-4' style={{ backgroundColor: '#fff', border: '1px solid #e1e1e1', borderRadius: '20px' }} gap={3}>
                <Stack className='justify-content-end' direction='horizontal' gap={3}>
                    <Button className='pill' variant='grey'>
                        <Image src={searchIcon} />
                        <Image src={filterIcon} />
                    </Button>
                    <Button variant='grey'>
                        <Image src={arrowsIcon} />
                    </Button>
                </Stack>
                <hr />
                <Table borderless>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Name <Image src={ orderIcon } /></th>
                            <th>Discount Type</th>
                            <th>Discount Off</th>
                            <th>End Date</th>
                            <th>Products</th>
                            <th>Status</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {promotions && promotions.map((promotion) => (
                            <tr>
                                <td><Image src={ moveIcon } /></td>
                                <td>{promotion.name}</td>
                                <td>{promotion.type}</td>
                                <td>{promotion.discount}</td>
                                <td>{promotion.ends}</td>
                                <td><Badge bg='' style={{ backgroundColor: planColors[promotion.products] }}>{promotion.products}</Badge></td>
                                <td>
                                    {promotion.active 
                                        ? <Badge bg='success'><Image src={ circleIcon } /> Active</Badge>
                                        : <Badge bg='danger'>Inactive</Badge>
                                    }</td>
                                <td><Image src={ dotsIcon } /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Stack>
        </>
    )
}

export default PromotionsTable;