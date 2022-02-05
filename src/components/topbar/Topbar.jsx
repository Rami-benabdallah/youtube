import React from 'react'
import "./topbar.css"
import picture from "../../Picture1.jpg"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Souha Rojla</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <div className="span topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <div className="span topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={picture} alt="Profil" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
