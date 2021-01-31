import { auth } from "../firebase/firebase";
import axios from 'axios';
import { createAuthHeaders } from '../utils';

const BASE_ADDRESS = process.env.REACT_APP_API_URL;

export async function GetAllPackageTypes() {
    const authHeaders = await createAuthHeaders();
    const res = await fetch(`${BASE_ADDRESS}/checklist/getAllPackageTypes`, authHeaders)
    const json = await res.json();
    return json;
}

export async function GetChecklist(pacType) {
    const authHeaders = await createAuthHeaders();
    const res = await fetch(`${BASE_ADDRESS}/checklist/${pacType}`, authHeaders)
    const json = await res.json();
    return json;
}
