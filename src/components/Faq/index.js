import React from "react";
import PropTypes from "prop-types";
import FaqItem from "./../FaqItem";

function Faq(props) {
  const { items, ...otherProps } = props;

  return (
    <>
      {items.map((item, index) => (
        <FaqItem
          question={item.question}
          answer={item.answer}
          index={index}
          key={item.question}
          {...otherProps}
        />
      ))}
    </>
  );
}

Faq.propTypes = {
  items: PropTypes.object
};

export default Faq;
