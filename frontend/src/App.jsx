import './App.css';
import Layout from './components/Layout/Layout';
import { ConfigProvider, FloatButton } from 'antd';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#faa935',
            fontSize: 16,
            fontSizeLG: 18,
            fontFamily: '"Montserrat", sans-serif',
          },
          components: {
            Pagination: {
              itemSize: 40,
            },
          },
        }}
      >
        <Layout />
      </ConfigProvider>
    </>
  );
}

export default App;
