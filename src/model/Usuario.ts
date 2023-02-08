export default interface Usuario {
  uid: string | null;
  email: string | null;
  name: string | null;
  token: string | null;
  provider: string | undefined;
  imageUrl: string | null;
}
