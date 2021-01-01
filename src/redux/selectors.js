import { VISIBILITY_FILTERS } from "../constants";

export const getDocsState = store => store.docs;

export const getCheckListsState = store => store.checkLists;

export const getDocsList = store =>
  getDocsState(store) ? getDocsState(store).documents : [];

export const getCurDoc = (store) =>
  getDocsState(store) ? getDocsState(store).curDoc : -1;

export const getCurDocMeta = (store) => {
  if (getDocsState(store) != null && getCurDoc(store) != null) {
    return getDocsState(store).documents[getCurDoc(store)]
  }
  return {};
}


export const getPacTypeCheckList = (store, PacType) =>
  getCheckListsState(store)[PacType] ? getCheckListsState(store)[PacType] : [];

export const getPacTypeCheckLists = (store, package_types) => {
  let allItems = [];
  package_types.forEach(PacType => {
    let items = getPacTypeCheckList(store, PacType);
    if (items.length > 0) {
      allItems = allItems.concat(items);
    }
  });
  return allItems;
}

export const getNewReviewFields = store => store.newReview;

export const getReview = store => store.review;


/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
// export const getTodos = store =>
// getDocsList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getDocsState(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
