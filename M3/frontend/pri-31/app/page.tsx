import { lusitana } from '@/app/ui/fonts';
import Search from "@/app/ui/search";

export default function Page() {
  return (
    <div>
      <div className="my-4 flex grow flex-col md:flex-row">
        <div className="p-8 flex flex-col justify-center rounded-lg bg-gray-50 w-full md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to the search engine for Stack Overflow questions and aswers on January 2023.</strong>
            <br></br>
            Developed by <a href={'/about'} className="text-blue-500">Group 31</a>{' '}
            for the <a href="https://sigarra.up.pt/feup/en/UCURR_GERAL.FICHA_UC_VIEW?pv_ocorrencia_id=540678" className="text-blue-500">Information Processing and Retrieval</a> course, {' '}
            of the <a href="https://sigarra.up.pt/feup/en/cur_geral.cur_view?pv_curso_id=22862&pv_ano_lectivo=2024" className='text-blue-500'>Master in Informatics and Computing Engineering</a> at <a href="https://sigarra.up.pt/feup/en/web_page.Inicial" className="text-blue-500">FEUP</a>.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full">
        <Search />
      </div>
    </div>
  );
}
