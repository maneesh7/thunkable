import React, { useState, useMemo, useEffect } from "react";
import "./App.scss";
import { Layout } from "antd";
import NavBar from "./components/NavBar";
import ViewPage from "./components/ViewPage";
import SideBar from "./components/SideBar";
import ProductContext from "./ProductContext";
import services from "./controller/products";
const { Content, Sider } = Layout;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [productsData, setProductsData] = useState([]);

  const data = useMemo(
    () => ({
      productsData,
      setProductsData,
      selectedProductId,
      setSelectedProductId
    }),
    [productsData, selectedProductId, setSelectedProductId]
  );

  useEffect(() => {
    async function fetchProducts() {
      const res = await services.getAllProducts();
      setProductsData(res.data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (productsData.length !== 0) {
      setIsLoading(false);
    }
  }, [productsData]);

  const changeProduct = (id) => {
    setSelectedProductId(id);
  };

  return (
    <>
      <ProductContext.Provider value={data}>
        <Layout>
          <NavBar></NavBar>
          {!isLoading && (
            <Layout>
              <Sider width={250} className="sidebar">
                <SideBar changeProduct={changeProduct}></SideBar>
              </Sider>
              <Layout>
                <Content>
                  <ViewPage></ViewPage>
                </Content>
              </Layout>
            </Layout>
          )}
        </Layout>
      </ProductContext.Provider>
    </>
  );
};
export default App;
