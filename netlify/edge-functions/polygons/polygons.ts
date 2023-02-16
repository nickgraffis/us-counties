import type { Context } from "https://edge.netlify.com";
import AWS from "https://cdn.skypack.dev/aws-sdk";

export default async (request: Request, context: Context) => {
  const s3 = new AWS.S3({
    accessKeyId: context.secrets.AWS_ACCESS_KEY_ID,
    secretAccessKey: context.secrets.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
  });
  const bucket = "us-counties-geojson";
  const key = "us-counties-geojson.json";
  const params = { Bucket: bucket, Key: key };

  return context.json({ hello: "world" });
};