import { faker } from "@faker-js/faker";

export const NEW_USER = {
  NAME: faker.person.fullName(),
  EMAIL: faker.internet.email(),
  PASSWORD: faker.internet.password(),
};

export const USER = {
  NAME: "David Loutre",
  EMAIL: "davidloutre11@gmail.com",
  PASSWORD: "loutre123456",
};
