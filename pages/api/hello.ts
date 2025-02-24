import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // const session = await auth(req, res);
  const session = await getSession(req, res);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.status(200).json({ message: "Hello from Next.js!" });
}
