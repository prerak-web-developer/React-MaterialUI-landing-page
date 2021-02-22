import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

function Clients(props) {
  const { items, ...otherProps } = props;
  return (
    <Grid container justify="center" {...otherProps}>
      <Grid
        container
        item
        xs={3}
        md={12}
        justify="center"
        alignItems="flex-start"
        spacing={4}
      >
        {items.map((item, index) => (
          <Grid item key={index}>
            <img src={item.image} width={item.width} alt={item.name} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

Clients.propTypes = {
  items: PropTypes.object
};

export default Clients;
