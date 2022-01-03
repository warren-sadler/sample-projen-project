import {
    Organization,
    CreateOrganizationCommand,
    organizationCreated,
    ORGANIZATION,
} from './domain';
import { OrganizationRepository } from './repository';

interface OrganizationService {
    createOrganization(
        command: CreateOrganizationCommand
    ): Promise<Organization>;
}

export function createOrganizationService(
    repo: OrganizationRepository
): OrganizationService {
    return {
        async createOrganization(command) {
            const organization = ORGANIZATION.create(command.payload);
            // Business logic
            await repo.create(organization);
            organizationCreated(organization);
            return organization;
        },
    };
}
