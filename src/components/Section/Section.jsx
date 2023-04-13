import { Styledsection, Styledtitle } from './Section.styled';

export const Section = ({title, children}) => {
   
  return (
    <Styledsection>
      <Styledtitle>{title}</Styledtitle>
     {children}
    </Styledsection>
  );
};
