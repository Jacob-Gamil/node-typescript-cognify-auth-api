import { Request, Response } from "express";

export const register = (
  req: Request,
  res: Response<{ message: string }>,
): void => {
  res.json({
    message: "hellos",
  });
};
