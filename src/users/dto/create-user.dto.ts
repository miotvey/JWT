import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    readonly email: string;
    readonly password: string;
}