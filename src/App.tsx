import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import MenuItem from './components/Menu/menuItem';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition'

library.add(fas)

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Menu defaultIndex='0' onSelect={(index) => { alert(index) }}>
        <MenuItem>
            link a
        </MenuItem>
        <MenuItem disabled>
            link b
        </MenuItem>
        <SubMenu title="title">
          <MenuItem>
            subTitle one
          </MenuItem>
          <MenuItem>
            subTitle two
          </MenuItem>
        </SubMenu>
        <MenuItem>
            link c
        </MenuItem>
      </Menu>
      <Menu defaultIndex='0' mode="vertical" defaultOpenSubMenus={['1']}>
        <MenuItem>
            link a
        </MenuItem>
        <MenuItem disabled>
            link b
        </MenuItem>
        <SubMenu title="title">
          <MenuItem>
            subTitle one
          </MenuItem>
          <MenuItem>
            subTitle two
          </MenuItem>
        </SubMenu>
        <MenuItem>
            link c
        </MenuItem>
      </Menu>
      <Button onClick={(e) => { e.preventDefault(); alert(123)}}>default button</Button>
      <Button btnType='primary' size='sm'>Primary Small</Button>
      <Button btnType='danger' size='lg'>Danger Large</Button>
      <Button btnType='danger' size='sm' disabled>Danger small disabled</Button>
      <Button btnType='link' href="www.baidu.com">link</Button>
      <Button btnType='link' href="www.baidu.com" disabled>link disabled</Button>
      <Icon icon="arrow-down" size="2x" theme="primary" />
      <Button size='sm' onClick={() => { setShow(!show) }}>toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left">
          <div>
            <p>there is some content here!</p>
            <p>there is some content here!</p>
            <p>there is some content here!</p>
            <p>there is some content here!</p>
            <p>there is some content here!</p>
          </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        wrapper
        animation="zoom-in-left">
          <Button btnType='danger' size='lg'>A large primary button</Button>
      </Transition>
    </div>
  )
}

export default App;
