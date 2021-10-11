import React, { useContext, useEffect, useRef, useState } from "react";
import { Input, Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import ProductNameContextMenu from "./ProductNameContextMenu";
import "./ProductNameRow.scss";
import services from "../controller/products";
import ProductContext from "../ProductContext";

const ProductNameRow = ({ product, index, save, displaySelectedProduct }) => {
  const [editName, setEditName] = useState(false);
  const [productName, setProductName] = useState(product.name);
  const [previopusProductName, setPreviopusProductName] = useState(
    product.name
  );
  const { selectedProductId, setProductsData } = useContext(ProductContext);
  const node = useRef(null);
  const labelInput = useRef(null);

  const handleClickOutside = (e) => {
    if (productName === "") {
      setProductName(previopusProductName);
    } else if (productName !== previopusProductName) {
      save(productName, product.id);
    }
    if (node.current.contains(e.target)) {
      return;
    }
    setEditName(false);
  };

  const saveProductName = (value, index) => {
    if (value === "") {
      setProductName(previopusProductName);
    } else {
      save(value, index);
    }
  };

  const editProductName = (index) => {
    setEditName(true);
  };

  const deleteProduct = async (id) => {
    const res = await services.deleteProduct(product.id);
    setProductsData(res.data);
  };

  useEffect(() => {
    if (editName) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (editName) {
      labelInput.current.focus();
    }
  }, [editName]);

  const setValue = (e) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
      setPreviopusProductName(e.target.value);
      setEditName(false);
      saveProductName(e.target.value, product.id);
    } else if (e.key === "Escape") {
      setValue(previopusProductName);
      setEditName(false);
    }
  };

  return (
    <>
      <ContextMenuTrigger id={product.name}>
        <Row
          ref={node}
          className={
            parseInt(selectedProductId) === parseInt(product.id)
              ? " active"
              : ""
          }
          key={index}
          onClick={() => {
            displaySelectedProduct(product.id);
          }}
          onDoubleClick={() => {
            editProductName(index);
          }}
        >
          <Col span={24} className="projectRow">
            <CheckOutlined className="projectRowIcon" />

            {editName ? (
              <Input
                type="text"
                placeholder={product.name}
                ref={labelInput}
                className="projectNameInput"
                defaultValue={product.name}
                width="100%"
                onChange={(e) => setProductName(e.target.value)}
                onBlur={(e) => saveProductName(e.target.value, index)}
                onKeyUp={setValue}
              />
            ) : (
              <span className="projectLabel">{product.name}</span>
            )}
          </Col>
        </Row>
      </ContextMenuTrigger>

      <ContextMenu id={product.name} className="projectNameContextMenu">
        <ProductNameContextMenu
          product={product}
          index={index}
          editProductName={editProductName}
          handleDeleteProduct={deleteProduct}
        ></ProductNameContextMenu>
      </ContextMenu>
    </>
  );
};

export default ProductNameRow;
