import React, { useContext, useState } from "react";
import "./SideBar.scss";
import { Row, Col } from "antd";
import { UpOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
import ProjectNameRow from "./ProductNameRow";
import ProductContext from "../ProductContext";
import services from "../controller/products";
import { useTranslation } from "react-i18next";

const SideBarNavBar = ({ changeProduct }) => {
  const { productsData, setProductsData, setSelectedProductId } =
    useContext(ProductContext);

  const [showPages, setShowPages] = useState(true);

  const { t } = useTranslation();

  const diplayPages = () => {
    setShowPages(!showPages);
  };

  const renameProductName = async (value, index) => {
    const res = await services.renameProductName(value, index);
    setProductsData(res.data);
  };

  const addNewProject = async () => {
    const res = await services.addProduct();
    setProductsData([...productsData, res.data]);
    setSelectedProductId(res.data.id);
  };

  const displayProduct = (id) => {
    changeProduct(id);
    console.log("displayProduct", id);
  };

  return (
    <>
      <Row className="selectionRow">
        <Col span={6} className="tab">
          {t("sidebar_layers_label")}
        </Col>
        <Col span={6} className="tab">
          {t("sidebar_assets_label")}
        </Col>
        <Col span={12} onClick={diplayPages} className="pageArrow">
          {t("sidebar_page_label")}
          {showPages && <UpOutlined />}
          {!showPages && <DownOutlined />}
        </Col>
      </Row>
      {showPages && (
        <Row className="productList">
          <Col span={20}>{t("sidebar_pages_label")}</Col>
          <Col span={4}>
            <PlusOutlined onClick={addNewProject} />
          </Col>
        </Row>
      )}

      {showPages &&
        productsData.map((product, index) => {
          return (
            <ProjectNameRow
              key={index}
              product={product}
              index={index}
              save={renameProductName}
              displaySelectedProduct={displayProduct}
            />
          );
        })}
    </>
  );
};
export default SideBarNavBar;
