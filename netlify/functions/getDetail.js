exports.handler = async function(event, context) {
  const id = (event.queryStringParameters && event.queryStringParameters.id) || 'ABC123';

  // Demo dataset (replace with DB call or KV later)
  const details = {
    "ABC123": {
      "title": "Item ABC123",
      "description": "This is a demo item shown when no id is provided.",
      "price": 1999,
      "currency": "PKR",
      "attributes": { "color": "Gold", "size": "M" }
    },
    "XYZ789": {
      "title": "Item XYZ789",
      "description": "Another sample record, purely for demonstration.",
      "price": 2999,
      "currency": "PKR",
      "attributes": { "color": "Champagne", "size": "L" }
    }
  };

  const record = details[id];
  if (!record) {
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Not found for id=" + id })
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record)
  };
};
