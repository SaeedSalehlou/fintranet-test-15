import { BaseResponseModel } from "../models/base-response.model";
import { UserModel } from "../models/user.model";

export const usersMockData: BaseResponseModel =
{
    users: [
        {
            "firstName": "Terry",
            "lastName": "Medhurst",
            "age": 50,
            "gender": "male",
            "email": "atuny0@sohu.com",
            "phone": "+63 791 675 8914",
            "birthDate": "2000-12-25",
            "eyeColor": "Green",
        },
    ],
    total: 100,
    skip: 0,
    limit: 30
}
