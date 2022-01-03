import { generateDomain } from '@therify-inc/ddd-utils';
import * as z from 'zod';
import { NAMESPACE } from '@shared/types';

const OrganizationSchema = z.object({
    name: z.string(),
    isActive: z.boolean().default(true),
});

const ENTITY_NAME = 'ORGANIZATION' as const;

export const {
    commands: {
        COMMAND_TYPES: ORGANIZATION_COMMANDS,
        create: createOrganization,
        update: updateOrganization,
    },
    entity: { ORGANIZATION },
    events: { created: organizationCreated },
} = generateDomain({
    name: ENTITY_NAME,
    schema: OrganizationSchema,
    requiredFields: ['name'],
    namespace: NAMESPACE,
});

export type Organization = ReturnType<typeof ORGANIZATION['create']>;
export type CreateOrganizationCommand = ReturnType<typeof createOrganization>;
export type UpdateOrganizationCommand = ReturnType<typeof updateOrganization>;
export type OrganizationCommand =
    | CreateOrganizationCommand
    | UpdateOrganizationCommand;
