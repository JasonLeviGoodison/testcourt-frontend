import { createAuthHeaders, createJustAuthHeader } from '../utils';

const BASE_ADDRESS = process.env.REACT_APP_API_URL;

export async function GetAllPackageTypes() {
  const authHeaders = await createAuthHeaders();
  const res = await fetch(`${BASE_ADDRESS}/checklist/getAllPackageTypes`, authHeaders);
  const json = await res.json();
  return json;
}

export async function GetChecklist(pacType) {
  const authHeaders = await createAuthHeaders();
  const res = await fetch(`${BASE_ADDRESS}/checklist/${pacType}`, authHeaders);
  const json = await res.json();
  return json;
}

export async function UpdatePackageType(name, checklist) {
  const body = JSON.stringify({ name, checklist });
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...await createJustAuthHeader() },
    body,
  };
  const res = await fetch(`${BASE_ADDRESS}/checklist/updatePackageType`, requestOptions);
  if (!res.ok) { throw new Error(res.statusText); }
  return res;
}

export async function GetAllCompanyChecklists() {
  const authHeaders = await createAuthHeaders();
  const res = await fetch(`${BASE_ADDRESS}/checklist/getAllCompanyChecklists`, authHeaders);
  const json = await res.json();
  return json;
}

export async function DeleteCompanyChecklist(name) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...await createJustAuthHeader() },
    body: '{}',
  };
  const res = await fetch(`${BASE_ADDRESS}/checklist/deleteChecklist/${name}`, requestOptions);
  if (!res.ok) { throw new Error(res.statusText); }
  return res;
}
