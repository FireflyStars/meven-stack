<template>
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-center flex-nowrap flex-row">
      <div class="container">
        <a href="" class="navbar-brand float-left">MEVN stack example</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Create Student</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/view">View Students</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>