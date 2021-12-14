interface DateOfBirth {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Location {
  city: string;
  coordinates: { latitude: string; longitude: string; };
  country: string;
  postcode: number;
  state: string;
  street: { number: number; name: string; };
  timezone: { offset: string; description: string; };
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface User {
  cell: string;
  dob: DateOfBirth;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  login: object;
  name: Name;
  nat: string;
  phone: string;
  picture: object;
  registered: object;
}

interface UserExtended extends User {
  isFavorite: boolean;
}

export {
  User,
  UserExtended,
}
