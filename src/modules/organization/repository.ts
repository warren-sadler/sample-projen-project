import { Organization } from './domain';

export interface OrganizationRepository {
    create(organization: Organization): Promise<boolean>;
}
