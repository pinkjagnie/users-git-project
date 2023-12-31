import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { slug } = req.query;

  const user = slug[0];
  const repo = slug[1];

  axios
    .get(`https://api.github.com/repos/${user}/${repo}/forks`)
    .then((response) => {
      let forks = response.data;
      res.status(200).json(forks);
    })
    .catch((error) => {
      res.status(404).send("Something went wrong. Please try again");
    });
}
