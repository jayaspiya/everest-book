;<template>
  <div>
    <h1>Admin page</h1>
    <nav class="altnav">
      <ul>
        <li>
          <router-link to="/admin/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/admin/new">New</router-link>
        </li>
        <li>
          <router-link to="/admin/missing-covers">Missing Covers</router-link>
        </li>
        <li>
          <router-link to="/admin/register-admin">Register Admin</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
/* Alt Nav */
nav.altnav{
  margin: 10px 0;
}
nav.altnav a{
    background: var(--base-color);
    border: 2px var(--base-color) solid;
    padding: 2px 10px;
    border-radius: 2px;
    text-transform: uppercase;
    transition: .2s all ease-out;
      text-decoration: none;
      color: var(--background);
}
nav.altnav a:hover,
nav.altnav a.router-link-active
{
  background:var(--background);
  color: var(--base-color);
}
.altnav ul{
  flex-wrap: wrap;
}

</style>
