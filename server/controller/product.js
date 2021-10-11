const { products, projectTemplate } = require("../model/projectData");
const { StatusCodes } = require("http-status-codes");
const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).send(allProducts);
};

let allProducts = products;

const addProduct = async (req, res) => {
  let nextNumber = allProducts.length + 1;
  const maxNum = Math.max(
    ...allProducts.map((data) => data.name.split("Page ")[1])
  );

  const newNumber =
    nextNumber > maxNum || isNaN(maxNum) ? nextNumber : maxNum + 1;
  const pageObj = {
    name: `Page ` + newNumber,
    id: newNumber.toString(),
    payload: [projectTemplate]
  };
  allProducts = [...allProducts, pageObj];
  res.status(StatusCodes.OK).send(pageObj);
};

const getProduct = (req, res) => {
  const { id } = req.params;
  const product = allProducts.find((product) => product.id === id.toString());
  res.status(StatusCodes.OK).send(product);
};

const renameProductName = (req, res) => {
  const { value, index } = req.params;
  allProducts.map((data) => {
    if (data.id === index) {
      data.name = value;
    }
    return data;
  });
  res.status(StatusCodes.OK).send(allProducts);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  allProducts = allProducts.filter((product) => product.id !== id.toString());
  res.status(StatusCodes.OK).send(allProducts);
};

module.exports = {
  getAllProducts,
  addProduct,
  renameProductName,
  getProduct,
  deleteProduct
};
