import React from 'react';
import './navitem.css';
import 'materialize-css';
import { Dropdown, Button } from 'react-materialize';

const NavItem = (props) => {
    let element;

    if (props.dropdown) {
        element = (
            <div className='menu-item valign-wrapper'>
                <Dropdown
                    id={"Dropdown_" + props.id}
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: false,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<Button flat node="button" waves="light">{props.title}</Button>}>
                    {props.children}
                </Dropdown>
            </div>
        )
    }
    else {
        element = (
            <div className='menu-item valign-wrapper'>
                <Button
                    flat
                    node="button"
                    waves="light">{props.children}</Button>
            </div>
        )
    }

    return (element);


}

export default NavItem