import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, DatePicker } from "antd";
import moment from "moment";
import ProductContext from "../ProductContext";
import "./ViewPage.scss";
import { EditOutlined, PlayCircleOutlined } from "@ant-design/icons";
import services from "../controller/products";
import deleteIcon from "../assets/DeleteIcon_Hover.svg";
const dateFormat = "YYYY/MM/DD";

const ViewPage = (selectedProduct) => {
  const { selectedProductId } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(selectedProductId);

  useEffect(() => {
    async function fetchData() {
      const res = await services.getProduct(selectedProductId);
      setProduct(res.data);
      setIsLoading(false);
    }
    fetchData();
  }, [selectedProductId]);

  const deleteRow = () => {
    // TBD: Implement delete feature
  };

  const handleOnDragEnd = (result) => {
    // TBD :: save new row order
  };
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {!isLoading &&
          product.payload.map((item) => {
            return (
              <Droppable key={item.name} droppableId={item.name}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="droppableArea"
                  >
                    {item.data.map((component, index) => {
                      return (
                        <Draggable
                          key={item.name + component.id}
                          draggableId={item.name + component.id}
                          index={index}
                        >
                          {(provided) => (
                            <Row
                              className="container"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Col span={10} className="leftCol">
                                <PlayCircleOutlined />
                                {component.value}
                              </Col>

                              <Col span={14} className="rightCol">
                                <EditOutlined className="editIcon" />
                                <DatePicker
                                  defaultValue={moment(
                                    "2015/01/01",
                                    dateFormat
                                  )}
                                  format={dateFormat}
                                />
                                <img
                                  src={deleteIcon}
                                  alt="delete row"
                                  className="deleteIcon"
                                  onClick={deleteRow}
                                />
                                {/* <DeleteOutlined /> */}
                              </Col>
                            </Row>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
      </DragDropContext>
    </>
  );
};

export default ViewPage;
