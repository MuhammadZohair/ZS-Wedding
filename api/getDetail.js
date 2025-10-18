export default async function handler(req, res) {
  const { id = 'ABC123' } = req.query;

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
    res.status(404).json({ error: "Not found for id=" + id });
    return;
    }

  res.status(200).json(record);
}
