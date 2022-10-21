function openmenu()
{
    let MenuBarOpen = document.getElementById ('menu-bar')

    if (MenuBarOpen.style.width == "0px")
    {
        MenuBarOpen.style.width = "300px"
    }
    else
    {
        MenuBarOpen.style.width = "0px"
    }
}