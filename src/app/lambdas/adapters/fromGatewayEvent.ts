import { APIGatewayProxyEvent } from 'aws-lambda';
// import { OrganizationCommand } from 'modules/organization/domain';

export function fromGatewayEvent(event: APIGatewayProxyEvent): {
    type: string;
} {
    return {
        type: 'cool',
    };
}
