import stackoverflow from '@/public/stackoverflow.svg';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image src={stackoverflow} alt="Stack Overflow Logo" width={700} height={700} />
    </div>
  );
}

export default Logo;
