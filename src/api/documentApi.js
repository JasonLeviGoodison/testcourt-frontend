import { createAuthHeaders, createJustAuthHeader } from '../utils';
const BASE_ADDRESS = process.env.REACT_APP_API_URL;

export async function GetAllDocs()
{
    const authHeaders = await createAuthHeaders();
    const res = await fetch(`${BASE_ADDRESS}/documents/getAll`, authHeaders)
    const json = await res.json();
    return json;
}

export async function GetReviewPackageById(id)
{
    const authHeaders = await createAuthHeaders();
    const res = await fetch(`${BASE_ADDRESS}/documents/getReview/${id}`, authHeaders)
    const json = await res.json();
    return json;
}

export async function SubmitVerdict(id, status)
{
    const authHeaders = await createAuthHeaders();
    var body = JSON.stringify({status});
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...await createJustAuthHeader() },
        body
    }
    const res = await fetch(`${BASE_ADDRESS}/documents/updateStatus/${id}`, requestOptions)
    return res;
}