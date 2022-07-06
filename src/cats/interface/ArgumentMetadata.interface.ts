import { Type } from "@nestjs/passport";

export interface ArgumentMetadata{
    type: 'body',
    metatype?: Type<unknown>;
    data?: string
}