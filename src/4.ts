class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  public name: string;

  constructor(key: Key, name: string) {
    this.key = key;
    this.name = name;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  private tentans: Person["name"][] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tentans.push(person.name);
      console.log("person", person.name + ` add to tentsnt`);
    }
  }

  public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("The door is open.");
      return (this.door = true);
    } else {
      console.log("The door remains closed.");
      return (this.door = false);
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key, `Ira`);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
