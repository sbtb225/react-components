import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../../../src/dash.css";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Quizinstruction from "../../components/quiz/Quizinstruction";
import Quizbuttons from "../../components/quiz/Quizbuttons";
import Quizquestion from "../../components/quiz/Quizquestion";

export default function Quiz() {
    return (
        <>
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: "flex" }} className="bgcolor paddingall">
                <Sidenav />
                <Box width={"100%"}>
                    <Typography textAlign={"center"} variant="h2">
                        Quiz Assasment
                    </Typography>
                    <Typography textAlign={"center"} variant="h4">
                        Multiple choice questions with time limit
                    </Typography>

                    <Box height={20} />

                    <Quizinstruction />
                    <Box height={20} />

                    <Quizbuttons />
                    <Box height={20} />

                    <Quizquestion />
                    <Link to='/videointerview'>

                        <Button
                            variant="contained"
                            style={{
                                borderRadius: "10px",
                                padding: "10px",
                                float: "right",
                                marginTop: '10px'
                            }}
                        >
                            Move to Video inerview
                            <SendIcon
                                style={{
                                    marginLeft: "10px",
                                }}
                            />
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    );
}