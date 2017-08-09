import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'
import B from '../../assets/images/b.svg'


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
                <Menu.Item as={NavLink} to='/' exact>Back to Main site</Menu.Item>
            </Container>
        </Menu>
        <Container style={{ marginTop: '5em' }}>
            {/*ok this is super hacky, but since we don't have CSS modules, loading the semantic UI stylesheet via webpack loads it globally...
                so that cascades... but not in a good way, as it breaks our user-facing styles :) */}
            <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" />
            {children}
        </Container>
    </div>


);
export default ExecContainer;
