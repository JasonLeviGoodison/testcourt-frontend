import { createAuthHeaders, createJustAuthHeader } from '../utils';
import { auth } from '../firebase/firebase';
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
    const res = await fetch(`${BASE_ADDRESS}/documents/updateStatus/${id}`, requestOptions);
    if (!res.ok)
        throw new Error(res.statusText);
    return res;
}

export async function LeaveComment(id, comment)
{
    const authHeaders = await createAuthHeaders();
    var body = JSON.stringify({ comment });
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ... await createJustAuthHeader() },
        body
    }
    const res = await fetch(`${BASE_ADDRESS}/documents/leaveComment/${id}`, requestOptions);
    if (!res.ok) // or check for response.status
        throw new Error(res.statusText);
    return await res.json();
}

export async function GetEvents(id)
{
    const authHeaders = await createAuthHeaders();
    const res = await fetch(`${BASE_ADDRESS}/documents/getEvents/${id}`, authHeaders);
    if (!res.ok)
        throw new Error(res.statusText);
    const json = await res.json();
    return json;
}