import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';

interface UserAvatarProps {
  className?: string;
}
export default function UserAvatar(props: UserAvatarProps) {
  const { usuario } = useAuth();
  return (
    <Link href="/perfil">
      <img
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        src={usuario?.imageUrl ?? 'Images/avatar.svg'}
        alt="Avatar do usuario"
      />
    </Link>
  );
}
