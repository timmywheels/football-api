import React, {Component} from 'react';
import styled from 'styled-components';

const HomeSection = styled.h1`
    font-size: 30px;
`;

class Home extends Component {
    render() {
        return (
            <div>
                <HomeSection>Fantasy Football API</HomeSection>
            </div>
        )
    }
}

export default Home;