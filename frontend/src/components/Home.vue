<template>
  <div class="row">
    <div class="col">
      <b-carousel :interval="3000" background="white">
        <b-carousel-slide background="white" height="150px">
          <h3 class="text-info">Many products</h3>
          <p class="text-muted">Our users offer many great products.</p>
        </b-carousel-slide>

        <b-carousel-slide background="white" height="150px">
          <h3 class="text-success">Cheap prices</h3>
          <p class="text-muted">The products here are very cheap.</p>
        </b-carousel-slide>

        <b-carousel-slide background="white" height="150px">
          <h3 class="text-primary">Buy fast</h3>
          <p class="text-muted">Buy fast and easy here.</p>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
