import './App.css';
import Layout from './components/Layout/Layout';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#faa935',
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
