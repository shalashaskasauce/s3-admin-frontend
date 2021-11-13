const s3Root = 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/';

export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
  productPrefix: 'products',
  accessPrefix: 'access',
  links: {
    s3_bucket: {
      href: `${s3Root}UsingBucket.html`,
      title: 'Opens reference on Buckets from Amazon userguide'
    }
  }
};
