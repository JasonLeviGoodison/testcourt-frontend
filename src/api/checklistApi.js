const BASE_ADDRESS = "http://localhost:3000"

export async function GetAllPackageTypes()
{
    const res = await fetch(`${BASE_ADDRESS}/checklist/getAllPackageTypes`)
    const json = await res.json();
    return json;
}

export async function GetChecklist(pacType)
{
    const res = await fetch(`${BASE_ADDRESS}/checklist/${pacType}`)
    console.log("GETCHECKLIST ", res)
    const json = await res.json();

    return json;
}