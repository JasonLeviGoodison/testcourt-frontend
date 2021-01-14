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
import Status from "./Status/Status";
import { withRouter } from "react-router-dom";
import { fetchDocsListThunk } from '../redux/thunks';
import { setSelectedDocument, setReviewFilter } from "../redux/actions";
import { getDocsList, getCurDoc } from "../redux/selectors";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Pill from './Status/Pill';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import * as routes from "../routes/routes";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: '36ch',
        maxWidth: '40ch',
        backgroundColor: theme.palette.background.paper,
        overflowY: 'scroll',
        paddingTop: 0,
        borderRightStyle: 'solid',
        borderRightWidth: 'thin',
        borderColor: 'rgba(0, 0, 0, 0.12)'
    },
    inline: {
        display: 'inline',
    },
    tab: {
        minWidth: 100, // a number of your choice
        width: 100, // a number of your choice
    }
}));

function DocsList(props) {
    const classes = useStyles();
    const docs = props.docs || [];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        let status = Status.WAITING;
        if (newValue == 1) status = Status.APPROVED;
        if (newValue == 2) status = Status.REJECTED;
        props.setReviewFilter(status);
        setValue(newValue);
    };

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
        <List>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    onChange={handleChange}
                >
                    <Tab classes={{ root: classes.tab }} label="Waiting" />
                    <Tab classes={{ root: classes.tab }} label="Approved" />
                    <Tab classes={{ root: classes.tab }} label="Rejected" />
                </Tabs>
            </Paper>
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
                                    {item.description.length > 50 ?
                                        item.description.substring(0, 50) + "..." : 
                                        item.description}
                                </React.Fragment>
                            }
                        />
                        <Pill key={item.status + index} status={item.status}/>
                    </ListItem>
                    <Divider component="li" />
                </div>
            ) : <div style={{paddingTop: 25}} >Nothing Here!</div>
        }
        </List>
        <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Tooltip title="New Package Review">
            <Fab onClick={onNewReviewClicked} style={{bottom: 10, position: 'fixed', marginRight: 10}} size="large" color="primary" aria-label="add">
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
        fetchDocs: () => dispatch(fetchDocsListThunk()),
        setReviewFilter: (status) => dispatch(setReviewFilter(status))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(DocsList))