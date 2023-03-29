import { SubTitle } from 'components';
import { BookDetailedProps } from 'types/book';

import { DetailedStyled, Table, TColumn, TProp, TRow, TValue } from './styles';

type DetailedProps = {
  details: BookDetailedProps;
};

const Detailed = ({ details }: DetailedProps) => {
  const { publish, issueYear, pages, cover, format, categories, weight, ISBN, producer } = details;

  const tableGroups = [
    [
      { id: 0, text: 'Издательство', value: publish },
      { id: 1, text: 'Год издания', value: issueYear },
      { id: 2, text: 'Страниц', value: pages },
      { id: 3, text: 'Переплёт', value: cover },
      { id: 4, text: 'Формат', value: format },
    ],
    [
      { id: 0, text: 'Жанр', value: categories },
      { id: 1, text: 'Вес', value: weight },
      { id: 2, text: 'ISBN', value: ISBN },
      { id: 3, text: 'Изготовитель', value: producer },
    ],
  ];

  return (
    <DetailedStyled>
      <SubTitle>Подробная информация</SubTitle>
      <Table>
        {tableGroups.map((group, index) => (
          <TColumn key={index}>
            {group.map(({ id, text, value }) => {
              return (
                <TRow key={id}>
                  <TProp>{text}</TProp>
                  <TValue>{value}</TValue>
                </TRow>
              );
            })}
          </TColumn>
        ))}
      </Table>
    </DetailedStyled>
  );
};

export default Detailed;