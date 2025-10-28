export const getRequestUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}users?_page=${page}`;
  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) throw new Error(`HTTP Request failed ${response.statusText}`);
  const bodyFromResponse = await response.json();
  const data = bodyFromResponse.data;
  return data;
};