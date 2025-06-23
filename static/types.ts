export type User = {
  id: string;
  name: string;
  email: string;
};

export type Profile  = User & {
    bloodType: {
      _id: string;
      type: string;
    };
    district: {
      _id: string;
      name: string;
    };
    contact: string;
    age: number;
    gender: string;
    verified: boolean;
    role: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}