const BASE_ADDRESS = process.env.REACT_APP_API_URL;

export async function GetAllDocs()
{
    const res = await fetch(`${BASE_ADDRESS}/documents/getAll`)
    const json = await res.json();
    return json;
}

export async function GetReviewPackageById(id)
{
    const res = await fetch(`${BASE_ADDRESS}/documents/getReview/${id}`)
    const json = await res.json();
    return json;
}

export async function SubmitVerdict(id, status)
{
    var body = JSON.stringify({status});
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
    }
    const res = await fetch(`${BASE_ADDRESS}/documents/updateStatus/${id}`, requestOptions)
    return res;
}