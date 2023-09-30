import './Home.css';
import { Button, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="main">
        <h2 className="main-header">Test your english vocabulary</h2>
        <Container fluid>
                    <Button color="success" tag={Link} to="/dictionaryItems">Dictionary</Button> &nbsp;
        </Container> &nbsp;
        <Container fluid>
                    <Button color="success" tag={Link} to="/units">Units</Button> &nbsp;
                    <Button color="success" tag={Link} to="/users">Users</Button> &nbsp;
        </Container> 
    </div>
  )
}

export default Home