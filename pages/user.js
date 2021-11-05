import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Grid, Paper, Slide, styled, TextField } from "@material-ui/core";
import { DataGrid, GridApi,GridCellParams } from "@material-ui/data-grid";
import { Add, AddOutlined, AmpStoriesOutlined, EditOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import classes from "../styles/About.module.css"
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const User = ()=>{
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [amount, setAmount] = useState();
  // let user = useState([
  //   {
  //         "userId": 1,
  //         "id": 2,
  //         "name": "qui est esse",
  //         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  //   }
  // //   {
  // //   "id": 1,
  // //   "name": "Rahi",
  // //   "deposite": 0,
  // //   "count": 0,
  // //   "cost": 0
  // // },{
  // //   "id": 2,
  // //   "name": "Azhar",
  // //   "deposite": 0,
  // //   "count": 0,
  // //   "cost": 0
  // ]);
  let [user, setUser] = useState([
    {
      "id": 1,
      "name": "Rahi",
      "deposite": 0,
      "count": 0,
      "cost": 0
    },
    {
      "id": 2,
      "name": "Enam",
      "deposite": 0,
      "count": 0,
      "cost": 0
    }
  ]);
  const onPressEditButton=(event)=>{
    console.log(event);
  }
  function currentlySelected(params) {
    const api = params.api;
    const value = params.colDef.field;
    //console.log(params);
    //console.log(params.row);
  }
  const addMoney = async(params) => {
    await setSelected(params.row);
    console.log(selected);
    handleClickOpen();
  }
  const onSaveValue = async(event) => {
    event.preventDefault();
    let value = [...user];
    let index = value.findIndex(v=> v.id == selected.id);
    await setAmount(amount);
    let addition = selected.deposite + amount;
    let updateObj = {...selected};
    updateObj["deposite"] = addition;

    value.splice(index, 1, updateObj);
    await setUser(value);
    handleClose();
  }
  const depositeChanger = (event)=>{
    event.preventDefault();
    setAmount(+event.target.value);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    { field: 'name', headerName: 'Name', width: 120},
    { field: "deposite", headerName: "Deposite", width: 150,
      renderCell: (params) => {
        return (
          <>
            <span className="pr-20px">{params.row[params.field]}  </span>
              <Fab color="default" onClick={()=>{addMoney(params)}} size="small" aria-label="add">
                <Add />
              </Fab>
            {/* <Button variant="contained" onClick={onPressEditButton} startIcon={<AddOutlined />}>
              
            </Button> */}
          </>
        );
      }
    },
    { field: "cost", headerName: "Cost", width: 150},
    { 
      field: "count", 
      headerName: "Total",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Button variant="contained" onClick={onPressEditButton} startIcon={<AddOutlined />}>
              {params.row[params.field]}
            </Button>
          </>
        );
      }
    },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: () => {
        return (
          <Button variant="contained" onClick={onPressEditButton} color="primary" startIcon={<EditOutlined />}>
            Edit
          </Button>
        );
      }
    }
  ]
  return (
    // <div className='row d-flex' >
    //   <div className="container">
    //     <div className="row pt_20px">
    //       <div className="col-md-2">
    //       asdf
    //       </div>
    //       <div className="col-md-2">
    // `dlskfjs`
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="row d-flex" className={classes.backg}>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            
          </div>
          <div className="col-md-8">
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={user}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onCellClick={currentlySelected}
                disableSelectionOnClick
              />
            </div>
          </div>
          <div className="col-md-2">
            
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{ `Deposite money to ${selected ? selected.name: "None"}?`}</DialogTitle>
        <DialogContent>
          <TextField id="standard-basic" value={amount} onChange={depositeChanger} label="Standard" variant="standard" />
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={onSaveValue}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default User;