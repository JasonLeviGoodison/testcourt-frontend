import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { setSelectedDocument, fetchDocuments } from "../redux/actions";
import { getDocsList, getCurDoc } from "../redux/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
    height: '100vh'
  },
  inline: {
    display: 'inline',
  },
}));

function DocsList(props) {
  const classes = useStyles();
  const docs = props.docs || [];

  function handleItemSelect(index, meta) {
      return (e) => {
          e.preventDefault();
          props.setCurDoc(index);
      }
  }

  useEffect(() => {
      props.fetchDocs()
    }, []);

  return (
    <List className={classes.root}>
    {
        docs.map((item, index) =>
            <div>
            <ListItem
            selected={props.curDoc === index}
            alignItems="flex-start"
            onClick={handleItemSelect(index, item)}
            >
                <ListItemAvatar>
                    <Avatar alt={item.alt}> { item.primary[0] } </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={item.primary}
                    secondary={
                    <React.Fragment>
                        <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        >
                        {item.name}
                        </Typography>
                        {item.details}
                    </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            </div>
        )
    }
    </List>
  );
}

const mapStateToProps = (state) => {
    return {
        curDoc: getCurDoc(state),
        docs: getDocsList(state)
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        setCurDoc: (index) => dispatch(setSelectedDocument(index)),
        fetchDocs: () => dispatch(fetchDocuments())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DocsList)