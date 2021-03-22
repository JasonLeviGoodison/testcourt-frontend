import { createAuthHeaders, createJustAuthHeader } from '../utils';

const BASE_ADDRESS = process.env.REACT_APP_API_URL;

export async function GetAllDocs() {
  const authHeaders = await createAuthHeaders();
  const res = await fetch(`${BASE_ADDRESS}/documents/getAll`, authHeaders);
  const json = await res.json();
  return json;
}

export async function GetReviewPackageById(id) {
  const authHeaders = await createAuthHeaders();
  const res = await fetch(`${BASE_ADDRESS}/documents/getReview/${id}`, authHeaders);
  const json = await res.json();
  return json;
}

export async function SubmitVerdict(id, status, checkedItems = {}) {
  const body = JSON.stringify({
    status,
    checkedItems,
  });

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...await createJustAuthHeader() },
    body,
  };

  const res = await fetch(`${BASE_ADDRESS}/documents/updateStatus/${id}`, requestOptions);
  if (!res.ok) { throw new Error(res.statusText); }
  return res;
}

export async function LeaveComment(id, comment) {
  const body = JSON.stringify({ comment });
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...await createJustAuthHeader() },
    body,
  };
  const res = await fetch(`${BASE_ADDRESS}/documents/leaveComment/${id}`, requestOptions);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export async function GetEvents(id) {
  const authHeaders = await createAuthHeaders();
  const res = await fetch(`${BASE_ADDRESS}/documents/getEvents/${id}`, authHeaders);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const json = await res.json();
  return json;
}
