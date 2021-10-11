import { MenuItem } from "react-contextmenu";
import "./ProductNameContextMenu.scss";

const ProductNameContextMenu = ({
  project,
  index,
  editProductName,
  handleDeleteProduct
}) => {
  const handleClick = () => {
    alert("This feature is not implemented yet!!");
  };
  return (
    <>
      <MenuItem className="contextMenuItem" onClick={handleClick}>
        Copy link to project
      </MenuItem>
      <div className="divider"></div>

      <MenuItem className="contextMenuItem" onClick={handleDeleteProduct}>
        Delete project
      </MenuItem>
      <MenuItem divider />
      <MenuItem
        className="contextMenuItem"
        onClick={() => {
          editProductName(index);
        }}
      >
        Rename project
      </MenuItem>
      <MenuItem className="contextMenuItem" onClick={handleClick}>
        Duplicate project
      </MenuItem>
    </>
  );
};

export default ProductNameContextMenu;
