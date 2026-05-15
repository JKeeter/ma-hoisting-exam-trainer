import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE = process.env.TABLE_NAME!;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const handler = async (event: AWSLambda.APIGatewayProxyEventV2WithJWTAuthorizer) => {
  const userId: string = event.requestContext.authorizer.jwt.claims['sub'] as string;
  const method = event.requestContext.http.method;

  if (method === 'GET') {
    const { Item } = await ddb.send(new GetCommand({ TableName: TABLE, Key: { userId } }));
    const progress = Item ? (({ userId: _id, ...rest }) => rest)(Item) : null;
    return { statusCode: 200, headers, body: JSON.stringify({ progress }) };
  }

  if (method === 'PUT') {
    const body = JSON.parse(event.body ?? '{}');
    await ddb.send(new PutCommand({ TableName: TABLE, Item: { userId, ...body } }));
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
};
