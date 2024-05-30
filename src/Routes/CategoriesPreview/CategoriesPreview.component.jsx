import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview.component";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/categories.selector";
import { Fragment } from "react";
import Spinner from "../../Components/Spinner/Spinner.Component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="shop-container">
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
