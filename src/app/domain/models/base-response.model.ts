import { UserModel } from "./user.model";

export interface BaseResponseModel {
    limit: number;
    skip: number;
    total: number;
    users: UserModel[];

}
