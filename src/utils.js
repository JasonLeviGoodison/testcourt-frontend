import { auth } from "./firebase/firebase";

export function getFileType(filename)
{
    return filename.split('.').pop();
}

export async function createAuthHeaders() {
    const token = await auth.currentUser.getIdToken();
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export async function createJustAuthHeader() {
    const token = await auth.currentUser.getIdToken();
    return {
        Authorization: `Bearer ${token}`
    }
}