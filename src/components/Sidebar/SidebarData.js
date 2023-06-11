import React from "react";
import QuizIcon from '@mui/icons-material/Quiz';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <SpaceDashboardIcon />,
        link: "/admin"
    },
    {
        title: "User administration",
        icon: <GroupIcon />,
        link: "/adminUsers"
    },
    {
        title: "Mailbox",
        icon: <MailIcon />,
        link: "/adminMailbox"
    },
    {
        title: "Annonces management",
        icon: <SettingsSuggestIcon />,
        link: "/adminAnnonces"
    },
    {
        title: "Updated FAQ",
        icon: <QuizIcon />,
        link: "/adminFAQ"
    }
]