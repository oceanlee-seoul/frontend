import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFavicon } from '@mantine/hooks';
import classes from './App.module.css';
import HomePage from './pages/index/HomePage';
import Dashboard from './pages/dashboard/Dashboard';
import MyPage from './pages/my-page/MyPage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import TOP_OVERLAY from './assets/overlay_page_top.svg';

function App() {
  const [favicon] = useState(
    'https://github.com/JHmeatschool/JHmeatschool.github.io/raw/main/favicon3.ico',
  );
  useFavicon(favicon);

  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <div className={classes.app}>
        <img
          className={classes.topOverlay}
          src={TOP_OVERLAY}
          alt="홈페이지 상단 오버레이 이미지"
        />
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-page" element={<MyPage />} />
          </Route>
          <Route
            path="/*"
            element={<NotFound errorMessage="페이지가 존재하지 않습니다." />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
