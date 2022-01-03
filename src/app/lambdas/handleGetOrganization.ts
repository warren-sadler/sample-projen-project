import { APIGatewayProxyHandler } from 'aws-lambda';
import { fromGatewayEvent } from './adapters/fromGatewayEvent';
// import { DynamooseOrganizationRepo } from 'infrastructure/dynamodb/repositories/organization';
import { ORGANIZATION_COMMANDS } from 'modules/organization/domain';
// import { createOrganizationService } from 'modules/organization/service';

// const service = createOrganizationService(DynamooseOrganizationRepo);
export const handler: APIGatewayProxyHandler = async (event) => {
    const command = fromGatewayEvent(event);
    switch (command.type) {
        case ORGANIZATION_COMMANDS.CREATE:
            // const result = await service.createOrganization(command);
            return {
                statusCode: 201,
                body: 'created',
            };
        default:
            return {
                statusCode: 400,
                body: 'Bad Request',
            };
    }
};
