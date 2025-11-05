import { CreateBucketCommand, DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from "fs"

const s3Client = new S3Client({
  endpoint: "http://localhost:4566",
  forcePathStyle: true
})

async function createBucketAtS3(bucketName) {
  await s3Client.send(new CreateBucketCommand({
    Bucket: bucketName
  }))
}

async function createObjectAtS3(bucketName, key) {
  const file = fs.readFileSync("./icon.png");
  await s3Client.send(new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: file,
    ContentType: "image/png"
  }))
}

async function deleteObjectAtS3(bucketname, key) {
  await s3Client.send(new DeleteObjectCommand({ Bucket: bucketname, Key: key }))
}

async function main() {
  // await createBucketAtS3("test")
  await createBucketAtS3("previews", "index.png")
  // await deleteObjectAtS3("previews", "index.png")
}

main()