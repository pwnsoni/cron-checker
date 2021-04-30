<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand to="/" id="home">Cron-Checker</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/addcron">Add-Cron</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" id="right">
                <b-navbar-nav>
                    <b-nav-item to="/addcron">Add-Cron</b-nav-item>
                    <b-nav-item href="#"  disabled>Disabled</b-nav-item>
                </b-navbar-nav>
                <b-nav-item-dropdown right>
                <template #button-content >
                    <em>User</em>
                </template>
                <b-dropdown-item href="#" disabled>Profile</b-dropdown-item>
                <b-dropdown-item href="#" disabled>Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav> 
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
#home{
    padding-left: 10%;
}

#right{
    padding-right: 10%;
}
</style>