import React from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function FaqItem(props) {
  const { question, answer, index, ...otherProps } = props;

  return (
    <ExpansionPanel {...otherProps}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`faq-panel-${index}`}
      >
        <Typography variant="h5">{question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails id={`faq-panel-${index}`}>
        <Typography>{answer}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default FaqItem;
