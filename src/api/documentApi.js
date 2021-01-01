const BASE_ADDRESS = "http://localhost:3000"
export async function GetAllDocs()
{
    const res = await fetch(`${BASE_ADDRESS}/documents/getAll`)
    console.log("res", res);
    const json = await res.json();
    return json;
}

export async function GetReviewPackageById(id)
{
    const res = await fetch(`${BASE_ADDRESS}/documents/getReview/${id}`)
    console.log("GetReviewPackageById res", res);
    const json = await res.json();
    return json;
}