import * as React from 'react';
import { MENUS } from './constants';

interface IProps {
    componentType: string
}

interface IState {
    hoverIndex: number
}

export default class Menu extends React.PureComponent<IProps, IState> {
    public render () {
        return (
            <div className="Menu">
                {this.renderMenuList()}
            </div>
        )
    }

    private renderMenuList () {
        return MENUS.map(menu => <li key={menu.title}>{menu.title}</li>)
    }
}