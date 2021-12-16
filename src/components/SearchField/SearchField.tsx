import React from 'react'
import { Search,} from '@mui/icons-material';
import {IconButton, InputBase, Paper} from "@mui/material";
import {setSearch} from "../../store/reducers/articles";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const SearchField = () => {
    const {search} = useTypedSelector(state => state.articles)
    const dispatch = useDispatch()
    const searchEngineHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }
    return (
        <div>
            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, mt: 1}}
            >
                <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                    <Search/>
                </IconButton>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="The most successful IT companies in 2020"
                    inputProps={{'aria-label': 'search google maps'}}
                    onChange={searchEngineHandler}
                    value={search}
                />
            </Paper>
        </div>

    )
}