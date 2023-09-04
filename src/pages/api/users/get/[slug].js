import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { slug } = req.query;

  const regex = /\s/;

  if (regex.test(slug)) {
    return res.status(400).send("Invalid expression. Please try again");
  }

  axios.get(`https://api.github.com/users/${slug}/repos`).then(
    (response) => {
      let user = response.data;
      res.status(200).json(user);
    },
    (error) => {
      res.status(404).send("No such user found. Please try again");
    }
  );
}
