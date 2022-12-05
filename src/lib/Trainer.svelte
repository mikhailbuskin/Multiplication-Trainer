<style>
  .container {
    max-width: 750px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
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
    width: 176px;
    height: 45px;
    display: inline-block; 
    margin: 0;
  }
  .problem input {
    width: 60px;
  }
  .checkbox-number {
    font-size:25px;
  }
  .checkbox {
    height: 14px;
    width: 14px;
    cursor: pointer;
  }
  .fact-switch {
    display: inline-block;
    width: 60px;
  }
  .multiplication-table {
    width:100%;
    margin-top:25px;
    display:block;
    margin-left: auto;
    margin-right: auto;
  }
  /* Use a media query to add a breakpoint at 800px: */
  @media screen and (max-width: 790px) {
    .app-container {
      max-width: 790px;
      box-shadow: none !important;
    }
  }
</style>
<script>
  import multiplication_charts from '../assets/multiplication_charts.jpg'
  import Stats from './Stats.svelte'

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
  let doSave = true;

  /*remember user*/
  if (localStorage["user"] == null) {
    localStorage["user"] = new Date().toISOString();
  }

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
      countScore();
      let date = new Date();
      if(doSave == true){
        save({"user":localStorage["user"], "date":new Date().toISOString(), "timespend":time, "score": (successes / problems.length)});
      }
      status = "finish";
    }
    else if (status == "finish") {
      time = 0;
      doSave = true;
      status = "menu";
    }
  }

  function countScore(){
    let count = 0;
      for (let p of problems) {
        if (isSuccess(p)) {
          count++;
        }
      }
      successes = count;
  }

  function isSuccess(p) {
    if(p.result == ""){
      doSave = false;
      return false;
    } else {
      return (p.n1 * p.n2) == +p.result;
    }
  }

  function random(list){
    while (true) {
      let num = Math.floor(Math.random()*10)+1;
      if (factsEnabled[num]){
        return num;
      }
    }
  }

  async function save(data){
    await fetch("https://buskin.maintstar.co/mult-table/save.php", {method:"POST", body: JSON.stringify(data)});
    let results = await fetch("https://buskin.maintstar.co/mult-table/load.php", {method:"POST", body: JSON.stringify({ user: data.user })});
    console.log('load', results);
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
    }
    if (status == "play") {
      buttonName = "Finish";
    }
    if (status == "finish") {
      buttonName = "Reset";
    }
  }

</script>

<div class="container">

  <button id="button" class="btn" on:click={handleClick} style="margin-left: 20px">
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
      <div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["1"]}> <span class="checkbox-number">1</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["2"]}> <span class="checkbox-number">2</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["3"]}> <span class="checkbox-number">3</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["4"]}> <span class="checkbox-number">4</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["5"]}> <span class="checkbox-number">5</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["6"]}> <span class="checkbox-number">6</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["7"]}> <span class="checkbox-number">7</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["8"]}> <span class="checkbox-number">8</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["9"]}> <span class="checkbox-number">9</span>
        </div>
        <div class="fact-switch">
          <input class="checkbox" type="checkbox" bind:checked={factsEnabled["10"]}> <span class="checkbox-number">10</span>
        </div>
      </div>
      <img class="multiplication-table" src={multiplication_charts} alt="Multiplication Table">
      <div style="margin-top:12px; font-size:20px; line-height: 1.4em">Pick the facts above. You can study with this multiplication table. When started, you will be given 50 multiplication problems, that you will need to solve. If you don't answer all of the problems, your score and time of this round won't count toward your statistics, so answer all of the problems.</div>
      <div style="margin-top:20px">
        <Stats />
      </div>
    </div>
    {/if}

    {#if (status == "play")}
    <div class="problem-list"> <!-- game -->
      {#each problems as p}
      <div class="problem">
        <span style="font-size:18px">{p.n1} * {p.n2} = </span><input type="text" class="field" bind:value={p.result}>
      </div>
      {/each}
    </div>
    {/if}

    {#if (status == "finish")}
    <div class="problem-list"> <!-- corrected game -->
      {#each problems as p}
      <div class="problem">
        <span style="font-size:18px">{p.n1} * {p.n2} = </span><input class="field" style="background-color: { isSuccess(p) ? "lightgreen" : "pink"}" bind:value={p.result}/> {isSuccess(p) ? "" :  " " + (p.n1 * p.n2)}
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
</div>
