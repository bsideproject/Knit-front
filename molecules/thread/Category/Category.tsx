import { FC, ReactNode } from 'react';
import { CategoryType } from '~/@types/resources/thread';
import { Container, IconWrapper, Label } from './Category.styled';

interface Props {
  type: CategoryType;
}

const label: Record<CategoryType, ReactNode> = {
  [CategoryType.PLANNING]: '기획',
  [CategoryType.DESIGN]: '디자인',
  [CategoryType.MARKETING]: '마케팅',
  [CategoryType.DEVELOP]: '개발',
  [CategoryType.DATA]: '데이터분석',
  [CategoryType.ETC]: '기타',
};

const icon: Record<CategoryType, ReactNode> = {
  [CategoryType.PLANNING]: '✍️',
  [CategoryType.DESIGN]: '‍🎨️',
  [CategoryType.MARKETING]: '🖋',
  [CategoryType.DEVELOP]: '💻',
  [CategoryType.DATA]: '‍📊️',
  [CategoryType.ETC]: '🎸',
};

const Category: FC<Props> = ({ type }) => {
  return (
    <Container>
      <IconWrapper>{icon[type]}</IconWrapper>
      <Label>{label[type]}</Label>
    </Container>
  );
};

export default Category;
