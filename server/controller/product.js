const { products, projectTemplate } = require("../model/projectData");
const { StatusCodes } = require("http-status-codes");
const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).send(updateProducts);
};

let updateProducts = products;

const addProduct = async (req, res) => {
  let nextNumber = updateProducts.length + 1;
  const maxNum = Math.max(
    ...updateProducts.map((data) => data.name.split("Page ")[1])
  );
  const newNumber = nextNumber > maxNum ? nextNumber : maxNum + 1;
  const pageObj = {
    name: `Page ` + newNumber,
    id: newNumber.toString(),
    payload: [projectTemplate]
  };
  updateProducts = [...updateProducts, pageObj];
  res.status(StatusCodes.OK).send(pageObj);
};

const getProduct = (req, res) => {
  const { id } = req.params;
  const product = updateProducts.find(
    (product) => product.id === id.toString()
  );
  res.status(StatusCodes.OK).send(product);
};

const renameProductName = (req, res) => {
  const { value, index } = req.params;
  updateProducts.map((data) => {
    if (data.id === index) {
      data.name = value;
    }
    return data;
  });
  res.status(StatusCodes.OK).send(updateProducts);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  updateProducts = updateProducts.filter(
    (product) => product.id !== id.toString()
  );
  console.log("deleteProduct");
  res.status(StatusCodes.OK).send(updateProducts);
};

module.exports = {
  getAllProducts,
  addProduct,
  renameProductName,
  getProduct,
  deleteProduct
};
