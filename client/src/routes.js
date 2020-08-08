import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { MainPage } from './pages/MainPage'
import { InformationPage } from './pages/InformationPage'
export const useRoutes = () =>
{
    return(
        <Switch>
            
            <Route path="/create" exact>
            <CreatePage/>
            </Route>
            <Route path = "/main" exact> 
            <MainPage/>
            </Route>
            <Route path="/main/:id" exact>
                <InformationPage/>
            </Route>
            <Redirect to = "/main"></Redirect>
        </Switch>
    )
} 