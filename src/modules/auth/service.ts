interface CreateAuthOrganizationParams {
    name: string;
}

interface CreateOrganizationSuccess {
    id: string;
}
interface CreateOrganizationFailure {
    reason: string;
}

type CreateOrganizationResult =
    | CreateOrganizationSuccess
    | CreateOrganizationFailure;

export interface AuthService {
    createOrganization(
        params: CreateAuthOrganizationParams
    ): Promise<CreateOrganizationResult>;
}
