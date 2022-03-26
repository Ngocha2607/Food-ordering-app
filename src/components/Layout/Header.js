import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
import { Layout } from "antd";
const { Header} = Layout;

const AppHeader = () => (
    <Header className={classes.header}>
        <h1 className={classes.logo}>Sunny Food</h1>
        <HeaderCartButton />
    </Header>
)

export default AppHeader