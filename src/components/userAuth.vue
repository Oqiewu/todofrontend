<template>
    <div>
        <b-nav-item-dropdown class="user" right>
          <template #button-content>
            <b-avatar></b-avatar>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Sign In</b-dropdown-item>
          <b-dropdown-item href="#">Login</b-dropdown-item>
        </b-nav-item-dropdown>
    </div>
</template>

<script lang="ts">

</script>

<style>

.user {
    display: flex;
}
</style>