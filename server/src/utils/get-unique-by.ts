import { UserEntity } from "users/entities/user.entity";

export function getUniqueListBy(arr: UserEntity[], key: string) {
    return [...new Map(arr.map(item => [item[key], item])).values()] as UserEntity[];
}