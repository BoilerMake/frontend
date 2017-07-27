import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'
import B from '../../assets/images/b.svg'
import 'semantic-ui-css/semantic.min.css';


const ExecContainer = ({children}) => (
    <div>
        <Menu fixed='top' inverted style={{paddingTop: 0}}>
            <Container>
                <Menu.Item as={NavLink} to='/exec' exact header>
                    <Image
                        height={30}
                        src={B}
                        style={{ marginRight: '1em' }}
                    />
                    Dashboard
                </Menu.Item>
                <Menu.Item as={NavLink} to='/exec/users'>Users</Menu.Item>
                <Menu.Item as={NavLink} to='/exec/applications'>Applications</Menu.Item>
            </Container>
        </Menu>
        <Container style={{ marginTop: '5em' }}>
            {children}
        </Container>
    </div>


);
export default ExecContainer;
