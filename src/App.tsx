import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import MenuItem from './components/Menu/menuItem';
import Icon from './components/Icon/icon';

library.add(fas)

function App() {
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
      <Menu defaultIndex='0' mode="vertical" defaultOpenSubMenus={['2']}>
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
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary Small</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger Large</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small} disabled>Danger small disabled</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com">link</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>link disabled</Button>
      <Icon icon="arrow-down" size="2x" theme="danger" />
    </div>
  )
}

export default App;
