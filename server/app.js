const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const {
  addProduct,
  getAllProducts,
  renameProductName,
  getProduct,
  deleteProduct
} = require("./controller/product");
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);
router.route("/newproduct").post(addProduct);
router.route("/renameProductName/:value/:index").post(renameProductName);
router.route("/deleteProduct/:id").delete(deleteProduct);

app.use("/api/v1/products", router);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
});
