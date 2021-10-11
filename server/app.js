const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const {
  addProduct,
  getAllProducts,
  renameProductName,
  getProduct,
  deleteProduct
} = require("./controller/product");
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

app.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
