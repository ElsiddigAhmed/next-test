// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = path.join(
    process.cwd(),
    "src/pages/api",
    "nav-elements.json"
  );

  fs.writeFile(filePath, JSON.stringify(req.body), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ msg: "Error writing data to JSON file" });
    }
    return res
      .status(200)
      .json({ msg: "Data written to JSON file successfully" });
  });
}
