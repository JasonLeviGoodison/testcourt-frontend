import { VISIBILITY_FILTERS } from '../constants';

export const getDocsState = (store) => store.docs;

export const getCheckListsState = (store) => store.checkLists;

export const getDocsList = (store) => {
  if (getDocsState(store)) {
    const filter = getDocsState(store).reviewFilter;
    const docs = getDocsState(store).documents;
    if (docs != null) {
      return docs.filter((pac) => pac.status === filter);
    }
  }
  return [];
};

export const getFilteredDocList = (store) => {
  if (getDocsState(store)) {
    const filter = getDocsState(store).reviewFilter;
    const docs = getDocsState(store).documents;
    if (docs != null) {
      return docs.filter((pac) => pac.status === filter);
    }
  }
  return [];
};

export const getReviewFilter = (store) => getDocsState(store).reviewFilter;

export const getCurDoc = (store) => (getDocsState(store) ? getDocsState(store).curDoc : -1);

export const getCurDocMeta = (store) => {
  const filteredList = getFilteredDocList(store);
  let index = getCurDoc(store);
  if (filteredList != null && filteredList.length > 0 && index != null) {
    if (index > filteredList.length - 1) index = 0;
    return filteredList[index];
  }
  return {};
};

// eslint-disable-next-line max-len
export const getPacTypeCheckList = (store, pacType) => (getCheckListsState(store)[pacType] ? getCheckListsState(store)[pacType] : []);

export const getPacTypeCheckLists = (store, packageTypes) => {
  let allItems = [];
  packageTypes.forEach((pacType) => {
    const items = getPacTypeCheckList(store, pacType);
    if (items.length > 0) {
      allItems = allItems.concat(items);
    }
  });
  return allItems;
};

// eslint-disable-next-line max-len
export const getPackageOptions = (store) => (getCheckListsState(store) ? (getCheckListsState(store).packageoptions || []) : []);

export const getAllChecklists = (store) => getCheckListsState(store) || {};

export const getNewReviewFields = (store) => store.newReview;

export const getReview = (store) => store.review;

export const getReviewEventLog = (store) => getReview(store).eventLog || [];
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
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
