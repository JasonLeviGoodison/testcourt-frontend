import { auth } from './firebase/firebase';

export function getFileType(filename) {
  return filename.split('.').pop();
}

export async function createAuthHeaders() {
  const token = await auth.currentUser.getIdToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function createJustAuthHeader() {
  const token = await auth.currentUser.getIdToken();
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function batchReviewEventToDigestableComment(events) {
  const cleanedEvents = [];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    const name = event.getUserName().split('@')[0];
    cleanedEvents.push({
      avatarUrl: `https://ui-avatars.com/api/?name=${name}`,
      createdAt: event.getCreatedAt() || new Date(),
      fullName: name,
      text: event.getMetaData(),
    });
  }
  return cleanedEvents;
}

export function cleanChecklistOfOptions(allChecklists) {
  const cleanedChecklists = { ...allChecklists };
  delete cleanedChecklists.packageoptions;
  return cleanedChecklists;
}
