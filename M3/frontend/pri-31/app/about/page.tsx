import { lusitana } from '@/app/ui/fonts';
import GroupMember from '@/app/ui/group-member';

export default function Page() {
  return (
    <div>
      <div className="mt-4 flex grow flex-col md:flex-row">
        <div className="p-8 flex flex-col justify-center rounded-lg bg-gray-50 w-full md:px-20">
          <GroupMember
            name='Pedro Januário'
            email='up202108768@up.pt'
            photo='pedrojanu.jpg'/>
        </div>
      </div>
    </div>
  );
}
