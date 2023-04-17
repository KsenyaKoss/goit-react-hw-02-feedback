import { Styledsection, Styledtitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Styledsection>
      <Styledtitle>{title}</Styledtitle>
      {children}
    </Styledsection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
