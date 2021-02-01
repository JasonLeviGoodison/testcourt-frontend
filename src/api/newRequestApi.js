import axios from 'axios';
import { createAuthHeaders, createJustAuthHeader } from '../utils';

const BASE_ADDRESS = process.env.REACT_APP_API_URL;

export async function GetPutObjectSignedUrl(fileName, id) {
  const res = await fetch(`${BASE_ADDRESS}/upload/getPutObjectSignedUrl/${id}/${fileName}`, await createAuthHeaders());
  const json = await res.json();
  return json;
}

export async function GetViewObjectSignedUrl(key) {
  const res = await fetch(`${BASE_ADDRESS}/upload/getViewObjectSignedUrl?key=${encodeURIComponent(key)}`, await createAuthHeaders());
  const json = await res.json();
  return json;
}

export function UploadFile(file, id) {
  return new Promise(
    (resolve, reject) => GetPutObjectSignedUrl(file.name, id).then(({ url }) => {
      axios
        .put(url, file, { headers: { 'Content-Type': 'application/octet-stream' } })
        .then(() => resolve())
        .catch((err) => {
          reject();
          throw err;
        });
    }),
  );
}

export async function UploadForm(form, id) {
  const body = JSON.stringify(form);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...await createJustAuthHeader() },
    body,
  };
  return fetch(`${BASE_ADDRESS}/upload/form/${id}`, requestOptions);
}
