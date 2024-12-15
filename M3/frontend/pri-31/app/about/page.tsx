import GroupMember from '@/app/ui/group-member';

export default function Page() {
  return (
    <div>
      <div className="mt-4 flex grow flex-col md:flex-row">
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center rounded-lg bg-gray-50 w-full md:px-20">
          <GroupMember
            name='António Rego'
            email='up202108666@up.pt'
            photo='antonio'/>
          <GroupMember
            name='Daniel Bernardo'
            email='up202108667@up.pt'
            photo='daniel'/>
          <GroupMember
            name='Pedro Lima'
            email='up202108806@up.pt'
            photo='pedrolima'/>
          <GroupMember
            name='Pedro Januário'
            email='up202108768@up.pt'
            photo='pedrojanu'/>
        </div>
      </div>
    </div>
  );
}
