import React, { Component } from "react";
import Status from "./Status";
import Badge from 'react-bootstrap/Badge'
import { MDBContainer, MDBRow, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Pill extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            status: props.status
        }
    }

    render() {
        switch(this.state.status) {
            case Status.WAITING:
                return (
                    <Badge pill variant="primary">
                        Waiting For Review
                    </Badge>
                );
                break;
            case Status.APPROVED:
                return (
                    <Badge pill variant="success">
                        Approved
                    </Badge>
                );
                break;
            case Status.REJECTED:
                return (
                    <Badge pill variant="danger">
                        Rejected
                    </Badge>
                );
                break;
        }

    }
}

export default Pill;