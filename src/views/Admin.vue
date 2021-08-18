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
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
