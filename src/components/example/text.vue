<template>
  <div flex flex-col gap-6>
    <div class="card">
      <span class="gradient-text">
        不是巅峰时的信仰，而是黄昏时的追逐
      </span>
    </div>
    <div class="card">
      <span class="hollow-text">
        不是巅峰时的信仰，而是黄昏时的追逐
      </span>
    </div>
    <div class="card">
      <span class="shadow-text">
        不是巅峰时的信仰，而是黄昏时的追逐
      </span>
    </div>
    <div class="card">
      <span class="glow-text">
        不是巅峰时的信仰，而是黄昏时的追逐
      </span>
    </div>
  </div>
</template>

<style>
.card {
  padding:1rem;
}
.gradient-text {
  font-size: 1.5rem;
  color:transparent;
  background: linear-gradient(45deg, rgba(0,173,181,1) 0%, rgba(0,173,181,.4)  100%);
  background-clip: text;
  -webkit-background-clip: text;
}

.hollow-text {
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181),
  0 0 2px rgba(0, 173, 181);
}

.shadow-text{
  font-size: 1.5rem;
  color:#fff;
  text-shadow: 1px 1px rgba(0,173,181),
  2px 2px rgba(0,173,181),
  3px 3px rgba(0,173,181),
  4px 4px rgba(0,173,181);
}

.glow-text{
  font-size:1.5rem;
  line-height: 1.5rem;
  background: #00adb5;
  color:#fff;
  text-align: center;
  text-shadow: 0 0 0.1em, 0 0 0.2em;
}
</style>

