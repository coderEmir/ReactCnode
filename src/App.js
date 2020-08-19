import React from 'react';
import './App.css';
import 'antd/dist/antd.less'
import ViewRouters from './router';
// 测试代码
// import { Button } from 'antd';
import { Layout } from 'antd';
import Header from './component/header';
function App() {
  return (
    <Layout>
      {/* 测试代码 */}
      {/* <Button type="primary">按钮</Button> */}
      <Header>
        <ViewRouters />
      </Header>
     
    </Layout> 
  );
}

export default App;
