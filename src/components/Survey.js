import React from "react";
import Table from 'react-bootstrap/table';
import Modal from "./Modal";

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            modalData: {},
            errors: [],
            showPopup: false,
        };
    }

    togglePopup(topicId) {
        alert(topicId);
        let surveyQaData = this.state.tableData.filter(survey => survey.topicId === topicId);
        this.setState({
            showPopup: !this.state.showPopup,
            modalData: surveyQaData
        });
    }

    fetchData() {
        // Where we're fetching data from
        fetch(process.env.REACT_APP_URL + `list`)
            // We get the API response and receive data in JSON format...
            .then((response) => response.json())
            // ...then we update the users state
            .then((data) => {
                console.log(data);
                this.setState({
                    tableData: data,
                    isLoading: false,
                })
            })
            // Catch any errors we hit and update the app
            .catch((error) => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        let tableData = this.state.tableData.map((item, index) => {
            return (<tr key={index}>
                <td>{item.topicId}</td>
                <td>{(item.topic) ? item.name : "NA"}</td>
                <td>{item.npmScore}</td>
                <td><button className="btn btn-light" onClick={this.togglePopup(item.topicId)}>View Details</button></td>
            </tr>);
        });
        return (
            <div className="container-fluid">
                <h2 className="mt-3 title_head">Survey</h2>
                <div className="row mt-5">
                    <div className="col">
                        <Table striped bordered hover size="sm" responsive="sm">
                            <thead>
                                <tr>
                                    <th>TopicId</th>
                                    <th>Topic</th>
                                    <th>NPM Score</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData}
                            </tbody>
                        </Table>
                    </div>
                </div>
                {this.state.showPopup ? (
                    <Modal
                        data={{
                            id: 3,
                            name: "Vishu",
                            status: "open",
                        }}
                        closePopup={this.togglePopup.bind(this)}
                    />
                ) : null}
            </div>
        );
    }
}

export default Survey;
