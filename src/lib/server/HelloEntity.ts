import { Entity } from "@mikro-orm/core";

@Entity()
export class Hello {

    world: string = "world";

}