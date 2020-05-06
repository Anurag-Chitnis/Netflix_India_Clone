import React from 'react';
import './dashboard.styles.scss';
import Sidenav from '../../components/sidenav/sidenav.component';
import Moviesection from '../../components/movie-section/moviesection.component';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenav_images: ["plus", "user", "home", "cinema", "tv"]
        };
    }

    render() {
        return(
            <div className="dashboard">
                <Sidenav images={this.state.sidenav_images}/>
                <Moviesection/>
            </div>
        );
    }
}

export default Dashboard;