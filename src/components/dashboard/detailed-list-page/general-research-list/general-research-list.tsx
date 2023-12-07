import { Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react';
import ResearchInfo, { ResearchInfoData } from './research-info/research-info';
import './general-resarch-list.scss';

const GeneralResearchList = () => {
  const ResearchInfoList: ResearchInfoData[] = [
    {
      authorPhoto:
        'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4299929Y6',
      author: 'Ronnie E. S. Santos;',
      title:
        'Benefits and limitations of project-to-project job rotation in software organizations: A synthesis of evidence. INFORMATION AND SOFTWARE TECHNOLOGY, v. 89, p. 78-96',
      authorMentions: '6|10',
      coResearchers:
        'Fabio Q. B. da Silva ; Maria Teresa Baldassarre ; Cleyton V. C. Magalhães',
      where: [
        'Diversity in Software Engineering: A Survey about Computer Scientists from Underrepresented Groups. In: International Conference on Cooperative and Human Aspects of Software Engineering, 2023, Melbourne',
        '16th International Conference on Cooperative and Human Aspects of Software Engineering, 2023',
      ],
    },
    {
      author: 'Ronnie E. de Souza Santos; Brody Stuart-Verner',
      coResearchers: 'Cleyton V. C. Magalhães',
      title:
        'LGBTQIA+ (In)Visibility in Computer Science and Software Engineering Education.',
      where: [
        'International Conference on Cooperative and Human Aspects of Software Engineering, 2023, Melbourne.',
        '15th International Conference on Cooperative and Human Aspects of Software Engineering, 2023.',
      ],
      authorPhoto:
        'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4299929Y6',
    },
    {
      author: 'Ronnie E. de Souza Santos; Gianisa Adisaputri',
      coResearchers: 'Paul Ralph',
      title: 'Post-pandemic Resilience of Hybrid Software Teams.',
      where: [
        'International Conference on Cooperative and Human Aspects of Software Engineering, 2023, Melbourne.',
        '16th International Conference on Cooperative and Human Aspects of Software Engineering, 2023.',
      ],
      authorPhoto:
        'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4299929Y6',
    },
    {
      authorPhoto:
        'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4299929Y6',
      author: 'Ronnie E. S. Santos;',

      coResearchers: 'Paul Ralph',
      title:
        'A Grounded Theory of Coordination in Remote-First and Hybrid Software Teams.',
      where: [
        'International Conference on Software Engineering, 2022, Pittsburgh.',
        '44th International Conference on Software Engineering, 2022.',
      ],
    },
    {
      authorPhoto:
        'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4299929Y6',
      author: 'Ronnie E. S. Santos;',
      coResearchers:
        'Maria Teresa Baldassarre ; Fabio Q. B. da Silva ; Cleyton V. C. Magalhães ; CAPRETZ, LUIZ FERNANDO ; CORREIA-NETO, JORGE S.',
      title:
        'Work design and job rotation in software engineering: results from an industrial study.',
      where: [
        'International Workshop on Cooperative and Human Aspects of Software Engineering, 2019, Montreal',
        'Proceedings of the 12th International Workshop on Cooperative and Human Aspects of Software Engineering, 2019.',
      ],
    },
    {
      authorPhoto:
        'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4299929Y6',
      author: 'Ronnie E. S. Santos;',
      coResearchers:
        'Maria Teresa Baldassarre ; MAGALHAES, C. V. C. ; CORREIA-NETO, JORGE S. ; Fabio Q. B. da Silva',
      title:
        'Mind the gap: are practitioners and researchers in software testing speaking the same language?',
      where: [
        'International Workshop on Conducting Empirical Studies in Industry, 2019, Montreal. Proceedings of the Joint 7th International Workshop on Conducting Empirical Studies in Industry and 6th International Workshop on Software Engineering Research and Industrial Practice, 2019.',
      ],
    },
  ];

  return (
    <TableContainer>
      <Table variant='simple' className='table'>
        <Thead>
          <Tr>
            <Th>Author</Th>
            <Th>Title</Th>
            <Th>Co-Authors</Th>
            <Th>Where</Th>
          </Tr>
        </Thead>
        {ResearchInfoList.map((data, index) => (
          <ResearchInfo key={`researchInfo-${index}`} data={data} />
        ))}
      </Table>
    </TableContainer>
  );
};

export default GeneralResearchList;
