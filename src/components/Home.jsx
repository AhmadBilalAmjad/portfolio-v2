import React from 'react';
import { Layout, Typography, Card } from 'antd';
import { HeartFilled } from '@ant-design/icons'

import Header from './partials/Header';

import '../styles/home.css';

const Home = () => {
  const { Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout>
    <Header />
    <Content className="site-layout">
      <div className="site-layout-background">
        <Title>I'm Ahmad Bilal Amjad</Title>
        <Title level={2}>I'm a Software Engineer / Full Stack Developer</Title>
      </div>
    </Content>
    <Title className='skills'>SKILLS</Title>
    <Layout className='skills-card-wrapper'>
      <Card size="small" title="FRONT END" style={{ width: 200 }}>
        <ul className='card-body'>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li className='bold-purple'>REACT JS</li>
          <li className='bold-purple'>REDUX</li>
          <li className='bold-purple'>REDUX-THUNK & REDUX-SAGA</li>
        </ul>
      </Card>
      <Card size="small" title="STYLING" style={{ width: 200 }}>
        <ul className='card-body'>
          <li>SASS</li>
          <li className='bold-purple'>MATERIAL UI</li>
          <li className='bold-purple'>ANT DESIGN</li>
          <li>BOOTSTRAP 4*</li>
          <li>MATERIALIZE CSS</li>
        </ul>
      </Card>
      <Card size="small" title="BACK END" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>NODE JS</li>
          <li className='bold-purple'>EXPRESS JS</li>
          <li>LARAVEL</li>
          <li>DJANGO</li>
          <li>ORM</li>
        </ul>
      </Card>
      <Card size="small" title="LANGUAGES" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>JAVASCRIPT</li>
          <li className='bold-purple'>TYPESCRIPT</li>
          <li>PYTHON</li>
          <li>PHP</li>
        </ul>
      </Card>
      <Card size="small" title="DATABASES" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>MONGODB</li>
          <li className='bold-purple'>MYSQL</li>
          <li>POSTGRESQL</li>
        </ul>
      </Card>
      <Card size="small" title="TESTING" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>JEST</li>
          <li className='bold-purple'>MOCHA</li>
          <li>CHAI</li>
        </ul>
      </Card>
    </Layout>
    <Title className='skills'>Social</Title>
    
    <Footer className='footer'>Made with <HeartFilled style={{ color: 'red', fontSize: 18 }}/> by <span className='bold-purple'> Ahmad Bilal Amjad </span></Footer>
  </Layout>
  );
}

export default Home;
