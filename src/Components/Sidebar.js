import { UserOutlined, TeamOutlined, HomeOutlined, ShoppingCartOutlined, DollarOutlined, CalendarOutlined, DropboxOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Contexts/Auth';

const { Sider } = Layout;

const Sidebar = () => {
  const {setUser, setToken, setRefreshToken} = useContext(AuthContext);
  const navigate = useNavigate();
  const SignOut = async () => {
    localStorage.clear();   
    setUser(null);
    setToken(null);
    setRefreshToken(null);
    navigate('/login');
  }

  return (
      <Sider breakpoint="lg" collapsedWidth="0" style={{ height: '100vh', float: 'left' }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/usuarios">
              <UserOutlined />
              <span>Usuários</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/clientes">
              <TeamOutlined />
              <span>Clientes</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/produtos">
              <ShoppingCartOutlined />
              <span>Produtos</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/vendas">
              <DollarOutlined />
              <span>Vendas</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/atendimentos">
              <CalendarOutlined />
              <span>Atendimentos</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/estoque">
              <DropboxOutlined />
              <span>Estoque</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8" onClick={() => SignOut()}>
            <LoginOutlined />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
  );
};

export default Sidebar;