import { OrganizationRepository } from '../../../modules/organization/repository';
import OrganizationModel from '../models/Organization';

export const DynamooseOrganizationRepo: OrganizationRepository = {
    async create(organization) {
        try {
            await OrganizationModel.create(organization);
            return true;
        } catch (error) {
            return false;
        }
    },
};
