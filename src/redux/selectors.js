import { VISIBILITY_FILTERS } from "../constants";

export const getDocsState = store => store.docs;

export const getCheckListsState = store => store.checkLists;

export const getDocsList = store =>
  getDocsState(store) ? getDocsState(store).documents : [];

export const getCurDoc = (store) =>
  getDocsState(store) ? getDocsState(store).curDoc : -1;

export const getCurDocMeta = (store) =>
  getDocsState(store) ? getDocsState(store).documents[getCurDoc(store)] : {};

export const getDocTypeCheckList = (store, docType) =>
  getCheckListsState(store)[docType] ? getCheckListsState(store)[docType] : [];

export const getNewReviewFields = store => store.newReview;

export const getGeneral = store => store.general;

export const getInReview = store => getGeneral(store) ? getGeneral(store).inReview : false;

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
