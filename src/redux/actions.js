import { SET_SELECTED, FETCH_DOCUMENTS } from "./actionTypes";

export const setSelectedDocument = index => ({
  type: SET_SELECTED,
  payload: {
    index
  }
});

export const fetchDocuments = () => {
  const listItems = []
  for(var i = 0; i < 100; i++) {
      listItems[i] = {
        alt: "Case " + i,
        primary: "Due in " + i + " days",
        name: "Jason Goodison",
        details: "There is some additional information here that will follow up",
        url: "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf"
      }
      if (i % 2) {
        listItems[i].url = "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"
      }
  }
  return {
    type: FETCH_DOCUMENTS,
    payload: listItems
  }
};

//export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
