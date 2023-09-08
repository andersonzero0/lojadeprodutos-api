import { ReturnUserDto } from "src/user/dtos/returnUser.dto";

export class ReturnLogin {
  user: ReturnUserDto;
  accessToken: string;
}