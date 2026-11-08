import app from "./app.js";

const port: number = 7000;
app.listen(port, (): void => {
  console.log(`Server is running on http://localhost:${port}`);
});
