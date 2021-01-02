import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import { fetchDocsListThunk } from '../redux/thunks';
import { setSelectedDocument } from "../redux/actions";
import { getDocsList, getCurDoc } from "../redux/selectors";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import * as routes from "../routes/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
    height: '100vh',
    paddingTop: 0,
    borderRightStyle: 'solid',
    borderRightWidth: 'thin',
    borderColor: 'rgba(0, 0, 0, 0.12)'
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

    const onNewReviewClicked = () => {
        props.history.push(routes.NEW_REVIEW);
    }

    return (
        <div className={classes.root}>
        <List className={classes.root}>
        {
            docs.length > 0 ? docs.map((item, index) =>
                <div>
                    <ListItem
                    className="DocElement"
                    selected={props.curDoc === index}
                    alignItems="flex-start"
                    onClick={handleItemSelect(index, item)}>
                        <ListItemText
                            primary={item.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                    >
                                    {item.case_number}
                                    </Typography><br/>
                                    {item.description}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                </div>
            ) : "Nothing to review!"
        }
        </List>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <Tooltip title="New Package Review">
                <Fab onClick={onNewReviewClicked} style={{bottom: 10, position: 'fixed'}} size="large" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            </div>
      </div>
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
        fetchDocs: () => dispatch(fetchDocsListThunk())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(DocsList))