import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../firebase-config";
import Modal from "@mui/material/Modal";

import Editicon from "@mui/icons-material/Edit";
import Deleteicon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppStore } from "../../appStore";
import Skeleton from '@mui/material/Skeleton';

import {
  collection,
  getDocs,
  addDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";


export default function ProductList() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const empCollectionRef = collection(db, "products");
  const setRows = useAppStore((state)=>state.setRows);
  const rows = useAppStore((state)=>state.rows);

  const [formid, setFormid] = useState("");

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [editopen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You Wont Be Able To Revert This!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelbuttonColor: "#D33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };
  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };
  const editData = (id,name,Price,category)=>{
    const data ={
      id:id,
      name:name,
      Price: Price,
      category:category
    };
    setFormid(data);
    handleEditOpen()
  }

  return (
    <>
      <div>
        <Modal
          open={open}
          // to close modal even clicked anywhere
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddProduct CloseEvent={handleClose}/>
          </Box>
        </Modal>
        
        <Modal
          open={editopen}
          // to close modal even clicked anywhere
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditProduct CloseEvent={handleEditClose} fid={formid}/>
          </Box>
        </Modal>
      </div>
      {rows.length > 0 && (

        <Paper sx={{ width: "100%", overflow: "hidden", padding: "12px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Products list
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              // to change search input data
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              variant="contained"
              endIcon={<AddCircleIcon />}
              onClick={handleOpen}
            >
              Add
            </Button>
          </Stack>
          <Box height={10} />
          <TableContainer sx={{ maxHeight: 440}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Price
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Category
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Date
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row.id} align="left">
                          {row.name}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.Price}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.category}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.date}
                        </TableCell>
                        <TableCell>
                          <Stack spacing={2} direction="row">
                            <Editicon
                              style={{
                                marginTop: "15px",
                                fontSize: "25px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={()=>{
                                editData(row.id, row.name, row.Price, row.category)
                              }}
                            />
                            <Deleteicon
                              style={{
                                marginTop: "15px",
                                fontSize: "25px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        
      )}
      {rows.length === 0 && (
        <>
        {/* Adding skeleton for reload */}
          <Paper sx={{width:"98%",overflow:"hidden",padding:"12px"}}>
          <Box height={20}/>
          <Skeleton variant="rectangular" width={"100%"} height={30} />
          <Box height={40}/>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Box height={20}/>
          </Paper>
        </>
      )}
    </>
  );
}
