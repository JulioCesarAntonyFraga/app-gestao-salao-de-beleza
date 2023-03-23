import './App.css';
import React, { useContext, useEffect } from 'react';
import Layout  from './Components/Layout';
import PrivateRoutes  from './Components/PrivateRoutes';
import PublicRoutes  from './Components/PublicRoutes';
import { BrowserRouter } from "react-router-dom";
import { Layout as AntdLayout } from 'antd';
import AuthContext from './Contexts/Auth';

function App() {
  const {setUser, setToken, setRefreshToken, signed} = useContext(AuthContext);

  useEffect(() => {
    const loadStorageData = async () => {
        const storageUser = JSON.parse(localStorage.getItem('User'));
        const storageToken = localStorage.getItem("Token");
        const storageRefreshToken = localStorage.getItem("RefreshToken");

        if(storageToken && storageUser && storageRefreshToken){
            setUser(storageUser);
            setToken(storageToken);
            setRefreshToken(storageRefreshToken);
        }
    };
    loadStorageData();
  }, []);

  return (
    <BrowserRouter>
        {signed ? 
          <Layout>
              <AntdLayout style={{padding: '30px'}}>
                <PrivateRoutes />
              </AntdLayout>
          </Layout> : <PublicRoutes />
        }
    </BrowserRouter>
  );
}

export default App;
