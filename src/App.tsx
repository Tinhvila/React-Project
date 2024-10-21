import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
import ChangeLanguage from './components/ChangeLanguage';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Product from './model';
import fetchProductData from './api/fetchProductData';
import './css/custom.css';
import { useTranslation } from 'react-i18next';
import FilterRightTop from './components/FilterRightTop';
import ResultRight from './components/ResultRight';
import FilterLeft from './components/FilterLeft';
import MainContent from './components/MainContent';
function App() {
  const [searchContent, setSearchContent] = useState<string>('');
  const [data, setData] = useState<Product[]>([]);
  const { t, i18n } = useTranslation();

  function changeLanguage(lng: string): void {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProductData();
        setData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    getData();
  }, []);

  function handleSetSearchContent(value: string): void {
    setSearchContent(value);
  }

  function handleClearSearchContent(): void {
    setSearchContent('');
  }

  return (
    <>
      <Header>
        <ChangeLanguage onChangeLanguage={changeLanguage} />
        <Logo />
        <Title />
        <SearchBox
          searchContent={searchContent}
          onSetSearchContent={handleSetSearchContent}
          onClearSearchContent={handleClearSearchContent}
        />
      </Header>
      <MainContent>
        <FilterLeft />

        <ResultRight>
          <FilterRightTop />
          <ProductList data={data} />
        </ResultRight>
      </MainContent>
    </>
  );
}

export default App;
