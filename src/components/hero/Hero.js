import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({users}) => {
  return (
    <div>
        <Carousel>
            {
                users.map(user =>{
                    return(
                        <Paper>
                            <div className="user-card-container">
                                <div className="user-card">
                                    <div className="user-detail">
                                        <div className = "user-name">
                                            <h4>{user.name}</h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Paper>
                    )
                } )
                   
            }

        </Carousel>
    </div>
  )
}

export default Hero