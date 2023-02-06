export default interface Usuario {
  uid: string;
  email: string | null;
  name: string;
  token: string;
  provider: string;
  imageUrl: string;
}
