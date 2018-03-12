import React from 'react';
import { Header, List } from 'semantic-ui-react';

class Floors extends React.Component {
    render() {
        return (
            <div id="floors">
                <Header as="h1">Stockwerk 1</Header>
                <List size="large" divided>
                    <List.Item>
                        <List.Content>
                            <List.Header as="a">Raum 1</List.Header>
                            <List.Description as="a">Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header as="a">Raum 2</List.Header>
                            <List.Description as="a">Updated 22 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <List.Header as="a">Raum 3</List.Header>
                            <List.Description as="a">Updated 34 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default Floors;
