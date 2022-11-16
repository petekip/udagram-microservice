export const config = {
  'username': 'postgres',
  'password': 'lbS4J6DvSIdzceDtFNzR',
  'database': 'udagram',
  'host': 'udagram.cv4mmssfpczt.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'pkoech',
  'aws_media_bucket': 'aws:s3:::static.mawingu.dev',
  'url': '172.20.140.85',
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
