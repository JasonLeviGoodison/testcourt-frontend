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

export function batchReviewEventToDigestableComment(events) {
    let cleanedEvents = [];
    for (var i = 0 ; i < events.length; i++) {
        let event = events[i];
        let name = event.getUserName().split("@")[0];
        cleanedEvents.push({
            avatarUrl: `https://ui-avatars.com/api/?name=${name}`,
            createdAt: event.getCreatedAt() || new Date(),
            fullName: name,
            text: event.getMetaData(),
        })
    }
    return cleanedEvents;
}