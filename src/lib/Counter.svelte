<style>
  .app-container {
    margin-top: 15px; 
    padding: 20px; 
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
    border-radius: 7px;
  }
  .btn {
    padding: 10px 15px;
    background-color: #007bff;
    border-color: #007bff;
    color: white;
    border-radius: 5px;
    font-size: larger;
    overflow: visible;
    transition: 0.3s;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #3b9aff;
    border-color: #1988ff;
  }
  .field {
    font-size: 20px;
    width: 100px;
  }
  .problem {
    height:45px;
    display:inline-block; 
    width:320px;
  }
  .checkbox-number {
    font-size:34px;
  }
  .large-checkbox {
    height:21px;
    width:21px;
    margin-left:13px;
    cursor: pointer;
  }
  .fact-switch {
    margin-left:40px;
    margin-bottom:18px;
  }
  .multiplication-table {
    width:565px;
    margin-top: 0;
    float:right;
  }
</style>
<script>
  import multiplication_charts from '../assets/multiplication_charts.jpg'

  let problems = []
  let buttonName = "Start";
  let status = "menu"; // menu, play, finish
  let successes = 0;
  let factsEnabled = {
    1 : false,
    2 : false,
    3 : true,
    4 : true,
    5 : true,
    6 : true,
    7 : true,
    8 : true,
    9 : true,
    10 : false
  }
  let facts = []
  let time = 0;
  let interval = null;
  let needMoreFacts = false;

  function handleClick() { // changes status
    if (status == "menu") {
      if ( !( Object.values(factsEnabled).every(value => value === false) ) ){
        problems = init();
        status = "play";
        interval = setInterval(function () {time++;}, 1000)
        needMoreFacts = false;
      } else {
        needMoreFacts = true;
      }
    }
    else if (status == "play") {
      clearInterval(interval);
      status = "finish";
    }
    else if (status == "finish") {
      status = "menu";
    }
  }

  function isSuccess(p) {
    return p.result == "" ? false : (p.n1 * p.n2) == +p.result;
  }

  function random(list){
    while (true) {
      let num = Math.floor(Math.random()*10)+1;
      if (factsEnabled[num]){
        return num;
      }
    }
  }

  function init() {
    let answer = [];
    for(let i = 0; i < 50; i++) {
      answer.push( { n1:(random(facts)), n2:(random(facts)), result:"" } );
    }
    return answer;
  }

  $: {
    if (status == "menu") { 
      buttonName = "Start"; 
      time = 0;
    }
    if (status == "play") {
      buttonName = "Finish";
    }
    if (status == "finish") {
      buttonName = "Reset";
      
      let count = 0;
      for (let p of problems) {
        if (isSuccess(p)) {
          count++;
        }
      }
      successes = count;
    }
  }

</script>

<button id="button" class="btn" on:click={handleClick}>
  <b>
    {buttonName}
  </b>
</button>

{#if (status == "play")}
<span style="margin-left:10px; font-size:larger">Min: {Math.floor(time/60)} Sec: {time%60}</span>
{/if}

{#if (needMoreFacts == true)}
<span style="margin-left:10px; font-size:larger">Pick more facts</span>
{/if}

<div class="app-container">

  {#if (status == "menu")}
  <div> <!-- menu -->
    <img class="multiplication-table" src={multiplication_charts} alt="Multiplication Table">
    <div>
      <div class="fact-switch">
        <span class="checkbox-number">1</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["1"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">2</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["2"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">3</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["3"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">4</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["4"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">5</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["5"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">6</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["6"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">7</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["7"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">8</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["8"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">9</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["9"]}>
      </div>
      <div class="fact-switch">
        <span class="checkbox-number">10</span> <input class="large-checkbox" type="checkbox" bind:checked={factsEnabled["10"]}>
      </div>
    </div>
    <div style="clear:both"></div>
  </div>
  {/if}

  {#if (status == "play")}
  <div> <!-- game -->
    {#each problems as p}
    <div class="problem">
      <span style="font-size:18px">{p.n1} * {p.n2} = </span><input type="text" class="field" bind:value={p.result}>
    </div>
    {/each}
  </div>
  {/if}

  {#if (status == "finish")}
  <div> <!-- corrected game -->
    {#each problems as p}
    <div class="problem">
      <span style="font-size:18px">{p.n1} * {p.n2} = </span><input class="field" style="background-color: { isSuccess(p) ? "lightgreen" : "pink"}" bind:value={p.result}/> {isSuccess(p) ? "" :  "Correct: " + (p.n1 * p.n2)}
    </div>
    {/each}
  </div>

  <div style="margin-top:10px; font-size:30px">
    <b>Score:</b> {successes} / {problems.length}
  </div>
  <div style="margin-top:5px; font-size:30px">
    <b>Time:</b> {Math.floor(time/60)}:{time%60 < 10 ? "0" : ""}{time%60}
  </div>
  {/if}

</div>