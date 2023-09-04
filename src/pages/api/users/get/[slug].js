export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { slug } = req.query;

  console.log("slaaaaaaaaaaaaaaaaaaaaaag  " + slug);

  const regex = /\s/;

  if (regex.test(slug)) {
    return res.status(400).send("Invalid expression. Please try again");
  }

  // res.status(201).json(user);
}
