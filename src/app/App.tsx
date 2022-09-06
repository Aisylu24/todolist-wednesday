import React from 'react'
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {Menu} from '@mui/icons-material';
import {TaskType} from '../api/todolists-api'
import {TodolistsList} from "../features/TodolistList/TodolistsList";
import {useAppSelector} from "./hooks";
import {LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "../components/ErrorSnackbar";
import {Login} from "../features/Login/Login";
import {Route, Routes} from 'react-router-dom';


export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    const status = useAppSelector(state => state.app.status)

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Routes>
                <Route path={'/'} element={<TodolistsList/>}/>
                <Route path={'login'} element={<Login/>}/>
                </Routes>
            </Container>
        </div>
    );
}

export default App;


