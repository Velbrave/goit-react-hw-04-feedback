import PropTypes from 'prop-types';
import css from './Section.module.css';
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={css.title}>{title} </h1>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
