import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import pedrojanu from '@/public/pedrojanu.jpg';
import daniel from '@/public/daniel.jpg';

export default function GroupMember(
    {
        name,
        email,
        photo
    }: {
        name: string;
        email: string;
        photo: string;
    }
) {
    console.log(photo);
  return (
    <div>
        <div className="mt-4 flex grow flex-col md:flex-row">
            <div className="p-8 flex flex-col justify-center rounded-lg bg-gray-50 w-full md:px-20">
                <Image src={`@/public/${photo.toString()}`} alt={name} width={200} height={200} />
                <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    <strong>{name}</strong>
                    <br></br>
                    <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
                </p>
            </div>
        </div>
    </div>
    );
}
