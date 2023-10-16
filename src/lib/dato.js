export const get = (query) => fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
  },
  body: JSON.stringify({ query }),
}).then((response) => response.json())