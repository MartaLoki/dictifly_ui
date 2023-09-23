import './Home.css';
import { Button, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="main">
        <h2 className="main-header">Aplikacja do nauki języka</h2>
        <Container fluid>
                    <Button color="link"><Link to="/users">Users</Link></Button>
        </Container>
    </div>
  )
}

export default Home