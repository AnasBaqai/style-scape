import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/FireBase/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);


  export const fetchCategoriesAsync = () => async(dispatch)=>{
    dispatch(fetchCategoriesStart())
    try {
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message))
    }
  }
