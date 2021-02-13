const BASE_ADDRESS = process.env.REACT_APP_API_URL;

export async function signUp(
  firstName,
  lastName,
  company,
  email,
  password,
  isNewCompany,
) {
  const body = JSON.stringify({
    firstName, lastName, company, email, password, isNewCompany,
  });
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  };
  const res = await fetch(`${BASE_ADDRESS}/account/signUp`, requestOptions);
  if (!res.ok) { throw new Error(res.statusText); }
  return res;
}

export const otherExport = () => {};
