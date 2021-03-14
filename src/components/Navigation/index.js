import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import Search from '../Search'
export default class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item as ={Link} to="/" name='home'
          onClick={this.handleItemClick}>
          <img src={process.env.PUBLIC_URL + '/favicon.png'} alt="Test Challenge Logo" />
        </Menu.Item>
        <Menu.Item
        as ={Link}
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          to="/"
        />
        <Menu.Item
          as ={Link}
          name='Compare'
          active={activeItem === 'Compare'}
          onClick={this.handleItemClick}
          to="/compare"
        />
        <Menu.Item
          as ={Link}
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
          to="/about"
        />
        {/* <Menu.Menu position='right'>
          <Menu.Item>
            <Search/>
          </Menu.Item>
        </Menu.Menu> */}
      </Menu>
    )
  }
}