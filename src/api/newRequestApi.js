import axios from 'axios';
const BASE_ADDRESS = process.env.REACT_APP_API_URL;


export async function GetPutObjectSignedUrl(fileName, id)
{
    const newFileName = `${id}--${fileName}`;
    const res = await fetch(`${BASE_ADDRESS}/upload/getPutObjectSignedUrl/${id}/${newFileName}`)
    const json = await res.json();
    return json;
}

export async function GetViewObjectSignedUrl(key)
{
    const res = await fetch(`${BASE_ADDRESS}/upload/getViewObjectSignedUrl/${key}`);
    const json = await res.json();
    return json;
}

export async function UploadFile(file, id)
{
    return GetPutObjectSignedUrl(file.name, id).then(({key, url}) => {
        axios
        .put(url, file, { headers: { 'Content-Type': 'application/octet-stream' } })
        .catch(err => {
            console.log('err', err);
            throw err;
        });
    });
}

export async function UploadForm(form, id)
{
    var body = JSON.stringify(form);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
    }
    return await fetch(`${BASE_ADDRESS}/upload/form/${id}`, requestOptions);
}