import React, { Component } from "react";
import ReactDOM from "react-dom";
import Redebounce from "redebounce";
import Repromised from "repromised";
import "@blueprintjs/table/lib/css/table.css";
import { FormGroup, InputGroup, Text, AnchorButton, Button, Classes, Code, Dialog, H5, Intent, Switch, Tooltip } from "@blueprintjs/core";
import {
  Cell,
  Column,
  ColumnHeaderCell,
  Table,
  TableLoadingOption
} from "@blueprintjs/table";

import { Header, Footer} from '../../components';
import AddEmp from "../AddEmp";
//import { NavBar } from '../../components/Layouts';

export default class Dashboard extends Component {
  state = {
    items: [],
    isLoading: false,
    editRecord: {
      isEditing: false,
      recordToUpdate: {},
    }
  };

  componentDidMount() {
    this.fetchRepositories();
  }

  render() {
    const { items, isLoading } = this.state;

    return (
      <div className="container">
        <Header />
        <AddEmp />
        {this.renderDialog()}
        <div className="content">
          <Table
            numRows={isLoading ? 0 : items.length}
            columnWidths={[150, 200, 125,200,200,200, 125]}
            loadingOptions={
              isLoading ? [TableLoadingOption.CELLS] : []
            }
          >
            <Column
              columnHeaderCellRenderer={() => (
                <ColumnHeaderCell name="First Name" />
              )}
              cellRenderer={i =>
                items[i] ? (
                  <Cell>
                      {items[i].First_Name}
                  
                  </Cell>
                ) : (
                  <Cell />
                )
              }
            />
            <Column
              columnHeaderCellRenderer={() => (
                <ColumnHeaderCell name="Last Name" />
              )}
              cellRenderer={i =>
                items[i] ? (
                  <Cell>{items[i].Last_Name}</Cell>
                ) : (
                  <Cell />
                )
              }
            />
            <Column
              columnHeaderCellRenderer={() => (
                <ColumnHeaderCell name="Address" />
              )}
              cellRenderer={i =>
                items[i] ? (
                  <Cell>{items[i].Address}</Cell>
                ) : (
                  <Cell />
                )
              }
            />
            <Column
              columnHeaderCellRenderer={() => (
                <ColumnHeaderCell name="Date Of Birth" />
              )}
              cellRenderer={i =>
                items[i] ? (
                  <Cell>{items[i].Date_Of_Birth}</Cell>
                ) : (
                  <Cell />
                )
              }
            />
            <Column
              columnHeaderCellRenderer={() => (
                <ColumnHeaderCell name="Mobile No" />
              )}
              cellRenderer={i =>
                items[i] ? (
                  <Cell>{items[i].Mobile_No}</Cell>
                ) : (
                  <Cell />
                )
              }
            />
            <Column
              columnHeaderCellRenderer={() => (
                <ColumnHeaderCell name="City" />
              )}
              cellRenderer={i =>
                items[i] ? (
                  <Cell>{items[i].City}</Cell>
                ) : (
                  <Cell />
                )
              }
            />
            <Column
              columnHeaderCellRenderer={() => (
                <ColumnHeaderCell name="Actions" />
              )}
              cellRenderer={i =>
                items[i] ? (
                  <Cell>
                    <button onClick={this.handleEditRow(i)}>Edit</button>
                    <button onClick={this.handleDeleteRow(i)}>Delete</button>
                  </Cell>
                ) : (
                  <Cell />
                )
              }
            />
          </Table>
        </div>

        <Footer />
      </div>
    );
  }

  renderDialog = () => {
    const { editRecord } = this.state;

    return (
      <Dialog
        icon="info-sign"
        onClose={this.handleEditDialogClose}
        title="Edit selected record"
        isOpen={editRecord.isEditing}
      >
        <div className={Classes.DIALOG_BODY}>
          
        <FormGroup 
            label="First Name"
            labelFor="firstname-input"
          >
            <InputGroup
              id="firstname-input"
              placeholder="Enter first name..."
              type={'text'}
              value={editRecord.updatedRecord && editRecord.updatedRecord.First_Name}
              onChange={(e) => {
                const updatedValue = e.target.value;
                this.setState((prevState) => ({
                  ...prevState,
                  editRecord: {
                    ...prevState.editRecord,
                    updatedRecord: {
                        First_Name : updatedValue,
                      }
                    }
                  }
                ))
              }}
            />
            </FormGroup>
            <FormGroup 
            label="Last Name"
            labelFor="lastname-input"
           >
            <InputGroup
              id="lastname-input"
              placeholder="Enter last name..."
              type={'text'}
              value={editRecord.updatedRecord && editRecord.updatedRecord.Last_Name}
              onChange={(e) => {
                const updatedValue = e.target.value;
                this.setState((prevState) => ({
                  ...prevState,
                  editRecord: {
                    ...prevState.editRecord,
                    updatedRecord: {
                        Last_Name : updatedValue,
                      }
                    }
                  }
                ))
              }}
            />
          </FormGroup>
          <FormGroup 
            label="Address"
            labelFor="address-input"
           >
            <InputGroup
              id="address-input"
              placeholder="Enter address..."
              type={'text'}
              value={editRecord.updatedRecord && editRecord.updatedRecord.Address}
              onChange={(e) => {
                const updatedValue = e.target.value;
                this.setState((prevState) => ({
                  ...prevState,
                  editRecord: {
                    ...prevState.editRecord,
                    updatedRecord: {
                        Address : updatedValue,
                      }
                    }
                  }
                ))
              }}
            />
          </FormGroup>
          <FormGroup 
            label="Date Of Birth"
            labelFor="dob-input"
           >
            <InputGroup
              id="dob-input"
              placeholder="Enter Birth date..."
              type={'Date'}
              value={editRecord.updatedRecord && editRecord.updatedRecord.Date_Of_Birth}
              onChange={(e) => {
                const updatedValue = e.target.value;
                this.setState((prevState) => ({
                  ...prevState,
                  editRecord: {
                    ...prevState.editRecord,
                    updatedRecord: {
                        Date_Of_Birth : updatedValue,
                      }
                    }
                  }
                ))
              }}
            />
          </FormGroup>
          <FormGroup 
            label="Mobile No"
            labelFor="mobileNo-input"
           >
            <InputGroup
              id="mobileNo-input"
              placeholder="Enter Mobile No with country code e.g India +91..."
              type={'text'}
              value={editRecord.updatedRecord && editRecord.updatedRecord.Mobile_No}
              onChange={(e) => {
                const updatedValue = e.target.value;
                this.setState((prevState) => ({
                  ...prevState,
                  editRecord: {
                    ...prevState.editRecord,
                    updatedRecord: {
                        Mobile_No : updatedValue,
                      }
                    }
                  }
                ))
              }}
            />
          </FormGroup>
          <FormGroup 
            label="City"
            labelFor="city-input"
           >
            <InputGroup
              id="city-input"
              placeholder="Enter City.."
              type={'text'}
              value={editRecord.updatedRecord && editRecord.updatedRecord.City}
              onChange={(e) => {
                const updatedValue = e.target.value;
                this.setState((prevState) => ({
                  ...prevState,
                  editRecord: {
                    ...prevState.editRecord,
                    updatedRecord: {
                        City : updatedValue,
                      }
                    }
                  }
                ))
              }}
            />
          </FormGroup>

        </div>
        <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={this.handleEditDialogClose}>Close</Button>
              <Button onClick={this.handleEditedRecord}>Save</Button>
            </div>
        </div>
      </Dialog>
    );
  }

  fetchRepositories = async owner => {
    this.setState({ isLoading: true });
    const response = await fetch(
      'http://localhost:8000/api/Employee/',
      {
        headers: { accept: "application/json" }
      }
    );
  
    if (response.status === 200) {
      const json = await response.json();
      this.setState({
        items: json,
        isLoading: false,
      });
    } else {
      this.setState({
        items: [],
        isLoading: false,
      })
    }
  };

  handleDeleteRow = rowToDelete => event => {
    const currentItems = [...this.state.items]
    currentItems.splice(rowToDelete, 1);
    this.setState({
      items: currentItems,
    });
    const index=this.state.items[rowToDelete].id;
    fetch('http://localhost:8000/api/Employee/Delete/'+index, {
      method: 'DELETE',
      headers: {
                  Accept: 'application/json',
                'Content-Type': 'application/json',
                },
  }).then((res) => res.json())
  .then((data) =>  console.log(data))
  .catch((err)=>console.log(err))
  }

  handleEditedRecord = () => {
    const { editRecord: { indexOfRecord, updatedRecord }, items } = this.state;
    const updatedList = [...items];
    updatedList[indexOfRecord] = {...items[indexOfRecord], ...updatedRecord}; 
    this.setState({
      items: updatedList,
      editRecord: {
        isEditing: false,
        recordToUpdate: {},
        indexOfRecord: 0,
        updatedRecord: {},
      }
    })

    const index=this.state.items[indexOfRecord].id;
    fetch('http://localhost:8000/api/Employee/'+index+'/Update/', {
        method: 'PUT',
        headers: {
                    Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
        body:JSON.stringify(updatedList[indexOfRecord])
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
  }

  handleEditDialogClose = event => {
    this.setState({
      editRecord: {
        isEditing: false,
        recordToUpdate: {},
        indexOfRecord: 0,
        updatedRecord: {},
      }
    })
  }

  handleEditRow = rowToEdit => event => {
    this.setState((prevState) => ({
      editRecord: {
        isEditing: true,
        recordToUpdate: prevState.items[rowToEdit],
        indexOfRecord: rowToEdit,
        updatedRecord: prevState.items[rowToEdit],
      }
    }))
  }
}
