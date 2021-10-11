import { MenuItem } from "react-contextmenu";
import "./ProductNameContextMenu.scss";
import { useTranslation } from "react-i18next";

const ProductNameContextMenu = ({
  project,
  index,
  editProductName,
  handleDeleteProduct
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    alert("This feature is not implemented yet!!");
  };

  return (
    <>
      <MenuItem className="contextMenuItem" onClick={handleClick}>
        {t("product_context_menu_copy")}
      </MenuItem>
      <div className="divider"></div>

      <MenuItem className="contextMenuItem" onClick={handleDeleteProduct}>
        {t("product_context_menu_delete")}
      </MenuItem>

      <MenuItem divider />

      <MenuItem
        className="contextMenuItem"
        onClick={() => {
          editProductName(index);
        }}
      >
        {t("product_context_menu_rename")}
      </MenuItem>

      <MenuItem className="contextMenuItem" onClick={handleClick}>
        {t("product_context_menu_duplicate")}
      </MenuItem>
    </>
  );
};

export default ProductNameContextMenu;
