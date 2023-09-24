import './Home.css';
import { Button, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="main">
        <h2 className="main-header">Aplikacja do nauki języka</h2>
        <Container fluid>
                    <Button color="success" tag={Link} to="/users">Users</Button>
                    <Button color="success" tag={Link} to="/units">Units</Button>
        </Container>
    </div>
  )
}

export default Home