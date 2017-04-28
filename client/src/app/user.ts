import { Group } from './group';

export interface User {
  id?: String;
  name?: String;
  picture?: String;
  group?: Array<Group>
}
