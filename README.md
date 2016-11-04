# Sls log From Kinesis

To use the CloudWatch Logs from Kinesis Stream in Serverless Framework.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/katsuhiko/sls-log-from-kinesis` to install the service in your current working directory
2. Next up cd into the service with `cd sls-log-from-kinesis`
3. Run `npm install`
4. Deploy with `ACCOUNT_ID=9999 serverless deploy`

## How to use

```bash
ACCOUNT_ID=9999 serverless logs -f todosApply -t
```
