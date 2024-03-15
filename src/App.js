import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import TopNavigation from './components/TopNavigation';
import Promotions from './components/Promotions';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container className='App min-vh-100' fluid style={{ backgroundColor: '#f4f4f4' }}>
      <Row>
        <Col xs md={4} lg={3} className='p-0'>
          <Sidebar />
        </Col>
        <Col className='p-4'>
          <TopNavigation />
          <Promotions />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
