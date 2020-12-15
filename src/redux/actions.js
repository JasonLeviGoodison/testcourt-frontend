import { SET_SELECTED, FETCH_DOCUMENTS, FETCH_CHECKLIST } from "./actionTypes";

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
        caseNumber: 10293261,
        clientName: "Jason Goodison",
        primary: "Due in " + i + " days",
        description: "This is the document that ashley asked for for Jasons case",
        url: "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf",
        dueDate: "10/10/2021",
        postedBy: "Jason Posted",
        docType: "Will",
        requiredApprovals: [
          { 
            name: "Ashley",
            status: "approved"
          },
          { 
            name: "Steve",
            status: "waiting"
          },
          {
            name: "Jason",
            status: "rejected"
          }]
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

export const fetchCheckListForDocType = (docType) => {
  return {
    type: FETCH_CHECKLIST,
    payload: {
      "Will": [
        "Names are correct",
        "Page 3 is green",
        "Address is in bold",
        "Names are correct",
        "Page 4 is green",
        "Address is in bold",
        "Amount is correct on page 1",
        "Page 5 is green",
        "name is in bold on page 10",
        "Page 6 is green",
        "Address is in bold on page 4"
    ]}
  }
};

//export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
